import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-harlowe-dark text-white border-t border-gray-800">
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4">
              Harlowe<span className="text-harlowe-blue">.</span>
            </h3>
            <p className="text-sm text-gray-400">
              Executive Diagnostic Intelligence for organizational clarity.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              HARLOWE Enterprises, LLC • Established 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/what-we-do" className="hover:text-harlowe-blue transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/deliverables" className="hover:text-harlowe-blue transition-colors">
                  Deliverables
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-harlowe-blue transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-harlowe-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/proof" className="hover:text-harlowe-blue transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-harlowe-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@harloweinvest.com" className="hover:text-harlowe-blue transition-colors">
                  info@harloweinvest.com
                </a>
              </li>
              <li>
                <a href="tel:832-319-9795" className="hover:text-harlowe-blue transition-colors">
                  832-319-9795
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {year} Harlowe Enterprises, LLC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-harlowe-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-harlowe-blue transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
