import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  resources: [
    { name: "Blogs", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Hiring Guides", href: "#" },
    { name: "Support", href: "#" },
  ],
  getStarted: [
    { name: "Pricing", href: "#" },
    { name: "Hiring Solutions", href: "#" },
    { name: "Funded Startups", href: "#" },
    { name: "Free Trial", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Request Demo", href: "#" },
    { name: "Trust", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "CCPA Compliance", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
]

export default function Component() {
  return (
    <footer className="w-full bg-gray-950 dark:bg-gray-950 text-gray-100 dark:text-gray-100 relative overflow-hidden ">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Everything Talent
              </h2>
              <p className="text-gray-400 dark:text-gray-400 text-sm leading-relaxed">
                Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 bg-gray-800/50 hover:bg-gray-700/50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-300">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-300">Get Started</h3>
            <ul className="space-y-3">
              {footerLinks.getStarted.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-300">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* City Skyline Image */}
      <div className="relative w-full">
        <div className=" space-y-4 absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 dark:to-gray-950/50 z-10" />
        <div className="max-h-full h-full w-full  opacity-60">
          <Image
            src="/Skyline.png"
            alt="City skyline illustration"
            width={600}
            height={1900}
            className="object-contain object-bottom w-full"
            priority
          />
        </div>

        {/* Brand Text Overlay */}
        <div className="absolute top-1/5 right-5 lg:right-4 transform -translate-y-1/2 z-20">
          <div className="text-right">
            <div className="text-sm sm:text-xl lg:text-2xl xl:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              EVERYTHINGTALENT.AI
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-0 sm:pt-3 border-t border-gray-800/50 dark:border-gray-800 mb-2">
        <p className="text-gray-400 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Everything Talent Labs, LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
