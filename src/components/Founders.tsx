// components/Founders.tsx
import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Founders: React.FC = () => (
  <section
    id="founders"
    className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-800 via-orange-500 to-purple-800"
  >
    {/* Animated Decorative Background Shapes */}
    <motion.div
      className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full mix-blend-overlay opacity-30"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full mix-blend-overlay opacity-30"
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    />

    <div className="relative container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-white">
        <Users className="h-8 w-8 text-orange-500" />
        Meet Our Founders
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="mb-6">
            <img
              src="/assets/images/Manish.jpg"
              alt="Manish Jha"
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Manish Jha</h3>
          <p className="text-orange-500 font-semibold mb-4">CEO & Co-founder</p>
          <p className="text-gray-300">
            With a strong background in analytics and influencer marketing, Manish excels in driving engagement and fostering meaningful collaborations.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="mb-6">
            <img
              src="/assets/images/Sudhir.jpg"
              alt="Sudhir Narwal"
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Sudhir Narwal</h3>
          <p className="text-orange-500 font-semibold mb-4">CTO & Co-founder</p>
          <p className="text-gray-300">
            Sudhir brings a wealth of experience in digital marketing and creative strategies, ensuring every campaign delivers measurable results.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Founders;
