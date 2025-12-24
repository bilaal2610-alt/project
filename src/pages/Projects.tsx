import { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern Business Complex',
      category: 'Commercial',
      client: 'Tech Solutions Inc.',
      location: 'Downtown District',
      date: '2024',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art 50,000 sq ft commercial complex featuring modern amenities, sustainable design, and cutting-edge technology integration.',
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      client: 'Private Client',
      location: 'Hillside Heights',
      date: '2024',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom-designed 5-bedroom luxury villa with panoramic views, infinity pool, and smart home automation throughout.',
    },
    {
      id: 3,
      title: 'Downtown Office Renovation',
      category: 'Commercial',
      client: 'Finance Corp',
      location: 'Financial District',
      date: '2023',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete renovation of 20,000 sq ft historic building into modern office space while preserving architectural heritage.',
    },
    {
      id: 4,
      title: 'Contemporary Family Home',
      category: 'Residential',
      client: 'The Anderson Family',
      location: 'Suburban Area',
      date: '2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful 4-bedroom contemporary home featuring open floor plan, energy-efficient systems, and custom finishes.',
    },
    {
      id: 5,
      title: 'Retail Shopping Center',
      category: 'Commercial',
      client: 'Retail Group LLC',
      location: 'City Center',
      date: '2023',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '35,000 sq ft modern shopping center with mixed-use spaces, ample parking, and contemporary design elements.',
    },
    {
      id: 6,
      title: 'Executive Townhouse',
      category: 'Residential',
      client: 'Private Client',
      location: 'Urban District',
      date: '2022',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant 3-story townhouse with rooftop terrace, modern kitchen, and luxurious master suite.',
    },
    {
      id: 7,
      title: 'Medical Office Building',
      category: 'Commercial',
      client: 'Healthcare Partners',
      location: 'Medical District',
      date: '2022',
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '40,000 sq ft specialized medical facility with advanced infrastructure and patient-centered design.',
    },
    {
      id: 8,
      title: 'Lakefront Estate',
      category: 'Residential',
      client: 'Private Client',
      location: 'Lakeside Community',
      date: '2022',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stunning lakefront property with private dock, outdoor entertainment areas, and floor-to-ceiling windows.',
    },
    {
      id: 9,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      client: 'Tech Innovations Corp',
      location: 'Business Park',
      date: '2021',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '75,000 sq ft corporate headquarters featuring collaborative workspaces, cafeteria, and fitness center.',
    },
  ];

  const filters = ['All', 'Residential', 'Commercial'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            A Showcase of Excellence and Innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Portfolio Gallery</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our completed projects across various categories
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-yellow-400 text-blue-900 shadow-lg transform scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={16} className="mr-2 text-yellow-400" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={16} className="mr-2 text-yellow-400" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                  <button className="text-yellow-400 font-semibold flex items-center hover:text-yellow-500 transition-colors">
                    View Details <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Let's discuss how we can bring your vision to life with our expert team
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
