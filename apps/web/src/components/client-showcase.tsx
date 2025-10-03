import Image from 'next/image';

interface ClientProps {
  id: string;
  name: string;
  logo: string;
  industry?: string;
  projectType?: string;
  featured?: boolean;
}

interface ClientShowcaseProps {
  clients: ClientProps[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ClientShowcase({
  clients,
  title = 'Trusted Partners',
  subtitle = "We collaborate with forward-thinking organizations to create exceptional digital experiences.",
  className = '',
}: ClientShowcaseProps) {
  return (
    <div className={`bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-gray-900 leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
          <p className="mt-8 text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {subtitle}
          </p>
        </div>

        {/* Client Grid - Simplified Unified Layout */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative bg-white hover:bg-gray-50 transition-colors duration-200 p-8 flex items-center justify-center min-h-[180px]"
            >
              <div className="text-center">
                <Image
                  className="h-12 w-auto object-contain mx-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                />
                <p
                  className="mt-4 text-sm font-bold uppercase tracking-wide text-gray-500 group-hover:text-gray-900 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
