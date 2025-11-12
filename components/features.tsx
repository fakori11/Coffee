"use client"

import { motion, useScroll } from "framer-motion"
import { Cake, Sandwich, Cookie, IceCream } from "lucide-react"
import { useRef } from "react"

const desserts = [
  {
    icon: Cake,
    title: "Premium Cake",
    description: "Freshly baked cakes made daily with the finest ingredients",
    image: "/aa.mp4", // ← الفيديو الأول من مجلد public
  },
  {
    icon: Sandwich,
    title: "Delicious Donuts",
    description: "Crispy outside, fluffy inside waffles with various toppings",
    image: "/dd.mp4", // ← الفيديو الثاني من مجلد public
  },
  {
    icon: Cookie,
    title: "Golden Waffle",
    description: "Fresh donuts with chocolate, fruits and various flavors",
    image:
      "cc.gif",
  },
  {
    icon: IceCream,
    title: "Sweet Treats",
    description: "Wide variety of Eastern and Western desserts",
    image:
      "dd.gif",
  },
]

// دالة لتحديد إذا كان الرابط فيديو
const isVideo = (url = "") => /\.(mp4|webm|ogg)(\?|$)/i.test(url)

export default function Features() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#E5D4C1] to-[#F5EFE7] relative overflow-hidden"
    >
      {/* عناصر الخلفية المتحركة */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[#4A3428]/5 rounded-full blur-xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#4A3428]/5 rounded-full blur-xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Our Special Desserts
          </motion.h2>
          <motion.p
            className="text-[#6B5D52] text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Taste the finest fresh desserts prepared with love and care
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {desserts.map((dessert, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* صورة أو فيديو */}
              <div className="aspect-square relative overflow-hidden">
                {isVideo(dessert.image) ? (
                  <motion.video
                    key={`${dessert.title}-video`}
                    src={dessert.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.img
                    key={`${dessert.title}-img`}
                    src={dessert.image}
                    alt={dessert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* طبقة التدرج */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* المحتوى */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E5D4C1] mb-2 sm:mb-3 self-start relative"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(229, 212, 193, 0.7)",
                      "0 0 0 10px rgba(229, 212, 193, 0)",
                    ],
                  }}
                  style={{ animation: "pulse 2s infinite" }}
                >
                  <dessert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A3428]" />
                </motion.div>

                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {dessert.title}
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-white/90 leading-relaxed"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {dessert.description}
                </motion.p>
              </motion.div>

              {/* تأثير اللمعان */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(229, 212, 193, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(229, 212, 193, 0);
          }
        }
      `}</style>
    </section>
  )
}
