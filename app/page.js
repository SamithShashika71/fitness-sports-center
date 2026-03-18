import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import MembershipSection from './sections/MembershipSection'
import TrainersSection from './sections/TrainersSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}