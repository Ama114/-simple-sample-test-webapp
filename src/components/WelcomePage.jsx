import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const WelcomePage = ({ onEnter }) => {
    // 3D floating hearts
    const hearts3D = [
        { id: 1, size: 120, x: 15, y: 10, delay: 0, rotation: -15 },
        { id: 2, size: 180, x: 8, y: 35, delay: 0.5, rotation: 20 },
        { id: 3, size: 90, x: 25, y: 60, delay: 1, rotation: -10 },
        { id: 4, size: 70, x: 12, y: 80, delay: 1.5, rotation: 15 },
        { id: 5, size: 100, x: 20, y: 15, delay: 0.8, rotation: -20 },
    ]

    // Pink sparkles
    const sparkles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: 5 + Math.random() * 35,
        y: 10 + Math.random() * 80,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 3,
    }))

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen relative overflow-hidden flex items-center justify-center"
            style={{
                background: 'linear-gradient(135deg, #1A0B1F 0%, #2D0A3D 50%, #1A0B1F 100%)',
            }}
        >
            {/* 3D Glossy Pink Hearts on the left */}
            {hearts3D.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0],
                        rotate: [heart.rotation, heart.rotation + 5, heart.rotation],
                    }}
                    transition={{
                        opacity: { delay: heart.delay, duration: 0.8 },
                        scale: { delay: heart.delay, duration: 0.8, type: 'spring' },
                        y: { duration: 3 + heart.id * 0.3, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { duration: 4 + heart.id * 0.2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute"
                    style={{
                        left: `${heart.x}%`,
                        top: `${heart.y}%`,
                        width: `${heart.size}px`,
                        height: `${heart.size}px`,
                    }}
                >
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 50%, #C71585 100%)',
                            boxShadow: `
                inset -10px -10px 20px rgba(255, 255, 255, 0.3),
                inset 10px 10px 20px rgba(0, 0, 0, 0.2),
                0 20px 40px rgba(255, 20, 147, 0.5),
                0 0 60px rgba(255, 105, 180, 0.3)
              `,
                            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                            transform: 'rotate(45deg)',
                        }}
                    >
                        {/* Heart shape using pseudo-elements simulation */}
                        <div
                            className="absolute"
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, #FFB6D9 0%, #FF69B4 50%, #FF1493 100%)',
                                borderRadius: '50%',
                                top: '-35%',
                                left: '0',
                                boxShadow: 'inset -5px -5px 15px rgba(255, 255, 255, 0.4)',
                            }}
                        />
                        <div
                            className="absolute"
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, #FFB6D9 0%, #FF69B4 50%, #FF1493 100%)',
                                borderRadius: '50%',
                                top: '0',
                                left: '-35%',
                                boxShadow: 'inset -5px -5px 15px rgba(255, 255, 255, 0.4)',
                            }}
                        />
                    </div>
                </motion.div>
            ))}

            {/* Pink sparkles on the left */}
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -30, -60],
                    }}
                    transition={{
                        duration: 3,
                        delay: sparkle.delay,
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    className="absolute"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px rgba(255, 105, 180, 0.8)',
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="overflow-hidden"
                >
                    {/* HAPPY */}
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-5xl mb-2 tracking-wide sm:tracking-widest"
                        style={{
                            background: 'linear-gradient(135deg, #FFB6D9 0%, #FF69B4 50%, #FFB6D9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '300',
                            filter: 'drop-shadow(0 0 20px rgba(255, 105, 180, 0.4))',
                            wordBreak: 'keep-all',
                            overflowWrap: 'normal',
                        }}
                    >
                        HAPPY
                    </motion.h2>

                    {/* valentine's day */}
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif mb-6 sm:mb-8"
                        style={{
                            background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 30%, #FFB6D9 50%, #FF1493 70%, #C71585 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '400',
                            fontStyle: 'italic',
                            filter: 'drop-shadow(0 5px 25px rgba(255, 20, 147, 0.5))',
                            letterSpacing: '-0.02em',
                            wordBreak: 'keep-all',
                            overflowWrap: 'normal',
                        }}
                    >
                        valentine's
                    </motion.h1>

                    <motion.h2
                        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif"
                        style={{
                            background: 'linear-gradient(135deg, #FFB6D9 0%, #FF69B4 50%, #FFB6D9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '300',
                            fontStyle: 'italic',
                            letterSpacing: '0.05em',
                            filter: 'drop-shadow(0 0 20px rgba(255, 105, 180, 0.4))',
                            wordBreak: 'keep-all',
                            overflowWrap: 'normal',
                        }}
                    >
                        day
                    </motion.h2>
                </motion.div>

                {/* Enter button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mt-12 sm:mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onEnter}
                        className="px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
                        style={{
                            background: 'linear-gradient(135deg, #FF1493 0%, #C71585 100%)',
                            color: '#FFFFFF',
                            boxShadow: '0 10px 40px rgba(255, 20, 147, 0.5), 0 0 20px rgba(255, 105, 180, 0.4)',
                        }}
                    >
                        Enter
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                    </motion.button>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="mt-6 text-romantic-light/50 text-sm"
                    >
                        For someone special 💕
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default WelcomePage
