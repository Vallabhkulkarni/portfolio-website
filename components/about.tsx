"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software developer with a passion for building innovative solutions and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">B.Tech in Computer Engineering</h4>
                  <p className="text-muted-foreground">College of Engineering, Pune (COEP)</p>
                  <p className="text-sm">2019 - 2023</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">Application Developer 2</h4>
                  <p className="text-muted-foreground">Oracle</p>
                  <p className="text-sm">July 2023 - Present</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Developed applications using VBCS and ADF</li>
                    <li>• Managed data migration using HDL</li>
                    <li>• Built optimized SQL queries</li>
                    <li>• Collaborated in Agile teams using REST APIs</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <h4 className="text-lg font-semibold">Software Developer Intern</h4>
                  <p className="text-muted-foreground">RhythmFlows Solutions Pvt. Ltd.</p>
                  <p className="text-sm">June 2022 - July 2022</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Developed and consumed REST APIs</li>
                    <li>• Integrated APIs with the front end</li>
                    <li>• Optimized database performance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg max-w-3xl mx-auto">
            I'm a passionate software developer with a strong foundation in computer engineering. Currently working at
            Oracle, I specialize in building enterprise applications and optimizing data workflows. I'm constantly
            learning and exploring new technologies to enhance my skills and create innovative solutions.
          </p>
          <div
            className="mt-4 text-primary font-medium cursor-help easter-egg"
            onClick={() => {
              alert("Why do programmers prefer dark mode? Because light attracts bugs!")
            }}
          >
            Fun fact about me
          </div>
        </motion.div>
      </div>
    </section>
  )
}

