import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
