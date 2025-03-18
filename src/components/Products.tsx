import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

function ProductSection({ title, products, id }: { title: string; products: any[]; id: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} id={id} className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {products.map((product, index) => {
            const productRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: productRef,
              offset: ["start end", "end start"]
            });
            
            const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
            
            return (
              <motion.div
                key={index}
                ref={productRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ y }}
                className="relative group touch-manipulation"
              >
                <motion.div 
                  className="relative h-[40vh] sm:h-[30vh] overflow-hidden rounded-lg border-2 border-indigo-500/30"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transform-gpu"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 0.5
                      }}
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-end"
                  >
                    <div className="w-full p-4 sm:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{product.title}</h3>
                          <p className="text-base sm:text-xl text-gray-200 mb-4">{product.description}</p>
                          <p className="text-xl sm:text-2xl font-bold text-indigo-400">{product.price}</p>
                        </div>
                        <motion.button 
                          className="bg-white/10 p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors"
                          aria-label="Add to wishlist"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.button>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <motion.button 
                          className="flex-1 bg-indigo-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                          Add to Cart
                        </motion.button>
                        <motion.button 
                          className="flex-1 bg-white text-indigo-600 px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Buy Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  const sections = [
    {
      id: "phones",
      title: "Latest Phones",
      products: [
        {
          title: "Urban Nexus Ultra",
          description: "Customizable Multiple Watch Faces",
          image: "https://images.unsplash.com/photo-1706300896423-7d08346e8dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NzF8fHxlbnwwfHx8fHw%3D",
          price: "$999"
        },
        {
          title: "Samsung Galaxy S24 Ultra",
          description: "Ultimate Android experience with advanced AI capabilities",
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "$1199"
        }
      ]
    },
    {
      id: "cases",
      title: "Premium Cases",
      products: [
        {
          title: "Leather Collection",
          description: "Handcrafted premium leather cases for all premium devices",
          image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "From $49.99"
        },
        {
          title: "Protection Series",
          description: "Military-grade protection with sleek design",
          image: "https://images.unsplash.com/photo-1586941962765-d3896cc85ac8?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "From $39.99"
        }
      ]
    },
    {
      id: "accessories",
      title: "Essential Accessories",
      products: [
        {
          title: "Wireless Charging Collection",
          description: "Fast wireless charging solutions for home and office",
          image: "https://images.unsplash.com/photo-1633119637777-f19def25c446?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "From $29.99"
        },
        {
          title: "Premium Audio",
          description: "High-fidelity wireless earbuds and headphones",
          image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5d850?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "From $149.99"
        }
      ]
    },
    {
      id: "repairs",
      title: "Professional Repairs",
      products: [
        {
          title: "Screen Replacement",
          description: "Professional screen replacement with lifetime warranty",
          image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "From $89.99"
        },
        {
          title: "Battery Service",
          description: "Battery replacement with genuine parts",
          image: "https://images.unsplash.com/photo-1605719123253-0769676d4d30?auto=format&fit=crop&w=2000&h=600&q=80",
          price: "From $49.99"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {sections.map((section) => (
        <ProductSection key={section.id} {...section} />
      ))}
    </div>
  );
}