"use client"

import { useEffect } from "react"
import Script from "next/script"

export function Analytics() {
  useEffect(() => {
    // This would typically contain analytics initialization code
    // For example, Google Analytics or similar services
    console.log("Analytics initialized")
  }, [])

  return (
    <>
      {/* This is where you would add your analytics script tags */}
      {/* For example: */}
      <Script
        strategy="afterInteractive"
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vallabh Kulkarni",
            url: "https://vallabhkulkarni.vercel.app",
            jobTitle: "Software Developer",
            worksFor: {
              "@type": "Organization",
              name: "Oracle",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "College of Engineering, Pune (COEP)",
            },
            sameAs: [
              "https://github.com/Vallabhkulkarni",
              "https://www.linkedin.com/in/vallabhkulkarni1512/",
              "https://www.instagram.com/vallabhcoolkarni",
            ],
          }),
        }}
      />
    </>
  )
}

