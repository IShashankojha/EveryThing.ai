import { Briefcase } from "lucide-react"

const philosophyCards = [
	{
		id: "01",
		title: "With us, there are no surprises—just straight talk and genuine commitment.",
		category: "#HONESTY",
		bgColor: "bg-yellow-400",
		textColor: "text-yellow-900",
		size: "md",
	},
	{
		id: "03",
		title: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
		category: "#URGENCY",
		bgColor: "bg-purple-600",
		textColor: "text-white",
		size: "md",
		hasAvatars: true,
	},
	{
		id: "02",
		title: "Embrace hard work",
		category: "#HARDWORK",
		bgColor: "bg-orange-400",
		textColor: "text-orange-900",
		size: "md",
		icon: <Briefcase className="w-8 h-8" />,
	},
	 
	{
		id: "07",
		title: "We value fresh ideas, bold solutions, and the freedom to imagine what's next.",
		category: "#CREATIVITY",
		bgColor: "bg-pink-400",
		textColor: "text-pink-900",
		size: "lg",
	},
	{
		id: "08",
		title: "Commit to continuous learning and improvement",
		category: "#LEARNING",
		bgColor: "bg-blue-300",
		textColor: "text-blue-900",
		size: "lg", // Changed back to "lg" to take 3 columns and fill the empty space
	},
  {
		id: "05",
		title: "We're here to help you aim higher, break limits, and achieve what others might think impossible.",
		category: "#ASPIRATION",
		bgColor: "bg-green-400",
		textColor: "text-green-900",
		size: "md",
	},
	{
		id: "06",
		title: "DO HARD THINGS",
		category: "#RESILIENT",
		bgColor: "bg-gray-400",
		textColor: "text-gray-900",
		size: "md",
		isLarge: true,
	},
	{
		id: "04",
		title: "Grow 1% every day",
		category: "#GROWTHMINDSET",
		bgColor: "bg-emerald-300",
		textColor: "text-emerald-900",
		size: "md",
	},
	{
		id: "10",
		title: "Every project, every solution we create is aimed at contributing to something greater.",
		category: "#CONTRIBUTION",
		bgColor: "bg-yellow-300",
		textColor: "text-yellow-900",
		size: "lg",
	},
	{
		id: "09",
		title: "Build trust through actions, not just words.",
		category: "#TRUST",
		bgColor: "bg-red-400",
		textColor: "text-red-900",
		size: "lg",
	},
]

export default function Component() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10">
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

		 

			<div className="container relative mx-auto px-6 py-16 lg:py-24">
				{/* Header Section */}
				<div className="mb-16 space-y-6 text-center">
					<div className="inline-block">
						<span className="text-sm font-medium tracking-wide text-purple-600 dark:text-purple-400 uppercase">
							Our Values
						</span>
					</div>

					<h1 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl">
						Our Philosophy in{" "}
						<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
							Action
						</span>
					</h1>

					<p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
						At Everything Talent, Bringing Our Values to Life Through Meaningful
						Actions
					</p>
				</div>

				{/* Bento Grid */}
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
					{philosophyCards.map((card) => (
						<div
							key={card.id}
							className={`${
								card.size === "lg"
									? "lg:col-span-3 xl:col-span-3"
									: card.size === "md"
									? "lg:col-span-2 xl:col-span-2"
									: "lg:col-span-1 xl:col-span-1"
							} group relative overflow-hidden rounded-3xl ${card.bgColor} dark:bg-opacity-80 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]`}
						>
							<div className="mb-4 text-sm font-bold opacity-70">{card.id}</div>
							{card.icon && <div className="mb-4">{card.icon}</div>}
							<h3
								className={`mb-4 font-bold leading-tight ${
									card.isLarge
										? "text-2xl font-black"
										: card.size === "lg"
										? "text-xl"
										: "text-lg"
								} ${card.textColor} dark:text-opacity-90`}
							>
								{card.title}
							</h3>
							<div className="flex items-center justify-between">
								<div
									className={`text-sm font-bold opacity-70 ${card.textColor} dark:text-opacity-90`}
								>
									{card.category}
								</div>
								{card.hasAvatars && (
									<div className="flex -space-x-2">
										{[1, 2, 3, 4, 5].map((i) => (
											<div
												key={i}
												className="h-8 w-8 rounded-full border-2 border-white/30 bg-white/20 transition-transform duration-300 group-hover:scale-110"
											/>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
