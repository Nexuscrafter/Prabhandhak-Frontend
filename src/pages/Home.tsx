// pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => (
  <div className="bg-black text-white">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-orange-900 text-white py-40 text-center">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-extrabold text-orange-500 drop-shadow-lg"
        >
          PR Prabandhak
        </motion.h1>
        <p className="text-2xl text-gray-300 mt-4 mb-8">
          Transforming ideas into digital reality
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/choose-path"
            className="bg-orange-500 text-black font-bold py-3 px-10 rounded-full shadow-lg hover:bg-orange-400 transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-orange-500 mb-16 drop-shadow-md">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { img: "/src/assets/Innovative.jpg", title: "Innovative Strategy", text: "We craft bespoke digital strategies that resonate with your brand identity and target audience." },
            { img: "/src/assets/DataDriven.jpg", title: "Data Driven Insights", text: "Our strategies are backed by rigorous data analysis to ensure optimal engagement and ROI." },
            { img: "/src/assets/GlobalNetwork.jpg", title: "Global Network", text: "Leverage our vast network of influencers to expand your brand's reach globally." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism-card p-8 text-center rounded-lg shadow-lg bg-opacity-20 border border-orange-500"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-28 h-28 mx-auto rounded-full mb-6 border-4 border-orange-500"
              />
              <h3 className="text-2xl font-bold mb-3 text-orange-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-orange-500 mb-16 drop-shadow-md">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { name: "John Doe", position: "CEO, BrandCo", text: "PR Prabandhak transformed our brand presence with their innovative approach and data-backed strategies. Highly recommended!" },
            { name: "Jane Smith", position: "CMO, MarketPro", text: "Their expertise in influencer marketing helped us connect with our target audience in ways we never imagined." }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-lg shadow-xl bg-gray-800 bg-opacity-80 backdrop-blur-md border border-orange-500"
            >
              <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <h3 className="text-2xl font-semibold text-orange-400">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="py-24 bg-gradient-to-r from-orange-900 to-black text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6 text-orange-400 drop-shadow-md">Ready to Transform Your Brand?</h2>
        <p className="text-2xl text-gray-300 mb-8">Join us today and take the first step towards digital excellence.</p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/choose-path"
            className="bg-orange-500 text-black font-bold py-4 px-12 rounded-full shadow-xl hover:bg-orange-400 transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
