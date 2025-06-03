"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement | null>(null)

  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, duration: 1 }}
        className="max-w-3xl w-full bg-white/80 dark:bg-slate-800/80 rounded-3xl shadow-2xl p-10"
        ref={aboutRef}
      >
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg text-center">
          About Me
        </h1>
        <div className="mx-auto max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-100 font-semibold mb-6 text-center">
            Hello! I'm <span className="font-bold text-blue-700">Srikanth</span>, a passionate and dedicated <span className="font-bold text-purple-700">B.Tech 3rd-year Computer Science Engineering</span> student. I have a strong interest in software development and web technologies, and I'm currently building my skills to pursue a career in the tech industry.
          </p>
          <div className="text-base md:text-lg text-slate-700 dark:text-slate-300 space-y-4 font-medium">
            <p>
              I am proficient in programming languages like <span className="font-semibold text-blue-700">Python</span> and <span className="font-semibold text-blue-700">Java</span>, and I have a good understanding of <span className="font-semibold text-purple-700">Data Structures and Algorithms (DSA)</span>. I'm also familiar with <span className="font-semibold text-blue-700">front-end and back-end development</span>, and I'm currently working with <span className="font-semibold text-pink-700">React</span> to build modern web applications.
            </p>
            <p>
              Though I don't have any formal industry experience yet, I am actively learning, building projects, and preparing myself for job opportunities in software development and web technologies.
            </p>
            <p>
              I can communicate in <span className="font-semibold text-blue-700">Telugu</span> and <span className="font-semibold text-blue-700">English (B2 level)</span>. Apart from academics, I was a part of <span className="font-semibold text-purple-700">NCC (National Cadet Corps)</span> for <span className="font-semibold text-blue-700">2 years</span>, which helped me develop discipline, leadership, and teamwork skills.
            </p>
            <p>
              I'm currently seeking internship or entry-level opportunities to apply my knowledge, grow professionally, and contribute to real-world projects.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
          className="mt-8 flex justify-center"
        >
          <span className="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-lg">
            Eager to learn. Ready to contribute.
          </span>
        </motion.div>
      </motion.div>
      <motion.a
        onClick={handleAboutClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
      >
        About
      </motion.a>
    </main>
  )
}