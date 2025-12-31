import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Project } from '@/components/project';
import { Skill } from '@/components/skill';

export default function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-4xl px-8">
        <About />
        <Info />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
