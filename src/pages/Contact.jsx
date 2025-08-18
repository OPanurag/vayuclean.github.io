import Hero from '../components/Hero';
import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero backgroundImage="" backgroundColor="#3b63e6ff" minHeight="400px" showScroll={false}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-300 drop-shadow-md">
          We're here to help.
          <br />
          Reach out to us for inquiries, support, or careers.
        </p>
      </Hero>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-3 text-center">
          
          {/* Office Address */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-3">Our Office</h3>
            <p className="font-medium">VayuClean Technologies Pvt. Ltd.</p>
            <p>Unit No 22, Phase-1 Parmar Techno Centre</p>
            <p>Nr-Western Express Highway</p>
            <p>Vasai (East), Maharashtra - 401208, India</p>
          </div>

          {/* Phone Numbers */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-3">Call Us</h3>
            <p className="text-lg font-medium">+91 9876543210 | +91 9123456789</p>
            {/* <p className="text-lg font-medium">+91 9876543210</p> */}
            {/* <p className="text-lg font-medium">+91 9123456789</p> */}
            <p className="text-gray-500">Mon - Fri, 9am - 6pm</p>
          </div>

          {/* Emails */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-3">Email Us</h3>
            <p className="text-lg font-medium">info@vayucleantechnologies.com</p>
            <p className="text-gray-500">We reply within 24 hrs</p>
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <Briefcase className="w-14 h-14 mx-auto mb-6 text-blue-600" />
          <h2 className="text-4xl font-bold mb-4">Work With Us</h2>
          <p className="text-lg mb-6">
            Think you can contribute to our mission? <br />We're always looking for talented individuals to join our team.
          </p>
          <p className="text-lg font-medium">
            Send your CV to:{" "}
            <a
              href="mailto:info@vayucleantechnologies.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              info@vayucleantechnologies.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
