"use client";

export default function Privacy() {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm text-gray-600 mt-4">
                        Last updated: July 28, 2025
                    </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Information We Collect
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your IP address and general location information</li>
                                <li>Browser type and version</li>
                                <li>Operating system information</li>
                                <li>Pages visited and time spent on our site</li>
                                <li>Referring website addresses</li>
                            </ul>
                            
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Information You Provide</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Email address (when contacting us)</li>
                                <li>Any messages or feedback you send to us</li>
                                <li>Search queries you enter on our site</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How We Use Information */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            How We Use Your Information
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide and improve our gaming platform</li>
                                <li>To analyze site usage and optimize user experience</li>
                                <li>To respond to your inquiries and provide customer support</li>
                                <li>To ensure the security and proper functioning of our website</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Cookies and Tracking */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Cookies and Tracking Technologies
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <p>
                                We use cookies and similar technologies to enhance your browsing experience:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                <li><strong>Performance Cookies:</strong> Allow us to improve site speed and performance</li>
                            </ul>
                            <p>
                                You can control cookies through your browser settings, but disabling certain cookies may affect site functionality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third-Party Services */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Third-Party Services
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <p>
                                Our website may use third-party services that collect information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                                <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
                                <li><strong>Content Delivery Networks (CDNs):</strong> For faster content delivery</li>
                            </ul>
                            <p>
                                These services have their own privacy policies that govern how they handle your data.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Data Security */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Data Security
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <p>
                                We take reasonable measures to protect your information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Secure server infrastructure with encryption</li>
                                <li>Regular security updates and monitoring</li>
                                <li>Limited access to personal information</li>
                                <li>Secure data transmission protocols</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4">
                                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Your Rights */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Your Rights and Choices
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access the personal information we have about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Opt-out of certain data processing activities</li>
                                <li>Withdraw consent where processing is based on consent</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Children's Privacy */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Children's Privacy
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <p>
                                Our website is intended for general audiences and we do not knowingly collect personal 
                                information from children under 13 years of age. If we become aware that we have 
                                collected personal information from a child under 13, we will take steps to delete 
                                such information promptly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Changes to Policy */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Changes to This Policy
                        </h2>
                        <div className="space-y-4 text-gray-800 font-medium">
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any 
                                significant changes by posting the new policy on this page and updating the 
                                "Last updated" date at the top of this policy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="text-center bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto font-medium">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-4 text-gray-800 font-medium">
                        <p><strong>Email:</strong> then96214@gmail.com</p>
                        <p><strong>Website:</strong> Shiecplay Gaming Platform</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a 
                            href="mailto:then96214@gmail.com" 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
                        >
                            Contact Us
                        </a>
                        <a 
                            href="/" 
                            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
                        >
                            Back to Games
                        </a>
            </div>
        </div>
        </div>
        </section>
    );
}
