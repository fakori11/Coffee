import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import Features from "@/components/features"
import Milkshakes from "@/components/milkshakes"
import SpecialOffer from "@/components/special-offer"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <Features />
      <Milkshakes />
      <SpecialOffer />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
