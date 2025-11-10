"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const dessertItems = [
  {
    name: "Cheesecake",
    description: "Creamy cheesecake with berry sauce",
    price: "28",
    image: "/cheesecake-dessert.jpg",
    special: true,
  },
  {
    name: "Brownie",
    description: "Warm chocolate brownie with ice cream",
    price: "22",
    image: "/chocolate-brownie-ice-cream.jpg",
    special: false,
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee",
    price: "30",
    image: "/classic-tiramisu.png",
    special: true,
  },
  {
    name: "Croissant",
    description: "Fresh French butter croissant",
    price: "15",
    image: "/fresh-butter-croissant.png",
    special: false,
  },
  {
    name: "Cookies",
    description: "Fresh and crispy chocolate cookies",
    price: "12",
    image: "/chocolate-chip-cookies.png",
    special: false,
  },
  {
    name: "Kunafa",
    description: "Middle Eastern dessert with cheese and cream",
    price: "25",
    image: "/kunafa-middle-eastern-dessert.jpg",
    special: true,
  },
]

export default function DessertsMenu() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="desserts">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4">Desserts Menu</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Delicious desserts to complete your coffee experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dessertItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.special && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Special</Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl sm:text-2xl">{item.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{item.price} IQD</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
