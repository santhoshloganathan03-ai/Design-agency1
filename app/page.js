import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  return (
    <>
      <LoadingSpinner />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
