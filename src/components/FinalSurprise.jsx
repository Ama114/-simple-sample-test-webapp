import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, X, Sparkles } from 'lucide-react'
import Confetti from 'react-confetti'
import { useWindowSize } from '../hooks/useWindowSize'

const FinalSurprise = () => {
    const [showSurprise, setShowSurprise] = useState(false)
    const { width, height } = useWindowSize()

    return (
        <section className="py-20 px-4 min-h-screen flex items-center justify-center relative">
            {showSurprise && (
                <Confetti
                    width={width}
                    height={height}
                    recycle={true}
                    numberOfPieces={500}
                    gravity={0.15}
                    colors={['#FFB6D9', '#D4ADFC', '#FFF0F8', '#C084FC', '#FF69B4']}
                />
            )}

            <div className="max-w-2xl mx-auto text-center relative z-10">
                {!showSurprise ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-handwritten text-gradient mb-8"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            A Valentine Surprise...
                        </motion.h2>

                        <motion.button
                            onClick={() => setShowSurprise(true)}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="glass-button px-12 py-6 rounded-3xl inline-flex items-center gap-3"
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(212, 173, 252, 0.3)',
                                        '0 0 40px rgba(212, 173, 252, 0.6)',
                                        '0 0 20px rgba(212, 173, 252, 0.3)',
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Gift className="w-8 h-8 text-romantic-pink" />
                                <span className="text-2xl font-semibold text-romantic-light">
                                    Open My Heart 💝
                                </span>
                                <Sparkles className="w-8 h-8 text-romantic-pink" />
                            </motion.div>

                            {/* Animated glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-romantic-pink to-romantic-purple opacity-0 group-hover:opacity-20 rounded-3xl blur-xl"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.button>

                        <motion.p
                            className="mt-8 text-romantic-light/60"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Open it, my Valentine! You deserve this 💝
                        </motion.p>
                    </motion.div>
                ) : (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="glass-card p-8 md:p-12 relative"
                        >
                            <button
                                onClick={() => setShowSurprise(false)}
                                className="absolute top-4 right-4 glass-button p-2 rounded-full hover:scale-110 transition-transform"
                            >
                                <X className="w-5 h-5 text-romantic-purple" />
                            </button>

                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, 10, -10, 10, 0] }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-6xl md:text-8xl mb-6"
                            >
                                💖
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-3xl md:text-5xl font-handwritten text-gradient mb-6"
                            >
                                Will You Be My Valentine? 💕
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="space-y-4 text-lg md:text-xl text-romantic-light/90 leading-relaxed"
                            >
                                <p>
                                    You make every day feel like Valentine's Day, my Sweetheart.
                                    You're my forever crush, my one true love! 💗
                                </p>
                                <p className="font-semibold">
                                    Here's to endless love letters, sweet chocolates, and
                                    infinite Valentine's Days together! 🍫🌹
                                </p>
                                <p className="text-2xl md:text-3xl font-handwritten text-gradient mt-6">
                                    XOXO - Love You More Every Day ❤️
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="mt-8 flex flex-wrap gap-4 justify-center"
                            >
                                {['💕', '🌹', '✨', '🎉', '💝', '🌟'].map((emoji, index) => (
                                    <motion.span
                                        key={index}
                                        className="text-3xl"
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: index * 0.1,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                    >
                                        {emoji}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    )
}

export default FinalSurprise
