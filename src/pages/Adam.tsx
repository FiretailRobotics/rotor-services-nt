import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

export function Adam() {
  const highlights = [
    'Thousands of incident-free flight hours',
    'Specialist in remote operations, fire support, and survey flying',
    'Deep local knowledge from decades across NT & QLD',
    'Continues a family aviation legacy begun under Jayrow NT',
  ];

  return (
    <>
      <Hero
        title="Experience Built in the Territory"
        height="standard"
        video="/adamhero.mp4"
        image="/photos/sunset-operations-new.webp"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="md:w-2/5 flex-shrink-0">
              <img
              loading="lazy"
              decoding="async"
                src="/PXL_20250816_013629380.MP.jpg"
                alt="Adam Tessmann - Chief Pilot"
                className="w-full rounded-lg shadow-lg border-4 border-territory-sand"
              />
              <p className="text-sm text-territory-grey mt-3 text-center italic">
                Adam Tessmann at the controls
              </p>
            </div>
            <div className="md:w-3/5">
              <p className="text-xl leading-relaxed">
                With more than 27 years in northern aviation, Adam Tessmann has built a reputation for calm professionalism, precision flying, and practical problem-solving in harsh conditions.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mb-6">Highlights</h2>
          <ul className="space-y-3 mb-12">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="text-lg pl-6 border-l-4 border-territory-red py-2">
                {highlight}
              </li>
            ))}
          </ul>

          <div className="bg-territory-sand p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl italic text-territory-grey text-center">
              "You can't teach the Territory — you have to live it."
            </blockquote>
            <p className="text-center mt-4 text-lg">— Adam Tessmann</p>
          </div>
        </div>
      </Section>

      <Section background="offwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8">Experience in the Field</h2>
          <div className="flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              src="/photos/ground-support-new.webp"
              alt="Helicopter at a remote operational site"
              className="w-full max-w-4xl rounded-lg shadow-lg border-4 border-territory-sand"
            />
          </div>
          <p className="text-center text-lg text-territory-grey mt-6 max-w-3xl mx-auto">
            Experienced professionals dedicated to safe, reliable helicopter operations across Australia's north.
          </p>
        </div>
      </Section>
    </>
  );
}
