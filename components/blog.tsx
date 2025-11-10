"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"

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
    <section id="blog" className="py-20 bg-[#E5D4C1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4">LATEST BLOGS</h2>
          <p className="text-[#6B5D52] text-lg">Explore The Latest Coffee Stories and Tips</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-[#D4B896]/50 rounded-3xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px", amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(74, 52, 40, 0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-[#6B5D52]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4A3428] mb-3">{blog.title}</h3>
                <p className="text-[#6B5D52] text-sm mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                <Button
                  variant="link"
                  className="text-[#4A3428] p-0 h-auto font-semibold group-hover:text-[#8B6F47] transition-colors"
                >
                  READ MORE →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
