import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Header } from '@/components/header';
import { Info } from '@/components/info';
import { Project } from '@/components/project';
import { Skill } from '@/components/skill';

export default function Page() {
  return (
    <>
      <Header />
      <About />
      <Info />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
