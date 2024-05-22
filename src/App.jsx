import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Faqs from './components/sections/Faqs'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'

const App = () => {
    return (
        <div className={`wrapper `}>
            <Header />
            <main className={`container`}>
                <Hero />
                <About />
                <HowItWorks />
                <Pricing />
                <Faqs />
            </main>
            <Footer />
        </div>
    )
}

export default App
