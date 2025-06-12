"use client"

import Lenis from 'lenis'
import { useEffect } from "react"
import { useTransform, motion, useScroll } from "framer-motion"
import type { MotionValue } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

const journeyData = [
	{
		year: "2022",
		title: "The Beginning",
		description:
			"Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
		src: "/Stack1.png",
		link: "/Stack1.png",
		color: "#8f89ff",
		stats: [
			{ value: "10+", label: "Features" },
			{ value: "1M+", label: "DataProcessed" },
			{ value: "1K+", label: "Clients" },
		],
	},
	{
		year: "2023",
		title: "ML Integration",
		description:
			"Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
		src: "/stack3.png",
		link: "/stack3.png",
		color: "#13006c",
		stats: [
			{ value: "+30%", label: "Accuracy" },
			{ value: "15+", label: "Integrations" },
			{ value: "25K+", label: "Users" },
		],
	},
	{
		year: "2024",
		title: "Everything AI 2.0",
		description:
			"Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
		src: "/stack2.png",
		link: "/stack2.png",
		color: "#5196fd",
		stats: [
			{ value: "50K+", label: "Users" },
			{ value: "98%", label: "Accuracy" },
			{ value: "2x faster", label: "Processing" },
		],
	},
]

export default function JourneySection() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	})

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			wheelMultiplier: 1,
			smoothWheel: true,
		})

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [])

	return (
		<main className="relative min-h-screen bg-background selection:bg-purple-300/10" ref={container}>
			<>
				<section className="text-gray-900 dark:text-white h-[35vh] w-full grid place-content-center relative">
					{/* Decorative Elements */}
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(216,180,254,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

					<div className="container mx-auto px-6 text-center relative z-10 space-y-8">
						<div className="inline-block rounded-lg bg-white dark:bg-gray-50 border-gray-200/50 dark:border-gray-700/50 px-2 py-1  backdrop-blur-sm shadow-sm text-sm">
							<span className="text-gray-900 dark:text-purple text-sm tracking-wide ">
								Our Values & Milestones
							</span>
						</div>
						<h1 className="text-black dark:text-gray-400 text-2xl lg:text-4xl font-bold leading-tight tracking-tight">
							Our{" "}
							<span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
								Journey
							</span>
						</h1>

						<p className="text-white to to-black dark:text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
							Explore the milestones that have shaped our path to innovation, where every step brings us closer to
							transforming the future.
						</p>

						<button className="bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 dark:shadow-purple-900/20 dark:hover:shadow-purple-900/30">
							<Mail className="w-4 h-4" />
							Subscribe to Updates
						</button>
					</div>
				</section>
			</>

			<section className="w-full">
{journeyData.map((project, i) => {
	const targetScale = 1 - (journeyData.length - i) * 0.05
	return (
		<Card
			key={`journey_${i}`}
			i={i}
			url={project?.link}
			year={project?.year}
			title={project?.title}
			description={project?.description}
			stats={project?.stats}
			progress={scrollYProgress}
			range={[i * 0.25, 1]}
			targetScale={targetScale}
		/>
	)
})}
			</section>
 
		</main>
	)
}

interface CardProps {
	i: number
	year: string
	title: string
	description: string
	url: string
	stats: { value: string; label: string }[]
	progress: MotionValue<number>
	range: [number, number]
	targetScale: number
}

export const Card: React.FC<CardProps> = ({
	i,
	year,
	title,
	description,
	url,
	stats,
	progress,
	range,
	targetScale,
}) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div ref={container} className="h-[80vh] flex items-center justify-center sticky top-0">
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className={`flex flex-col relative -top-[5%] h-[600px] w-[90%] lg:w-[85%] max-w-6xl rounded-3xl p-6 sm:p-8 lg:p-10 origin-top 
          shadow-lg backdrop-blur-sm bg-card border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300
          bg-gradient-to-br from-white to-white/90 hover:from-white hover:to-white/95
          dark:from-gray-900/90 dark:to-gray-800/90 dark:hover:from-gray-900/95 dark:hover:to-gray-800/95
          dark:shadow-purple-900/20`}
			>
				<div className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center h-full`}>
					<div className={`space-y-5 lg:space-y-6`}>
						<div className="space-y-4">
							<div className="inline-flex px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30">
								<div className="text-purple-700 dark:text-purple-300 font-medium text-sm tracking-wide uppercase">{title}</div>
							</div>
							<h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight">{year}</h2>
							<p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl">{description}</p>
						</div>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
							{stats.map((stat, statIndex) => (
								<div
									key={statIndex}
									className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4
                    transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group
                    hover:bg-gradient-to-br hover:from-purple-50 hover:to-white dark:hover:from-purple-900/20 dark:hover:to-gray-900
                    dark:shadow-purple-900/10"
								>
									<div className="text-xl lg:text-2xl font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">{stat.value}</div>
									<div className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">{stat.label}</div>
								</div>
							))}
						</div>

						<span className="flex items-center gap-2 pt-2">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-purple-600 dark:text-purple-400"
                            >
                                <path
                                    d="M17.5 12h-15m15 0L12 7m5.5 5L12 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
						</span>
					</div>

					<div className={`relative rounded-2xl overflow-hidden flex items-center justify-center h-[400px] bg-white/50 dark:bg-gray-800/50`}>
						<motion.div 
							className={`w-full h-full flex items-center justify-center p-4`} 
							style={{ scale: imageScale }}
						>
							<div className="relative w-[640px] h-[400px] max-w-full max-h-full">
								<Image 
									src={url || "/placeholder.svg"} 
									alt={`${title} - ${year}`} 
									width={640}
									height={400}
									style={{ 
										objectFit: 'contain',
										width: '100%',
										height: '100%'
									}}
									className="object-contain rounded-lg" 
									priority
								/>
							</div>
						</motion.div>

						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

						{/* Decorative Elements */}
						<div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
