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
  subtitle = "Real stories from the amazing people we work with",
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
            <p className="mt-8 text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              {subtitle}
            </p>
            <div className="mt-12 h-1 w-24 bg-blue-600"></div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-12 lg:space-y-16">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`group ${index % 2 === 1 ? 'lg:ml-16' : ''}`}>
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-blue-600">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-2xl ${i < Math.floor(testimonial.rating) ? 'text-blue-600' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-1xl sm:text-2xl font-medium text-gray-900 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full ring-4 ring-white shadow-lg"
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                  />
                  <div className="ml-6">
                    <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                      {testimonial.author.role} • {testimonial.author.company}
                    </div>
                  </div>
                </div>

                {testimonial.featured && (
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-none" style={{ fontFamily: 'var(--font-display)' }}>
                      Featured Client
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}