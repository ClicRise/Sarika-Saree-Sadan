import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sarika-logo-alternative.png";
import photo1 from "@/assets/sarika-1.png.asset.json";
import photo2 from "@/assets/sarika-2.png.asset.json";
import photo3 from "@/assets/sarika-3.png.asset.json";
import photo4 from "@/assets/sarika-4.png.asset.json";
import photo5 from "@/assets/sarika-5.png.asset.json";
import photo6 from "@/assets/sarika-6.png.asset.json";
import photo7 from "@/assets/sarika-7.png.asset.json";
import photo8 from "@/assets/sarika-8.png.asset.json";
import photo9 from "@/assets/sarika-9.png.asset.json";
import photo11 from "@/assets/sarika-11.png.asset.json";
import photo12 from "@/assets/sarika-12.png.asset.json";
import photo13 from "@/assets/sarika-13.png.asset.json";
import photo14 from "@/assets/sarika-14.png.asset.json";
import photo15 from "@/assets/sarika-15.png.asset.json";
import photo16 from "@/assets/sarika-16.png.asset.json";

const PHONE = "+919412705060";
const MAPS = "https://maps.app.goo.gl/7UQgcvLuzKGnsnCD8";
const INSTAGRAM = "https://www.instagram.com/sarikasareesadan/";
const enquiry = (item?: string) => `https://wa.me/${PHONE.slice(1)}?text=${encodeURIComponent(item ? `Hello Sarika Saree Sadan, I'm interested in ${item}. Could you please share the price and details?` : "Hello Sarika Saree Sadan, I'd like to enquire about your collection.")}`;

