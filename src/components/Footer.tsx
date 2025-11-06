"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Gamepad2,
    Sparkles,
    Heart,
    Shield,
    Info,
    Mail,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
    Globe,
    Smartphone,
    Monitor,
    Zap,
    Users,
} from "lucide-react";

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="w-full h-32 bg-gray-800 rounded animate-pulse"></div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Gamepad2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        <span className="text-cyan-400">
                                            SHIEC
                                        </span>
                                        <span className="text-purple-400">
                                            PLAY
                                        </span>
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Gaming Hub
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Your ultimate destination for free online games.
                                Play instantly, no downloads required.
                                Experience gaming like never before.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "All Games", href: "/" },
                                { name: "Popular Games", href: "/" },
                                { name: "New Games", href: "/" },
                                { name: "Trending Games", href: "/" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {[
                                {
                                    name: "About Us",
                                    href: "/about",
                                    icon: Info,
                                },
                                {
                                    name: "Privacy Policy",
                                    href: "/privacy.html",
                                    icon: Shield,
                                },
                                {
                                    name: "Contact Us",
                                    href: "/contact",
                                    icon: Mail,
                                },
                                {
                                    name: "Help Center",
                                    href: "/help",
                                    icon: Globe,
                                },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                                    >
                                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-white">
                            Features
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Web-Based Gaming", icon: Globe },
                                { name: "Mobile Friendly", icon: Smartphone },
                                { name: "No Downloads", icon: Monitor },
                                { name: "Instant Play", icon: Zap },
                            ].map((feature) => (
                                <li
                                    key={feature.name}
                                    className="flex items-center space-x-2 text-gray-300 text-sm"
                                >
                                    <feature.icon className="w-4 h-4 text-cyan-400" />
                                    <span>{feature.name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 pt-8 border-t border-gray-800"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            {
                                value: "2.5K+",
                                label: "Active Players",
                                icon: Users,
                            },
                            {
                                value: "200+",
                                label: "Games Available",
                                icon: Gamepad2,
                            },
                            {
                                value: "4.8",
                                label: "Average Rating",
                                icon: Sparkles,
                            },
                            { value: "99.9%", label: "Uptime", icon: Zap },
                        ].map((stat) => (
                            <div key={stat.label} className="group">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300">
                                    <stat.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
