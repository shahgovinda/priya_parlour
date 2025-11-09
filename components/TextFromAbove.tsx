"use client"
import React from 'react'
import { motion } from "framer-motion";
const TextFromAbove = () => {
    return (
        <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-10 left-10 text-white text-7xl instrument-font"
        >
            Beauty <span className="carattere-font">curated with</span> love.
        </motion.p>
    )
}

export default TextFromAbove