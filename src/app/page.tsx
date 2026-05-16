import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsAndEducation from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <SkillsAndEducation />
      
      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border-color)',
        marginTop: '5rem'
      }}>
        <p>Built by Bambang Adi Candra</p>
        <p style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
          Next.js • TypeScript • Vanilla CSS
        </p>
      </footer>
    </main>
  );
}
