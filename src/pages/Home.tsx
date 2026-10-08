import { CheckCircle, Clock, Shield, RotateCw, Radio, Users, Gauge } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { PhotoGallery } from '../components/PhotoGallery';
import { NavigateFunction } from '../App';

interface HomeProps {
  onNavigate: NavigateFunction;
}

export function Home({ onNavigate }: HomeProps) {
  const capabilities = [
    { icon: Shield, text: 'CASA Certified AOC & SMS' },
    { icon: Clock, text: '24/7 Operational Availability' },
    { icon: CheckCircle, text: 'Extensive NT & Queensland Experience' },
    { icon: RotateCw, text: 'Bell 206/206L Fleet — Back-up Readiness' },
    { icon: Radio, text: 'Proven Record Supporting Government & Emergency Operations' },
  ];

  const services = [
    {
      title: 'Government & Agency Support',
      description: 'Charter, patrol, inspection & personnel transport.',
      icon: Users,
    },
    {
      title: 'Emergency & Disaster Response',
      description: 'Fire, flood, cyclone and recovery logistics.',
      icon: Shield,
    },
    {
      title: 'Infrastructure & Utility Patrols',
      description: 'Powerline, pipeline, corridor and asset surveys.',
      icon: Radio,
    },
    {
      title: 'Mining & Energy Support',
      description: 'Crew change, reconnaissance and transport.',
      icon: CheckCircle,
    },
    {
      title: 'Aerial Survey & Mapping',
      description: 'Environmental, LiDAR and photographic survey.',
      icon: Gauge,
    },
    {
      title: 'Logistics & Light Sling',
      description: 'Remote community supply and external load transport.',
      icon: Clock,
    },
  ];

  return (
    <>
      <Hero
        title="Trusted Helicopter Operations Across the Top End"
        subtitle="For over 27 years, Adam Tessmann has supported government, environmental and industry operations across Northern Australia. Rotor Services continues that legacy with proven Bell 206 operations, full compliance, and 24/7 readiness."
        video="/hero-video.mp4"
        image="/photos/coastal-operations.webp"
      >
        <Button size="lg" onClick={() => onNavigate('contact')}>Request a Quote</Button>
      </Hero>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <cap.icon className="w-8 h-8 text-territory-red flex-shrink-0" />
              <p className="text-lg font-medium">{cap.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="offwhite">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Operational Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 border border-territory-sand hover:border-territory-red transition-colors duration-200">
              <service.icon className="w-12 h-12 text-territory-red mb-4" />
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-territory-grey leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <PhotoGallery title="At Work Across Northern Australia" intro="Remote coastlines, rugged country and practical helicopter support — a selection of Rotor Services operations." items={[
        { src: '/photos/coastal-operations.webp', alt: 'Helicopter on a coastal landing area beneath a shady tree', title: 'Coastal Access' },
        { src: '/photos/creek-operations-new.webp', alt: 'Red helicopter at a remote creek landing site', title: 'Remote Country' },
        { src: '/photos/sunset-operations-new.webp', alt: 'Helicopter lifting off at sunset during field operations', title: 'Territory Operations' },
      ]} />
      <Section background="sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Territory Heritage</h2>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              The Tessmann family has been part of Territory aviation for generations. From their early years at Jayrow NT to today's independent Rotor Services, the same people, standards and values continue to support Australia's north.
            </p>
            <p className="text-sm italic text-territory-grey">
              (Jayrow Helicopters has no current affiliation with Rotor Services.)
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
