import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/sections/dashboard/Dashboard";
import About from "@/components/sections/about/About";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import GitHubActivity from "@/components/sections/github/GitHubActivity";
import TechStack from "@/components/sections/techstack/Techstack";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            <Sidebar />

            <div className="lg:pl-72">
                <Navbar />

                <main className="px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl space-y-10">
                        <Dashboard />
                        <About />
                        <Experience />
                        <Projects />
                        <GitHubActivity />
                        <TechStack />
                        <Contact />
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}