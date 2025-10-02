import { fetchTeamMembers, fetchCompanyStats } from '@repo/api/brand';
import { TeamSection } from '../../components/team-section';
import {StatsSection} from '../../components/stats-section'
import { Hero } from '@repo/ui/components/hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - ACME Corporation',
  description:
    "We're a team of passionate professionals dedicated to building innovative solutions that help businesses grow and succeed in the digital age.",
  openGraph: {
    title: 'About Us - ACME Corporation',
    description: 'Meet our team of passionate professionals dedicated to building innovative solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - ACME Corporation',
    description: 'Meet our team of passionate professionals dedicated to building innovative solutions.',
  },
};

export default async function AboutUsPage() {
  const [teamMembers, companyStats] = await Promise.all([fetchTeamMembers(8), fetchCompanyStats()]);

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="About ACME"
        description="We're a team of passionate professionals dedicated to building innovative solutions that help businesses grow and succeed in the digital age."
      />
        <TeamSection
            members={teamMembers}
            title="Meet Our Team"
            description="The talented individuals driving our success"
            className="bg-gray-50 py-16 sm:py-24"
        />
      <StatsSection stats={companyStats} />

    </div>
  );
}
