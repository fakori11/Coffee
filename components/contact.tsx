"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5EFE7] to-[#E5D4C1] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#D4AF37] opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#4A3428] opacity-5"
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

      {/* Floating coffee cups */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-12 text-[#4A3428]">☕</div>
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
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#4A3428] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Visit Us
          </motion.h2>

          <motion.p
            className="text-[#6B5D52] text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Come experience the finest coffee in Baghdad
          </motion.p>
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
            {/* Location */}
            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                className="bg-[#4A3428] p-3 rounded-full relative"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 text-[#E5D4C1]" />
                
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#4A3428]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Location</h3>
                <p className="text-[#6B5D52] group-hover:text-[#4A3428] transition-colors">
                  Al-Karada District, Baghdad, Iraq
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                className="bg-[#4A3428] p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  },
                }}
              >
                <Phone className="w-6 h-6 text-[#E5D4C1]" />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Phone</h3>
                <motion.p
                  className="text-[#6B5D52] group-hover:text-[#4A3428] transition-colors"
                  dir="ltr"
                  whileHover={{ scale: 1.05 }}
                >
                  +964 770 123 4567
                </motion.p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                className="bg-[#4A3428] p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              >
                <Mail className="w-6 h-6 text-[#E5D4C1]" />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Email</h3>
                <motion.p
                  className="text-[#6B5D52] group-hover:text-[#4A3428] transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  info@coffeelovers.iq
                </motion.p>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 10 }}
            >
              <motion.div
                className="bg-[#4A3428] p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Clock className="w-6 h-6 text-[#E5D4C1]" />
              </motion.div>
              <div>
                <h3 className="font-bold text-[#4A3428] mb-2">Opening Hours</h3>
                <p className="text-[#6B5D52]">Monday - Sunday</p>
                <motion.p
                  className="text-[#6B5D52] font-semibold"
                  animate={{
                    color: ["#6B5D52", "#D4AF37", "#6B5D52"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  7:00 AM - 11:00 PM
                </motion.p>
              </div>
            </motion.div>

            {/* Quick action buttons */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-[#4A3428] text-[#4A3428] hover:bg-[#4A3428] hover:text-[#E5D4C1]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-[#4A3428] text-[#4A3428] hover:bg-[#4A3428] hover:text-[#E5D4C1]"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] rounded-3xl opacity-20 blur-2xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="bg-gradient-to-br from-[#D4B896] to-[#C19A6B] rounded-3xl overflow-hidden h-[400px] flex items-center justify-center relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated location pins in background */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                >
                  <MapPin className="w-8 h-8 text-[#4A3428] opacity-20" />
                </motion.div>
              ))}

              <div className="text-center p-8 relative z-10">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin className="w-16 h-16 text-[#4A3428] mx-auto mb-4" />
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-[#4A3428] mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Find Us
                </motion.h3>

                <motion.p
                  className="text-[#6B5D52] mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Al-Karada District, Baghdad
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#4A3428] hover:bg-[#5D4A3C] text-[#E5D4C1] relative overflow-hidden group">
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
                      <Navigation className="w-4 h-4" />
                      Get Directions
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

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 border-2 border-[#4A3428] rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-16 h-16 border-2 border-[#4A3428] rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}