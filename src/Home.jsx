import React, { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import accountingIcon from "./assets/accounting.png";
import supportIcon from "./assets/support.png";
import codingIcon from "./assets/coding.png";
import networkIcon from "./assets/network.png";
import salesIcon from "./assets/sales.png";
import Banner from "./assets/Banner_1.png";

const categories = [
	{
		name: "Accounting & Finance",
		icon: accountingIcon,
		href: "#",
	},
	{
		name: "Customer Support",
		icon: supportIcon,
		href: "#",
	},
	{
		name: "Development & Engineering",
		icon: codingIcon,
		href: "#",
	},
	{
		name: "HR & People Management",
		icon: networkIcon,
		href: "#",
	},
	{
		name: "Sales & Marketing",
		icon: salesIcon,
		href: "#",
	},
];

const cardBanners = [
	{
		title: "Accounting & Finance",
		subtitle:
			"Automate your books, manage payroll, and gain real-time financial insights.",
		features: [
			"Automated invoicing",
			"Real-time dashboards",
			"Integrates with 100+ banks",
		],
		price: "Starting from ₹499/mo.",
		cta: "RENT NOW",
		img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
	},
	{
		title: "Customer Support",
		subtitle:
			"Delight your customers with fast, multi-channel support solutions.",
		features: [
			"Live chat & ticketing",
			"AI-powered helpdesk",
			"Analytics & reporting",
		],
		price: "Starting from ₹299/mo.",
		cta: "RENT NOW",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
	},
	{
		title: "Development & Engineering",
		subtitle:
			"Boost your workflow with top dev tools and seamless integrations.",
		features: ["Version control", "CI/CD pipelines", "Code collaboration"],
		price: "Starting from ₹599/mo.",
		cta: "RENT NOW",
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
	},
];

const headlineVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const sectionVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.7 },
	}),
};

