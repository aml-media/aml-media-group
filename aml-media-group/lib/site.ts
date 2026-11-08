export const site = {
  name: "AML MEDIA GROUP", url: (process.env.NEXT_PUBLIC_SITE_URL || "https://amlmediagroups.com").replace(/\/$/, ""), email: "contact@amlmediagroups.com",
  description: "AML MEDIA GROUP builds digital brands for live experiences and travel. Meet Concertlands, EventsCozy, and Hotels50.",
};
export const brands = [
  { slug: "concertlands", name: "Concertlands", domain: "concertlands.com", url: "https://www.concertlands.com/", category: "Live music & discovery", number: "01", image: "/images/concert.jpg", alt: "Fans gathered under the lights at a live music performance", color: "peach",
    headline: "Find your next unforgettable show.", description: "A home for live music discovery. Explore artists, tour dates, venues, and ticket options — and connect with people who love being there.",
    detail: "Concertlands helps music fans move from a favorite artist or a city in mind to their next live show. Artist pages, event listings, and venue information bring the details together, while the fan community makes room for conversations and shared discoveries.",
    features: [["Discover the music", "Explore upcoming concerts by artist, city, and venue."], ["Find the details", "See dates, locations, and available ticket options for the shows that catch your eye."], ["Join the conversation", "Share discoveries and connect with other fans in the live music community."]], purpose: "For the people who would rather be in the crowd." },
  { slug: "eventscozy", name: "EventsCozy", domain: "eventscozy.com", url: "https://www.eventscozy.com/", category: "Event-led travel", number: "02", image: "/images/city.jpg", alt: "New York City rooftops and the Empire State Building at sunset", color: "sage",
    headline: "Make a great event a great trip.", description: "Start with the event. Find the venue, explore nearby hotels, and bring the rest of your trip together — from concerts to game day.",
    detail: "EventsCozy puts the event at the center of travel planning. It connects concerts, sports, theater, and other live experiences with practical venue information and nearby places to stay, helping travelers understand where they are going before they make their plans.",
    features: [["Start with an event", "Discover concerts, sports, theater, and live experiences in the cities you want to visit."], ["Get to know the venue", "Explore the location and useful context for planning your visit."], ["Stay close to the action", "Compare nearby hotels by location and distance, and build a trip plan to share."]], purpose: "For the trips that begin with a reason to go." },
  { slug: "hotels50", name: "Hotels50", domain: "hotels50.com", url: "https://hotels50.com/", category: "Hotel discovery & stays", number: "03", image: "/images/stay.jpg", alt: "A peaceful hotel swimming pool beside the ocean and palm trees", color: "sand",
    headline: "Find a stay that fits your plans.", description: "Hotel discovery with the details that matter. Explore destinations, compare places to stay, and find the right base for your next trip.",
    detail: "Hotels50 helps travelers explore hotel options and make informed decisions about where to stay. Property information, photos, room details, and available rates bring the essentials into one place, whether the trip is a city break, an event weekend, or time away.",
    features: [["Explore your destination", "Browse hotels in the cities and places you want to experience."], ["Look a little closer", "Review photos, location information, amenities, and room details."], ["Plan your stay", "Check available rates and booking options for your travel dates."]], purpose: "For finding your place, wherever you are going." },
] as const;
export const organization = {
  "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, description: site.description, email: site.email,
  logo: { "@type": "ImageObject", url: `${site.url}/icon-512.png`, width: 512, height: 512 },
  brand: brands.map(brand => ({ "@type": "Brand", name: brand.name, url: brand.url, description: brand.description })),
  contactPoint: { "@type": "ContactPoint", email: site.email, contactType: "business inquiries" },
};

export const sharedOpenGraph = { type: "website" as const, locale: "en_US", siteName: site.name, images: [{ url: `${site.url}/social-card.png`, width: 1200, height: 630, alt: "AML Media Group — Concertlands, EventsCozy, and Hotels50" }] };

export function sitePath(path: string) { return new URL(site.url).pathname.replace(/\/$/, "") + path; }
