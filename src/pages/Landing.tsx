import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { AnimatedFeatures } from '../components/AnimatedFeatures'
import { HowItWorks } from '../components/HowItWorks'
import { Pricing } from '../components/Pricing'
import { FAQ } from '../components/FAQ'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

export function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimatedFeatures />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
