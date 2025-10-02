import { StatsCard, StatsGrid } from "./stats-card"

interface CompanyStats {
  yearsInBusiness: number
  employeeCount: number
  projectsCompleted: number
  clientCount: number
  countriesServed: number
  satisfactionRate: number
}

interface StatsSectionProps {
  stats: CompanyStats
  title?: string
  subtitle?: string
  className?: string
}

export function StatsSection({
                               stats,
                               title = "Why Choose ACME?",
                               subtitle = "Numbers that tell our story",
                               className = "",
                             }: StatsSectionProps) {
  return (
      <div className={`bg-gray-50 py-24 sm:py-32 ${className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-20">
              <h2
                  className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none"
                  style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h2>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                {subtitle}
              </p>
            </div>
            <StatsGrid columns={6}>
              <StatsCard value={`${stats.yearsInBusiness}+`} label="Years Strong" icon="" index={0} />
              <StatsCard value={stats.employeeCount} label="Amazing Team" icon="" index={1} />
              <StatsCard value={stats.projectsCompleted} label="Projects Delivered" icon="" index={2} />
              <StatsCard value={stats.clientCount} label="Happy Clients" icon="" index={3} />
              <StatsCard value={`${stats.countriesServed}+`} label="Countries Served" icon="" index={4} />
              <StatsCard value={`${stats.satisfactionRate}%`} label="Satisfaction Rate" icon="" index={5} />
            </StatsGrid>
          </div>
        </div>
      </div>
  )
}
