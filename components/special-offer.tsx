"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function SpecialOffer() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4A3428] via-[#5D4A3C] to-[#4A3428] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#C19A6B] rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-6 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Limited Time Offer</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-[#E5D4C1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Buy 2 Get 1 Free
          </motion.h2>

          <motion.p
            className="text-[#D4B896] text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            On all specialty coffee drinks this week only!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#C19A6B] text-[#4A3428] font-bold text-lg px-8 py-6 rounded-full"
            >
              Order Now
            </Button>
          </motion.div>

          <motion.p
            className="text-[#D4B896]/70 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Valid until end of this week. Terms and conditions apply.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
