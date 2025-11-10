"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5EFE7] to-[#E5D4C1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4">Visit Us</h2>
          <p className="text-[#6B5D52] text-lg">Come experience the finest coffee in Baghdad</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#4A3428] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#E5D4C1]" />
              </div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Location</h3>
                <p className="text-[#6B5D52]">Al-Karada District, Baghdad, Iraq</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#4A3428] p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#E5D4C1]" />
              </div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Phone</h3>
                <p className="text-[#6B5D52]" dir="ltr">
                  +964 770 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#4A3428] p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#E5D4C1]" />
              </div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Email</h3>
                <p className="text-[#6B5D52]">info@coffeelovers.iq</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#4A3428] p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#E5D4C1]" />
              </div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Opening Hours</h3>
                <p className="text-[#6B5D52]">Monday - Sunday</p>
                <p className="text-[#6B5D52]">7:00 AM - 11:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className="bg-[#D4B896] rounded-3xl overflow-hidden h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-[#4A3428] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#4A3428] mb-2">Find Us</h3>
              <p className="text-[#6B5D52] mb-4">Al-Karada District, Baghdad</p>
              <Button className="bg-[#4A3428] hover:bg-[#5D4A3C] text-[#E5D4C1]">Get Directions</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
