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

    return (
        <section className="py-20 px-4 md:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-handwritten text-gradient mb-4">
                        Our Love Story
                    </h2>
                    <p className="text-lg text-romantic-light/70">
                        Every moment is a Valentine with you 💖
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {memories.map((memory, index) => (
                        <motion.div
                            key={memory.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                            className="glass-card overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={memory.image}
                                    alt={memory.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{memory.date}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{memory.title}</h3>
                                    <p className="text-sm opacity-90">{memory.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default MemoryLane
