"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { TeamMember } from "@repo/api/brand"

export interface TeamSectionProps {
  members: TeamMember[]
  title?: string
  description?: string
  variant?: "default" | "compact" | "detailed"
  columns?: 2 | 3 | 4 | 5
  showContactButton?: boolean
  className?: string
}

export function TeamSection({
                              members,
                              title = "Meet Our Team",
                              description = "The talented individuals driving our success",
                              showContactButton = false,
                              className = "",
                            }: TeamSectionProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => new Set(prev).add(index))
              }
            })
          },
          { threshold: 0.1 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [members.length])

  const getCardClass = (index: number) => {
    const isVisible = visibleCards.has(index)
    const baseClass = "group relative overflow-hidden transition-all duration-700 min-h-[420px] bg-white"
    const hoverClass = "hover:bg-gray-900 hover:shadow-xl"
    const animationClass = isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
    const delayClass = "transition-all duration-700 ease-out"

    return `${baseClass} ${hoverClass} ${animationClass} ${delayClass}`
    // </CHANGE>
  }

  return (
      <div className={`bg-[#F5F5F0] py-24 sm:py-32 ${className}`}>
        {/* </CHANGE> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl mb-20">
            <h2
              className="text-5xl sm:text-6xl font-black uppercase tracking-tighter text-gray-900 mb-6 leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>
            <p
              className="text-lg text-gray-600 leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {description}
            </p>
          </div>
          {/* </CHANGE> */}

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* </CHANGE> */}
            {members.map((member, index) => {
              const cardClass = getCardClass(index)

              return (
                  <div
                      key={member.id}
                      ref={(el) => {
                        cardRefs.current[index] = el
                      }}
                      className={cardClass}
                      style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-10 h-full flex flex-col">
                      {/* Member Photo */}
                      <div className="mb-8">
                        <div className="relative inline-block w-full">
                          <Image
                              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              src={member.avatar || "/placeholder.svg"}
                              alt={member.name}
                              width={300}
                              height={300}
                          />
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-black uppercase tracking-tighter mb-2 text-gray-900 group-hover:text-white transition-colors duration-500"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {member.name}
                        </h3>
                        <p
                          className="text-base font-medium mb-1 text-gray-600 group-hover:text-white transition-colors duration-500"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {member.role}
                        </p>
                        <p
                          className="text-sm font-normal mb-6 text-gray-500 group-hover:text-gray-300 transition-colors duration-500"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {member.department}
                        </p>

                        {/* Experience */}
                        <div
                          className="text-sm font-medium mb-6 text-gray-600 group-hover:text-white transition-colors duration-500"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {member.yearsOfExperience} years experience
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.skills.slice(0, 3).map((skill) => (
                              <span
                                  key={skill}
                                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 text-gray-700 group-hover:bg-white group-hover:text-gray-900 transition-all duration-500"
                                  style={{ fontFamily: 'var(--font-display)' }}
                              >
                          {skill}
                        </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact & Social */}
                      <div className="mt-auto">
                        {showContactButton && (
                            <div className="mb-6">
                              <a
                                  href={`mailto:${member.email}`}
                                  className="inline-block text-sm font-medium text-gray-900 group-hover:text-white hover:text-white underline underline-offset-4 transition-colors duration-200"
                                  style={{ fontFamily: 'var(--font-body)' }}
                              >
                                get in touch
                              </a>
                            </div>
                        )}

                        {/* Social Links */}
                        <div className="flex gap-6">
                          {member.linkedin && (
                              <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium text-gray-600 hover:text-white group-hover:text-white transition-colors duration-500"
                                  style={{ fontFamily: 'var(--font-body)' }}
                              >
                                linkedin
                              </a>
                          )}
                          {member.twitter && (
                              <a
                                  href={member.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium text-gray-600 hover:text-white group-hover:text-white transition-colors duration-500"
                                  style={{ fontFamily: 'var(--font-body)' }}
                              >
                                twitter
                              </a>
                          )}
                          {member.github && (
                              <a
                                  href={member.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium text-gray-600 hover:text-white group-hover:text-white transition-colors duration-500"
                                  style={{ fontFamily: 'var(--font-body)' }}
                              >
                                github
                              </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* </CHANGE> */}
                  </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}
