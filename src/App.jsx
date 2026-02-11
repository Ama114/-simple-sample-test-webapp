import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomePage from './components/WelcomePage'
import LockScreen from './components/LockScreen'
import HeroSection from './components/HeroSection'
import MemoryLane from './components/MemoryLane'
import ReasonsCarousel from './components/ReasonsCarousel'
import FinalSurprise from './components/FinalSurprise'
import ContactSection from './components/ContactSection'

function App() {
    const [showWelcome, setShowWelcome] = useState(true)
    const [isUnlocked, setIsUnlocked] = useState(false)

    return (
        <div className="min-h-screen smooth-scroll">
            <AnimatePresence mode="wait">
                {showWelcome ? (
                    <WelcomePage key="welcome" onEnter={() => setShowWelcome(false)} />
                ) : !isUnlocked ? (
                    <LockScreen key="lock" onUnlock={() => setIsUnlocked(true)} />
                ) : (
                    <div key="content" className="w-full">
                        <HeroSection />
                        <MemoryLane />
                        <ReasonsCarousel />
                        <FinalSurprise />
                        <ContactSection />
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
