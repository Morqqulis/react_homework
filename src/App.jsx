import About from '@sections/About'
import Faqs from '@sections/Faqs'
import Hero from '@sections/Hero'
import HowItWorks from '@sections/HowItWorks'
import Pricing from '@sections/Pricing'

const App = () => {
    return (
        <main className={`container`}>
            <Hero />
            <About />
            <HowItWorks />
            <Pricing />
            <Faqs />
        </main>
    )
}

export default App
