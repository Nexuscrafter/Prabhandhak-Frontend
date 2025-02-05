// components/About.tsx
import React from 'react';
import { Building2 } from 'lucide-react';

const About: React.FC = () => (
  <section id="about" className="py-16 container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Building2 className="h-8 w-8 text-blue-600" />
          About Us
        </h2>
        <p className="text-gray-600 mb-4">
          At PR Prabandhak, we craft data-driven social media strategies tailored to each client's industry, audience, and goals. With deep market insights and a network of 1,000+ influencers, we deliver high-impact campaigns that maximize engagement and drive results.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
          alt="Team collaboration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;
