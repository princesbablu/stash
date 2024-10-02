import Header from '../components/home/Header.tsx'
import Banner from '../components/home/Banner.tsx'
import Price from '../components/home/Price.tsx'
import EcoSystem from '../components/home/EcoSystem.tsx'
import Service from '../components/home/Service.tsx'
import Built from '../components/home/Built.tsx'
import Cta from '../components/home/Cta.tsx'
import Footer from '../components/home/Footer.tsx'

export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Price />
        <EcoSystem />
        <Service />
        <Built />
        <Cta />
        <Footer />
    </div>
  )
}
