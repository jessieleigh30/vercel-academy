
import { fetchTeamMembers, fetchCompanyStats } from '@repo/api/brand'
import { TeamSection } from '../../components/ui/team-section'
import { StatsCard, StatsGrid } from '../../components/ui/stats-card'

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
                        <StatsGrid columns={4} className="mt-16">
                            <StatsCard
                                value={`${companyStats.yearsInBusiness}+`}
                                label="Years in Business"
                            />
                            <StatsCard
                                value={companyStats.employeeCount}
                                label="Team Members"
                            />
                            <StatsCard
                                value={companyStats.projectsCompleted}
                                label="Projects Completed"
                            />
                            <StatsCard
                                value={`${companyStats.satisfactionRate}%`}
                                label="Client Satisfaction"
                            />
                        </StatsGrid>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <TeamSection 
                members={teamMembers} 
                title="Meet Our Team"
                description="The talented individuals driving our success"
                className="bg-muted/30 py-16 sm:py-24"
            />
        </div>
    )
}