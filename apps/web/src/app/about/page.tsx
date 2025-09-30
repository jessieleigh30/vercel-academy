
import { fetchTeamMembers, fetchCompanyStats } from '@repo/api/brand'
import { TeamSection } from '../../components/team-section'
import { StatsCard, StatsGrid } from '../../components/stats-card'
import { Hero } from '@repo/ui/components/hero'

export default async function AboutUsPage() {
    const [teamMembers, companyStats] = await Promise.all([
        fetchTeamMembers(8),
        fetchCompanyStats()
    ])

    return (<div className="min-h-screen bg-white">
            <Hero 
                title="About ACME Corporation"
                description="We're a team of passionate professionals dedicated to building innovative solutions that help businesses grow and succeed in the digital age."
            />

            {/* Stats Section */}
            <div className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Our Impact
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
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
                className="bg-gray-50 py-16 sm:py-24"
            />
        </div>
    )
}