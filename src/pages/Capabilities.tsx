import { CheckCircle, RotateCw, Shield, Radio, Target, Droplet, AlertCircle, Camera, Truck, Users, Award } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

import { NavigateFunction } from '../App';

interface CapabilitiesProps {
  onNavigate: NavigateFunction;
}

export function Capabilities({ onNavigate }: CapabilitiesProps) {
  const coreCapabilities = [
    {
      icon: Users,
      title: 'Aerial Charter & Personnel Transport',
      description: 'Safe, efficient transport of personnel to remote locations across Northern Australia.',
    },
    {
      icon: Camera,
      title: 'Aerial Survey & Reconnaissance',
      description: 'Comprehensive aerial surveying for environmental, mining, and infrastructure projects.',
    },
    {
      icon: AlertCircle,
      title: 'Aerial Fire Support & Sling Operations',
      description: 'Emergency fire response, water bombing, and precision external load operations.',
    },
    {
      icon: Target,
      title: 'Feral Animal Control & Mustering',
      description: 'Professional aerial mustering and feral animal management across the Territory.',
    },
    {
      icon: Droplet,
      title: 'Agricultural Spraying / Baiting / Seeding',
      description: 'Precision agricultural aerial work including spraying, baiting, and seeding operations.',
    },
    {
      icon: Shield,
      title: 'Search & Rescue / Emergency Response',
      description: 'Rapid response for search and rescue operations and emergency support services.',
    },
    {
      icon: Radio,
      title: 'Powerline & Pipeline Patrols',
      description: 'Infrastructure inspection and monitoring for utilities and energy sectors.',
    },
    {
      icon: Camera,
      title: 'Media, Photography & Film Work',
      description: 'Aerial cinematography and photography for media, film, and documentary production.',
    },
    {
      icon: Truck,
      title: 'Remote Access & Logistics',
      description: 'Supply and logistics support to remote communities and industrial sites.',
    },
  ];

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
      image: '/photos/red-helicopter.webp',
    },
  ];

  const safetyCompliance = [
    'CASA Certified Air Operator Certificate (AOC)',
    'Pilot competency and recurrent training programs',
    'Safety Management System (SMS) Implemented',
    'Drug and Alcohol Management Program (DAMP) Compliant',
    'Comprehensive Aviation Insurance',
    'NT WorkSafe & WHS Compliant',
  ];

  const whyChooseUs = [
    'Territory-based and family-owned operation',
    'Proven track record in remote operations',
    'Bell 206 JetRanger & LongRanger fleet',
    'CASA-certified and fully insured',
    '24/7 operational availability',
    'Trusted by government and industry',
    'Over 27 years of Territory aviation experience',
    'Flexible and responsive service delivery',
  ];

  const clients = [
    'Government Agencies',
    'Mining & Resources Sector',
    'Energy & Utilities Companies',
    'Indigenous Land Management',
    'Agricultural Operations',
    'Media & Film Production',
  ];

  return (
    <>
      <Hero
        title="Capabilities & Capability Statement"
        subtitle="Comprehensive helicopter operations and aerial services across Northern Australia. Delivering safe, efficient, and professional rotary-wing solutions to government, industry, and remote communities."
        image="/photos/gorge-country.webp"
      >
        <a className="inline-flex items-center justify-center border-2 border-territory-red bg-territory-red px-8 py-4 text-lg font-medium text-white hover:bg-orange-700" href="/Rotor-Services-Capability-Statement.pdf" download>Download Capability Statement</a>
        <Button variant="light" size="lg" onClick={() => onNavigate('contact')}>Request a Quote</Button>
      </Hero>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Company Overview</h2>
            <div className="space-y-4 text-lg leading-relaxed text-territory-grey">
              <p>
                Whitsunday Coast Helicopter Services (Rotor Services) provides safe, efficient, and flexible helicopter operations across Northern Australia. Based in the Northern Territory, we specialize in government support, emergency response, aerial work, and remote logistics using our fleet of Bell 206 JetRanger and LongRanger aircraft.
              </p>
              <p>
                With over 27 years of rotary-wing experience in Northern Australia, our operations are built on local knowledge, proven reliability, and a commitment to aviation excellence. We hold full CASA certification and maintain the highest safety standards across all operations.
              </p>
              <p>
                From personnel transport to fire support, infrastructure patrols to aerial mustering, Rotor Services NT delivers professional helicopter solutions tailored to the unique demands of Northern Australia's challenging environment.
              </p>
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              decoding="async"
              src="/photos/remote-field.webp"
              alt="Helicopter at a remote field landing site"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      <Section background="offwhite">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCapabilities.map((capability, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-territory-sand hover:border-territory-red transition-all duration-200"
            >
              <capability.icon className="w-12 h-12 text-territory-red mb-4" />
              <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
              <p className="text-territory-grey leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

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
        <div className="text-territory-grey text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-territory-red">Safety & Compliance</h2>
          <p className="text-lg mb-8">
            Safety is our top priority. Rotor Services NT maintains full regulatory compliance and operates under the highest aviation safety standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyCompliance.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-left">
                <CheckCircle className="w-8 h-8 flex-shrink-0 text-territory-red" />
                <span className="text-lg text-territory-grey">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6">Indigenous & Stakeholder Engagement</h2>
          <p className="text-lg leading-relaxed">Our experience includes working with Indigenous ranger groups, government agencies, environmental teams, mining clients and remote communities. Respectful engagement, clear communication and coordination with ground crews guide our operational planning.</p>
          <p className="text-lg leading-relaxed mt-4">Previous work includes services to the Department of Agriculture, Fisheries and Forestry, alongside Adam's involvement in aerial baiting and environmental management programs from 2007 to 2019.</p>
        </div>
      </Section>
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Personnel</h2>
            <div className="bg-territory-sand p-8 border border-territory-sand">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <img
              loading="lazy"
              decoding="async"
                  src="/PXL_20250816_013629380.MP.jpg"
                  alt="Adam Tessmann"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-territory-red mb-2">Adam Tessmann</h3>
                  <p className="text-lg font-medium text-territory-grey mb-2">Chief Executive Officer / Chief Pilot</p>
                </div>
              </div>
              <div className="space-y-3 text-territory-grey leading-relaxed">
                <p>
                  Adam brings over 27 years of rotary-wing experience to Rotor Services NT, with extensive expertise across the Northern Territory and Queensland.
                </p>
                <p>
                  His specializations include emergency operations, aerial mustering, fire support, infrastructure patrols, and government charter work. Adam's deep understanding of Territory operations and commitment to safety excellence underpins every aspect of our service delivery.
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Award className="w-5 h-5 text-territory-red" />
                  CASA Commercial Pilot License (Helicopter) | Chief Pilot AOC
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Clients & Experience</h2>
            <div className="bg-territory-sand p-8 border border-territory-sand mb-8">
              <p className="text-lg leading-relaxed text-territory-grey mb-6">
                Rotor Services NT provides trusted helicopter operations to government agencies, mining and resources companies, energy and utilities sectors, agricultural operations, and media production across Northern Australia.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-territory-red flex-shrink-0" />
                    <span className="text-sm font-medium">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Why Choose Rotor Services NT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-territory-red flex-shrink-0" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="offwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Operational Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden border border-territory-sand">
              <img
              loading="lazy"
              decoding="async"
                src="/photos/ground-support.webp"
                alt="Helicopter prepared for ground support operations"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="overflow-hidden border border-territory-sand">
              <img
              loading="lazy"
              decoding="async"
                src="/photos/rugged-country.webp"
                alt="Helicopter on rocky ground in remote country"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section background="offwhite">
        <div className="text-territory-grey text-center bg-white p-6 sm:p-12 border border-territory-sand max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <RotateCw className="w-16 h-16 text-territory-red" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 text-territory-red">Contact Rotor Services NT</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg">
            <p className="text-2xl font-bold mb-4 text-territory-grey">Adam Tessmann – Chief Executive Officer / Chief Pilot</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
              <a href="tel:+61408857973" className="hover:text-territory-red transition-colors text-territory-grey font-medium">
                📞 +61 (0)408 857 973
              </a>
              <a href="mailto:adschopper@hotmail.com" className="hover:text-territory-red transition-colors text-territory-grey font-medium">
                ✉️ adschopper@hotmail.com
              </a>
            </div>
            <p className="text-xl text-territory-grey">Based in the Northern Territory, Australia</p>
            <p className="text-sm text-territory-grey mt-8 font-medium">
              Remote Operations | Government & Industry Support
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
