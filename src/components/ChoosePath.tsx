// components/ChoosePath.tsx
import React from 'react';
import { Building, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChoosePath: React.FC = () => {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    console.log('Brand path selected');
    // You might add further logic here.
  };

  const handleInfluencerClick = () => {
    navigate('/register');
  };

  return (
    <section
      id="choose-path"
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
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Choose Your Path
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-md transition-all cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={handleBrandClick}
          >
            <div className="flex flex-col items-center text-center">
              <Building className="h-16 w-16 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">I'm a Brand</h3>
              <p className="text-gray-400">
                Looking to collaborate with influencers and expand your brand's reach? Partner with us to connect with the perfect content creators.
              </p>
              <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-colors">
                Coming Soon
              </button>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-md transition-all cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={handleInfluencerClick}
          >
            <div className="flex flex-col items-center text-center">
              <Megaphone className="h-16 w-16 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">I'm an Influencer</h3>
              <p className="text-gray-400">
                Ready to monetize your influence and work with amazing brands? Join our network of successful content creators.
              </p>
              <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-colors">
                Register Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
