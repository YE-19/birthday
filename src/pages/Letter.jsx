import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#fffafa] overflow-hidden p-4">
      
      {/* 1. تأثيرات الخلفية الناعمة */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* --- المرحلة الأولى: الظرف المغلق --- */
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsOpen(true)}
            className="relative z-10 cursor-pointer group"
          >
            {/* جسم الظرف */}
            <div className="relative w-80 h-56 bg-pink-200 rounded-b-2xl shadow-2xl border-b-4 border-pink-300">
              {/* الغطاء العلوي */}
              <div 
                className="absolute top-0 left-0 w-full h-1/2 bg-pink-300 z-30 shadow-sm"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
              {/* تفاصيل الظرف الجانبية */}
              <div className="absolute inset-0 z-20 overflow-hidden rounded-b-2xl">
                <div className="absolute left-0 bottom-0 w-full h-full bg-pink-200 border-t border-pink-100"
                     style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }} />
              </div>
              {/* الختم (القلب) */}
              <div className="absolute inset-0 flex items-center justify-center z-40 transition-transform group-hover:scale-110">
                <div className="bg-white p-4 rounded-full shadow-lg border border-pink-50">
                  <span className="text-3xl animate-pulse">💖</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center text-pink-400 font-serif italic tracking-widest animate-bounce">
              Click to open your letter
            </p>
          </motion.div>
        ) : (
          /* --- المرحلة الثانية: الورقة فقط (بعد الفتح) --- */
          <motion.div
            key="paper"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative z-50 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl p-8 md:p-16 w-full max-w-2xl border-t-[12px] border-pink-400"
          >
            {/* محتوى الجواب */}
            <div className="font-serif text-gray-700 italic space-y-6">
              <h3 className="text-3xl text-pink-500 font-bold mb-8">To my favorite person,</h3>
              
              <div className="space-y-4 text-xl leading-relaxed text-gray-600">
                <p>
                  I wanted to take a moment on your special day to tell you how much you mean to me. 
                  You bring so much joy and light into my life every single day.
                </p>
                <p>
                  May this year be filled with laughter, love, and all the magic you deserve. 
                  Always remember how special and loved you are.
                </p>
              </div>

              {/* التوقيع */}
              <div className="pt-12 text-right border-t border-pink-50">
                <span className="block text-xs text-gray-400 not-italic uppercase tracking-[0.3em] mb-2">With all my love,</span>
                <span className="text-3xl text-pink-500 font-bold">Youssef ✨</span>
              </div>

              {/* الزرار للصفحة اللي بعدها */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="pt-10 flex justify-center"
              >
                <button
                  onClick={() => navigate('/memories')} 
                  className="group relative flex items-center gap-3 bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-pink-600 transition-all hover:gap-5"
                >
                  See the next surprise
                  <span className="text-xl">→</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Letter;