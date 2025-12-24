import { Link } from 'react-router-dom';
import { Building2, Home as HomeIcon, Wrench, ClipboardCheck, ArrowRight, Quote } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <HomeIcon size={40} />,
      title: 'Residential Construction',
      description: 'Custom homes built to your exact specifications with attention to every detail.',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Commercial Construction',
      description: 'Professional commercial spaces designed for efficiency and aesthetic appeal.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Renovations & Remodeling',
      description: 'Transform your existing spaces with our expert renovation services.',
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality standards.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Business Complex',
      category: 'Commercial',
      client: 'Tech Solutions Inc.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art 50,000 sq ft commercial complex with modern amenities.',
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      client: 'Private Client',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom-designed 5-bedroom luxury villa with panoramic views.',
    },
    {
      id: 3,
      title: 'Downtown Office Renovation',
      category: 'Commercial',
      client: 'Finance Corp',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete renovation of historic building into modern office space.',
    },
  ];

  const testimonials = [
    {
      name: 'John Anderson',
      role: 'CEO, Anderson Enterprises',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'RF Associates delivered our commercial project ahead of schedule and exceeded all our expectations. Their attention to detail and professionalism is unmatched.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'They transformed our vision into reality. The team was responsive, professional, and the quality of work on our home renovation was exceptional.',
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Working with RF Associates has been a game-changer for our projects. Their expertise and commitment to quality make them our go-to construction partner.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            RF ASSOCIATES
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-yellow-400 font-semibold">
            Building Your Vision with Precision
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional construction solutions for residential, commercial, and renovation projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-900 mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-yellow-400 font-semibold flex items-center hover:text-yellow-500 transition-colors"
                >
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our recently completed projects that showcase our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">Client: {project.client}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link
                    to="/projects"
                    className="text-yellow-400 font-semibold flex items-center hover:text-yellow-500 transition-colors"
                  >
                    View Details <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                <Quote className="text-yellow-400 mb-4" size={40} />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can bring your vision to life with our expert construction services
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
