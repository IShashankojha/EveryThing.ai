import Image from "next/image"
import { CircleIcon, Users, Brain, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function StorySection() {
  return (
<section className="relative w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

       <div style={{zIndex: 45}} className="h-40 pt-1 w-[1.5px] relative mx-auto bg-gradient-to-t from-blue-500 via-purple-600 to-yellow-300/40"></div>
          <div className="flex justify-center mb-6  mx-auto items-center border p-[6px] border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] rounded-full w-fit  ">
            <div className="w-15 h-15 bg-gradient-to-br from-blue-200 via-pink-500 to-blue-200 dark:from-blue-600 dark:via-pink-400 dark:to-orange-500 rounded-full flex items-center justify-center shadow-lg">
             
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> 
         </div>
          </div>
   
      {/* Main content container */}
      <div className="container relative mx-auto px-4 py-15">
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
                It all started with one question: What if hiring didn&apos;t have to feel like gambling on a hunch?
              </p>
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              {/* AI-Powered Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-transparent bg-clip-padding shadow-[0_0_0_1px] shadow-purple-300 dark:shadow-purple-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    <CircleIcon className="h-5 w-5 text-purple-800 dark:text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground">Advanced AI/ML algorithms for precise matching</p>
                </CardContent>
              </Card>

                {/* Human-Centric Card */}
                <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                  <CardContent className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-transparent bg-clip-padding shadow-[0_0_0_1px] shadow-purple-300 dark:shadow-purple-600">
                    <div className="flex h-15 w-10 items-center justify-center rounded-full">
                      <Users className="h-5 w-5 text-purple-800 dark:text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Human-Centric</h3>
                    <p className="text-sm text-muted-foreground">Built by recruiters, for recruiters</p>
                  </CardContent>
                </Card>

              {/* Skill Assessment Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-transparent bg-clip-padding shadow-[0_0_0_1px] shadow-purple-300 dark:shadow-purple-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    <Brain className="h-5 w-5 text-purple-800 dark:text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Skill Assessment</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive skill evaluation system</p>
                </CardContent>
              </Card>

              {/* Future-Ready Card */}
              <Card className="group border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-border/50">
                <CardContent className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-transparent bg-clip-padding shadow-[0_0_0_1px] shadow-purple-300 dark:shadow-purple-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    <Rocket className="h-5 w-5 text-purple-800 dark:text-purple-500" />
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

    </section>
  )
}
