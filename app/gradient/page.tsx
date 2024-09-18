'use client';

import { AnimatedGradient } from '@/lib/supabase_db/AnimatedGradient';
import { motion } from 'framer-motion';

export default function GradientTestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <AnimatedGradient className="w-full max-w-[800px] h-[600px] flex items-center justify-center rounded-lg shadow-2xl overflow-hidden">
        <motion.h1 
          className="text-5xl font-bold text-white text-center"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.8, 1, 0.8],
            rotate: [-1, 1, -1]
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        >
          Dynamic Gradient
        </motion.h1>
      </AnimatedGradient>
    </div>
  );
}