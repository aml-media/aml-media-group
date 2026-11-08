import { sitePath } from "@/lib/site";
export default function NotFound() { return <main id="main" className="not-found section"><p className="eyebrow">404 / A little off the map</p><h1>Let’s find your<br/>way back.</h1><p>We couldn’t find the page you’re looking for.</p><a className="button button-dark" href={sitePath("/")}>Back to AML Media Group →</a></main>; }