const products = [
  { image: photo1.url, title: "Olive Embroidered Drape", category: "DRAPED ENSEMBLE", alt: "Olive draped ensemble with intricate embroidered blouse" },
  { image: photo2.url, title: "Slate Embellished Drape", category: "DRAPED ENSEMBLE", alt: "Slate blue draped outfit with embroidered blouse" },
  { image: photo3.url, title: "Powder Blue Ensemble", category: "OCCASION WEAR", alt: "Powder blue embellished ethnic ensemble" },
  { image: photo4.url, title: "Silver Shimmer Drape", category: "OCCASION WEAR", alt: "Silver sequin blouse with flowing drape" },
  { image: photo5.url, title: "Midnight Lace Ensemble", category: "OCCASION WEAR", alt: "Midnight blue lace blouse and drape" },
  { image: photo6.url, title: "Ivory Saree Edit", category: "SAREES", alt: "Model wearing an elegant ivory saree" },
  { image: photo8.url, title: "Maroon Heirloom Saree", category: "SAREES", alt: "Model in ivory saree and richly embroidered maroon blouse" },
  { image: photo11.url, title: "Midnight Ruffle Drape", category: "SAREES", alt: "Midnight blue pre-draped saree with shimmering blouse" },
  { image: photo12.url, title: "Sunshine Embroidered Lehenga", category: "LEHENGAS", alt: "Golden yellow lehenga with floral embroidery" },
  { image: photo13.url, title: "Teal Heritage Lehenga", category: "LEHENGAS", alt: "Teal lehenga with intricate silver embroidery" },
  { image: photo14.url, title: "Golden Celebration Lehenga", category: "LEHENGAS", alt: "Gold flared lehenga with embroidered blouse" },
  { image: photo15.url, title: "Coral Bridal Lehenga", category: "LEHENGAS", alt: "Coral bridal lehenga with ornate embellishment" },
  { image: photo16.url, title: "Rose Bridal Lehenga", category: "LEHENGAS", alt: "Rose pink bridal lehenga with detailed embroidery" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarika Saree Sadan | Designer Ethnic Wear Since 1986" },
      { name: "description", content: "Discover sarees, suits, lehengas and dresses at Sarika Saree Sadan, Meerut. Designer women's ethnic wear since 1986. Visit our only store or enquire on WhatsApp." },
      { property: "og:title", content: "Sarika Saree Sadan | Designer Ethnic Wear Since 1986" },
      { property: "og:description", content: "An enduring expression of Indian style. Explore sarees, suits, lehengas and dresses at Sarika Saree Sadan in Meerut." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#top" aria-label="Sarika Saree Sadan, back to top" className="flex shrink-0 items-center gap-2.5">
    <img src={logo} alt="" width={1024} height={1024} className="h-12 w-12 object-contain md:h-14 md:w-14" />
    <span className={`font-display text-[18px] leading-[1.05] md:text-[22px] ${light ? "text-primary-foreground" : "text-primary"}`}>Sarika Saree<br />Sadan</span>
  </a>;
}

function Home() {
  const rail = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  return <main id="top" className="overflow-hidden bg-background">
    <div className="bg-primary px-5 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.17em] text-primary-foreground md:text-[11px]">Designer women's ethnic wear since 1986 <span className="mx-2 text-gold">✦</span> Shipping throughout India</div>
    <header className="relative z-30 border-b border-border/70 bg-background">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:h-[92px] md:px-10 xl:px-16">
        <Brand />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          <a href="#collections" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary">Collections</a>
          <a href="#story" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary">Our story</a>
          <a href="#visit" className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary">Visit us</a>
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:text-secondary"><Instagram size={19} strokeWidth={1.5} /></a>
          <Button asChild className="h-11 rounded-none px-6 text-[10px] font-semibold uppercase tracking-[0.14em]"><a href={enquiry()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowUpRight size={14} /></a></Button>
        </div>
        <Button variant="ghost" size="icon" className="rounded-none text-primary lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="absolute left-0 right-0 top-full flex flex-col gap-0 border-b border-border bg-background px-5 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">
        {[["Collections", "#collections"], ["Our story", "#story"], ["Visit us", "#visit"]].map(([label, url]) => <a key={url} href={url} onClick={() => setMenuOpen(false)} className="border-b border-border py-4 text-sm uppercase tracking-[0.12em]">{label}</a>)}
        <a href={enquiry()} target="_blank" rel="noopener noreferrer" className="py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary">Enquire on WhatsApp ↗</a>
      </nav>}
    </header>

    <section className="relative min-h-[610px] bg-ink text-primary-foreground md:min-h-[650px] lg:min-h-[680px]" aria-label="Sarika Saree Sadan collection">
      <img src={photo7.url} alt="Model wearing a flowing ivory saree in a heritage courtyard" className="absolute inset-0 h-full w-full object-cover object-[56%_center] md:object-center" fetchPriority="high" />
      <div className="hero-shade absolute inset-0" /><div className="hero-bottom-shade absolute inset-0" />
      <div className="relative mx-auto flex min-h-[610px] max-w-[1440px] flex-col justify-center px-6 pb-16 pt-12 md:min-h-[650px] md:px-10 lg:min-h-[680px] xl:px-16">
        <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold md:text-[11px]"><span className="h-px w-9 bg-gold" /> EST. 1986 · MEERUT, INDIA</div>
        <h1 className="max-w-[760px] font-display text-[48px] leading-[1.12] text-primary-foreground sm:text-[64px] lg:text-[80px]">Sarika Saree<br /><i className="font-normal">Sadan</i></h1>
        <div className="mt-7 h-px w-20 bg-gold" />
        <p className="mt-7 max-w-[410px] font-display text-[20px] leading-[1.45] text-primary-foreground md:text-[25px]">An enduring expression of Indian style.</p>
        <p className="mt-3 max-w-[410px] text-[13px] leading-7 text-primary-foreground/85 md:text-sm">Sarees, suits, lehengas and dresses for every moment worth remembering.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-none border border-gold bg-gold px-7 text-[11px] font-semibold uppercase tracking-[0.13em] text-ink hover:bg-cream"><a href="#collections">Explore the collection <ArrowRight size={16} /></a></Button>
          <Button asChild variant="outline" className="h-12 rounded-none border-primary-foreground/70 bg-transparent px-7 text-[11px] font-semibold uppercase tracking-[0.13em] text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={MAPS} target="_blank" rel="noopener noreferrer">Visit our store <ArrowUpRight size={16} /></a></Button>
        </div>
      </div>
      <a href="#intro" aria-label="Scroll to discover" className="absolute bottom-7 right-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.17em] text-primary-foreground md:right-16">Scroll to discover <ArrowDown size={16} /></a>
    </section>

    <section id="intro" className="border-b border-border/70 bg-background px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 md:grid-cols-[1fr_1.55fr] md:gap-16">
        <div className="flex items-center gap-4"><span className="h-px w-12 bg-secondary" /><span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">THE ART OF DRESSING BEAUTIFULLY</span></div>
        <p className="font-display text-[27px] leading-[1.4] text-primary md:text-[36px]">For the grand celebrations, the quiet traditions, and <i>everything in between.</i></p>
      </div>
    </section>

    <section id="collections" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.21em] text-secondary">CURATED FOR YOU</p><h2 className="font-display text-[38px] leading-tight text-primary md:text-[54px]">The collection</h2><p className="mt-4 max-w-[520px] text-sm leading-7 text-muted-foreground">A glimpse of the pieces waiting to be discovered at Sarika Saree Sadan.</p></div>
          <div className="flex gap-2" aria-label="Collection controls"><Button variant="outline" size="icon" className="h-11 w-11 rounded-none border-secondary/50 text-primary hover:bg-linen" onClick={() => move(-1)} aria-label="Previous items"><ArrowLeft size={18}/></Button><Button variant="outline" size="icon" className="h-11 w-11 rounded-none border-secondary/50 text-primary hover:bg-linen" onClick={() => move(1)} aria-label="Next items"><ArrowRight size={18}/></Button></div>
        </div>
        <div ref={rail} className="collection-scroll mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-12 md:gap-6">
          {products.map((product, i) => <article key={product.title} className="w-[78vw] max-w-[340px] shrink-0 snap-start sm:w-[42vw] lg:w-[calc((100%-72px)/4)] lg:max-w-none">
            <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-linen"><img src={product.image} alt={product.alt} loading="lazy" className="h-full w-full object-cover" /><span className="absolute left-3 top-3 bg-background/95 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-primary">0{i+1} / 0{products.length}</span></div>
            <div className="border-b border-border/75 py-5"><p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-secondary">{product.category}</p><h3 className="mt-2 font-display text-[21px] text-foreground">{product.title}</h3><a href={enquiry(product.title)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 border-b border-secondary pb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-secondary">Ask for price <ArrowUpRight size={14} /></a></div>
          </article>)}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Find more styles in store or message us for availability.</p>
      </div>
    </section>

    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
        <div className="mb-10 text-center md:mb-14"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.21em] text-secondary">THE WORLD OF SARIKA</p><h2 className="font-display text-[35px] text-primary md:text-[52px]">Find your occasion</h2></div>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {[{ image: photo11.url, title: "Sarees", subtitle: "Timeless drapes", alt: "Midnight blue draped saree" }, { image: photo3.url, title: "Suits & Dresses", subtitle: "Everyday to extraordinary", alt: "Embellished powder blue outfit" }, { image: photo15.url, title: "Lehengas & Occasion Wear", subtitle: "Made for the moment", alt: "Coral bridal lehenga" }].map((item) => <a key={item.title} href={enquiry(item.title)} target="_blank" rel="noopener noreferrer" className="group image-zoom relative block aspect-[4/5] overflow-hidden bg-linen md:aspect-[4/5]"><img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover" /><div className="hero-bottom-shade absolute inset-0" /><div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-primary-foreground md:p-8"><div><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">{item.subtitle}</p><h3 className="mt-1 font-display text-[28px] md:text-[33px]">{item.title}</h3></div><ArrowUpRight size={23} strokeWidth={1.4} className="mb-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></a>)}
        </div>
      </div>
    </section>

    <section id="story" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 md:px-10 lg:px-16 lg:py-24">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.21em] text-gold">SINCE 1986</p><h2 className="max-w-[520px] font-display text-[39px] leading-[1.2] md:text-[55px]">A love for tradition. <i>A flair for today.</i></h2>
          <div className="my-8 h-px w-16 bg-gold" /><p className="max-w-[470px] text-[14px] leading-8 text-primary-foreground/85">For decades, Sarika Saree Sadan has celebrated the beauty of women's ethnic wear. From the elegance of a saree to the joy of dressing for a celebration, discover styles that feel like you.</p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-gold pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">Follow our story <ArrowUpRight size={16} /></a>
        </div>
        <div className="min-h-[420px] lg:min-h-[620px]"><img src={photo6.url} alt="Ivory saree styled at a heritage palace" loading="lazy" className="h-full w-full object-cover" /></div>
      </div>
    </section>

    <section id="visit" className="bg-linen py-20 md:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">COME SEE US</p><h2 className="font-display text-[42px] leading-[1.2] text-primary md:text-[60px]">Visit our<br /><i>only store.</i></h2><p className="mt-6 max-w-[420px] text-sm leading-8 text-muted-foreground">There's nothing quite like finding the perfect piece in person. We look forward to welcoming you in Meerut.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild className="h-12 rounded-none px-6 text-[10px] font-semibold uppercase tracking-[0.13em]"><a href={MAPS} target="_blank" rel="noopener noreferrer"><MapPin size={16}/> Get directions</a></Button><Button asChild variant="outline" className="h-12 rounded-none border-primary px-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-primary hover:bg-primary hover:text-primary-foreground"><a href={`tel:${PHONE}`}><Phone size={15}/> Call the store</a></Button></div></div>
        <div className="border-y border-secondary/40 py-2"><div className="border-b border-secondary/30 py-7"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">FIND US</p><p className="mt-3 font-display text-[22px] leading-relaxed text-foreground">184, Abu Lane, opposite Das Hyundai<br />Meerut Cantt, Uttar Pradesh 250001</p></div><div className="border-b border-secondary/30 py-7"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">OPENING HOURS</p><p className="mt-3 font-display text-[21px] text-foreground">Tuesday – Sunday <span className="font-sans text-base">· 10:30 AM – 9:00 PM</span></p><p className="mt-2 text-sm text-muted-foreground">Monday closed</p></div><div className="py-7"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">ONE DESTINATION</p><p className="mt-3 text-sm leading-7 text-muted-foreground">We have no other branch in India. Shipping available throughout India.</p></div></div>
      </div>
    </section>

    <section className="bg-background px-5 py-20 text-center md:py-24"><p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-secondary">STAY CONNECTED</p><h2 className="mx-auto mt-4 max-w-[620px] font-display text-[36px] leading-tight text-primary md:text-[52px]">Your next favourite piece is waiting.</h2><p className="mx-auto mt-5 max-w-[460px] text-sm leading-7 text-muted-foreground">Explore more on Instagram, or tell us what you're looking for. We'd love to hear from you.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild className="h-12 rounded-none px-7 text-[10px] font-semibold uppercase tracking-[0.13em]"><a href={enquiry()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={16}/></a></Button><Button asChild variant="outline" className="h-12 rounded-none border-secondary px-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-primary hover:bg-linen"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> Follow on Instagram</a></Button></div></section>
    <footer className="bg-ink px-5 pb-24 pt-14 text-primary-foreground md:pb-9 md:pt-16"><div className="mx-auto max-w-[1440px] md:px-5 xl:px-11"><div className="flex flex-col justify-between gap-12 border-b border-primary-foreground/20 pb-12 md:flex-row"><div><Brand light /><p className="mt-6 max-w-[300px] text-xs leading-6 text-primary-foreground/65">Designer women's ethnic wear since 1986.<br />Meerut, India.</p></div><div className="grid grid-cols-2 gap-12 text-xs md:gap-24"><div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">Explore</p><div className="flex flex-col gap-3"><a href="#collections" className="hover:text-gold">Collection</a><a href="#story" className="hover:text-gold">Our story</a><a href="#visit" className="hover:text-gold">Visit us</a></div></div><div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">Connect</p><div className="flex flex-col gap-3"><a href={enquiry()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a><a href={`tel:${PHONE}`} className="hover:text-gold">Call us</a></div></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-primary-foreground/55 md:flex-row"><p>© {new Date().getFullYear()} Sarika Saree Sadan. All rights reserved.</p><p>One store. Endless possibilities.</p></div></div></footer>
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-background p-3 md:hidden"><Button asChild className="h-12 w-full rounded-none text-[11px] font-semibold uppercase tracking-[0.13em]"><a href={enquiry()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowUpRight size={16}/></a></Button></div>
  </main>;
}
