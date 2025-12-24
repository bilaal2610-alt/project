import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Robert Foster',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 25 years of construction experience, Robert leads RF Associates with vision and integrity.',
    },
    {
      name: 'Jennifer Martinez',
      role: 'Chief Project Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Jennifer ensures every project is delivered on time and exceeds client expectations.',
    },
    {
      name: 'David Thompson',
      role: 'Lead Architect',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David brings innovative design solutions and technical expertise to every project.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Director of Operations',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lisa manages day-to-day operations ensuring seamless project execution.',
    },
  ];

  const values = [
    {
      icon: <CheckCircle size={32} />,
      title: 'Quality Excellence',
      description: 'We never compromise on quality, ensuring every project meets the highest standards.',
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Focused',
      description: 'Your vision and satisfaction drive everything we do, from planning to completion.',
    },
    {
      icon: <Award size={32} />,
      title: 'Integrity',
      description: 'Honesty and transparency in all our dealings build lasting relationships.',
    },
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'We embrace modern techniques and technologies to deliver superior results.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1488267/pexels-photo-1488267.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About RF ASSOCIATES</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Building Excellence Through Experience and Dedication
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Founded with a vision to transform the construction industry, RF ASSOCIATES has grown from a small family business into a trusted name in residential and commercial construction. Our journey began with a simple belief: quality craftsmanship and client satisfaction should never be compromised.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Over the years, we've completed hundreds of successful projects, each one a testament to our commitment to excellence. From custom homes to large-scale commercial developments, we approach every project with the same dedication and attention to detail.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Today, RF ASSOCIATES stands as a leader in the construction industry, known for our innovative solutions, professional expertise, and unwavering commitment to building lasting relationships with our clients.
              </p>
            </div>
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-4">
                <Target size={40} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations through quality workmanship, innovative solutions, and unwavering commitment to excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-4">
                <Eye size={40} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted construction partner, recognized for transforming visions into reality while setting new standards for quality and customer satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-4">
                <Award size={40} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity, excellence, innovation, and client satisfaction form the foundation of everything we do, guiding our decisions and actions every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 text-blue-900">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">25+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">300+</div>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-xl">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
