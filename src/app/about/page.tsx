"use client";

import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                        We are passionate about bringing you the best gaming experience with a curated collection of amazing games.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed text-center max-w-3xl mx-auto font-medium">
                            Our mission is to provide a platform where gamers can discover, play, and enjoy high-quality games. 
                            We carefully curate our collection to ensure every game meets our standards of fun, engagement, and quality.
                        </p>
                    </div>
                </div>

                {/* What We Offer Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Games</h3>
                            <p className="text-gray-700 font-medium">
                                We handpick every game to ensure you get the best gaming experience possible.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Free</h3>
                            <p className="text-gray-700 font-medium">
                                All our games are completely free to play and load quickly for instant entertainment.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Updates</h3>
                            <p className="text-gray-700 font-medium">
                                We constantly add new games and update our collection to keep things fresh and exciting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Story Section */}
                <div className="mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Our Story
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg text-gray-800 leading-relaxed mb-4 font-medium">
                                Started by a team of gaming enthusiasts, our platform was born from a simple idea: 
                                everyone should have access to great games without barriers. We believe that gaming 
                                brings people together and creates memorable experiences.
                            </p>
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                Today, we continue to grow our collection and improve our platform, always keeping 
                                our users' experience at the heart of everything we do. Join us on this exciting 
                                journey as we explore the world of gaming together!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:then96214@gmail.com" 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Contact Us
                        </a>
                        <a 
                            href="/" 
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Back to Games
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
