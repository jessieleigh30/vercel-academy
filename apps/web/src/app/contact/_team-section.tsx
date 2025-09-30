import { TeamMember } from '@repo/api/brand'
import Image from 'next/image'

interface TeamSectionProps {
    members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
    return (
        <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        Our Amazing Team 🌟
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Meet the awesome people behind ACME Corporation 👋
                    </p>
                </div>
                <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {members.map((member) => (
                        <li key={member.id}>
                            <div className="text-center group">
                                <div className="relative">
                                    <Image
                                        className="mx-auto h-24 w-24 rounded-full ring-2 ring-border group-hover:ring-green-400/50 transition-all duration-200"
                                        src={member.avatar}
                                        alt={member.name}
                                        width={96}
                                        height={96}
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                                        <span className="text-xs">✨</span>
                                    </div>
                                </div>
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-foreground">
                                    {member.name}
                                </h3>
                                <p className="text-sm leading-6 text-muted-foreground">{member.role}</p>
                                <p className="text-sm leading-6 text-muted-foreground/70">{member.department}</p>
                                <div className="mt-4">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300 transition-all duration-200"
                                    >
                                        📧 Contact
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}