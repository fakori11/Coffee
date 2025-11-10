"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image - logo2 */}
      <div className="absolute inset-0">
        <Image
          src="/logo.jpg"
          alt="Background"
          fill
          className="object-cover object-center sm:object-cover"
          priority
        />
        {/* Optional: Add overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Steam Effect from Cup (Left Side) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Steam Wisps */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            className="absolute w-8 h-16 sm:w-12 sm:h-24 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-xl"
            style={{
              left: `${5 + i * 3}%`, // Position on left side where cup is
              bottom: `${30 + i * 2}%`, // Start from cup position
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, (i % 2 === 0 ? 20 : -20), (i % 2 === 0 ? -15 : 15), 0],
              opacity: [0, 0.8, 0.6, 0],
              scale: [0.8, 1.2, 1.5, 2],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Additional Small Steam Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-4 h-8 sm:w-6 sm:h-12 bg-gradient-to-t from-white/30 to-transparent rounded-full blur-lg"
            style={{
              left: `${3 + i * 2}%`, // Spread around cup area
              bottom: `${28 + i * 3}%`,
            }}
            animate={{
              y: [0, -80, -160, -240],
              x: [0, (i % 3 === 0 ? 15 : i % 3 === 1 ? -15 : 5), (i % 2 === 0 ? -10 : 10), 0],
              opacity: [0, 0.7, 0.4, 0],
              scale: [0.6, 1, 1.4, 1.8],
            }}
            transition={{
              duration: 3.5 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Large Floating Steam Clouds */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute w-16 h-32 sm:w-20 sm:h-40 bg-gradient-to-t from-white/25 via-white/15 to-transparent rounded-full blur-2xl"
            style={{
              left: `${8 + i * 4}%`,
              bottom: `${35 + i * 5}%`,
            }}
            animate={{
              y: [0, -150, -300],
              x: [0, (i % 2 === 0 ? 25 : -25), (i % 2 === 0 ? -20 : 20)],
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 2.2],
            }}
            transition={{
              duration: 5 + i * 0.6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content - Empty Space for Background Image */}
          <div className="hidden lg:block" />

          {/* Right Content - Text with Animation */}
          <motion.div
            className="text-end lg:text-right space-y-4 sm:space-y-6 py-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-[#E5D4C1] text-xs sm:text-sm uppercase tracking-wider"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
      Freshly Roasted
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E5D4C1] leading-tight"
              initial={{ opacity: 0, y: 30, x: 30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
                    Coffee

            </motion.h1>

    

          
          </motion.div>
        </div>
      </div>

      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#E5D4C1"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}