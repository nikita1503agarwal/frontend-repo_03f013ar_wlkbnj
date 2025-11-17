import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ApiSection from './components/ApiSection'
import Checker from './components/Checker'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ApiSection />
        <Checker />
      </main>
      <Footer />
    </div>
  )
}

export default App
