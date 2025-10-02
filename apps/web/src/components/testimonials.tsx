import Image from 'next/image'

interface TestimonialProps {
  id: string
  content: string
  rating: number
  featured: boolean
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
}

interface TestimonialsProps {
  testimonials: TestimonialProps[]
  title?: string
  subtitle?: string
  className?: string
}

export function Testimonials({
  testimonials,
  title = "What Our Clients Say",
  className = ""
}: TestimonialsProps) {
  return (
    <div className={`bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h2>
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="border-b border-gray-200 pb-16 last:border-b-0">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-gray-900">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-xl ${i < Math.floor(testimonial.rating) ? 'text-gray-900' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                  />
                  <div className="ml-4">
                    <div className="text-base font-black uppercase tracking-tight text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}