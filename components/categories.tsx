"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Coffee Mocha",
    image: "/mocha-coffee-in-cup-top-view.jpg",
  },
  {
    name: "Espresso Americano",
    image: "/espresso-americano-coffee-in-cup-top-view.jpg",
  },
  {
    name: "Cappuccino",
    image: "/cappuccino-coffee-with-foam-art-top-view.jpg",
  },
]

export default function Categories() {
  return (
    <section id="menu" className="py-20 bg-[#E5D4C1] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4">مستعد تجرب قهوة مختلفة؟</h2>
          <p className="text-[#6B5D52] text-lg"> </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="relative group overflow-hidden rounded-3xl aspect-square"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px", amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 text-center">{category.name}</h3>
                <Button
                  variant="secondary"
                  className="bg-white/90 text-[#4A3428] hover:bg-white rounded-full px-6 sm:px-8"
                >
                  View More
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
