"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"

const shakes = [
  {
    name: "Mocha Shake",
    price: "20,000 IQD",
    likes: "30 likes",
    image: "/green-matcha-milkshake-in-tall-glass-with-whipped-.jpg",
  },
  {
    name: "Lavender Shake",
    price: "20,000 IQD",
    likes: "30 likes",
    image: "/purple-lavender-milkshake-in-tall-glass-with-whipp.jpg",
  },
  {
    name: "Caramel Shake",
    price: "20,000 IQD",
    likes: "30 likes",
    image: "/brown-caramel-milkshake-in-tall-glass-with-whipped.jpg",
  },
  {
    name: "Vanilla Shake",
    price: "20,000 IQD",
    likes: "25 likes",
    image: "/white-vanilla-milkshake-in-tall-glass-with-whipped.jpg",
  },
  {
    name: "Strawberry Shake",
    price: "20,000 IQD",
    likes: "35 likes",
    image: "/pink-strawberry-milkshake-in-tall-glass-with-whipp.jpg",
  },
  {
    name: "Chocolate Shake",
    price: "22,000 IQD",
    likes: "40 likes",
    image: "/chocolate-milkshake-in-tall-glass.jpg",
  },
  {
    name: "Blueberry Shake",
    price: "21,000 IQD",
    likes: "28 likes",
    image: "/blueberry-milkshake-in-tall-glass.jpg",
  },
  {
    name: "Mango Shake",
    price: "21,000 IQD",
    likes: "32 likes",
    image: "/mango-milkshake-in-tall-glass.jpg",
  },
  {
    name: "Pistachio Shake",
    price: "23,000 IQD",
    likes: "27 likes",
    image: "/pistachio-milkshake-in-tall-glass.jpg",
  },
  {
    name: "Oreo Shake",
    price: "22,000 IQD",
    likes: "45 likes",
    image: "/oreo-cookies-milkshake-in-tall-glass.jpg",
  },
]

export default function Milkshakes() {
  return (
    <section className="py-20 bg-[#E5D4C1]">
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

        <div className="relative">
          <div
            className="flex gap-4 sm:gap-6 pb-6 overflow-x-auto snap-x snap-mandatory touch-pan-x"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#4A3428 #D4B896",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {shakes.map((shake, index) => (
              <motion.div
                key={`${shake.name}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-72 md:w-80 bg-[#D4B896]/50 rounded-3xl p-6 snap-center"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-20px", amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="w-4 h-4 text-[#6B5D52]" />
                  <span className="text-sm text-[#6B5D52]">{shake.likes}</span>
                </div>

                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={shake.image || "/placeholder.svg"}
                    alt={shake.name}
                    className="h-64 w-auto object-contain"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#4A3428] mb-4 text-center">{shake.name}</h3>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#4A3428]">{shake.price}</span>
                  <Button className="bg-[#4A3428] text-white hover:bg-[#6B5D52] rounded-full px-6">BUY NOW</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #D4B896;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: #4A3428;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #6B5D52;
        }
      `}</style>
    </section>
  )
}
