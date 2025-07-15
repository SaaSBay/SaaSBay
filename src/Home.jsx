import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import accountingIcon from "./assets/accounting.png";
import supportIcon from "./assets/support.png";
import codingIcon from "./assets/coding.png";
import networkIcon from "./assets/network.png";
import salesIcon from "./assets/sales.png";
import Dummy1 from "./assets/Dummy_1.avif";
import Dummy2 from "./assets/Dummy_2.avif";
import Dummy3 from "./assets/Dummy_3.avif";
import Dummy4 from "./assets/Dummy_4.avif";
import Dummy5 from "./assets/Dummy_5.avif";

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
		img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
		href: "https://example.com/appliances",
	},
	{
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		href: "https://example.com/compact",
	},
	{
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
		href: "https://example.com/beds",
	},
	{
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
		href: "https://example.com/beds",
	},
	{
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
		href: "https://example.com/beds",
	},
	{
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
		href: "https://example.com/beds",
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

const bannerImages = [Dummy1, Dummy2, Dummy3, Dummy4, Dummy5];

export default function Home() {
	const [searchSpin, setSearchSpin] = useState(false);
	const searchInputRef = useRef(null);

	// For staggered category animation
	const catRef = useRef(null);
	const catInView = useInView(catRef, { once: true });

	// For staggered card banner animation
	const cardRef = useRef(null);
	const cardInView = useInView(cardRef, { once: true });

	// Carousel state
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 5;

	// Auto-slide effect
	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % totalSlides);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

	// Card scroll state
	const cardScrollRef = useRef(null);
	const [cardIndex, setCardIndex] = useState(0);

	// Auto-scroll effect for card banners
	useEffect(() => {
		const interval = setInterval(() => {
			setCardIndex((prev) => (prev + 1) % cardBanners.length);
		}, 4000); // 4 seconds per card
		return () => clearInterval(interval);
	}, []);

	// Scroll to the current card
	useEffect(() => {
		if (cardScrollRef.current) {
			const cardWidth = cardScrollRef.current.children[cardIndex]?.offsetWidth || 0;
			cardScrollRef.current.scrollTo({
				left: cardWidth * cardIndex,
				behavior: "smooth",
			});
		}
	}, [cardIndex]);

	// Banner Area
	return (
		<div className="flex flex-col items-center w-full overflow-x-hidden relative">
			{/* Decorative floating SaaS icons (background parallax) */}
			<motion.img
				src={codingIcon}
				alt=""
				className="hidden md:block absolute left-10 top-24 w-16 opacity-10 pointer-events-none z-0"
				animate={{ y: [0, 20, 0] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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

			{/* Banner Carousel */}
			<div className="w-full h-[340px] md:h-[500px] flex items-center justify-center bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7] overflow-x-hidden relative">
				<div className="relative w-full h-full flex items-center justify-center overflow-hidden">
					<AnimatePresence initial={false} mode="wait">
						<motion.div
							key={currentSlide}
							initial={{ x: 300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -300, opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
						>
							<img
								src={bannerImages[currentSlide]}
								alt={`Banner Slide ${currentSlide + 1}`}
								className="w-full h-full object-cover"
								style={{ background: "rgba(255,255,255,0.1)" }}
							/>
						</motion.div>
					</AnimatePresence>
					{/* Left Arrow */}
					<button
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition z-20"
						onClick={goToPrev}
						aria-label="Previous Slide"
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
					{/* Right Arrow */}
					<button
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition z-20"
						onClick={goToNext}
						aria-label="Next Slide"
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</div>

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
				<div className="relative">
					{/* Left Arrow */}
					<button
						className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition z-20"
						onClick={() => setCardIndex((prev) => (prev - 1 + cardBanners.length) % cardBanners.length)}
						aria-label="Previous Card"
						style={{ left: "-24px" }}
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
					{/* Cards */}
					<div
						className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar"
						ref={cardScrollRef}
						style={{ scrollBehavior: "smooth" }}
					>
						{cardBanners.map((card, idx) => (
							<a
								key={idx}
								href={card.href}
								target="_blank"
								rel="noopener noreferrer"
								className="min-w-[320px] max-w-[400px] h-[220px] rounded-2xl flex-shrink-0 shadow-lg bg-center bg-cover transition-transform hover:scale-105 cursor-pointer"
								style={{
									backgroundImage: `url(${card.img})`,
								}}
							>
								{/* No overlay/text */}
							</a>
						))}
					</div>
					{/* Right Arrow */}
					<button
						className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition z-20"
						onClick={() => setCardIndex((prev) => (prev + 1) % cardBanners.length)}
						aria-label="Next Card"
						style={{ right: "-24px" }}
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
				<style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
			</motion.div>
		</div>
	);
}