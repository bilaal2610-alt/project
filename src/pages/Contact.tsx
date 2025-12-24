import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Let's Start Building Your Dream Project Together
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <Phone size={28} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
              <p className="text-gray-700 mb-2">Give us a call</p>
              <a href="tel:+15551234567" className="text-yellow-400 font-semibold hover:text-yellow-500">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <Mail size={28} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
              <p className="text-gray-700 mb-2">Send us a message</p>
              <a href="mailto:rfassociates.00@gmail.com" className="text-yellow-400 font-semibold hover:text-yellow-500">
                rfassociates.00@gmail.com
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <MapPin size={28} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Address</h3>
              <p className="text-gray-700 mb-2">Visit our office</p>
              <p className="text-gray-600">
                123 Construction Ave<br />
                Building City, ST 12345
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation Project</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Please fill in all required fields.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Office Hours</h2>
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <div className="flex items-start mb-6">
                  <Clock size={24} className="text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Business Hours</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our team is available during business hours to answer your questions and provide consultations. For urgent matters outside business hours, please leave a message and we'll respond as soon as possible.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-blue-900 mb-6">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.98823492346395!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RF Associates Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Emergency Services</h2>
          <p className="text-xl mb-8 text-gray-200">
            For urgent construction emergencies, our 24/7 hotline is available
          </p>
          <a
            href="tel:+15559876543"
            className="inline-block bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Call Emergency Line: +1 (555) 987-6543
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
