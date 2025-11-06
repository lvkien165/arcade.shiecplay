"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, Users, Gamepad2, TrendingUp, Clock } from "lucide-react";
import { Game } from "@/data/games";

interface GameCardProps {
    game: Game;
    index: number;
    viewMode?: "grid" | "list";
}

const GameCard = ({ game, index, viewMode = "grid" }: GameCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Generate random stats for demo - use useEffect to avoid hydration mismatch
    const [randomRating, setRandomRating] = useState("4.0");
    const [randomPlayers, setRandomPlayers] = useState(3000);
    const [isTrending, setIsTrending] = useState(false);
    const [playTime, setPlayTime] = useState("5-10 min");

    useEffect(() => {
        setMounted(true);
        setRandomRating((Math.random() * 1 + 4).toFixed(1));
        setRandomPlayers(Math.floor(Math.random() * 5000) + 1000);
        setIsTrending(Math.random() > 0.7);
        setPlayTime(
            ["5-10 min", "10-15 min", "15-30 min", "30+ min"][
                Math.floor(Math.random() * 4)
            ]
        );
    }, []);

    const categoryColors = {
        Arcade: "bg-blue-100 text-blue-800",
        Strategy: "bg-purple-100 text-purple-800",
        Action: "bg-red-100 text-red-800",
        Puzzle: "bg-yellow-100 text-yellow-800",
        Sports: "bg-green-100 text-green-800",
        Adventure: "bg-indigo-100 text-indigo-800",
    };

    const categoryColor =
        categoryColors[game.category as keyof typeof categoryColors] ||
        "bg-gray-100 text-gray-800";

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    if (!mounted) {
        return (
            <div className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-48"></div>
            </div>
        );
    }

    if (viewMode === "list") {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
            >
                <Link href={`/play/${game.slug}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-cyan-300 p-4">
                        <div className="flex items-center space-x-4">
                            {/* Image */}
                            <div className="relative w-20 h-20 flex-shrink-0">
                                <div className="w-full h-full bg-gray-200 rounded-lg relative overflow-hidden">
                                    {!imageLoaded && !imageError && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}

                                    {!imageError ? (
                                        <Image
                                            src={game.imageUrl}
                                            alt={game.title}
                                            fill
                                            sizes="80px"
                                            className={`object-cover rounded-lg transition-all duration-300 ${
                                                imageLoaded
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            } group-hover:scale-105`}
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-lg">
                                            <Gamepad2 className="w-8 h-8 text-gray-500" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 truncate">
                                        {game.title}
                                    </h3>
                                    {isTrending && (
                                        <div className="flex items-center space-x-1 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                                            <TrendingUp className="w-3 h-3" />
                                            <span>HOT</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center space-x-4 mb-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}
                                    >
                                        {game.category}
                                    </span>
                                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        <span>{randomRating}</span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                                        <Users className="w-4 h-4 text-cyan-500" />
                                        <span>
                                            {randomPlayers.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                                        <Clock className="w-4 h-4 text-gray-500" />
                                        <span>{playTime}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 line-clamp-2">
                                    Experience the ultimate{" "}
                                    {game.category.toLowerCase()} adventure with{" "}
                                    {game.title}. Challenge yourself and compete
                                    with players worldwide!
                                </p>
                            </div>

                            {/* Play Button */}
                            <div className="flex-shrink-0">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                                >
                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    }

    // Grid view (default)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <Link href={`/play/${game.slug}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-cyan-300 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden">
                        <div className="w-full h-full bg-gray-200 relative">
                            {!imageLoaded && !imageError && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}

                            {!imageError ? (
                                <Image
                                    src={game.imageUrl}
                                    alt={game.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className={`object-cover transition-all duration-300 ${
                                        imageLoaded
                                            ? "opacity-100"
                                            : "opacity-0"
                                    } group-hover:scale-110`}
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                    unoptimized
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                    <Gamepad2 className="w-12 h-12 text-gray-500" />
                                </div>
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

                            {/* Category Badge */}
                            <div className="absolute top-2 left-2">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}
                                >
                                    {game.category}
                                </span>
                            </div>

                            {/* Trending Badge */}
                            {isTrending && (
                                <div className="absolute top-2 right-2">
                                    <div className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-medium flex items-center space-x-1">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>HOT</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <h3 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 mb-2 line-clamp-2">
                            {game.title}
                        </h3>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                            <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span>{randomRating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4 text-cyan-500" />
                                <span>{randomPlayers.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span>{playTime}</span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <Gamepad2 className="w-4 h-4" />
                                <span>PLAY NOW</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default GameCard;
