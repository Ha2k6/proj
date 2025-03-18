import { motion } from 'framer-motion';
import { Smartphone, Shield, PenTool as Tool } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 z-10 py-20 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            Expert Mobile Repair
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 px-4">
            Professional repairs and premium accessories for all smartphone brands
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold w-full sm:w-auto"
            >
              Book Repair
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold w-full sm:w-auto"
            >
              Shop Accessories
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 sm:mt-20">
          {[
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Expert Repairs",
              description: "Professional repair service for all smartphone brands"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Quality Guarantee",
              description: "90-day warranty on all repairs and parts"
            },
            {
              icon: <Tool className="w-8 h-8" />,
              title: "Fast Service",
              description: "Most repairs completed within 24 hours"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}