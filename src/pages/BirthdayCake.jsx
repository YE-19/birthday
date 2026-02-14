import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom'; // 1. استدعاء الـ Hook الخاص بالتنقل

// Decorative Garland Component
const Garland = () => (
  <div className="absolute top-0 left-0 w-full flex justify-around pointer-events-none overflow-hidden h-32 z-20">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -50, rotate: -10 }}
        animate={{ y: 0, rotate: i % 2 === 0 ? 10 : -10 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: i * 0.1,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2
        }}
        className="w-8 h-12 bg-pink-400 shadow-md shadow-pink-200"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} 
      />
    ))}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-pink-200/50" />
  </div>
);

const GirlyBirthdayCake = () => {
  const [isLit, setIsLit] = useState(true);
  const navigate = useNavigate(); // 2. تعريف الـ navigate

  const handleSurprise = () => {
    setIsLit(false);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffb7c5', '#ffffff', '#ffd700', '#f472b6']
    });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-rose-50 to-pink-100 overflow-hidden font-sans">
      
      <Garland />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${Math.random() * 100}vw` }}
            animate={{ y: '-10vh' }}
            transition={{ 
              duration: 12 + Math.random() * 8, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5 
            }}
            className="absolute opacity-20 text-4xl"
          >
            {i % 2 === 0 ? '🎈' : '🌸'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center mt-20 px-4">
        <div className="relative flex flex-col items-center mb-[-4px] z-50">
          <AnimatePresence>
            {isLit && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1.2, y: [0, -5, 0] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ y: { repeat: Infinity, duration: 0.6 } }}
                className="w-5 h-8 bg-pink-400 rounded-full blur-[2px] shadow-lg shadow-pink-300 absolute -top-10"
                style={{ background: 'radial-gradient(circle, #fff 10%, #f472b6 100%)' }}
              />
            )}
          </AnimatePresence>
          <div className="w-3 h-12 bg-white border-x-2 border-pink-100 rounded-t-sm" />
        </div>

        <div className="w-40 h-16 bg-pink-200 rounded-t-2xl shadow-inner relative z-30 border-b-2 border-pink-300">
          <div className="absolute -bottom-2 flex w-full justify-around">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-6 bg-white rounded-full -mt-2 shadow-sm" />
            ))}
          </div>
        </div>

        <div className="w-56 h-20 bg-pink-300 rounded-t-3xl shadow-inner -mt-2 relative z-20 border-b-4 border-pink-400">
           <div className="flex justify-center items-center h-full gap-2 opacity-50">
             <span className="text-white">✨</span>
             <span className="text-white">✨</span>
             <span className="text-white">✨</span>
           </div>
        </div>

        <div className="w-72 h-28 bg-pink-400 rounded-t-[2.5rem] shadow-2xl -mt-2 relative z-10 border-b-8 border-pink-500">
          <div className="absolute inset-0 flex items-center justify-around opacity-30">
             <div className="w-4 h-4 bg-white rounded-full" />
             <div className="w-4 h-4 bg-white rounded-full" />
             <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>

        <div className="w-80 h-4 bg-white/90 rounded-full -mt-2 shadow-xl border-b-4 border-gray-200" />
      </div>

      <div className="mt-16 text-center z-20 flex flex-col items-center">
        <motion.h2 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-3xl font-serif italic text-pink-600 mb-8 drop-shadow-sm"
        >
          {isLit ? "Make a wish, Princess..." : "Happy Birthday, Beautiful! 🎂"}
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isLit ? handleSurprise : () => setIsLit(true)}
          className={`px-14 py-4 rounded-full font-bold text-xl text-white transition-all shadow-xl shadow-pink-200 ${
            isLit ? 'bg-pink-400 hover:bg-pink-500' : 'bg-rose-400 hover:bg-rose-500'
          }`}
        >
          {isLit ? 'Blow the Candle 🌸' : 'Light it Again ✨'}
        </motion.button>

        {/* 3. الزرار الجديد اللي هيظهر بعد ما الشمعة تطفي */}
        <AnimatePresence>
          {!isLit && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }} // هيظهر بعد ثانية من طفي الشمعة
              onClick={() => navigate('/letter')}
              className="mt-6 text-pink-500 font-medium underline underline-offset-8 decoration-pink-300 hover:text-pink-600 transition-colors"
            >
              You have a secret letter! Click to read 💌
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default GirlyBirthdayCake;