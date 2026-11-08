import { readFile, writeFile } from 'node:fs/promises';
const origin=(process.env.NEXT_PUBLIC_SITE_URL || 'https://amlmediagroups.com').replace(/\/$/,'');
const base=new URL(origin).pathname.replace(/\/$/,'');
const manifest=JSON.parse(await readFile('out/site.webmanifest','utf8'));
for(const key of ['id','start_url','scope'])manifest[key]=base+'/';
manifest.icons=manifest.icons.map(icon=>({...icon,src:base+icon.src}));
await writeFile('out/site.webmanifest',JSON.stringify(manifest)+'\n');
console.log(`Static deployment URL: ${origin}/`);
