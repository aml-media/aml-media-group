"use client";
import { sitePath } from "@/lib/site";
import { useState } from "react";
import { Arrow, Wordmark } from "./brand";
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Wordmark/><nav className="desktop-nav" aria-label="Main navigation"><a href={sitePath("/#about")}>Our company</a><a href={sitePath("/#brands")}>Our brands</a><a href={sitePath("/#approach")}>Our approach</a></nav><a className="header-contact" href={sitePath("/#contact")}>Let’s connect <Arrow diagonal/></a><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button></div><nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" onKeyDown={event => { if(event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}><a onClick={() => setOpen(false)} href={sitePath("/#about")}>Our company</a><a onClick={() => setOpen(false)} href={sitePath("/#brands")}>Our brands</a><a onClick={() => setOpen(false)} href={sitePath("/#approach")}>Our approach</a><a onClick={() => setOpen(false)} href={sitePath("/#contact")}>Let’s connect ↗</a></nav></header>;
}
