import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ComparisonMarquee } from '../components/ComparisonMarquee'
import { AnimatedFeatures } from '../components/AnimatedFeatures'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

export function Landing() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ComparisonMarquee />
        <AnimatedFeatures />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
