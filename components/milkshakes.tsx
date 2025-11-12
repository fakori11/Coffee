"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"
import { useState } from "react"

const shakes = [
  {
    name: "Mocha Shake",
    price: "20,000 IQD",
    likes: "30 likes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
  },
  {
    name: "Lavender Shake",
    price: "20,000 IQD",
    likes: "30 likes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
  },
  {
    name: "Caramel Shake",
    price: "20,000 IQD",
    likes: "30 likes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
  },
  {
    name: "Vanilla Shake",
    price: "20,000 IQD",
    likes: "25 likes",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80",
  },
  {
    name: "Strawberry Shake",
    price: "20,000 IQD",
    likes: "35 likes",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&q=80",
  },
  {
    name: "Chocolate Shake",
    price: "22,000 IQD",
    likes: "40 likes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
  },
  {
    name: "Blueberry Shake",
    price: "21,000 IQD",
    likes: "28 likes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
  },
  {
    name: "Mango Shake",
    price: "21,000 IQD",
    likes: "32 likes",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80",
  },
  {
    name: "Pistachio Shake",
    price: "23,000 IQD",
    likes: "27 likes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
  },
  {
    name: "Oreo Shake",
    price: "22,000 IQD",
    likes: "45 likes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
  },
]

export default function Milkshakes() {
  const [isPaused, setIsPaused] = useState(false)

  const handleTouchStart = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsPaused(true)
  }

  const handleTouchEnd = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsPaused(false)
  }

  const handleTouchMove = () => {
    // Keep paused while touching and moving
    setIsPaused(true)
  }

  return (
    <section className="py-20 bg-[#E5D4C1] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4">TOP MILK SHAKES</h2>
          <p className="text-[#6B5D52] text-lg">Explore The Recent Most Bought Shakes This Week</p>
        </motion.div>

        {/* Auto-scrolling Animation with Pause on Hover/Touch */}
        <div 
          className="relative touch-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchCancel={() => setIsPaused(false)}
        >
          <div className="flex overflow-hidden pointer-events-auto">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: isPaused ? undefined : [-2800, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {shakes.map((shake, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-72 md:w-80 bg-[#D4B896]/50 rounded-3xl p-6 pointer-events-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-20px", amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                    setIsPaused(true)
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation()
                    setIsPaused(false)
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ThumbsUp className="w-4 h-4 text-[#6B5D52]" />
                    <span className="text-sm text-[#6B5D52]">{shake.likes}</span>
                  </div>

                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={shake.image}
                      alt={shake.name}
                      className="h-64 w-auto object-contain"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#4A3428] mb-4 text-center">{shake.name}</h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#4A3428]">{shake.price}</span>
                    <Button className="bg-[#4A3428] text-white hover:bg-[#6B5D52] rounded-full px-6">
                      BUY NOW
                    </Button>
                  </div>
                </motion.div>
              ))}

              {/* Second set for seamless loop */}
              {shakes.map((shake, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-72 md:w-80 bg-[#D4B896]/50 rounded-3xl p-6 pointer-events-auto"
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                    setIsPaused(true)
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation()
                    setIsPaused(false)
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ThumbsUp className="w-4 h-4 text-[#6B5D52]" />
                    <span className="text-sm text-[#6B5D52]">{shake.likes}</span>
                  </div>

                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={shake.image}
                      alt={shake.name}
                      className="h-64 w-auto object-contain"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#4A3428] mb-4 text-center">{shake.name}</h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#4A3428]">{shake.price}</span>
                    <Button className="bg-[#4A3428] text-white hover:bg-[#6B5D52] rounded-full px-6">
                      BUY NOW
                    </Button>
                  </div>
                </motion.div>
              ))}

              {/* Third set for extra smooth loop */}
              {shakes.map((shake, index) => (
                <motion.div
                  key={`third-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-72 md:w-80 bg-[#D4B896]/50 rounded-3xl p-6 pointer-events-auto"
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                    setIsPaused(true)
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation()
                    setIsPaused(false)
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ThumbsUp className="w-4 h-4 text-[#6B5D52]" />
                    <span className="text-sm text-[#6B5D52]">{shake.likes}</span>
                  </div>

                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={shake.image}
                      alt={shake.name}
                      className="h-64 w-auto object-contain"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#4A3428] mb-4 text-center">{shake.name}</h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#4A3428]">{shake.price}</span>
                    <Button className="bg-[#4A3428] text-white hover:bg-[#6B5D52] rounded-full px-6">
                      BUY NOW
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}