'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  children: React.ReactNode;
}

const BlurredCircle: React.FC<{ size: number; top: string; left: string; delay: number }> = ({ size, top, left, delay }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      top,
      left,
      background: 'rgba(255, 255, 255, 0.4)',
      filter: 'blur(50px)',
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      delay,
    }}
  />
);

const Particle: React.FC<{ size: number }> = ({ size }) => {
  const angle = Math.random() * Math.PI * 2;
  const radius = 100 + Math.random() * 100;
  const duration = 10 + Math.random() * 20;

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
      }}
      animate={{
        x: [Math.cos(angle) * radius, Math.cos(angle + Math.PI) * radius],
        y: [Math.sin(angle) * radius, Math.sin(angle + Math.PI) * radius],
        opacity: [0, 1, 0],
        filter: 'blur(100px)'

      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: 'linear',
        filter: 'blur(1000px)',

      }}
    />
  );
};

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '', children }) => {
  const particlesRef = useRef<JSX.Element[]>([]);

  useEffect(() => {
    particlesRef.current = Array.from({ length: 20 }, (_, i) => (
      <Particle key={i} size={1 + Math.random() * 3} />
    ));
  }, []);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      animate={{
        background: [
          'linear-gradient(306deg, #1e90ff 0%, #007bff 33%, #007fff 66%, #1e90ff 100%)',
          'linear-gradient(306deg, #007bff 0%, #007fff 33%, #1e90ff 66%, #007bff 100%)',
          'linear-gradient(306deg, #007fff 0%, #1e90ff 33%, #007bff 66%, #007fff 100%)',
        ],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.35, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.35)',
        }}
      />
      <BlurredCircle size={300} top="-5%" left="-5%" delay={0} />
      <BlurredCircle size={200} top="50%" left="80%" delay={2} />
      <BlurredCircle size={250} top="80%" left="10%" delay={4} />
      {particlesRef.current}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};