"use client"

import { Coffee, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#E5D4C1]/95 backdrop-blur-sm border-b border-[#D4B896]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Coffee className="w-8 h-8 text-[#4A3428]" />
            <Image
              src="/download.png"
              alt="Some where"
              width={220}
              height={200}
              className="h-16 w-auto object-contain -ml-4"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#4A3428] hover:text-[#8B6F47] transition-colors font-medium">
              Home
            </a>
            <a href="#menu" className="text-[#4A3428] hover:text-[#8B6F47] transition-colors font-medium">
              Menu
            </a>
            <a href="#blog" className="text-[#4A3428] hover:text-[#8B6F47] transition-colors font-medium">
              Blog
            </a>
            <a href="#media" className="text-[#4A3428] hover:text-[#8B6F47] transition-colors font-medium">
              Media
            </a>
            <a href="#contact" className="text-[#4A3428] hover:text-[#8B6F47] transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Search Icon */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#4A3428] hover:bg-[#D4B896]">
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#4A3428]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-[#D4B896]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {["Home", "Menu", "Blog", "Media", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#4A3428] hover:text-[#8B6F47] transition-colors font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}