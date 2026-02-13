import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

import memory1 from '../assets/memory1.jpeg'
import memory2 from '../assets/memory2.jpeg'
import memory3 from '../assets/memory3.jpg'
import memory4 from '../assets/memory4.jpg'
import memory5 from '../assets/memory5.jpg'
import memory6 from '../assets/memory6.jpg'
import memory7 from '../assets/memory7.jpg'
import memory8 from '../assets/memory8.jpg'
import memory9 from '../assets/memory9.jpg'
import memory10 from '../assets/memory10.jpg'
import memory11 from '../assets/memory11.jpg'





const MemoryLane = () => {
    const memories = [
        {
            id: 1,
            image: memory1,
            description: '😍😍'
             
        },
        {
            id: 2,
            image: memory2,
            description: '🥰🥰'
          
        },
        {
            id: 3,
            image: memory3,
            description: '❤️❤️'
             
        },
        {
            id: 4,
            image: memory4,
            description: '😘😘'
        },
        {
            id: 5,
            image: memory5,
            description: '😍😍',
        },


        {
            id: 6,
            image: memory6,
            description: '😍😍',
        },

        {
            id: 7,
            image: memory7,
            description: '😍',
        },

        {
            id: 8,
            image: memory8,
            description: '😍😍',
        },

        {
            id: 9,
            image: memory9,
            description: '😍😍',
        },

        {
            id: 10,
            image: memory10,
            description: '😍😍',
        },

        {
            id: 11,
            image: memory11,
            description: '😍😍',
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
