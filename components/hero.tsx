"use client"
import { motion } from "framer-motion"
import TypingEffect from "./typing-effect"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const typingTexts = [
    "Hi, I'm Vallabh Kulkarni, a software developer passionate about building innovative solutions with Oracle technologies.",
    "At Oracle, I specialize in VBCS, ADF, and Oracle SQL, crafting user-friendly applications, optimizing data workflows, and collaborating across teams to solve complex problems.",
    "Beyond coding, I'm always eager to learn, explore new ideas, and take on challenges that push my limits.",
    "Welcome to my portfolio — explore my work, get to know me better, and feel free to connect!",
  ]

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Vallabh Kulkarni</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Software Developer at Oracle</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl mb-12"
        >
          <TypingEffect texts={typingTexts} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button onClick={scrollToAbout} className="rounded-full" size="lg">
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

