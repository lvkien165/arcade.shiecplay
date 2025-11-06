"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Gamepad2,
    Search,
    Sparkles,
    Play,
    Trophy,
    Target,
    Flame,
    Zap,
    Users,
    Star,
    TrendingUp,
    Filter,
    Grid3X3,
    List,
    Heart,
    Crown,
    Shield,
    Globe,
    Smartphone,
    Monitor,
} from "lucide-react";
import GameCard from "@/components/GameCard";
import { games, Game } from "@/data/games";
import Script from "next/script";

function getRandomGames(arr: Game[], n: number): Game[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
}

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [mounted, setMounted] = useState(false);

    // Get unique categories
    const categories = [
        "All",
        ...Array.from(new Set(games.map((game) => game.category))),
    ];

    // Filter games based on category and search
    useEffect(() => {
        let filtered = games;

        if (selectedCategory !== "All") {
            filtered = filtered.filter(
                (game) => game.category === selectedCategory
            );
        }

        if (searchQuery) {
            filtered = filtered.filter(
                (game) =>
                    game.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    game.category
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            );
        }

        setFilteredGames(filtered);
    }, [selectedCategory, searchQuery]);

    // Handle hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    const onclickBubbleShooterClassic = () => {
        window.open("/play/evil-wyrm");
    };

    // Game categories with icons and colors
    const gameCategories = [
        {
            name: "Puzzle And Logic",
            icon: "🧩",
            color: "from-yellow-400 to-orange-500",
            count: games.filter((g) => g.category === "Puzzle And Logic")
                .length,
        },
        {
            name: "Arcade",
            icon: "🎮",
            color: "from-blue-400 to-purple-500",
            count: games.filter((g) => g.category === "Arcade").length,
        },
        {
            name: "Action",
            icon: "⚔️",
            color: "from-red-400 to-pink-500",
            count: games.filter((g) => g.category === "Action").length,
        },
        {
            name: "Strategy",
            icon: "🎯",
            color: "from-green-400 to-teal-500",
            count: games.filter((g) => g.category === "Strategy").length,
        },
        {
            name: "Sports And Racing",
            icon: "⚽",
            color: "from-indigo-400 to-blue-500",
            count: games.filter((g) => g.category === "Sports And Racing")
                .length,
        },
        {
            name: "Adventure",
            icon: "🗺️",
            color: "from-purple-400 to-pink-500",
            count: games.filter((g) => g.category === "Adventure").length,
        },
    ];

    // Featured game (first game)
    const featuredGame = games[0];

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
                        >
                            <span className="text-cyan-600">SHIEC</span>
                            <span className="text-purple-600">PLAY</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Your ultimate destination for free online games.
                            Play instantly, no downloads required!
                        </motion.p>
                    </div>

                    {/* Featured Game */}
                    {featuredGame && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-4xl mx-auto mb-12"
                        >
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                                <div className="relative h-64 sm:h-80">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl sm:text-8xl mb-4">
                                                🎮
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                                {featuredGame.title}
                                            </h2>
                                            <p className="text-gray-600 mb-6">
                                                Experience the ultimate gaming
                                                adventure
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={
                                                    onclickBubbleShooterClassic
                                                }
                                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                                            >
                                                <Play className="w-5 h-5" />
                                                <span>PLAY NOW</span>
                                                <Sparkles className="w-5 h-5" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
            {/* banner 2 */}
            {/* <div
                id="div-gpt-ad-1760351216806-0"
                className="min-w-[300px] min-h-[250px]"
            >
                <Script>
                    {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1760351216806-0'); });`}
                </Script>
            </div> */}

            {/* Game Categories */}
            <section className="py-12 bg-gray-50 mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Game Categories
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Explore different types of games
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                        {gameCategories.map((category, index) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="group cursor-pointer"
                                onClick={() =>
                                    setSelectedCategory(category.name)
                                }
                            >
                                <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
                                    <div
                                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {category.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {category.count} games
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center space-x-4">
                            <Filter className="w-5 h-5 text-gray-600" />
                            <div className="flex flex-wrap gap-2">
                                {categories.slice(0, 7).map((category) => (
                                    <motion.button
                                        key={category}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    viewMode === "grid"
                                        ? "bg-cyan-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                <Grid3X3 className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    viewMode === "list"
                                        ? "bg-cyan-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                <List className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/*  top play recently  */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Top Play Recently
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {getRandomGames(games, 4).map((game, idx) => (
                            <GameCard
                                key={game.id}
                                game={game}
                                index={idx}
                                viewMode="grid"
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* Games Grid */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                {selectedCategory === "All"
                                    ? "All Games"
                                    : `${selectedCategory} Games`}
                            </h2>
                            <p className="text-gray-600">
                                {filteredGames.length} games found
                            </p>
                        </div>

                        {selectedCategory !== "All" && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedCategory("All")}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
                            >
                                Clear Filter
                            </motion.button>
                        )}
                    </div>

                    <AnimatePresence mode="wait">
                        {filteredGames.length > 0 ? (
                            <motion.div
                                key="games"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={
                                    viewMode === "grid"
                                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                        : "space-y-4"
                                }
                            >
                                {filteredGames.map((game, index) => (
                                    <GameCard
                                        key={game.id}
                                        game={game}
                                        index={index}
                                        viewMode={viewMode}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="no-results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Target className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    No games found
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Try adjusting your search or filter criteria
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("All");
                                    }}
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                                >
                                    View All Games
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose ShiecPlay?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Experience gaming like never before
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "Web-Based",
                                description:
                                    "No downloads required, play instantly in your browser",
                            },
                            {
                                icon: Shield,
                                title: "Safe & Secure",
                                description:
                                    "All games are tested and safe for all ages",
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile Friendly",
                                description:
                                    "Play on any device, anywhere, anytime",
                            },
                            {
                                icon: Heart,
                                title: "100% Free",
                                description:
                                    "All games are completely free to play",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
