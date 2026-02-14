import React from 'react';
import { motion } from 'framer-motion';

// 1. استيراد الصور من فولدر assets (تأكد من الأسماء والامتدادات صح)
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const Memories = () => {
  // 2. تحديث المصفوفة بالصور المستوردة
  const photos = [
    { id: 1, url: photo1, rotation: -5, x: -100, y: -50 },
    { id: 2, url: photo2, rotation: 8, x: 100, y: -70 },
    { id: 3, url: photo3, rotation: -12, x: -120, y: 100 },
    { id: 4, url: photo4, rotation: 5, x: 120, y: 120 },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fdfcf0] overflow-hidden p-6">
      
      {/* زينة فرع النور (Fairy Lights) */}
      <div className="absolute top-0 left-0 w-full flex justify-around p-4 z-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="w-3 h-3 bg-yellow-200 rounded-full shadow-[0_0_10px_#fef08a]"
          />
        ))}
        <div className="absolute top-5 left-0 w-full h-[1px] bg-gray-300 -z-10" />
      </div>

      {/* عنوان الحيطة */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-16 text-center z-10"
      >
        <h2 className="font-serif italic text-3xl text-stone-600">Our Gallery of Happiness</h2>
      </motion.div>

      {/* حيطة الصور */}
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: photo.rotation,
              x: photo.x,
              y: photo.y 
            }}
            transition={{ duration: 0.8, delay: index * 0.3, type: "spring" }}
            whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
            className="absolute bg-white p-3 pb-12 shadow-2xl border border-stone-100 cursor-pointer group"
          >
            <div className="w-48 h-60 overflow-hidden bg-gray-100">
              <img 
                src={photo.url} 
                alt={`Memory ${photo.id}`} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            {/* لزقة الورق (Tape) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-pink-100/70 rotate-[-2deg] shadow-sm border border-white/50 backdrop-blur-[2px]" />
          </motion.div>
        ))}
      </div>

      {/* الرسالة الختامية */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 text-center z-10"
      >
        <p className="font-serif text-2xl text-pink-500 italic">
          "One of the best memories we've ever shared..."
        </p>
      </motion.div>

    </div>
  );
};

export default Memories;