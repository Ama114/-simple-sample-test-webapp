import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

import memory6 from '../assets/memory6.jpg'
import memory7 from '../assets/memory7.jpg'
import memory8 from '../assets/memory8.jpg'
import memory9 from '../assets/memory9.jpg'

const ReasonsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const reasons = [
        {
            id: 1,
            text: "Your smile lights up my entire world and makes every day brighter ☀️",
            emoji: "😊",
        },
        {
            id: 2,
            text: "You understand me like no one else ever has or ever will 💭",
            emoji: "🤗",
        },
        {
            id: 3,
            text: "Your laughter is my favorite sound in the whole universe 🎵",
            emoji: "😄",
        },
        {
            id: 4,
            text: "You make even the ordinary moments feel extraordinary ✨",
            emoji: "🌟",
        },
        {
            id: 5,
            text: "Your kindness and compassion inspire me every single day 💖",
            emoji: "🥰",
        },
        {
            id: 6,
            text: "You're my best friend and my greatest adventure 🗺️",
            emoji: "🎒",
        },
        {
            id: 7,
            text: "You believe in me even when I don't believe in myself 💪",
            emoji: "🌈",
        },
        {
            id: 8,
            text: "Your hugs feel like coming home after a long journey 🏡",
            emoji: "🤲",
        },
        {
            id: 9,
            text: "You make me want to be a better person every day 🌱",
            emoji: "🌻",
        },
        {
            id: 10,
            text: "With you, I've found my forever and always 💍",
            emoji: "💕",
        },
    ]

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotate: direction > 0 ? 20 : -20,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotate: direction < 0 ? 20 : -20,
        }),
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection) => {
        setDirection(newDirection)
        setCurrentIndex((prev) => {
            let next = prev + newDirection
            if (next < 0) next = reasons.length - 1
            if (next >= reasons.length) next = 0
            return next
        })
    }

    const balloons = [
        { id: 1, image: memory6, x: '5%', y: '20%', size: 120, delay: 0, rotate: -5 },
        { id: 2, image: memory7, x: '15%', y: '60%', size: 100, delay: 1, rotate: 5 },
        { id: 3, image: memory8, x: '80%', y: '15%', size: 130, delay: 2, rotate: 8 },
        { id: 4, image: memory9, x: '85%', y: '55%', size: 110, delay: 0.5, rotate: -3 },
    ]

    return (
        <section className="py-20 px-4 relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Floating Balloons */}
            {balloons.map((balloon) => (
                <motion.div
                    key={balloon.id}
                    initial={{ y: 0 }}
                    animate={{ y: [-20, 20, -20] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: balloon.delay
                    }}
                    className="absolute hidden lg:block z-0"
                    style={{ left: balloon.x, top: balloon.y }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        className="relative cursor-pointer"
                    >
                        {/* String */}
                        <div className="absolute top-full left-1/2 w-[1px] h-[60px] bg-white/40 origin-top transform -translate-x-1/2" />

                        {/* Balloon */}
                        <div
                            className="rounded-full border-4 border-white/20 overflow-hidden shadow-xl bg-white relative"
                            style={{
                                width: balloon.size,
                                height: balloon.size,
                                transform: `rotate(${balloon.rotate}deg)`
                            }}
                        >
                            <img
                                src={balloon.image}
                                alt="Memory"
                                className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute top-2 left-3 w-1/4 h-1/4 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-[2px]" />
                        </div>
                    </motion.div>
                </motion.div>
            ))}

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-handwritten text-gradient mb-4">
                        Why You're My Valentine
                    </h2>
                    <p className="text-lg text-romantic-light/70">
                        Cupid's got nothing on what I feel for you 💘
                    </p>
                </motion.div>

                <div className="relative h-[400px] md:h-[450px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.3 },
                                rotate: { duration: 0.3 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x)

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1)
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1)
                                }
                            }}
                            className="absolute w-full max-w-2xl"
                        >
                            <div className="glass-card p-8 md:p-12 mx-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring' }}
                                    className="text-6xl mb-6 text-center"
                                >
                                    {reasons[currentIndex].emoji}
                                </motion.div>

                                <p className="text-xl md:text-2xl text-romantic-light/90 text-center leading-relaxed font-medium">
                                    {reasons[currentIndex].text}
                                </p>

                                <div className="flex justify-center gap-2 mt-8">
                                    {reasons.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'w-8 bg-romantic-purple'
                                                : 'w-2 bg-romantic-purple/30'
                                                }`}
                                            whileHover={{ scale: 1.2 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 md:left-4 z-10 glass-button p-3 md:p-4 rounded-full hover:scale-110 transition-transform"
                    >
                        <ChevronLeft className="w-6 h-6 text-romantic-purple" />
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 md:right-4 z-10 glass-button p-3 md:p-4 rounded-full hover:scale-110 transition-transform"
                    >
                        <ChevronRight className="w-6 h-6 text-romantic-purple" />
                    </button>
                </div>

                <div className="text-center mt-8">
                    <p className="text-romantic-light/60 text-sm">
                        Swipe or use arrows to see more • {currentIndex + 1} of {reasons.length}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ReasonsCarousel
