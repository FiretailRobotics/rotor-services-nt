import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <>
      <Hero
        title="Contact Rotor Services NT"
        subtitle="Direct contact with the operator — not an agency. Discuss availability, scope, and safety requirements directly with Adam."
        height="standard"
        image="/photos/aerial-coast.webp"
      />

      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-territory-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-territory-grey">Darwin, NT</p>
              <p className="text-sm text-territory-grey">Mobilisation across Top End & Queensland</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-territory-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+61408857973" className="text-territory-grey hover:text-territory-red transition-colors">
                +61 (0)408 857 973
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-territory-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:adschopper@hotmail.com" className="text-territory-grey hover:text-territory-red transition-colors">
                adschopper@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
