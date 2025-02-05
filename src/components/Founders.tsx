// components/Founders.tsx
import React from 'react';
import { Users } from 'lucide-react';

const Founders: React.FC = () => (
  <section id="founders" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
        <Users className="h-8 w-8 text-blue-600" />
        Meet Our Founders
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-gray-50 rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="mb-6">
            <img
              src="/src/assets/Manish.jpg"
              alt="Manish Jha"
              className="rounded-lg object-contain w-full h-[300px]"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Manish Jha</h3>
          <p className="text-blue-600 font-semibold mb-4">CEO & Co-founder</p>
          <p className="text-gray-600">
            With a strong background in analytics and influencer marketing, Manish excels in driving engagement and fostering meaningful collaborations.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="mb-6">
            <img
              src="/src/assets/Sudhir.jpg"
              alt="Sudhir Narwal"
              className="rounded-lg object-contain w-full h-[300px]"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Sudhir Narwal</h3>
          <p className="text-blue-600 font-semibold mb-4">CTO & Co-founder</p>
          <p className="text-gray-600">
            Sudhir brings a wealth of experience in digital marketing and creative strategies, ensuring every campaign delivers measurable results.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Founders;
