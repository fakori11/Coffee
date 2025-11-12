"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Coffee, Gift } from "lucide-react"

export default function SpecialOffer() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4A3428] via-[#5D4A3C] to-[#4A3428] relative overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#C19A6B] rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating coffee beans */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <Coffee className="w-full h-full text-[#D4AF37]" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with pulse animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-6 py-2 rounded-full mb-8 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            <span className="font-semibold">Limited Time Offer</span>
            
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 border-2 border-[#D4AF37] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Main heading with stagger effect */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-[#E5D4C1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(212, 175, 55, 0.3)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 10px rgba(212, 175, 55, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Buy 2 Get 1 Free
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-[#D4B896] text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            On all specialty coffee drinks this week only!
          </motion.p>

          {/* Animated gift icons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-[#D4AF37]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative"
            >
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#C19A6B] text-[#4A3428] font-bold text-lg px-8 py-6 rounded-full relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Order Now
                  <Gift className="w-5 h-5" />
                </motion.span>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />
              </Button>
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#D4AF37] blur-xl opacity-0 group-hover:opacity-30"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Footer text */}
          <motion.p
            className="text-[#D4B896]/70 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Valid until end of this week. Terms and conditions apply.
          </motion.p>
        </div>
      </div>
    </section>
  )
}