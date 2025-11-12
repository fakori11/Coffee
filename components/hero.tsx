"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
// خط عربي جميل عبر next/font (يدعم العربية بالكامل)
import { Tajawal } from "next/font/google"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
})

export default function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className={`${tajawal.className} relative min-h-screen flex items-center justify-center overflow-hidden pt-20`}
      aria-label="القسم التعريفي"
    >
      {/* Background Image - logo2 */}
      <div className="absolute inset-0">
        <Image
          src="/logo.jpg"
          alt="خلفية مقهى"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay لتحسين قابلية القراءة */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Steam Effect from Cup (Left Side) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            className="absolute w-8 h-16 sm:w-12 sm:h-24 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-xl"
            style={{ left: `${5 + i * 3}%`, bottom: `${30 + i * 2}%` }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, i % 2 === 0 ? 20 : -20, i % 2 === 0 ? -15 : 15, 0],
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

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-4 h-8 sm:w-6 sm:h-12 bg-gradient-to-t from-white/30 to-transparent rounded-full blur-lg"
            style={{ left: `${3 + i * 2}%`, bottom: `${28 + i * 3}%` }}
            animate={{
              y: [0, -80, -160, -240],
              x: [0, i % 3 === 0 ? 15 : i % 3 === 1 ? -15 : 5, i % 2 === 0 ? -10 : 10, 0],
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

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute w-16 h-32 sm:w-20 sm:h-40 bg-gradient-to-t from-white/25 via-white/15 to-transparent rounded-full blur-2xl"
            style={{ left: `${8 + i * 4}%`, bottom: `${35 + i * 5}%` }}
            animate={{
              y: [0, -150, -300],
              x: [0, i % 2 === 0 ? 25 : -25, i % 2 === 0 ? -20 : 20],
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex items-center justify-start min-h-[calc(100vh-10rem)] w-full">
          
          {/* النص - محاذاة أقصى اليمين */}
          <motion.div
            className="text-right space-y-3 sm:space-y-4 md:space-y-5 py-8 
                       w-full lg:w-1/2 lg:ml-auto
                       pr-4 sm:pr-6 md:pr-10 lg:pr-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* العنوان الرئيسي */}
            <motion.h1
              className="font-extrabold text-[#E5D4C1] leading-[1.1] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] 
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 30, x: 30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              القهوة
            </motion.h1>

            {/* وصف قصير - سطرين على الموبايل */}
            <motion.p
              className="text-[#F3E9DE] leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                         text-base sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              لكل رشفة حكاية، ولكل فنجان مزاج.{" "}
              <span className="block sm:inline">اترك لدفء القهوة أن يعيد ترتيب هدوئك.</span>
            </motion.p>

            {/* (اختياري) زر دعوة لاتخاذ إجراء */}
            {/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="pt-2"
            >
              <Button className="rounded-2xl px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg md:text-xl bg-[#E5D4C1] text-stone-900 hover:bg-[#e1cbb3] transition-all duration-300">
                اكتشف قائمتنا
              </Button>
            </motion.div>
            */}
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
          />
        </svg>
      </div>
    </section>
  )
}