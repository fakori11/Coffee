"use client"

import { Clock, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">About Our Café</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer the finest types of coffee roasted daily with a wide variety of fresh desserts. Our café is the
              perfect place to enjoy your time with friends and family in a warm and comfortable atmosphere.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use premium coffee beans from the best farms around the world, and we ensure an exceptional experience
              in every cup.
            </p>

            <div className="space-y-4 pt-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-primary p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Saturday - Thursday: 7 AM - 12 Midnight</p>
                  <p className="text-muted-foreground">Friday: 2 PM - 12 Midnight</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-primary p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Baghdad, Al-Karada, Iraq</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground" dir="ltr">
                    +964 770 123 4567
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/cozy-coffee-shop.png" alt="Coffee shop" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
