import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

function AboutUs() {
  return (
    <section className='py-26 px-6 bg-[#0d0d18] text-white'>
        <div className='max-w-5xl mx-auto text-center'>
            <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-6 text-purple-400"
        >
          About DoodleDrop
        </motion.h2>

           <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-gray-400 text-lg leading-relaxed max-w-5xl mx-auto"
        >
          DoodleDrop is a hand-picked collection of cool, high-quality visuals that simply look good. Every wallpaper is carefully selected for its vibe, clarity, and overall aesthetic. Nothing random, nothing rushed. No clutter, just thoughtfully chosen designs that deserve a spot on your screen. Whether you’re into minimal, bold, or expressive visuals, DoodleDrop is all about keeping your display fresh, clean, and visually satisfying.
        </motion.p>

        <a href="https://github.com/devilOper09"
        target = "_blank"
        className='inline-flex items-center gap-2 text-gray-400 hover:text-white transition mt-8 mr-4'
        >
            <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-purple-400 text-lg leading-relaxed max-w-3xl mx-auto"
        ><Github size={50} /></motion.p>
             
        </a>
        <a href="https://www.linkedin.com/in/harshit-hanabar-a3b203282?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
        target = "_blank"
        className='inline-flex items-center gap-2 text-gray-400 hover:text-white transition mt-8 ml-4'
        ><motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-purple-400 text-lg leading-relaxed max-w-3xl mx-auto"
        ><Linkedin size={50} /></motion.p></a>

        </div>
    </section>
  )
}

export default AboutUs