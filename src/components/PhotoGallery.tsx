import { Section } from './Section';

type Photo = { src: string; alt: string; title: string };
export function PhotoGallery({ title, intro, items }: { title: string; intro: string; items: Photo[] }) {
  return <Section background="white">
    <div className="max-w-3xl mb-10">
      <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
      <p className="text-lg leading-relaxed">{intro}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((photo) => <figure key={photo.src} className="overflow-hidden bg-territory-offwhite">
        <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width={720} height={540} className="w-full aspect-[4/3] object-cover" />
        <figcaption className="p-5 font-heading font-bold text-lg">{photo.title}</figcaption>
      </figure>)}
    </div>
  </Section>;
}
