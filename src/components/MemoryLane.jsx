import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const MemoryLane = () => {
    const memories = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
            title: 'Cupid Struck Us',
            date: 'Valentine 2024',
            description: 'The day love found us 💘',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1529634313673-832b1e3b1bdb?w=800&q=80',
            title: 'Sunset Romance',
            date: 'March 2024',
            description: 'Two hearts, one sunset 💗',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
            title: 'Sweet Moments',
            date: 'May 2024',
            description: 'Sweeter than chocolate 🍫',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
            title: 'Love on Top',
            date: 'July 2024',
            description: 'You & Me, XOXO 💋',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80',
            title: 'City of Love',
            date: 'September 2024',
            description: 'Be Mine Forever 💍',
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
            title: 'Cuddle Weather',
            date: 'November 2024',
            description: 'My Forever Valentine 💌',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    // Continuous left-to-right movement animation
    const floatingVariants = (index) => ({
        animate: {
            x: ['-100%', '100%'],
            transition: {
                x: {
                    duration: 15 + (index * 2),
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                },
            },
        },
    })

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-handwritten text-gradient mb-4">
                        Our Love Album
                    </h2>
                    <p className="text-lg text-romantic-light/70">
                        Every moment is a Valentine with you 💖
                    </p>
                </motion.div>
            </div>

            {/* Moving Album Strip */}
            <div className="relative w-full overflow-hidden py-10">
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#1A0B1F] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#1A0B1F] to-transparent z-10" />

                <motion.div
                    className="flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Set 1 */}
                    <div className="flex gap-8 pr-8 shrink-0">
                        {memories.map((memory, index) => (
                            <MemoryCard key={`set1-${memory.id}`} memory={memory} />
                        ))}
                    </div>

                    {/* Set 2 (Duplicate) */}
                    <div className="flex gap-8 pr-8 shrink-0">
                        {memories.map((memory, index) => (
                            <MemoryCard key={`set2-${memory.id}`} memory={memory} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// Extracted Card Component for cleaner code
const MemoryCard = ({ memory }) => (
    <motion.div
        whileHover={{ scale: 1.05, filter: "brightness(1.1)", y: -10 }}
        className="glass-card overflow-hidden group cursor-pointer w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 border border-white/10"
    >
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
            <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-2 mb-3 text-romantic-accent">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-wider">{memory.date}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-3 leading-tight">{memory.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 line-clamp-2 leading-relaxed font-light">{memory.description}</p>

                <div className="h-1 w-12 bg-romantic-accent mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            </div>
        </div>
    </motion.div>
)

export default MemoryLane
