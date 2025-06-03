"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Moon,
  Sun,
  Award,
  BookOpen,
  Code,
  Globe,
  Briefcase,
  GraduationCap,
  Heart,
  Instagram,
  Camera,
  X, // <-- Make sure this is here!
  User, // <-- Add this line
} from "lucide-react"
import Image from "next/image"
import * as LucideIcons from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = [
  "React",
  "Node.js",
  "Python",
  "UI/UX Design",
  "DSA",
  "Java",
]

const experiences = [
  {
    title: "B.Tech Computer Science Engineering Student",
    company: "Vignan's Foundation for Science, Technology and Research",
    period: "2025 - Present",
    description:
      "Currently pursuing my B.Tech in CSE. Actively involved in coding, web development projects, and technical clubs. Building a strong foundation in software engineering, DSA, and teamwork.",
  },
  {
    title: "NCC Cadet",
    company: "National Cadet Corps",
    period: "2023 - 2024",
    description:
      "Served as an NCC cadet for 2 years, developing discipline, leadership, and teamwork skills through various camps and activities.",
  },
  {
    title: "Personal & Academic Projects",
    company: "Self-driven",
    period: "2022 - Present",
    description:
      "Worked on multiple academic and personal projects using React, Node.js, Python, and Java. Focused on building web applications and strengthening problem-solving skills.",
  },
]

const projects = [
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team communication.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: "/Task Management App.png",
    code: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.yourdomain.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/E-Commerce Platform.png", // Save the second image as public/ecommerce-project.jpg
    code: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.yourdomain.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business metrics with interactive charts and real-time data updates.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    image: "/Analytics Dashboard.png", // Save the third image as public/analytics-dashboard.png
    code: "https://github.com/yourusername/analytics-dashboard",
    demo: "https://analytics-demo.yourdomain.com",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO at TechInnovate",
    content:
      "Srikanth is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/Sarah Johnson.png", // <-- add leading slash
    linkedin: "https://www.linkedin.com/in/sarah-johnson-dixon-ph-d-b43a9712b/",
  },
  {
    name: "Michael Chen",
    position: "Product Manager at DesignHub",
    content:
      "Working with Srikanth was a pleasure. He transformed our ideas into reality with impressive technical expertise and creativity.",
    avatar: "/Michael Chen1.png", // <-- add leading slash
    linkedin: "https://www.linkedin.com/in/michael-chen-5a60286/",
  },
  {
    name: "Emily Rodriguez",
    position: "Lead Developer at WebSolutions",
    content:
      "Srikanth's code is clean, well-documented, and highly maintainable. He's a valuable asset to any development team.",
    avatar: "/Emily Rodriguez.png", // <-- add leading slash
    linkedin: "https://www.linkedin.com/in/emily-rodriguez-20b691244/",
  },
]

// Replace your education array with this:
const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vignan's Foundation for Science, Technology and Research, Guntur",
    period: "2023 - 2027",
    description: "Currently pursuing my B.Tech in CSE. Actively involved in coding, web development projects, and technical clubs.",
    marks: "7.0 CGPA (Present)"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "1st Year: Vignan Junior College, Hyderabad | 2nd Year: Sri Chaitanya, Khammam",
    period: "2021 - 2023",
    description: "Completed intermediate education with focus on Mathematics, Physics, and Chemistry.",
    marks: "810/1000"
  },
  {
    degree: "Schooling (SSC)",
    institution: "St. Franics English Medium High School, Madhira",
    period: "2015 - 2020",
    description: "Completed secondary education with strong academic performance.",
    marks: "10/10 GPA"
  },
]

// Replace your certifications array with this:
const certifications = [
  {
    title: "Python for Beginners",
    issuer: "simplilearn",
    date: "2025",
    icon: "Award",
  },
  {
    title: "Data Structures & Algorithms (DSA) Basics",
    issuer: "simplilearn",
    date: "2025",
    icon: "Code",
  },
  {
    title: "UI/UX Fundamentals",
    issuer: "simplilearn",
    date: "2025",
    icon: "Layout",
  },
]

const articles = [
  {
    title: "The Future of Web Development with AI Integration",
    excerpt: "Exploring how artificial intelligence is transforming the landscape of modern web development...",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "/The Future of Web Development with AI Integration.png", // Save the attached image as public/future-web-development.jpg
    url: "https://youtu.be/_2g0Upj_2YE?si=xRh3dDz-SD-wPaZ8", // YouTube video link
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Best practices and techniques to ensure your React applications run smoothly and efficiently...",
    date: "April 3, 2024",
    readTime: "6 min read",
    image: "/Optimizing React Applications for Performance.png",
    url: "https://youtu.be/LVDs8nhL3WI?si=xjW06RNrp0OtpEs8", // Replace with your real article link
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to creating inclusive web experiences for users of all abilities...",
    date: "March 12, 2024",
    readTime: "10 min read",
    image: "/Building Accessible Web Applications.png",
    url: "https://youtu.be/NMb4RDpbRXs", // Replace with your real article link
  },
]

