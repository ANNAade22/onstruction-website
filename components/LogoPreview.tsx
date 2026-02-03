"use client";

import React from "react";

const LogoPreview = () => {
    return (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-white p-8 rounded-lg shadow-2xl border-2 border-primary max-w-2xl w-full">
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-500 mb-4 text-center uppercase tracking-widest border-b pb-2">Logo Font Candidates</h2>

                <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">1. Oswald (Industrial & Strong)</p>
                    <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                        <span className="text-4xl text-black" style={{ fontFamily: "var(--font-oswald)" }}>SILVERLINE LIMITED</span>
                        <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 1</span>
                    </div>
                </div>

                <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">2. Montserrat (Modern & Premium)</p>
                    <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                        <span className="text-4xl font-extrabold text-black tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>SILVERLINE LIMITED</span>
                        <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 2</span>
                    </div>
                </div>

                <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">3. Teko (Technical & Boxy)</p>
                    <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                        <span className="text-5xl text-black uppercase" style={{ fontFamily: "var(--font-teko)" }}>Silverline Limited</span>
                        <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 3</span>
                    </div>
                </div>

                <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">4. Russo One (Bold & Heavy)</p>
                    <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                        <span className="text-4xl text-black" style={{ fontFamily: "var(--font-russo-one)" }}>Silverline Limited</span>
                        <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 4</span>
                    </div>
                </div>

                <div className="my-4 border-t border-dashed pt-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Groote-style Alternatives (Modern & Geometric)</h3>

                    <div className="space-y-1 mb-4">
                        <p className="text-xs text-gray-400 font-mono">5. Outfit (Clean & Rounded like Groote)</p>
                        <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                            <span className="text-5xl font-bold text-black tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>silverline.</span>
                            <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 5</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-xs text-gray-400 font-mono">6. Space Grotesk (Technical & Wide)</p>
                        <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                            <span className="text-4xl font-bold text-black tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>silverline.</span>
                            <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 6</span>
                        </div>
                    </div>

                    <div className="space-y-1 mt-4 border-t border-dashed pt-4">
                        <h3 className="text-sm font-semibold text-primary mb-2">New Request</h3>
                        <p className="text-xs text-gray-400 font-mono">7. Alata (Geometric & Minimalist)</p>
                        <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between group hover:border-black transition-colors">
                            <span className="text-5xl text-black" style={{ fontFamily: "var(--font-alata)" }}>Silverline Limited</span>
                            <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Option 7</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-4">
                <p className="text-sm text-gray-500">Scroll to see the actual website below!</p>
            </div>
        </div>
    );
};

export default LogoPreview;
