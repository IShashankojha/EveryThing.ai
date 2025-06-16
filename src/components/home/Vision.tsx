import Image from "next/image"
import { Check } from "lucide-react"
import { AnimatedTabs } from "@/components/ui/animated-tabs"

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10">
      {/* Background Pattern */}
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      {/* Top Gradient Circle */}
      <div className="absolute top-8 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/80 to-pink-500/80 opacity-70 blur-sm dark:from-purple-600/50 dark:to-pink-600/50 rounded-full" />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div style={{zIndex: 45}} className="h-40 pt-1 w-[1.5px] relative mx-auto bg-gradient-to-t from-blue-500 via-purple-600 to-yellow-300/40"></div>
          <div className="flex justify-center mb-6  mx-auto items-center border p-[6px] border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] rounded-full w-fit  ">
            <div className="w-15 h-15 bg-gradient-to-br from-blue-200 via-pink-500 to-blue-200 dark:from-blue-600 dark:via-pink-400 dark:to-orange-500 rounded-full flex items-center justify-center shadow-lg">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-telescope-icon lucide-telescope"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/><circle cx="12" cy="13" r="2"/></svg>
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
            <AnimatedTabs tabs={[
              { label: "Ambition" },
              { label: "Satisfaction" },
              { label: "Integrity" },
              { label: "Vigilance" },
            ]} />
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
