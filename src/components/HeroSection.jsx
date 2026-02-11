import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Volume2, VolumeX } from 'lucide-react'

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('')
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)

    const fullText = "Happy Valentine's Day, My Love!"

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    const floatingHearts = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: i * 0.3,
        x: Math.random() * 100,
        duration: 3 + Math.random() * 2,
    }))

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
        >
            {/* Floating hearts background */}
            {floatingHearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute"
                    style={{ left: `${heart.x}%` }}
                    initial={{ y: '100vh', opacity: 0 }}
                    animate={{
                        y: '-100vh',
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-romantic-pink/40" fill="currentColor" />
                </motion.div>
            ))}

            {/* Floating sparkles */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="absolute"
                    style={{
                        left: `${10 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-romantic-purple/30" />
                </motion.div>
            ))}

            {/* Flower bouquet background image with transparency */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80')`,
                        opacity: 0.12,
                        filter: 'blur(3px) saturate(1.2)',
                        mixBlendMode: 'lighten',
                    }}
                />
            </motion.div>

            <div className="relative z-10 text-center max-w-4xl">
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-handwritten mb-6 text-gradient"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {displayText}
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        |
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-lg md:text-2xl text-romantic-light/80 font-light mb-8"
                >
                    You're my Valentine today and always, Sweetheart 💝
                </motion.p>

                {/* Music toggle button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                    className="glass-button p-4 rounded-full"
                >
                    {isMusicPlaying ? (
                        <Volume2 className="w-6 h-6 text-romantic-purple" />
                    ) : (
                        <VolumeX className="w-6 h-6 text-romantic-purple" />
                    )}
                </motion.button>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-romantic-purple/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-romantic-purple rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HeroSection
