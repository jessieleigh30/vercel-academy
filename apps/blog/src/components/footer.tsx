import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="xl:col-span-1">
            <Link href={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                ACME
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Insights, tutorials, and stories from the ACME team. Building the future, one post at a time.
            </p>
          </div>

          {/* Links */}
          <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white">Main Site</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a 
                    href={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href={`${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/about`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href={`${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/contact`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Blog</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link 
                    href="/"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Latest Posts
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/?category=technology"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/?category=design"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ACME Corporation. Made with love and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}