export default function Home() {
	const [searchSpin, setSearchSpin] = useState(false);
	const searchInputRef = useRef(null);

	// For staggered category animation
	const catRef = useRef(null);
	const catInView = useInView(catRef, { once: true });

	// For staggered card banner animation
	const cardRef = useRef(null);
	const cardInView = useInView(cardRef, { once: true });

	// Banner Area
	return (
		<div className="flex flex-col items-center w-full overflow-x-hidden relative" >
			{/* Decorative floating SaaS icons (background parallax) */}
			<motion.img
				src={codingIcon}
				alt=""
				className="hidden md:block absolute left-10 top-24 w-16 opacity-10 pointer-events-none z-0"
				animate={{ y: [0, 20, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				style={{ filter: "blur(1px)" }}
			/>
			<motion.img
				src={supportIcon}
				alt=""
				className="hidden md:block absolute right-16 top-40 w-14 opacity-10 pointer-events-none z-0"
				animate={{ y: [0, -18, 0] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				style={{ filter: "blur(1px)" }}
			/>

			{/* Banner Area */}
			<motion.div
				className="w-full min-h-[340px] md:min-h-[500px] flex items-center justify-center bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7] overflow-x-hidden"
				initial="hidden"
				animate="visible"
				variants={sectionVariants}
			>
				<div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 gap-6 md:gap-0 py-8 md:py-0">
					{/* Left: Text and Button */}
					<div className="w-full md:flex-1 flex flex-col items-center md:items-start justify-center">
						<motion.h1
							className="text-2xl md:text-5xl font-bold text-primary mb-3 text-center md:text-left max-w-xl"
							variants={headlineVariants}
							initial="hidden"
							animate="visible"
						>
							Get All SaaS Application At One Stop
						</motion.h1>
						<motion.p
							className="text-secondary mb-6 max-w-lg text-center md:text-left text-xs md:text-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.7 }}
						>
							Discover, compare, and access the best SaaS tools for your business
							needs—all in one place.
						</motion.p>
						<div className="learn-more-btn w-full flex justify-center md:justify-start">
							<motion.button
								className="bg-primary text-accent rounded-lg font-semibold shadow hover:bg-primary-light transition text-base px-6 py-3 focus:outline-none relative"
								whileHover={{ scale: 1.07 }}
								animate={{ scale: [1, 1.05, 1] }}
								transition={{
									repeat: Infinity,
									duration: 2,
									ease: "easeInOut",
								}}
							>
								Learn More
								{/* Shine effect */}
								<span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
									<span className="block w-1/3 h-full bg-gradient-to-r from-white/60 to-transparent absolute -left-1/3 top-0 animate-shine"></span>
								</span>
							</motion.button>
						</div>
					</div>
					{/* Right: Banner Image with floating animation */}
					<motion.div
						className="w-full md:flex-1 flex justify-center md:justify-end"
						animate={{ y: [0, -18, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
					>
						<img
							src={Banner}
							alt="Banner"
							className="w-4/5 max-w-[320px] md:max-w-[500px] h-[140px] md:h-[360px] object-contain rounded-xl"
							style={{ background: "rgba(255,255,255,0.1)" }}
						/>
					</motion.div>
				</div>
			</motion.div>

			{/* Search Bar */}
			<motion.div
				className="w-full flex justify-center -mt-8 md:-mt-12 z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={sectionVariants}
			>
				<form
					className="w-full max-w-full md:max-w-2xl px-2"
					onSubmit={(e) => {
						e.preventDefault();
						setSearchSpin(true);
						setTimeout(() => setSearchSpin(false), 700);
					}}
				>
					<motion.div
						className="flex items-center bg-white rounded-2xl border border-gray-200 shadow transition focus-within:shadow-lg focus-within:ring-2 focus-within:ring-primary px-2 py-2"
						whileFocus={{ scale: 1.03, boxShadow: "0 0 0 4px #7ec6f6" }}
					>
						<input
							ref={searchInputRef}
							type="text"
							placeholder="Search products, categories, or content..."
							className="flex-grow min-w-0 px-4 py-3 rounded-2xl outline-none bg-transparent text-sm md:text-base transition"
							onFocus={(e) =>
								e.target.parentNode.classList.add("ring-2", "ring-primary")
							}
							onBlur={(e) =>
								e.target.parentNode.classList.remove("ring-2", "ring-primary")
							}
						/>
						<motion.button
							type="submit"
							className="flex-shrink-0 p-3 text-primary bg-accent hover:bg-primary-light/10 rounded-2xl transition"
							aria-label="Search"
							animate={searchSpin ? { rotate: 360 } : { rotate: 0 }}
							transition={{ duration: 0.7, ease: "easeInOut" }}
						>
							{/* Magnifying glass SVG */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
								/>
							</svg>
						</motion.button>
					</motion.div>
				</form>
			</motion.div>

			{/* Popular Categories */}
			<motion.div
				className="w-full max-w-full md:max-w-4xl mt-10 px-2 sm:px-6"
				ref={catRef}
				initial="hidden"
				animate={catInView ? "visible" : "hidden"}
				variants={sectionVariants}
			>
				<h2 className="text-lg md:text-2xl font-bold mb-5 text-secondary text-center">
					Popular Categories
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
					{categories.map((cat, i) => (
						<motion.div
							key={cat.name}
							className="flex flex-col items-center justify-center bg-background rounded-2xl shadow hover:shadow-lg transition cursor-pointer border border-gray-100 p-5 w-full max-w-[130px] group"
							initial={{ opacity: 0, y: 40 }}
							animate={
								catInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 40 }
							}
							transition={{ delay: i * 0.12, duration: 0.6 }}
							whileHover={{ boxShadow: "0 0 0 4px #7ec6f6" }}
						>
							<motion.img
								src={cat.icon}
								alt={cat.name}
								className="w-12 h-12 mb-2 object-contain transition-transform group-hover:scale-110"
								whileHover={{ scale: 1.18, rotate: 8 }}
								transition={{ type: "spring", stiffness: 300 }}
							/>
							<span className="text-xs md:text-sm font-semibold text-secondary text-center mb-1">
								{cat.name}
							</span>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Card Banners - Horizontal Scrollable Style */}
			<motion.div
				className="w-full max-w-full md:max-w-7xl mt-12 px-2 sm:px-8"
				ref={cardRef}
				initial="hidden"
				animate={cardInView ? "visible" : "hidden"}
				variants={sectionVariants}
			>
				<div className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar">
					{cardBanners.map((card, idx) => (
						<motion.div
							key={idx}
							className="min-w-[280px] max-w-sm flex-shrink-0 rounded-3xl flex flex-col justify-between shadow-xl bg-gradient-to-br from-[#e3f1fa] to-[#7ec6f6] relative"
							initial={{ opacity: 0, x: 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.15, type: "spring", stiffness: 80 }}
						>
							<div className="p-6 flex flex-col h-full">
								<h3 className="font-bold text-lg text-primary mb-2">
									{card.title}
								</h3>
								<p className="text-main text-sm mb-3">{card.subtitle}</p>
								<ul className="mb-3 list-disc list-inside text-[13px] text-secondary space-y-1">
									{card.features.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<div className="font-bold text-primary mb-3 text-base">
									{card.price}
								</div>
								<motion.button
									className="bg-[#ff5c1a] text-white px-4 py-2 rounded-xl font-bold shadow hover:bg-[#ff7c3a] transition w-max text-sm relative overflow-hidden shine-btn"
									whileHover={{ scale: 1.07 }}
								>
									{card.cta}
									{/* Shine effect */}
									<span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden rounded-xl">
										<span className="block w-1/3 h-full bg-gradient-to-r from-white/60 to-transparent absolute -left-1/3 top-0 shine-animate"></span>
									</span>
								</motion.button>
							</div>
							<motion.img
								src={card.img}
								alt={card.title}
								className="absolute right-4 bottom-4 w-20 h-20 object-contain rounded-xl shadow-md"
								animate={{ y: [0, -10, 0] }}
								transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							/>
						</motion.div>
					))}
				</div>
				<style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          /* Shine animation for buttons */
          @keyframes shine {
            0% { left: -40%; }
            100% { left: 120%; }
          }
          .shine-btn .shine-animate {
            animation: shine 1.2s linear infinite;
          }
          /* Shine for Learn More button */
          @keyframes shineBtn {
            0% { left: -40%; }
            100% { left: 120%; }
          }
          .learn-more-btn .animate-shine {
            animation: shineBtn 2.2s linear infinite;
          }
        `}</style>
			</motion.div>
		</div>
	);
}