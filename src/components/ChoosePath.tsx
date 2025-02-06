// components/ChoosePath.tsx
import React from 'react';
import { Building, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <section id="choose-path" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Choose Your Path</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
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
          </div>
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
