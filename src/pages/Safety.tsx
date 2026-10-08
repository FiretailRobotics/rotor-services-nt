import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';

export function Safety({ onNavigate }: { onNavigate: (page: string) => void }) {
  const systems = [
    'CASA-approved AOC & SMS',
    'Drug & Alcohol Management Plan (DAMP)',
    'Fatigue Risk Management System (FRMS)',
    'Hazard & incident reporting framework',
    'Daily job safety analyses (JSA)',
    'Certified maintenance oversight & audits',
    'Satellite tracking and dual-comms monitoring',
  ];

  return (
    <>
      <Hero
        title="Safety, Compliance & Culture"
        height="standard"
        image="/494175656_2951389338355097_2502229833333413651_n.jpg"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl leading-relaxed mb-12 text-center font-medium text-territory-red">
            Safety isn't a document — it's how we operate.
          </p>

          <p className="text-xl leading-relaxed mb-12">
            Rotor Services maintains a CASA-approved Safety Management System (SMS) that guides every flight, inspection and decision.
          </p>

          <h2 className="text-3xl mb-6">Systems & Processes</h2>
          <ul className="space-y-4 mb-12">
            {systems.map((system, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-territory-red flex-shrink-0 mt-1" />
                <span className="text-lg">{system}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>Request Safety Documentation</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
