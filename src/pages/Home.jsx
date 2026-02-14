import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fff5f7] overflow-hidden">
        
        {/* Soft Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 animate-pulse" />
  
        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -40, 0] }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
              className="absolute text-pink-300"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%` 
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
  
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-pink-400 font-medium tracking-widest uppercase text-sm"
          >
            Something special is waiting...
          </motion.span>
  
          <h1 className="text-5xl md:text-7xl font-serif italic text-pink-600 mt-4 mb-8 drop-shadow-sm">
            A Gift Just For You
          </h1>
  
          <p className="text-gray-500 font-light max-w-md mx-auto mb-12 leading-relaxed">
            "Today is a day as beautiful as you are. I've prepared a little digital surprise to celebrate your special moment."
          </p>
  
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(244, 114, 182, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/BirthdayCake')}
            className="bg-white border-2 border-pink-200 text-pink-500 px-12 py-4 rounded-full font-bold text-lg transition-all hover:bg-pink-50 shadow-sm"
          >
            Open Your Surprise 🎀
          </motion.button>
        </motion.div>
  
        {/* Footer Decoration */}
        <div className="absolute bottom-10 text-pink-200 text-2xl space-x-4">
          <span>🌸</span>
          <span>💖</span>
          <span>🌸</span>
        </div>
      </div>
    );
  };


export default Home