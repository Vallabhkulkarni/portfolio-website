"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Instagram, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Vallabhkulkarni",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/vallabhkulkarni1512/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/vallabhcoolkarni",
      label: "Instagram",
    },
  ]

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-xl font-bold tracking-tighter">
              VK
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Vallabh Kulkarni. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center">
            Built with
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            using Next.js, Tailwind CSS, and Three.js
          </p>
          <div
            className="mt-2 text-primary font-medium cursor-help easter-egg"
            onClick={() => {
              alert("How many programmers does it take to change a light bulb? None, that's a hardware problem!")
            }}
          >
            One last joke
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

