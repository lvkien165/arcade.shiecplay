"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { games } from "@/data/games";
import Link from "next/link";

export default function PlayPage() {
    const { slug } = useParams();
    const [started, setStarted] = useState(false);
    const game = games.find((g) => g.slug === slug);

    if (!game) {
        return (
            <div className="max-w-xl mx-auto mt-24 p-8 rounded-xl bg-gradient-to-br from-pink-900/80 via-fuchsia-900/80 to-cyan-900/80 text-white shadow-xl">
                <h1 className="text-3xl font-bold mb-4">Game not found</h1>
                <Link href="/" className="text-cyan-300 underline">
                    Back to home
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-xl mx-auto mt-24 p-8 rounded-xl bg-gray-500 text-white shadow-xl mb-8">
                {!started ? (
                    <>
                        <h1 className="text-3xl font-extrabold mb-2 bg-clip-text bg-gradient-to-r text-white text-center">
                            Welcome to {game.title}!
                        </h1>
                        <p className="mb-6 text-lg text-cyan-100/80 text-center">
                            Get ready to play{" "}
                            <span className="font-semibold text-amber-300">
                                {game.title}
                            </span>
                            . Click below to start your adventure!
                        </p>
                        <div className="flex justify-center mb-4">
                            <img
                                src={game.imageUrl}
                                alt={game.title}
                                className="rounded-2xl shadow-lg w-40 h-40 object-cover"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href={`/games/${game.slug}`}
                                className="mt-4 px-8 py-3 rounded-xl bg-gray-300 text-[#06121d] font-bold text-lg shadow-lg hover:scale-105 transition"
                                onClick={() => setStarted(true)}
                                autoFocus
                            >
                                Play
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Replace below with actual game embed/component */}
                        <h2 className="text-2xl font-bold mb-4 text-cyan-200">
                            Enjoy your game!
                        </h2>
                        <div className="w-full h-96 flex items-center justify-center bg-[#0d2544]/60 rounded-xl shadow-inner">
                            <span className="text-lg text-cyan-100">
                                [Game will appear here]
                            </span>
                        </div>
                    </>
                )}
            </div>
            <div className="my-8"></div>
        </>
    );
}
