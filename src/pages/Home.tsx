// Home.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';
import { Building2 } from 'lucide-react';
import { Users, Target, TrendingUp, Handshake, BarChart, DollarSign } from 'lucide-react';

/* Framer Motion Variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Home: React.FC = () => {
  
  const [showInfluencerInfo, setShowInfluencerInfo] = useState(false);
  const navigate = useNavigate();

  const handleBrandClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Brand button clicked');
    e.preventDefault();
  };

  const handleInfluencerClick = () => {
    console.log('Influencer button clicked');
    navigate('/register');
  };

  return (
    <div className="text-white">
      {/* HERO SECTION */}
            <motion.section
        className="relative bg-gradient-to-r from-purple-800 via-black to-purple-900 min-h-[80vh] flex items-center text-left overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center space-y-6">
          {/* Larger Brand Name */}
          <motion.h1
            className="text-6xl font-extrabold text-orange-500"
            variants={fadeInUp}
          >
            PR Prabandhak
          </motion.h1>
          {/* Larger Tagline */}
          <motion.p
            className="text-3xl text-gray-200 max-w-3xl"
            variants={fadeInUp}
          >
            Transforming ideas into digital reality
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-8 items-start"
            variants={fadeInUp}
          >
            {/* Squared Buttons, Larger Text */}
            <button
              onClick={handleBrandClick}
              className="border-2 border-orange-500 text-orange-500 text-xl font-semibold px-10 py-4
                        rounded-none hover:bg-orange-500 hover:text-black transition-colors duration-300"
            >
              I&apos;m a Brand
            </button>
            <button
              onClick={handleInfluencerClick}
              className="border-2 border-orange-500 text-orange-500 text-xl font-semibold px-10 py-4
                        rounded-none hover:bg-orange-500 hover:text-black transition-colors duration-300"
            >
              I&apos;m an Influencer
            </button>
          </motion.div>
        </div>

        {/* Decorative Shape */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-overlay opacity-20"></div>
      </motion.section>

      {/* Wave Divider: Hero -> About */}
      <WaveDivider fillColor="#000" />

      {/* ABOUT US SECTION */}
      <motion.section
        id="about"
        className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-700 rounded-full mix-blend-multiply opacity-20"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="h-10 w-10 text-orange-500" />
                About Us
              </h2>
              <p className="text-lg md:text-xl mb-4 leading-relaxed">
                PR Prabandhak is revolutionizing digital marketing by connecting brands with micro-influencers who share authentic, trusted voices within their communities. In an era where traditional advertising often falls flat, we champion a model built on genuine engagement and community trust.
              </p>
              <p className="text-lg md:text-xl mb-4 leading-relaxed">
                What makes us special is our unwavering commitment to authenticity and innovation. Led by industry experts Sudhir and Manish, we blend data-driven insights with creative community-building strategies to create impactful campaigns that truly resonate.
              </p>
              {!showInfluencerInfo && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowInfluencerInfo(true)}
                  className="mt-4 border-2 border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300"
                >
                  Read More
                </motion.button>
              )}
              {showInfluencerInfo && (
                <>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 text-base text-gray-300 overflow-hidden"
                  >
                    <p className="text-lg md:text-xl mb-4 leading-relaxed">
                      Founded on the belief that digital marketing must evolve beyond traditional methods, PR Prabandhak offers a fresh, innovative approach that prioritizes real connections. We empower brands to foster meaningful engagement by leveraging the trusted influence of micro-influencers, ensuring every campaign drives measurable impact.
                    </p>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setShowInfluencerInfo(false)}
                    className="mt-4 border-2 border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300"
                  >
                    Read Less
                  </motion.button>
                </>
              )}
            </motion.div>
            <motion.div variants={fadeInRight}>
              <img
                src="/assets/images/image.png"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl transition duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Wave Divider: About -> Services (flipped) */}
      <WaveDivider flip fillColor="#000" />

      {/* SERVICES SECTION */}
      <motion.section
        id="services"
        className="py-20 bg-gradient-to-r from-orange-800 via-black to-purple-800 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400"
            variants={fadeInUp}
          >
            Services We Provide
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Our comprehensive solutions are designed to elevate your brand’s digital presence through strategic influencer partnerships and advanced marketing insights.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Micro-Influencer Marketing */}
            <motion.div
              className="bg-pink-600 p-8 rounded-lg shadow-md transition-all hover:shadow-orange-500 cursor-pointer"
              variants={fadeInLeft}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl font-bold mb-4">Micro-Influencer Marketing</h3>
              <p className="text-white text-lg">
                We connect brands with passionate micro-influencers, enabling authentic and engaging campaigns that drive real results.
              </p>
            </motion.div>
            {/* Community Engagement */}
            <motion.div
              className="bg-purple-600 p-8 rounded-lg shadow-md transition-all hover:shadow-orange-500 cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl font-bold mb-4">Community Engagement</h3>
              <p className="text-white text-lg">
                Our strategies focus on building meaningful, two-way conversations between brands and their communities, fostering loyalty and trust.
              </p>
            </motion.div>
            {/* Marketplace Platform */}
            <motion.div
              className="bg-indigo-600 p-8 rounded-lg shadow-md transition-all hover:shadow-orange-500 cursor-pointer"
              variants={fadeInRight}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl font-bold mb-4">Marketplace Platform</h3>
              <p className="text-white text-lg">
                Our user-friendly platform simplifies influencer discovery and campaign management, making it easy for brands to collaborate with the right influencers.
              </p>
            </motion.div>
            {/* Campaign Optimization */}
            <motion.div
              className="bg-blue-600 p-8 rounded-lg shadow-md transition-all hover:shadow-orange-500 cursor-pointer"
              variants={fadeInLeft}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl font-bold mb-4">Campaign Optimization</h3>
              <p className="text-white text-lg">
                With state-of-the-art analytics and optimization tools, we ensure every campaign is fine-tuned for maximum impact.
              </p>
            </motion.div>
            {/* Niche Targeting */}
            <motion.div
              className="bg-teal-600 p-8 rounded-lg shadow-md transition-all hover:shadow-orange-500 cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl font-bold mb-4">Niche Targeting</h3>
              <p className="text-white text-lg">
                We specialize in hyper-targeting, allowing brands to reach specific segments that align with their unique objectives.
              </p>
            </motion.div>
            {/* Strategic Consultation */}
            <motion.div
              className="bg-green-600 p-8 rounded-lg shadow-md transition-all hover:shadow-orange-500 cursor-pointer"
              variants={fadeInRight}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl font-bold mb-4">Strategic Consultation</h3>
              <p className="text-white text-lg">
                Leveraging our deep industry knowledge, we offer bespoke guidance to help brands navigate the complexities of digital marketing and influencer partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Wave Divider: Services -> Why Choose Us */}
      <WaveDivider fillColor="#000" />

      {/* Why Choose Us SECTION */}

      <motion.section
      id="why-choose-us"
      className="py-16 bg-gradient-to-r from-purple-800 via-black to-purple-900 text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading - Bigger */}
        <motion.h2
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400"
          variants={fadeInUp}
        >
          Why Choose Us
        </motion.h2>

        {/* Subheading - Bigger */}
        <motion.p
          className="text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          PR Prabandhak helps you monetize influence and expand brand reach with powerful marketing strategies.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Card Component - Wider */}
          {[
            { icon: Users, title: "Micro-Influencer Expertise", description: "Reach niche audiences with high engagement through micro-influencer partnerships." },
            { icon: Target, title: "Tailored Campaigns", description: "Customized marketing strategies designed for your brand’s unique goals." },
            { icon: TrendingUp, title: "Diverse Network", description: "Access a broad network of influencers across various niches and platforms." },
            { icon: Handshake, title: "Seamless Collaboration", description: "Effortlessly connect with brands and manage campaigns in one place." },
            { icon: BarChart, title: "Data-Driven Insights", description: "Advanced analytics help optimize your campaigns for maximum results." },
            { icon: DollarSign, title: "Monetization & Authenticity", description: "Earn through brand partnerships while keeping your audience trust intact." },
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center max-w-lg mx-auto transition-all duration-300 hover:shadow-xl cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              <Icon size={50} className="text-orange-500 mb-3" />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-lg text-white leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default Home;
