import 'react';

import web from '../../assets/services/web.svg';
import mobile from '../../assets/services/mobile.svg';
import cloud from '../../assets/services/cloud.svg';
import security from '../../assets/services/security.svg';
import ai from '../../assets/services/cloud.svg';
import consulting from '../../assets/services/web.svg';
import ServiceCard from '../ServiceCard';

const services = [
  {
    icon: web,
    title: 'Web Development',
    description: 'Custom web applications and responsive websites using the latest technologies.',
  },
  {
    icon: mobile,
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile app development tailored to your needs.',
  },
  {
    icon: cloud,
    title: 'Cloud Solutions',
    description: 'Cloud migration, DevOps, and scalable cloud-native services.',
  },
  {
    icon: security,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security audits and tools.',
  },
  {
    icon: ai,
    title: 'AI & Automation',
    description: 'Smart solutions with AI, ML, chatbots, and workflow automation.',
  },
  {
    icon: consulting,
    title: 'IT Consulting',
    description: 'Expert advice and strategy for IT infrastructure, software, and operations.',
  },
];

const Services = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
