// Home.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

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
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [showInfluencerInfo, setShowInfluencerInfo] = useState(false);
  const navigate = useNavigate();

  const handleBrandClick = () => {
    console.log('Brand button clicked');
    navigate('/brand');
  };

  const handleInfluencerClick = () => {
    console.log('Influencer button clicked');
    navigate('/register');
  };

  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <motion.section
        className="relative bg-gradient-to-r from-purple-800 via-black to-purple-900 min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 className="text-6xl font-extrabold mb-4 text-orange-500" variants={fadeInUp}>
            PR Prabandhak
          </motion.h1>
          <motion.p className="text-2xl mb-8 text-gray-200 max-w-3xl mx-auto" variants={fadeInUp}>
            Transforming ideas into digital reality
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8"
            variants={fadeInUp}
          >
            <button
              onClick={handleBrandClick}
              className="border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300"
            >
              I&apos;m a Brand
            </button>
            <button
              onClick={handleInfluencerClick}
              className="border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300"
            >
              I&apos;m an Influencer
            </button>
          </motion.div>
        </div>
        {/* Decorative Shape for Hero Section */}
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
                At PR Prabandhak, we craft data-driven social media strategies tailored to each client's industry, audience, and goals. With deep market insights and a network of 1,000+ influencers, we deliver high-impact campaigns that maximize engagement and drive results.
              </p>
              {/* Toggle for additional info */}
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
                      Influencer marketing harnesses the power of trusted voices in the digital space. By partnering with influential personalities, brands can reach targeted audiences with authentic, engaging content. This strategy not only boosts brand awareness but also drives higher engagement and conversion rates. At PR Prabandhak, we strategically align your brand with influencers who embody your values, ensuring that your message resonates and creates a lasting impact.
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
        className="pb-20 bg-gradient-to-r from-orange-800 via-black to-purple-800"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400"
            variants={fadeInUp}
          >
            Services We Provide
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Our specialized services cater to businesses looking for a strong online presence, PR solutions, and branding strategies.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: '/src/assets/DigitalMarketing.jpg',
                title: 'Digital Marketing',
                desc: 'Boost your brand with SEO, PPC, social media campaigns, and targeted ads.',
              },
              {
                img: '/src/assets/PublicRelations.jpg',
                title: 'Public Relations',
                desc: 'Get featured in top media, press releases, and manage your brand reputation.',
              },
              {
                img: '/src/assets/Branding.jpg',
                title: 'Branding & Strategy',
                desc: 'From logo design to complete brand storytelling, we craft your unique identity.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveServiceIndex(index)}
                className={`relative bg-gray-800 rounded-lg p-8 text-center shadow-md transition-shadow cursor-pointer hover:shadow-orange-500 hover:shadow-md ${activeServiceIndex === index ? 'ring-2 ring-orange-500' : ''}`}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-orange-500"
                />
                <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Wave Divider: Services -> CTA */}
      <WaveDivider fillColor="#000" />

      {/* CALL-TO-ACTION SECTION */}
      <motion.section
        className="py-20 bg-gradient-to-r from-purple-800 via-black to-purple-900 text-white text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
        <p className="text-2xl mb-8">
          Partner with us today and take your business to the next level.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/choose-path"
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-400 transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
