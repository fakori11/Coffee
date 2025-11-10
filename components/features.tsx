"use client"

import { motion } from "framer-motion"
import { Coffee, Award, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "Sourced from the finest coffee farms around the world",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in taste and quality",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Roasted fresh every morning for the perfect cup",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Crafted by passionate baristas who care about every detail",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E5D4C1] to-[#F5EFE7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4">Why Choose Us</h2>
          <p className="text-[#6B5D52] text-lg max-w-2xl mx-auto">
            We pride ourselves on delivering the finest coffee experience in Baghdad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#4A3428] mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-10 h-10 text-[#E5D4C1]" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#4A3428] mb-3">{feature.title}</h3>
              <p className="text-[#6B5D52]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
