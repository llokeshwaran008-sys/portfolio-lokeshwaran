// app/page.jsx
import Hero from '../components/Hero';
import SystemCapabilities from '../components/SystemCapabilities';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: "Full-Stack Web Developer Portfolio | React, Django, Supabase",
  description: "Full-Stack Web Developer Portfolio showcasing projects built with React, Django, and modern databases."
};

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold">Lokeshwaran V</h1>
        <ThemeToggle />
      </header>
      <main className="pt-20">
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
          <Hero />
        </section>
        <section id="capabilities" className="py-16 bg-white dark:bg-gray-800">
          <SystemCapabilities />
        </section>
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
          <Projects />
        </section>
        <section id="contact" className="py-16 bg-white dark:bg-gray-800">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
