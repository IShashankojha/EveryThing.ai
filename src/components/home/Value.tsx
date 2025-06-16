import { Briefcase } from "lucide-react"

const philosophyCards = [
	{
		id: "01",
		title: "With us, there are no surprises—just straight talk and genuine commitment.",
		category: "#HONESTY",
		bgColor: "bg-yellow-300",
		textColor: "text-black/30",
		size: "md",
	},
	{
		id: "03",
		title: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
		category: "#URGENCY",
		bgColor: "bg-violet-500",
		textColor: "text-white",
		size: "md",
		hasAvatars: true,
	},
	{
		id: "02",
		title: "Embrace hard work",
		category: "#HARDWORK",
		bgColor: "bg-orange-300",
		textColor: "text-orange-900",
		size: "md",
		icon: <Briefcase className="w-8 h-8" />,
	},
	{
		id: "07",
		title: "We value fresh ideas, bold solutions, and the freedom to imagine what's next.",
		category: "#CREATIVITY",
		bgColor: "bg-rose-300",
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
		bgColor: "bg-lime-300",
		textColor: "text-green-900",
		size: "md",
	},
	{
		id: "06",
		title: "DO HARD THINGS",
		category: "#RESILIENT",
		bgColor: "bg-zinc-300",
		textColor: "text-gray-900",
		size: "md",
		isLarge: true,
	},
	{
		id: "04",
		title: "Grow 1% every day",
		category: "#GROWTHMINDSET",
		bgColor: "bg-green-200",
		textColor: "text-emerald-900",
		size: "md",
	},
	{
		id: "10",
		title: "Every project, every solution we create is aimed at contributing to something greater.",
		category: "#CONTRIBUTION",
		bgColor: "bg-[#F5E660]",
		textColor: "text-yellow-900",
		size: "lg",
	},
	{
		id: "09",
		title: "Build trust through actions, not just words.",
		category: "#TRUST",
		bgColor: "bg-[#F77C73]",
		textColor: "text-red-900",
		size: "lg",
	},
]

function Eight() {
	return (
		<div
			className="sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3 group relative overflow-hidden rounded-3xl bg-blue-300 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
		>
			<div className="mb-4 text-sm font-bold opacity-70">08</div>
			<h3 className="mb-4 text-lg sm:text-xl font-bold leading-tight text-blue-900 dark:text-opacity-90">
				Commit to continuous learning and improvement
			</h3>
			<div className="flex items-center justify-between">
				<div className="text-sm font-bold opacity-70 text-blue-900 dark:text-opacity-90">
					#LEARNING
				</div>
			</div>
		</div>
	)
}

export default function Component() {
	return (
<div className="relative w-full overflow-hidden bg-dot-pattern bg-background selection:bg-purple-300/10">
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
             
			{/* Decorative Elements */}
			<img
				alt="decorative line"
				loading="lazy"
				width={718}
				height={40}
				decoding="async"
				data-nimg="1"
				className="mb-0 mx-auto"
				style={{ color: "transparent", zIndex: 44 }}
				srcSet="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurve-line3.b1dd3166.png&w=768&q=75 1x,https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurve-line3.b1dd3166.png&w=768&q=752x"
				src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurve-line3.b1dd3166.png&w=768&q=75;"
			/>
 
			<div className="container relative mx-auto px-4 sm:px-6 md:px-8 pt-0 sm:pt-0 lg:pt-0 pb-12 sm:pb-16 lg:pb-24">
				 
          <div className="flex justify-center mb-6  mx-auto items-center border p-[6px] border-white bg-gradient-to-br from-[#1b8afa32] via-[#da16c62f] to-[#fed91e1a] rounded-full w-fit  ">
            <div className="w-15 h-15 bg-gradient-to-br from-blue-200 via-pink-500 to-blue-200 dark:from-blue-600 dark:via-pink-400 dark:to-orange-500 rounded-full flex items-center justify-center shadow-lg">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-slack-icon lucide-slack"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>
            </div>
          </div>
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
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6">
					{philosophyCards.map((card) => {
						if (card.id === "08") {
							return <Eight key="08" />
						}
						return (
							<div
								key={card.id}
								className={`${
									card.size === "lg"
										? "sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3"
										: card.size === "md"
										? "sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
										: "sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
								} group relative overflow-hidden rounded-3xl ${card.bgColor} dark:bg-opacity-80 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]`}
							>
								<div className="mb-4 text-sm font-bold opacity-70">{card.id}</div>
								{card.icon && <div className="mb-4">{card.icon}</div>}
								<h3
									className={`mb-4 font-bold leading-tight ${
										card.isLarge
											? "text-xl sm:text-2xl font-black"
											: card.size === "lg"
											? "text-lg sm:text-xl"
											: "text-base sm:text-lg"
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
						)
					})}
				</div>
			</div>
		</div>
	)
}
