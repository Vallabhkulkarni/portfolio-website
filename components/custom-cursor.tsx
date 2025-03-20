"use client"

import { useState, useEffect } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>(
    [],
  )

  useEffect(() => {
    const addParticle = (x: number, y: number) => {
      const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8"]
      const newParticle = {
        id: Date.now(),
        x,
        y,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      }

      setParticles((prev) => [...prev, newParticle])

      // Remove particle after animation completes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
      }, 1000)
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Add particles on movement with throttling
      if (Math.random() > 0.9) {
        addParticle(e.clientX, e.clientY)
      }
    }

    const updateCursorStyle = () => {
      const element = document.elementFromPoint(position.x, position.y)
      const isPointerElement =
        element &&
        (element.tagName === "BUTTON" ||
          element.tagName === "A" ||
          window.getComputedStyle(element).cursor === "pointer")

      setIsPointer(!!isPointerElement)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mousemove", updateCursorStyle)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mousemove", updateCursorStyle)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [position])

  // Only show custom cursor on non-touch devices
  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
    return null
  }

  return (
    <>
      <div
        className={`cursor-dot ${isPointer || isClicked ? "active" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className={`cursor-outline ${isPointer || isClicked ? "active" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </>
  )
}

