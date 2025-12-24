import { Link } from 'react-router-dom';
import { Home, Building2, Wrench, ClipboardCheck, Paintbrush, Hammer, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: 'Residential Construction',
      description: 'Transform your dream home into reality with our expert residential construction services.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom Home Building',
        'New Home Construction',
        'Additions and Extensions',
        'Luxury Home Development',
        'Energy-Efficient Design',
        'Smart Home Integration',
      ],
    },
    {
      icon: <Building2 size={48} />,
      title: 'Commercial Construction',
      description: 'Professional commercial spaces designed for efficiency, functionality, and aesthetic appeal.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Industrial Facilities',
        'Mixed-Use Developments',
        'Hospitality Projects',
        'Educational Facilities',
      ],
    },
    {
      icon: <Wrench size={48} />,
      title: 'Renovations & Remodeling',
      description: 'Breathe new life into your existing spaces with our comprehensive renovation services.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovations',
        'Basement Finishing',
        'Whole Home Renovations',
        'Interior Redesign',
        'Historic Restoration',
      ],
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and exceptional quality standards.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Project Planning',
        'Budget Management',
        'Timeline Coordination',
        'Quality Control',
        'Vendor Management',
        'Client Communication',
      ],
    },
    {
      icon: <Paintbrush size={48} />,
      title: 'Design & Planning',
      description: 'Creative design solutions and comprehensive planning to bring your vision to life.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Architectural Design',
        '3D Visualization',
        'Space Planning',
        'Material Selection',
        'Permit Acquisition',
        'Building Compliance',
      ],
    },
    {
      icon: <Hammer size={48} />,
      title: 'General Contracting',
      description: 'Comprehensive general contracting services for projects of all sizes and complexities.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Site Preparation',
        'Foundation Work',
        'Structural Building',
        'Electrical & Plumbing',
        'HVAC Installation',
        'Final Inspections',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet with you to understand your vision, requirements, and budget.',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs tailored to your needs.',
    },
    {
      step: '03',
      title: 'Proposal & Agreement',
      description: 'We provide a comprehensive proposal with timeline and cost estimates.',
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Expert execution with regular updates and quality control checkpoints.',
    },
    {
      step: '05',
      title: 'Final Walkthrough',
      description: 'We ensure every detail meets your expectations before project completion.',
    },
    {
      step: '06',
      title: 'Post-Project Support',
      description: 'Continued support and warranty services for your peace of mind.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Comprehensive Construction Solutions for Every Need
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional construction services designed to exceed your expectations
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-blue-900 mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle size={20} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to ensure your project's success from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                <div className="text-6xl font-bold text-yellow-400 opacity-20 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 text-blue-900 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today to discuss your project and receive a detailed quote
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
