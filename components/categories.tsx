"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Coffee Mocha",
    image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800&q=80",
  },
  {
    name: "Espresso Americano",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
  },
  {
    name: "Cappuccino",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    name: "Latte",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
  },
  {
    name: "Turkish Coffee",
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80",
  },
  {
    name: "Cold Brew",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
  },
  {
    name: "Macchiato",
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=800&q=80",
  },

]

export default function Categories() {
  return (
    <section id="menu" className="py-20 bg-[#E5D4C1] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4">مستعد تجرب قهوة مختلفة؟</h2>
          <p className="text-[#6B5D52] text-lg">اكتشف مجموعتنا المميزة من أفضل أنواع القهوة</p>
        </motion.div>

        {/* Scrolling Categories - All Screens */}
        <div className="relative mb-12">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of categories */}
              {categories.map((category, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="relative group overflow-hidden rounded-2xl sm:rounded-3xl flex-shrink-0 
                             w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
                      {category.name}
                    </h3>
                    <Button
                      variant="secondary"
                      className="bg-white/90 text-[#4A3428] hover:bg-white rounded-full 
                                 px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:text-base"
                    >
                      View More
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {categories.map((category, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="relative group overflow-hidden rounded-2xl sm:rounded-3xl flex-shrink-0 
                             w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
                      {category.name}
                    </h3>
                    <Button
                      variant="secondary"
                      className="bg-white/90 text-[#4A3428] hover:bg-white rounded-full 
                                 px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:text-base"
                    >
                      View More
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
              {/* Third set for extra smooth loop on mobile */}
              {categories.map((category, index) => (
                <motion.div
                  key={`third-${index}`}
                  className="relative group overflow-hidden rounded-2xl sm:rounded-3xl flex-shrink-0 
                             w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
                      {category.name}
                    </h3>
                    <Button
                      variant="secondary"
                      className="bg-white/90 text-[#4A3428] hover:bg-white rounded-full 
                                 px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:text-base"
                    >
                      View More
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}