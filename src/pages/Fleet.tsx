import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export function Fleet({ onNavigate }: { onNavigate: (page: string) => void }) {
  const fleetData = [
    {
      model: 'Bell 206 JetRanger',
      capacity: '4 passengers',
      roles: 'Charter, Survey, Light Sling',
      image: '/photos/aircraft-ready.webp',
    },
    {
      model: 'Bell 206L LongRanger',
      capacity: '6 passengers',
      roles: 'Charter, Fire Support, Sling',
      image: '/photos/longranger-field-new.webp',
    },
  ];

  const aircraft = [
    {
      model: 'Bell 206B JetRanger',
      seats: '1 + 4',
      cruise: '110 kts',
      range: '600 km',
      externalLoad: '600 kg',
      roles: 'Charter, Survey, Light Sling, Aerial Application',
    },
    {
      model: 'Bell 206L LongRanger',
      seats: '1 + 6',
      cruise: '120 kts',
      range: '650 km',
      externalLoad: '900 kg',
      roles: 'Charter, Fire, Logistics, Corporate, Sling',
    },
  ];

  return (
    <>
      <Hero
        title="Proven Bell 206 Reliability"
        height="standard"
        image="/photos/aircraft-apron.webp"
      />

      <Section background="white">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Fleet Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {fleetData.map((aircraft, idx) => (
            <div key={idx} className="border border-territory-sand overflow-hidden">
              <div className="bg-territory-red text-white p-4 text-center">
                <h3 className="text-2xl font-bold">{aircraft.model}</h3>
              </div>
              <img
              loading="lazy"
              decoding="async"
                src={aircraft.image}
                alt={aircraft.model}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="flex justify-between border-b border-territory-sand pb-2">
                  <span className="font-bold">Capacity:</span>
                  <span>{aircraft.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Primary Roles:</span>
                  <span>{aircraft.roles}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl mb-6">Fleet Readiness & Back-Up</h3>
          <p className="text-lg leading-relaxed mb-4">
            Rotor Services maintains two operational Bell 206 airframes (206B & 206L) with redundant availability for task continuity. Maintenance is performed by CASA-approved LAMEs with direct access to spares and component support.
          </p>
          <p className="text-lg leading-relaxed">
            All operations are coordinated through Darwin HQ with rapid mobilisation to Katherine, Kununurra, Broome, and Mt Isa regions.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl leading-relaxed mb-12 text-center">
            The Bell 206 family is the world's most trusted light helicopter — ideal for the distances, heat, and field maintenance conditions of the north. Rotor Services operates both 206B JetRanger and 206L LongRanger models to ensure operational flexibility and built-in redundancy.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-territory-grey text-white">
                  <th className="p-4 text-left">Aircraft</th>
                  <th className="p-4 text-left">Seats</th>
                  <th className="p-4 text-left">Cruise</th>
                  <th className="p-4 text-left">Range</th>
                  <th className="p-4 text-left">External Load</th>
                  <th className="p-4 text-left">Roles</th>
                </tr>
              </thead>
              <tbody>
                {aircraft.map((ac, idx) => (
                  <tr key={idx} className="border-b border-territory-sand hover:bg-territory-offwhite">
                    <td className="p-4 font-medium">{ac.model}</td>
                    <td className="p-4">{ac.seats}</td>
                    <td className="p-4">{ac.cruise}</td>
                    <td className="p-4">{ac.range}</td>
                    <td className="p-4">{ac.externalLoad}</td>
                    <td className="p-4">{ac.roles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-territory-grey mb-8">Figures are indicative. Confirm aircraft configuration, payload and mission performance with the operator.</p>
          <div className="text-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>Request Aircraft Availability</Button>
          </div>
        </div>
      </Section>

      <Section background="offwhite">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Our Fleet in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group overflow-hidden border border-territory-sand hover:border-territory-red transition-colors duration-300">
            <img
              loading="lazy"
              decoding="async"
              src="/photos/sunset-operations-new.webp"
              alt="Helicopter airborne above a field site at sunset"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white p-6">
              <h3 className="text-xl font-medium mb-2">Sunset Flying</h3>
              <p className="text-territory-grey">
                A helicopter lifts off from a remote field site in the evening light.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden border border-territory-sand hover:border-territory-red transition-colors duration-300">
            <img
              loading="lazy"
              decoding="async"
              src="/photos/coastal-hover.webp"
              alt="Helicopter hovering above a remote coastal landing site"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white p-6">
              <h3 className="text-xl font-medium mb-2">Coastal Operations</h3>
              <p className="text-territory-grey">
                A helicopter hovers above a remote coastal landing site during field operations.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
