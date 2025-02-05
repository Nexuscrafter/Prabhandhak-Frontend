// pages/Home.tsx
import React from 'react';


const Home: React.FC = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">PR Prabandhak</h1>
        <p className="text-xl mb-8">Transforming ideas into digital reality</p>
        <a
          href="/choose-path"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <img
              src="/src/assets/Innovative.jpg"
              alt="Innovative Strategy"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Innovative Strategy</h3>
            <p className="text-gray-600">
              We craft bespoke digital strategies that resonate with your brand identity and target audience.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <img
              src="/src/assets/DataDriven.jpg"
              alt="Data Driven Insights"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Data Driven Insights</h3>
            <p className="text-gray-600">
              Our strategies are backed by rigorous data analysis to ensure optimal engagement and ROI.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <img
              src="/src/assets/GlobalNetwork.jpg"
              alt="Global Network"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Global Network</h3>
            <p className="text-gray-600">
              Leverage our vast network of influencers to expand your brand's reach globally.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "PR Prabandhak transformed our brand presence with their innovative approach and data-backed strategies.
              Highly recommended!"
            </p>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO, BrandCo</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Their expertise in influencer marketing helped us connect with our target audience in ways we never
              imagined."
            </p>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">CMO, MarketPro</p>
          </div>
        </div>
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h2>
        <p className="text-xl mb-8">
          Join us today and take the first step towards digital excellence.
        </p>
        <a
          href="/choose-path"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  </div>
);

export default Home;
