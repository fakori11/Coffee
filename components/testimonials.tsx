"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al-Basri",
    location: "Baghdad",
    rating: 5,
    comment: "The best coffee in Baghdad! The atmosphere is cozy and the staff is incredibly friendly.",
    image: "/iraqi-man-smiling.jpg",
  },
  {
    name: "Sara Mohammed",
    location: "Al-Karada",
    rating: 5,
    comment: "I come here every morning for my latte. The quality is consistently excellent!",
    image: "/iraqi-woman-smiling.jpg",
  },
  {
    name: "Omar Hussein",
    location: "Mansour",
    rating: 5,
    comment: "Their Arabic coffee is authentic and delicious. Highly recommend the baklava too!",
    image: "/iraqi-man-happy.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#4A3428] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] opacity-30" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Quote className="w-12 h-12 text-[#D4AF37] opacity-30" />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#E5D4C1] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Customers Say
          </motion.h2>
          
          <motion.p
            className="text-[#D4B896] text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real experiences from our valued customers
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl"
                transition={{ duration: 0.4 }}
              />
              
              {/* Card */}
              <motion.div
                className="bg-[#5D4A3C] rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Decorative corner */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37] opacity-10 rounded-bl-full"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                />

                {/* Quote icon */}
                <motion.div
                  className="absolute top-6 left-6 opacity-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  <Quote className="w-16 h-16 text-[#D4AF37]" />
                </motion.div>

                {/* Stars with stagger animation */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.15 + i * 0.1 
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: 20,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    </motion.div>
                  ))}
                </div>

                {/* Comment with fade in */}
                <motion.p
                  className="text-[#E5D4C1] mb-6 text-sm leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                >
                  "{testimonial.comment}"
                </motion.p>

                {/* User info */}
                <motion.div
                  className="flex items-center gap-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                >
                  {/* Avatar with border animation */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute -inset-1 rounded-full border-2 border-[#D4AF37]"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-[#D4AF37] relative z-10"
                    />
                  </motion.div>

                  <div>
                    <motion.h4
                      className="font-bold text-[#E5D4C1]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      className="text-[#D4B896] text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                    >
                      {testimonial.location}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}