// Replace your languages array with this:
const languages = [
  { name: "Telugu", proficiency: 95, level: "Very Good" },
  { name: "English", proficiency: 80, level: "Good" },
  { name: "Hindi", proficiency: 60, level: "Basic" },
  { name: "Tamil", proficiency: 40, level: "Basic" },
]

const interests = [
  { name: "Photography", icon: "Camera" },
  { name: "Hiking", icon: "Mountain" },
  { name: "Badminton", icon: "Tennis" }, // Changed from Chess to Badminton (uses Tennis icon from Lucide)
  { name: "Reading", icon: "BookOpen" },
  { name: "Cooking", icon: "Utensils" },
  { name: "Travel", icon: "Globe" },
]

const achievements = [
  { value: 100, label: "LeetCode Problems" },
  { value: 100, label: "HackerRank Problems" },
  { value: 5, label: "Internships" },
]

// My Pics Gallery
const myPics = [
  {
    src: "/profile pic.jpg",
    alt: "Profile Picture",
    title: "Profile"
  },
  {
    src: "/pic1.JPG",
    alt: "Picture 1",
    title: "Pic 1"
  },
  {
    src: "/pic2.JPG",
    alt: "Picture 2",
    title: "Pic 2"
  },
  {
    src: "/pic3.JPG",
    alt: "Picture 3",
    title: "Pic 3"
  }
]

// Helper to get icon component by name
function getLucideIcon(name: string) {
  // @ts-ignore
  return LucideIcons[name] || LucideIcons["Code"]
}

type TypingAnimationProps = {
  texts: string[];
  speed?: number;
  pause?: number;
};

