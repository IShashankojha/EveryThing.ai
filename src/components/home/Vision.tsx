import Image from "next/image"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10">
      {/* Background Pattern */}
     <div className="relative h-full w-full bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
      {/* Top Gradient Circle */}
      <div className="absolute top-8 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/80 to-pink-500/80 opacity-70 blur-sm dark:from-purple-600/50 dark:to-pink-600/50 rounded-full" />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 dark:from-purple-600 dark:via-pink-600 dark:to-purple-700 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-background rounded-full opacity-90" />
            </div>
          </div>

          {/* Our Standards Badge */}
          <div className="mb-8">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm tracking-wide">Our Standards</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-10 leading-tight">
            The Fuel for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-md md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
          </p>

          {/* Navigation Pills */}
          <div className="bg-background dark:bg-background rounded-full p-1 mb-10 max-w-max mx-auto shadow-sm border border-muted">
            <div className="flex flex-wrap rounded-full justify-center gap-5">
              <Badge
                variant="secondary"
                className="rounded-full text-black bg-purple-200 hover:bg-purple-300 transition-colors dark:bg-purple-200 dark:text-black dark:hover:bg-purple-300 text-sm font-medium px-6 py-2"
              >
                Ambition
              </Badge>
              <Badge 
                variant="outline" 
                className="rounded-full px-6 py-2 text-black bg-purple-200 hover:bg-purple-300 transition-colors dark:bg-purple-200 dark:text-black dark:hover:bg-purple-300 text-sm font-medium"
              >
                Satisfaction
              </Badge>
              <Badge 
                variant="outline" 
                className="rounded-full px-6 py-2 text-black bg-purple-200 hover:bg-purple-300 transition-colors dark:bg-purple-200 dark:text-black dark:hover:bg-purple-300 text-sm font-medium"
              >
                Integrity
              </Badge>
              <Badge 
                variant="outline" 
                className="rounded-full px-6 py-2 text-black bg-purple-200 hover:bg-purple-300 transition-colors dark:bg-purple-200 dark:text-black dark:hover:bg-purple-300 text-sm font-medium"
              >
                Vigilance
              </Badge>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Connecting Talent and Opportunity
              </h2>
              <h3 className="text-xl font-semibold text-foreground/90 mb-6">Ambition</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
              Hiring doesn&apos;t have to be a painful guessing game. We&apos;re bridging the gap between recruiters and
              software engineers through our platform, where talent and opportunity finally meet, creating the perfect
              match.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-muted-foreground">Connect skilled developers with ideal roles</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-muted-foreground">Streamline tech recruitment process</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-muted-foreground">Create optimal candidate-company matches</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ambition.jpg"
                alt="Professional team of business people"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-70" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Circles */}
      </div>
  )
}
