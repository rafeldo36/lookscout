
import { Hero, Features, LFeatures, RFeatures, Testimonials, Blog, Logosection, Calltoaction, Footer } from '@/components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="bg-white flex flex-col w-full" id="LandingPageRoot">
        <Features />
        <LFeatures />
        <RFeatures />
        <Testimonials />
        <Blog />
        <Logosection />
        <Calltoaction />
        <Footer />
      </div>
    </main>
  )
}
