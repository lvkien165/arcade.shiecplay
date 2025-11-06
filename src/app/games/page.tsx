"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Grid3X3, List, Search } from "lucide-react";
import GameCard from "@/components/GameCard";
import { games, Game } from "@/data/games";

export default function GamesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(games.map((g) => g.category)))],
        []
    );

    const filteredGames = useMemo(() => {
        let result: Game[] = games;
        if (selectedCategory !== "All") {
            result = result.filter((g) => g.category === selectedCategory);
        }
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (g) =>
                    g.title.toLowerCase().includes(q) ||
                    g.category.toLowerCase().includes(q)
            );
        }
        return result;
    }, [selectedCategory, searchQuery]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen">
            {/* Header section */}
            <section className="pt-24 pb-6 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        All Games
                    </h1>
                    <p className="text-gray-600">
                        Browse and filter our full games catalog
                    </p>
                </div>
            </section>

            {/* Search / Filters */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        {/* Categories quick filter */}
                        <div className="flex items-center space-x-4">
                            <Filter className="w-5 h-5 text-gray-600" />
                            <div className="flex flex-wrap gap-2">
                                {categories.slice(0, 6).map((cat) => (
                                    <motion.button
                                        key={cat}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === cat
                                                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {cat}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* View toggle */}
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

            {/* Grid */}
            <section className="py-10 bg-gray-50">
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
                                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full" />
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
        </div>
    );
}
