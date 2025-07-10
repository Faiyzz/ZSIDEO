import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
"use client"

import LoadingScreen from "../components/LoadingScreen"
import { useState, useEffect } from "react"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time for assets and 3D models
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setShowContent(true)
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
      {showContent && (
        <main className="w-full overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <About />
          <Services />
          <Testimonials />
          <Footer />
        </main>
      )}
    </>
  )
}