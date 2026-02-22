"use client";



import { motion } from "framer-motion";
import {Link} from "react-router-dom"; 

function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">


            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.3),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.3),transparent_40%)] blur-3xl"></div>

            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}

                    >
                        Hand Picked Collection 
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

                        className="block text-purple-500"
                        viewport={{ once: false }}
                    >
                        Through DoodleDrop
                    </motion.span>  
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                    A handpicked collection of wallpapers and photos designed for people like me
                </p>


            
                <Link to="/wallpapers" className="px-8 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition shadow-lg shadow-purple-600/30"> Explore Wallpapers</Link>
                
            </div>
        </section>
    );
}

export default Hero;