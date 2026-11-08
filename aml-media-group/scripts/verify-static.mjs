import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const origin=(process.env.NEXT_PUBLIC_SITE_URL || 'https://amlmediagroups.com').replace(/\/$/,'');
const base=new URL(origin).pathname.replace(/\/$/,'');
const routes=['/','/brands/concertlands/','/brands/eventscozy/','/brands/hotels50/','/privacy/'];
for(const route of routes){
  const html=await readFile(path.join(root,route,'index.html'),'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${route}: one H1`);
  assert.ok(html.includes(`href="${origin}${route}"`),`${route}: canonical`);
  assert.match(html,/<meta name="description" content="[^"]{30,}"/);
  assert.doesNotMatch(html,/<meta[^>]+content="[^"]*noindex/);
  assert.ok(!html.includes('codex-preview'));
  assert.ok(html.includes(`property="og:image" content="${origin}/social-card.png"`));
  assert.match(html,/<link rel="icon"[^>]+favicon-96.png/);
  for(const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
  for(const [,url] of html.matchAll(/(?:href|src)="(\/(?!\/)[^"?#]*)/g)){
    if(base) assert.ok(url.startsWith(base+'/'), `${route}: link escapes deployment base ${url}`);
    const local=decodeURIComponent(url).slice(base.length); const target=path.join(root,local.endsWith('/')?`${local}index.html`:local);
    await access(target).catch(()=>{throw new Error(`${route}: missing asset/link ${local}`)});
  }
  console.log(`PASS ${route}: rendered HTML, metadata, canonical, JSON-LD, assets and internal links`);
}
const home=await readFile(path.join(root,'index.html'),'utf8');
for(const brand of ['Concertlands','EventsCozy','Hotels50'])assert.ok(home.includes(brand));
assert.ok(home.includes('mailto:contact@amlmediagroups.com'));
const robots=await readFile(path.join(root,'robots.txt'),'utf8');assert.match(robots,/Allow: \//);assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));assert.doesNotMatch(robots,/Disallow: \//);
const sitemap=await readFile(path.join(root,'sitemap.xml'),'utf8');for(const route of routes)assert.ok(sitemap.includes(`${origin}${route}</loc>`));
assert.equal((await readFile(path.join(root,'CNAME'),'utf8')).trim(),'amlmediagroups.com');
await access(path.join(root,'.nojekyll'));await access(path.join(root,'404.html'));
const manifest=JSON.parse(await readFile(path.join(root,'site.webmanifest'),'utf8'));for(const icon of manifest.icons)await access(path.join(root,icon.src.slice(base.length)));
console.log('PASS sitemap, crawler access, domain, manifest and 404 export.');