function TypingAnimation({ texts, speed = 70, pause = 1000 }: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentText = texts[textIndex]

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Portfolio() {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showPics, setShowPics] = useState(false)
  const [showScheduleOptions, setShowScheduleOptions] = useState(false)
  const [currentPic, setCurrentPic] = useState(0)
  const [showBio, setShowBio] = useState(false);

  // Scroll to About section on 'About' button click
  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const currentScroll = window.scrollY
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] dark:from-[#232526] dark:via-[#414345] dark:to-[#232526] relative overflow-x-hidden"
      style={{
        backgroundImage: "linear-gradient(120deg, #0f2027 0%, #2c5364 50%, #24243e 100%)",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress value={scrollProgress} className="h-1 rounded-none bg-slate-200 dark:bg-slate-700" />
      </div>
      {/* Navigation (replace the nav section with this for About to work) */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Srikanth Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8 items-center">
              {["Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
              {/* Pics Button */}
              <motion.button
                onClick={() => setShowPics(true)}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-semibold shadow-lg ml-2"
              >
                <Camera className="h-5 w-5 mr-2" />
                Pics
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-700"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>
    </motion.nav>


    {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Master Mind.⚡
                  </span>
                  <br />
                  Developer
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Hi, I'm <span className="font-bold text-blue-600">Srikanth Badisa</span> — a creative full-stack developer dedicated to building seamless, high-performance digital experiences. I specialize in transforming ideas into robust, user-friendly web solutions that help businesses grow and stand out.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Download CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex space-x-4 mt-8">
                {[
                  { icon: Github, href: "https://github.com/Rajupeace" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/srikanth-b-1b6b452a5/" },
                  { icon: Mail, href: "mailto:rajubhaibhai576@gmail.com" },
                  { icon: Instagram, href: "https://www.instagram.com/_c_a_l_l_m_e_b_o_b_b_y_?igsh=MWwwajcxNGdrcXBnYg==" }, // <-- Instagram link updated
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/profile pic.jpg"
                  alt="Srikanth Badisa"
                  width={400}
                  height={500}
                  className="rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              Proficient in modern technologies and frameworks for building scalable applications
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="text-lg py-2 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white border-0 shadow-md hover:shadow-xl transition-all"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Achievements
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Key metrics and milestones from my professional journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-28 h-28 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-3xl font-bold shadow-lg"
                >
                  {achievement.value}+
                </motion.div>
                <h3 className="font-medium text-lg">{achievement.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My professional journey and key achievements in software development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Career Timeline</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">My professional journey visualized</p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 ${index % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                      <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                      <Badge variant="outline" className="mb-3">
                        {exp.period}
                      </Badge>
                      <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10"
                    />
                  </div>

                  <div className="w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My academic background and professional certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                              {edu.institution}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{edu.period}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
                        {edu.marks && (
                          <p className="mt-2 text-blue-700 dark:text-blue-400 font-semibold">
                            Marks: {edu.marks}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <Award className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex items-center">
                        <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                          <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold">{cert.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Portfolio Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Portfolio Categories</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Browse my work by category</p>
          </motion.div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                            asChild
                          >
                            <a href={project.code} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ArrowRight className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {projects
                  .filter((p, i) => i % 3 === 0)
                  .map((project, index) => (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              asChild
                            >
                              <a href={project.code} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ArrowRight className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {projects
                  .filter((p, i) => i % 3 === 1)
                  .map((project, index) => (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              asChild
                            >
                              <a href={project.code} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ArrowRight className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {projects
                  .filter((p, i) => i % 3 === 2)
                  .map((project, index) => (
                    <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              asChild
                            >
                              <a href={project.code} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ArrowRight className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Featured Articles
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              Insights and tutorials on web development and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-40 object-cover rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="text-sm">
                        {article.date}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                      asChild
                    >
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="h-4 w-4" />
                        Read Article
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
  <div className="container mx-auto max-w-xl">
    <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
    <p className="text-slate-600 dark:text-slate-300 mb-8 text-center">
      I would love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
    </p>
    <div className="mb-8 text-center space-y-4">
      <div className="flex items-center justify-center gap-2">
        <User className="h-5 w-5 text-blue-600" />
        <span className="font-semibold">Srikanth Badisa</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Mail className="h-5 w-5 text-blue-600" />
        <a href="mailto:rajubhaibhai576@gmail.com" className="text-blue-600 hover:underline">
          rajubhaibhai576@gmail.com
        </a>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Phone className="h-5 w-5 text-blue-600" />
        <a href="tel:9182030946" className="text-blue-600 hover:underline">
          +91 82030 946
        </a>
      </div>
    </div>
    <form
      action="https://formspree.io/f/mwkajnkl"
      method="POST"
      className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-lg shadow"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent"
      />
      <textarea
        name="message"
        required
        placeholder="Your Message"
        className="w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent"
        rows={5}
      />
      <button
        type="submit"
        className="w-full py-2 px-4 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-br from-[#0f2027] to-[#24243e]">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            &copy; {new Date().getFullYear()} Srikanth Badisa. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Pics Gallery Modal (add this at the end of the file) */}
      {showPics && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden max-w-lg w-full flex flex-col items-center"
          >
            <div className="p-4 w-full flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-center">
                My Pictures Gallery
              </h3>
              <div className="relative w-full flex items-center justify-center">
                <button
                  onClick={() => setCurrentPic((currentPic - 1 + myPics.length) % myPics.length)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-200 dark:bg-slate-700 rounded-full p-2 shadow hover:scale-110 transition"
                  aria-label="Previous"
                >
                  <span className="sr-only">Previous</span>
                  <svg width="24" height="24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <motion.div
                  key={currentPic}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center"
                >
                  <Image
                    src={myPics[currentPic].src}
                    alt={myPics[currentPic].title}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-64 mb-4"
                  />
                  <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">{myPics[currentPic].title}</div>
                </motion.div>
                <button
                  onClick={() => setCurrentPic((currentPic + 1) % myPics.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-200 dark:bg-slate-700 rounded-full p-2 shadow hover:scale-110 transition"
                  aria-label="Next"
                >
                  <span className="sr-only">Next</span>
                  <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {myPics.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPic(idx)}
                    className={`w-3 h-3 rounded-full ${currentPic === idx ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"} transition`}
                    aria-label={`Go to pic ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end p-4 w-full">
              <Button
                variant="outline"
                onClick={() => setShowPics(false)}
                className="flex items-center gap-2"
              >
                <X className="h-5 w-5" />
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Profile/Bio Slide Section */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={() => setShowBio(!showBio)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          <User className="h-5 w-5" />
          {showBio ? "Hide Profile" : "Show Profile"}
        </button>
      </div>

      {showBio && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-32 right-6 z-50 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center"
        >
          <div className="flex w-full justify-between items-center mb-6">
            {/* Left Circle Profile Pic */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <Image
                src="/profile pic.jpg"
                alt="Srikanth Badisa"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Right Circle Profile Pic */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
              <Image
                src="/pic1.JPG"
                alt="Srikanth Badisa"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400">Srikanth Badisa</h3>
          <p className="text-slate-700 dark:text-slate-300 text-center mb-4">
            Hi, I'm Srikanth Badisa, a passionate full-stack developer and Computer Science Engineering student. I love building seamless, high-performance digital experiences and transforming ideas into robust, user-friendly web solutions. My journey includes academic excellence, NCC cadet experience, and a strong focus on teamwork, leadership, and continuous learning.
          </p>
          <div className="flex gap-4">
            <Image
              src="/pic2.JPG"
              alt="Gallery Pic 2"
              width={64}
              height={64}
              className="rounded-full object-cover border-2 border-blue-400"
            />
            <Image
              src="/pic3.JPG"
              alt="Gallery Pic 3"
              width={64}
              height={64}
              className="rounded-full object-cover border-2 border-purple-400"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
