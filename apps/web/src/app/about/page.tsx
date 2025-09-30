
import { fetchTeamMembers, fetchCompanyStats } from '@repo/api/brand'
import Image from 'next/image'

export default async function AboutUsPage() {
    const [teamMembers, companyStats] = await Promise.all([
        fetchTeamMembers(8),
        fetchCompanyStats()
    ])

    return (<div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            About ACME Corporation
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            We're a team of passionate professionals dedicated to building innovative solutions 
                            that help businesses grow and succeed in the digital age.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-background py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Our Impact
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                Numbers that tell our story
                            </p>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col bg-card/50 border border-border p-8 backdrop-blur-sm">
                                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Years in Business</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                                    {companyStats.yearsInBusiness}+
                                </dd>
                            </div>
                            <div className="flex flex-col bg-card/50 border border-border p-8 backdrop-blur-sm">
                                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Team Members</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                                    {companyStats.employeeCount}
                                </dd>
                            </div>
                            <div className="flex flex-col bg-card/50 border border-border p-8 backdrop-blur-sm">
                                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Projects Completed</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                                    {companyStats.projectsCompleted.toLocaleString()}
                                </dd>
                            </div>
                            <div className="flex flex-col bg-card/50 border border-border p-8 backdrop-blur-sm">
                                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Client Satisfaction</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                                    {companyStats.satisfactionRate}%
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-muted/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Meet Our Team
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            The talented individuals driving our success
                        </p>
                    </div>
                    <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {teamMembers.map((member) => (
                            <li key={member.id}>
                                <div className="text-center group">
                                    <div className="relative">
                                        <Image
                                            className="mx-auto h-24 w-24 rounded-full ring-2 ring-border transition-all group-hover:ring-primary/50"
                                            src={member.avatar}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                        />
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-foreground">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm leading-6 text-muted-foreground">{member.role}</p>
                                    <p className="text-sm leading-6 text-muted-foreground/70">{member.department}</p>
                                    <div className="mt-4">
                                        <p className="text-xs leading-5 text-muted-foreground">
                                            {member.yearsOfExperience} years experience
                                        </p>
                                        <div className="mt-2 flex flex-wrap justify-center gap-1">
                                            {member.skills.slice(0, 3).map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary border border-primary/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}