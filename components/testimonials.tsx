"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

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
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5D4C1] mb-4">What Our Customers Say</h2>
          <p className="text-[#D4B896] text-lg">Real experiences from our valued customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#5D4A3C] rounded-2xl p-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-[#E5D4C1] mb-6 text-sm leading-relaxed">{testimonial.comment}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-bold text-[#E5D4C1]">{testimonial.name}</h4>
                  <p className="text-[#D4B896] text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
