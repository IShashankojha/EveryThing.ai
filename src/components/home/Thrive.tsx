import Image from "next/image"
import { Users, Lightbulb, Zap, TrendingUp, Star, Trophy } from "lucide-react"

const thriveFeatures = [
	{
		id: 1,
		icon: <Users className="h-6 w-6 text-foreground/80" />,
		title: "Community-Driven",
		description: "We build strong connections and foster collaboration within our team.",
	},
	{
		id: 2,
		icon: <Lightbulb className="h-6 w-6 text-foreground/80" />,
		title: "Innovation First",
		description: "We encourage creative thinking and novel approaches to challenges.",
	},
	{
		id: 3,
		icon: <Zap className="h-6 w-6 text-foreground/80" />,
		title: "Action Oriented",
		description: "We transform ideas into tangible results through decisive action.",
	},
	{
		id: 4,
		icon: <TrendingUp className="h-6 w-6 text-foreground/80" />,
		title: "Continuous Growth",
		description: "We embrace learning and development as core principles.",
	},
	{
		id: 5,
		icon: <Star className="h-6 w-6 text-foreground/80" />,
		title: "Excellence Pursuit",
		description: "We strive for exceptional quality in everything we do.",
	},
	{
		id: 6,
		icon: <Trophy className="h-6 w-6 text-foreground/80" />,
		title: "Shared Success",
		description: "We celebrate achievements and grow together as one team.",
	},
]

export default function Component() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10 ">
			{/* Background Mask */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

			{/* Decorative Elements */}
			<div className="absolute right-20 top-8 h-16 w-16 rounded-full bg-gradient-to-br from-purple-400/80 to-pink-400/80 opacity-80 dark:from-purple-600/50 dark:to-pink-600/50">
				<div className="flex h-full w-full items-center justify-center rounded-full bg-white/20 dark:bg-white/10">
					<div className="h-8 w-8 rounded-full bg-white/30 dark:bg-white/5"></div>
				</div>
			</div>

			<div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
					{/* Left Image */}
					<div className="order-2 lg:order-1">
						<div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-purple-100/20 dark:shadow-purple-500/10">
							<Image
								src="/image.png"
								alt="Professional woman working on laptop with analytics charts in background"
								width={1200}
								height={1200}
								className="h-auto w-full object-cover transition-opacity duration-300 dark:opacity-90"
								priority
							/>
						</div>
					</div>

					{/* Right Content */}
					<div className="order-1 space-y-8 lg:order-2">
						<div className="space-y-6">
							<h1 className="text-sm font-bold leading-tight sm:text-sm lg:text-2xl">
								<span className="text-gradient bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
									How We Thrive
								</span>
							</h1>

							<p className="text-base leading-relaxed text-muted-foreground sm:text-sm">
								At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn,
								and push boundaries—fostering shared growth and a relentless pursuit of excellence.
							</p>
						</div>

						{/* Features Grid */}
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-3">
							{thriveFeatures.map((feature) => (
								<div
									key={feature.id}
									className="group rounded-xl border border-border bg-card/50 p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-border/50 dark:bg-card/10"
								>
									<div className="space-y-1">
										<div className="flex h-4 w-4 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100/80 to-pink-100/80 dark:from-purple-900/50 dark:to-pink-900/50 transition-colors duration-300 group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-800/50 dark:group-hover:to-pink-800/50">
											{feature.icon}
										</div>
										<p className="text-xs font-semibold text-foreground lg:text-sm">{feature.title}</p>
										<p className="text-xs leading-relaxed text-muted-foreground">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

			 
			</div>
 
		</div>
	)
}
