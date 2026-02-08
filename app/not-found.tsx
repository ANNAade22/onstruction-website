"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
                <h1 className="text-9xl font-bold text-gray-100 mb-2">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-gray-500 max-w-lg mb-8 text-lg">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-900 transition-colors"
                >
                    <MoveLeft size={20} />
                    Back to Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}
