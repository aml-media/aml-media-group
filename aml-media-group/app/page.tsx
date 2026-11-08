import { sitePath } from "@/lib/site";
import type { Metadata } from "next";
import { Arrow, Mark } from "@/components/brand";
import { brands, organization, site, sharedOpenGraph } from "@/lib/site";
export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { ...sharedOpenGraph, url: site.url } };
export default function Home() {
  const data = { "@context": "https://schema.org", "@graph": [organization, { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#organization` } }, { "@type": "WebPage", "@id": `${site.url}/#webpage`, url: site.url, name: "AML MEDIA GROUP | Live Experiences & Travel Brands", description: site.description, isPartOf: { "@id": `${site.url}/#website` }, about: { "@id": `${site.url}/#organization` } }] };
  return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}/>
    <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/>A family of discovery brands</div><h1 id="hero-title">A world worth<br/><em>showing up for.</em></h1><p>We build digital brands that bring people closer to live experiences, new places, and memorable stays.</p><a className="button button-dark" href="#brands">Meet our brands <Arrow/></a><div className="hero-footnote"><span className="small-line"/>Live music. Event travel. Places to stay.</div></div><div className="hero-visual"><img className="hero-city" src={sitePath("/images/city.jpg")} alt="Golden evening light over New York City" width="1800" height="1200" fetchPriority="high"/><div className="hero-image-shade"/><span className="image-eyebrow">THE NEXT EXPERIENCE STARTS HERE</span><div className="hero-image-title">Go for the moment.<br/>Stay for the memories.</div><a className="hero-inset" href={sitePath("/brands/concertlands/")}><img src={sitePath("/images/concert.jpg")} alt="A crowd sharing the energy of a live concert" width="1500" height="1000"/><span>Closer to the live experience <Arrow diagonal/></span></a><span className="photo-coordinate">DISCOVER. CONNECT. GO.</span></div></section>
    <section className="brand-strip" aria-label="AML Media Group brands">
      <span className="eyebrow">Three brands.<br/>A shared curiosity.</span>
      <a href={sitePath("/brands/concertlands/")} className="brand-logo brand-logo-concertlands" aria-label="Concertlands">
        <img src={sitePath("/brands/concertlands.svg")} alt="" width="32" height="32"/>
        <span>concertlands<sup aria-hidden="true">©</sup></span>
      </a>
      <a href={sitePath("/brands/eventscozy/")} className="brand-logo brand-logo-eventscozy" aria-label="EventsCozy">
        <span className="eventscozy-mark" aria-hidden="true">E</span>
        <span>Events<span className="eventscozy-accent">Cozy</span></span>
      </a>
      <a href={sitePath("/brands/hotels50/")} className="brand-logo brand-logo-hotels50" aria-label="Hotels50">
        <span className="hotels50-mark"><img src={sitePath("/brands/hotels50.svg")} alt="" width="54" height="54"/></span>
        <span>Hotels50</span>
      </a>
    </section>
    <section className="section about" id="about" aria-labelledby="about-title"><div className="section-label"><span className="eyebrow">01 / Our company</span><span className="vertical-line"/></div><div className="about-content"><h2 id="about-title">Digital at heart.<br/><span className="muted-heading">Real life in mind.</span></h2><div className="about-body"><p className="lead">The best experiences happen out in the world. We help people find their way to them.</p><div><p>AML MEDIA GROUP is the company behind Concertlands, EventsCozy, and Hotels50. Our brands help people discover live music, plan trips around events, and explore places to stay.</p><p>Each serves a different part of the journey. Together, they share a simple purpose: make it easier to turn curiosity into a plan.</p></div></div></div></section>
    <section className="section portfolio" id="brands" aria-labelledby="brands-title"><div className="section-heading"><div><p className="eyebrow">02 / Our brands</p><h2 id="brands-title">Different doors.<br/>More possibilities.</h2></div><p>From the first spark of an idea to the place you call home for the weekend. Meet our family of brands.</p></div><div className="brand-grid">{brands.map(b => <article className={`brand-card ${b.color}`} key={b.slug}><a className="brand-image-link" href={sitePath(`/brands/${b.slug}/`)} aria-label={`Discover ${b.name}`}><img src={sitePath(b.image)} alt={b.alt} width="800" height="600" loading="lazy"/><span className="brand-number">{b.number}</span><span className="circle-link"><Arrow diagonal/></span></a><div className="brand-card-copy"><p className="eyebrow">{b.category}</p><h3>{b.name}</h3><p>{b.description}</p><a className="text-link" href={sitePath(`/brands/${b.slug}/`)}>Discover {b.name}<Arrow/></a></div></article>)}</div></section>
    <section className="approach" id="approach" aria-labelledby="approach-title">
      <div className="approach-top"><p className="eyebrow">03 / AI agent-assisted journeys</p><Mark className="approach-mark"/></div>
      <div className="approach-heading"><h2 id="approach-title">Your next journey.<br/><span>Assisted by AI agents.</span></h2><p>We’re exploring how AI agents can help turn an idea into a plan — connecting event discovery, destination research, and places to stay across our family of brands.</p></div>
      <div className="principles">
        <article><span className="principle-icon" aria-hidden="true">↗</span><h3>Discover your reason to go.</h3><p>A favorite artist. A big game. A new city. The journey starts with your interests and the experiences you want to be part of.</p></article>
        <article><span className="principle-icon" aria-hidden="true">◎</span><h3>Bring the trip together.</h3><p>Our vision is for AI agents to connect the details across Concertlands, EventsCozy, and Hotels50 — from the event to the venue and a nearby stay.</p></article>
        <article><span className="principle-icon" aria-hidden="true">⌁</span><h3>Keep the choice yours.</h3><p>The goal is thoughtful assistance: clearer options, useful context, and less planning effort. You stay in control of the journey.</p></article>
      </div>
    </section>
    <section className="contact section" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">04 / Let’s connect</p><h2 id="contact-title">Good things start<br/>with a <em>conversation.</em></h2></div><div className="contact-details"><p>Have a partnership in mind? We’d love to hear from people working across live entertainment, hospitality, travel, and digital media.</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<Arrow diagonal/></a><span className="contact-caption">Partnerships · Distribution · General inquiries</span></div></section>
  </main>;
}
