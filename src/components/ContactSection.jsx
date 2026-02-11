import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Heart, Send } from 'lucide-react'

const ContactSection = () => {
    const whatsappNumber = '94768577484' // Your Sri Lanka number

    const [customMessage, setCustomMessage] = useState("Hey! I loved your Valentine's surprise! 💕")

    const handleSendMessage = () => {
        if (!customMessage.trim()) {
            return
        }

        const encodedMessage = encodeURIComponent(customMessage)
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        // Open WhatsApp with pre-filled message
        window.open(whatsappLink, '_blank')
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 px-4 relative overflow-hidden"
        >
            {/* Background hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 2) * 40}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, -10, 0],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Heart
                            className="text-romantic-pink/20"
                            fill="currentColor"
                            size={40 + i * 10}
                        />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-handwritten text-gradient mb-6">
                        Want to Say Something?
                    </h2>
                    <p className="text-lg md:text-xl text-romantic-light/70 mb-12">
                        Type your message and send it via WhatsApp! 💬
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-10 md:p-14"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="text-6xl md:text-7xl mb-6"
                    >
                        💌
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-romantic-light mb-4">
                        Send Me a Message!
                    </h3>

                    <p className="text-romantic-light/80 mb-6">
                        Type your message below - it will open in WhatsApp ready to send! 💕
                    </p>

                    {/* Message input box */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6"
                    >
                        <textarea
                            value={customMessage}
                            onChange={(e) => setCustomMessage(e.target.value)}
                            placeholder="Type your message here..."
                            rows="5"
                            className="w-full px-4 py-3 rounded-xl bg-romantic-dark/30 border-2 border-romantic-pink/30 text-romantic-light placeholder:text-romantic-light/40 focus:outline-none focus:border-romantic-pink/60 focus:ring-2 focus:ring-romantic-pink/20 transition-all resize-none"
                            style={{
                                backdropFilter: 'blur(10px)',
                            }}
                        />
                        <div className="mt-2 text-sm text-romantic-light/50 text-right">
                            {customMessage.length} characters
                        </div>
                    </motion.div>

                    <motion.button
                        onClick={handleSendMessage}
                        disabled={!customMessage.trim()}
                        whileHover={{ scale: customMessage.trim() ? 1.05 : 1 }}
                        whileTap={{ scale: customMessage.trim() ? 0.95 : 1 }}
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-lg text-white relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            background: customMessage.trim()
                                ? 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
                                : 'linear-gradient(135deg, #777 0%, #555 100%)',
                            boxShadow: customMessage.trim()
                                ? '0 10px 30px rgba(37, 211, 102, 0.3)'
                                : '0 10px 30px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        {/* Animated background shine */}
                        {customMessage.trim() && (
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    x: ['-200%', '200%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                }}
                            />
                        )}

                        <Send className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Send via WhatsApp</span>
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex flex-col items-center gap-2 text-romantic-light/60"
                    >
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">Opens WhatsApp with your message ready</span>
                        </div>
                        <span className="text-xs">Sending to: 0768577484</span>
                    </motion.div>
                </motion.div>

                {/* Footer text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-romantic-light/50 text-sm"
                >
                    Made with ❤️ for someone special
                </motion.p>
            </div>
        </motion.section>
    )
}

export default ContactSection
