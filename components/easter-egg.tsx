"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEgg() {
  const [konami, setKonami] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key]

      if (newKonami.length > konamiCode.length) {
        newKonami.shift()
      }

      setKonami(newKonami)

      if (newKonami.join(",") === konamiCode.join(",")) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konami, konamiCode])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed bottom-4 right-4 z-50 p-4 bg-primary text-primary-foreground rounded-lg shadow-lg"
        >
          <h3 className="font-bold mb-2">🎉 Easter Egg Found!</h3>
          <p>You've discovered the Konami Code easter egg!</p>
          <p className="text-sm mt-2">"The best error message is the one that never shows up." - Thomas Fuchs</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

