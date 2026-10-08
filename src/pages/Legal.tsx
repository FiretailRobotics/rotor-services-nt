import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

export function Legal() {
  return (
    <>
      <Hero
        title="Legal Information"
        height="standard"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl mb-6">Jayrow Helicopters Affiliation</h2>
          <p className="text-lg leading-relaxed mb-8">
            Jayrow Helicopters has no affiliation with Rotor Services. All references to "Jayrow" reflect the personal and family history of Adam Tessmann and his late father, who were integral to Jayrow's NT operations.
          </p>

          <h2 className="text-3xl mb-6">Operating Details</h2>
          <p className="text-lg leading-relaxed mb-4">
            Contact Rotor Services NT to confirm its current Air Operator Certificate and the approvals applicable to your proposed operation.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Whitsunday Coast Helicopter Services (Rotor Services). For ABN and invoicing information, contact adschopper@hotmail.com.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Darwin, Northern Territory
          </p>

          <p className="text-sm text-territory-grey">
            © {new Date().getFullYear()} Rotor Services NT. All rights reserved.
          </p>
        </div>
      </Section>
    </>
  );
}
