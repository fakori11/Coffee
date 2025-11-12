"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Products */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-4">Products</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Drinks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Weekly picks
                </a>
              </li>
            </ul>
          </div>

          {/* Category */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-4">Category</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Man
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Weekly picks
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-4">Company Info</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Payment options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Vouchers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Site Charts
                </a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-4">Follow us</h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
               <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
               <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-sm text-gray-400">Contact us:</p>
              <p className="text-xs sm:text-sm text-white" dir="ltr">
                +964 770 123 4567
              </p>
              <p className="text-xs sm:text-sm text-gray-400">info@coffelovers.iq</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Data settings
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie settings
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms And Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


