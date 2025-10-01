import Image from 'next/image'
import { TeamMember } from '@repo/api/brand'

export interface TeamSectionProps {
  members: TeamMember[]
  title?: string
  description?: string
  variant?: 'default' | 'compact' | 'detailed'
  columns?: 2 | 3 | 4 | 5
  showContactButton?: boolean
  className?: string
}

export function TeamSection({ 
  members, 
  title = "Meet Our Team",
  description = "The talented individuals driving our success",
  variant = 'default',
  columns = 3,
  showContactButton = false,
  className = ''
}: TeamSectionProps) {
  const getCardClass = (index: number) => {
    // Create varied heights for dynamic layout
    const heightVariants = [
      "min-h-[400px]", // Standard
      "min-h-[450px]", // Taller
      "min-h-[380px]", // Shorter
      "min-h-[420px]", // Medium
    ]
    
    const heightClass = heightVariants[index % heightVariants.length]
    
    // All cards start white, go dark on hover with subtle fade
    const cardClass = `group relative transition-all duration-700 hover:scale-[1.02] ${heightClass} bg-white border border-gray-100 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700`
    
    return cardClass
  }

  return (
    <div className={`bg-gray-50 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {description}
          </p>
          <div className="mt-8 h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member, index) => {
            const cardClass = getCardClass(index)
            
            return (
              <div key={member.id} className={cardClass}>
                <div className="p-8 h-full flex flex-col text-center">
                  {/* Member Photo */}
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <Image
                        className="w-32 h-32 rounded-none object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-200"
                        src={member.avatar}
                        alt={member.name}
                        width={128}
                        height={128}
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 group-hover:bg-blue-400 transition-colors duration-700 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2 text-gray-900 group-hover:text-white transition-colors duration-700" style={{ fontFamily: 'var(--font-display)' }}>
                      {member.name}
                    </h3>
                    <p className="text-lg font-medium mb-1 text-blue-600 group-hover:text-blue-300 transition-colors duration-700" style={{ fontFamily: 'var(--font-body)' }}>
                      {member.role}
                    </p>
                    <p className="text-sm uppercase tracking-wide mb-6 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" style={{ fontFamily: 'var(--font-display)' }}>
                      {member.department}
                    </p>

                    {/* Experience & Skills */}
                    <div className="text-sm font-medium mb-6 text-gray-700 group-hover:text-gray-300 transition-colors duration-700" style={{ fontFamily: 'var(--font-body)' }}>
                      {member.yearsOfExperience} Years Experience
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-none bg-blue-50 text-blue-700 border border-blue-200 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all duration-700"
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
                      <div className="mb-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          Get In Touch
                        </a>
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-600 hover:text-blue-600 group-hover:text-gray-400 group-hover:hover:text-blue-300 transition-colors duration-700"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-600 hover:text-blue-600 group-hover:text-gray-400 group-hover:hover:text-blue-300 transition-colors duration-700"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Twitter
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-600 hover:text-gray-900 group-hover:text-gray-400 group-hover:hover:text-white transition-colors duration-700"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}