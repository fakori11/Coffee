"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const coffeeItems = [
  {
    name: "Espresso",
    description: "Strong and concentrated Italian coffee",
    price: "15",
    image: "/espresso-coffee-cup.png",
    popular: true,
  },
  {
    name: "Cappuccino",
    description: "Espresso with steamed milk and thick foam",
    price: "20",
    image: "/cappuccino-coffee-latte-art.jpg",
    popular: true,
  },
  {
    name: "Latte",
    description: "Espresso with hot milk and light foam",
    price: "22",
    image: "/latte-coffee-cup.png",
    popular: false,
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water",
    price: "18",
    image: "/americano-black-coffee.jpg",
    popular: false,
  },
  {
    name: "Mocha",
    description: "Latte with dark chocolate",
    price: "25",
    image: "/mocha-chocolate-coffee.jpg",
    popular: true,
  },
  {
    name: "Arabic Coffee",
    description: "Traditional coffee with cardamom flavor",
    price: "12",
    image: "/arabic-coffee-traditional.jpg",
    popular: false,
  },
]

export default function CoffeeMenu() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30" id="coffee">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4">Coffee Menu</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose from a wide variety of the finest coffee types carefully prepared
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coffeeItems.map((item, index) => (
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
                  {item.popular && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Most Popular</Badge>
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
