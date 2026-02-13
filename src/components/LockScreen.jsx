import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Lock } from 'lucide-react'

const LockScreen = ({ onUnlock }) => {
    const [passcode, setPasscode] = useState('')
    const [error, setError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const correctPasscode = 'valentine'

    const handleSubmit = (e) => {
        e.preventDefault()

        if (passcode === correctPasscode) {
            setIsSuccess(true)
            setError(false)
            setTimeout(() => {
                onUnlock()
            }, 800)
        } else {
            setError(true)
            setPasscode('')
            setTimeout(() => setError(false), 500)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex items-center justify-center p-4"
        >
            <motion.div
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-12 max-w-md w-full"
            >
                <div className="text-center mb-8">
                    <motion.div
                        animate={isSuccess ? { scale: [1, 1.2, 1], rotate: [0, 360] } : { scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <Heart className="w-16 h-16 text-romantic-purple mx-auto" fill="currentColor" />
                    </motion.div>

                    <h1 className="text-3xl md:text-4xl font-handwritten mb-2 text-gradient">
                        Cupid's Secret Code 💘
                    </h1>
                    <p className="text-romantic-light/80">My Dearest Valentine, unlock my heart</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-romantic-purple/60" />
                        <input
                            type="password"
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                            placeholder="Enter passcode"
                            className="w-full pl-12 pr-4 py-3 glass-button rounded-xl text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-romantic-purple/50 placeholder:text-romantic-purple/40"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm text-center"
                        >
                            Oops! That's not quite right. Try again! 💕
                        </motion.p>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full glass-button py-3 rounded-xl font-semibold text-romantic-light text-lg"
                    >
                        Unlock Your Valentine 💖
                    </motion.button>
                </form>

                <p className="text-xs text-romantic-light/60 text-center mt-6">
                    Hint: Our special Valentine's year 💕
                </p>
            </motion.div>
        </motion.div>
    )
}

export default LockScreen
