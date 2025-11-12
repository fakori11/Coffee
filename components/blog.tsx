"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, User, Coffee, BookOpen, ArrowRight, Sparkles } from "lucide-react"

const blogs = [
  {
    title: "The Art of Coffee Roasting",
    excerpt:
      "Discover the intricate process behind roasting the perfect coffee bean. From selecting premium beans to achieving the ideal roast profile, learn how we craft exceptional coffee.",
    image: "/person-holding-coffee-cup-in-cafe-warm-lighting.jpg",
    date: "March 15, 2024",
    author: "Ahmed Al-Basri",
  },
  {
    title: "Best Coffee Brewing Methods",
    excerpt:
      "Explore different brewing techniques that bring out unique flavors in your coffee. From French press to pour-over, find your perfect brewing method.",
    image: "/group-of-friends-enjoying-coffee-together-in-cafe.jpg",
    date: "March 12, 2024",
    author: "Sara Mohammed",
  },
  {
    title: "Coffee Culture in Baghdad",
    excerpt:
      "A journey through Baghdad's rich coffee heritage and how modern cafes are blending tradition with innovation to create unique experiences.",
    image: "/coffee-being-poured-barista-professional-cafe.jpg",
    date: "March 10, 2024",
    author: "Omar Hussein",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-[#E5D4C1] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#D4AF37] opacity-5"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#4A3428] opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating book icons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${15 + i * 25}%`,
            top: `${20 + (i % 2) * 50}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 5 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        >
          <BookOpen className="w-10 h-10 text-[#4A3428]" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animations */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated icon */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Coffee className="w-10 h-10 text-[#D4AF37]" />
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 0px rgba(212, 175, 55, 0)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 0px rgba(212, 175, 55, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              LATEST BLOGS
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-[#6B5D52] text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore The Latest Coffee Stories and Tips
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px", amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl"
                transition={{ duration: 0.4 }}
              />

              {/* Card */}
              <motion.div
                className="bg-[#D4B896]/50 rounded-3xl overflow-hidden relative backdrop-blur-sm border border-[#4A3428]/10"
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* New badge */}
                {index === 0 && (
                  <motion.div
                    className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-[#4A3428] px-3 py-1 rounded-full text-xs font-bold"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    // whileHover={{
                    //   duration: 1.5,
                    //   repeat: Number.POSITIVE_INFINITY,
                    // }}
                  >
                    NEW
                  </motion.div>
                )}

                {/* Image container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Image overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#4A3428]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Floating coffee icon on hover */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Coffee className="w-12 h-12 text-white drop-shadow-lg" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Decorative corner */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37] opacity-5 rounded-bl-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  />

                  {/* Meta info */}
                  <motion.div
                    className="flex items-center gap-4 mb-3 text-xs text-[#6B5D52]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  >
                    <motion.div
                      className="flex items-center gap-1"
                      whileHover={{ scale: 1.1, color: "#4A3428" }}
                    >
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1"
                      whileHover={{ scale: 1.1, color: "#4A3428" }}
                    >
                      <User className="w-3 h-3" />
                      <span>{blog.author}</span>
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-[#4A3428] mb-3 group-hover:text-[#D4AF37] transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                  >
                    {blog.title}
                  </motion.h3>

                  {/* Excerpt */}
                  <motion.p
                    className="text-[#6B5D52] text-sm mb-4 line-clamp-3 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                  >
                    {blog.excerpt}
                  </motion.p>

                  {/* Read more button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.7 }}
                  >
                    <Button
                      variant="link"
                      className="text-[#4A3428] p-0 h-auto font-semibold group/btn relative"
                    >
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        READ MORE
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.span>

                      {/* Underline animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-[#D4AF37]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-[#4A3428] hover:bg-[#5D4A3C] text-[#E5D4C1] px-8 py-6 rounded-full font-semibold relative overflow-hidden group"
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
                View All Blogs
                <BookOpen className="w-5 h-5" />
              </motion.span>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}