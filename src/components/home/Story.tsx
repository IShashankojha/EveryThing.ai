import Image from "next/image"
import { CircleIcon, Users, Brain, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function StorySection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Top decorative circle */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/80 to-pink-500/80 opacity-80 blur-sm dark:from-purple-600/50 dark:to-pink-600/50" />
      </div>

      {/* Main content container */}
      <div className="container relative mx-auto px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                The{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                  Story
                </span>{" "}
                Behind Us
              </h2>
              <p className="max-w-md text-muted-foreground">
                It all started with one question: What if hiring didn't have to feel like gambling on a hunch?
              </p>
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* AI-Powered Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="space-y-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <CircleIcon className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground">Advanced AI/ML algorithms for precise matching</p>
                </CardContent>
              </Card>

              {/* Human-Centric Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="space-y-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <Users className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Human-Centric</h3>
                  <p className="text-sm text-muted-foreground">Built by recruiters, for recruiters</p>
                </CardContent>
              </Card>

              {/* Skill Assessment Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="space-y-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <Brain className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Skill Assessment</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive skill evaluation system</p>
                </CardContent>
              </Card>

              {/* Future-Ready Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="space-y-2 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <Rocket className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Future-Ready</h3>
                  <p className="text-sm text-muted-foreground">Constantly evolving with industry needs</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-purple-100/20 dark:ring-purple-100/10">
              <Image
                src="/Story-img.jpeg"
                alt="Team collaboration meeting"
                width={500}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative circle */}
      <div className="absolute bottom-10 right-1/4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/80 to-pink-500/80 opacity-80 blur-sm dark:from-purple-600/50 dark:to-pink-600/50" />
      </div>

      {/* Values section indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors">
          <div className="text-xs font-bold text-white">+</div>
        </div>
       </div>

      {/* Decorative curve */}
      <div className="absolute bottom-20 right-0 h-40 w-1/3 rounded-tl-full border-t-2 border-purple-100/50 dark:border-purple-100/10" />
    </section>
  )
}
