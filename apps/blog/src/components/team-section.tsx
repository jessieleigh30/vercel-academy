import Image from 'next/image';
import { TeamMember } from '@repo/api/brand';

export interface TeamSectionProps {
  members: TeamMember[];
  title?: string;
  description?: string;
  variant?: 'default' | 'compact' | 'detailed';
  columns?: 2 | 3 | 4 | 5;
  showContactButton?: boolean;
  className?: string;
}

export function TeamSection({
  members,
  title = 'Meet Our Team',
  description = 'The talented individuals driving our success',
  variant = 'default',
  columns = 4,
  showContactButton = false,
  className = '',
}: TeamSectionProps) {
  const getGridCols = (cols: number) => {
    const colsMap = {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-2 lg:grid-cols-3',
      4: 'sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4',
      5: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    };
    return colsMap[cols] || colsMap[4];
  };

  const getImageSize = (variant: string) => {
    switch (variant) {
      case 'compact':
        return 'h-16 w-16';
      case 'detailed':
        return 'h-32 w-32';
      default:
        return 'h-24 w-24';
    }
  };

  const getSpacing = (variant: string) => {
    switch (variant) {
      case 'compact':
        return 'gap-x-4 gap-y-8';
      case 'detailed':
        return 'gap-x-8 gap-y-20';
      default:
        return 'gap-x-8 gap-y-16';
    }
  };

  return (
    <div className={className}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            {title} 🌟
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">{description}</p>
        </div>

        {/* Team Grid */}
        <ul className={`mx-auto mt-16 grid max-w-2xl grid-cols-1 ${getSpacing(variant)} ${getGridCols(columns)}`}>
          {members.map((member) => (
            <li key={member.id}>
              <div className="text-center group">
                <div className="relative">
                  <Image
                    className={`mx-auto ${getImageSize(variant)} rounded-full ring-2 ring-gray-600 group-hover:ring-blue-400/50 transition-all duration-200`}
                    src={member.avatar}
                    alt={member.name}
                    width={variant === 'detailed' ? 128 : variant === 'compact' ? 64 : 96}
                    height={variant === 'detailed' ? 128 : variant === 'compact' ? 64 : 96}
                  />
                  {variant !== 'compact' && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                      <span className="text-xs">✨</span>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{member.name}</h3>
                <p className="text-sm leading-6 text-gray-300">{member.role}</p>
                <p className="text-sm leading-6 text-gray-400">{member.department}</p>

                {/* Additional Info for non-compact variants */}
                {variant !== 'compact' && (
                  <div className="mt-4">
                    <p className="text-xs leading-5 text-gray-400">{member.yearsOfExperience} years experience</p>

                    {/* Skills */}
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      {member.skills.slice(0, variant === 'detailed' ? 5 : 3).map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-md bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-400 border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Contact Button */}
                    {showContactButton && (
                      <div className="mt-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300 transition-all duration-200"
                        >
                          📧 Contact
                        </a>
                      </div>
                    )}

                    {/* Detailed variant extras */}
                    {variant === 'detailed' && (
                      <div className="mt-4">
                        {member.bio && <p className="text-xs text-gray-400 line-clamp-3">{member.bio}</p>}

                        {/* Social Links */}
                        <div className="mt-3 flex justify-center gap-2">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                            >
                              💼
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                            >
                              🐦
                            </a>
                          )}
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              👨‍💻
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
