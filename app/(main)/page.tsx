import {
  About,
  Contact,
  Header,
  Navbar,
  Parallax,
  Project,
  Skill,
  Testimonial,
  SectionSlip,
  Footer,
  IconsGradientList,
} from '../_components';

export default function Home() {
  return (
    <>
      <IconsGradientList />
      <main>
        <Navbar />
        <Header />
        <About />
        <Parallax />
        <Skill />
        <Project />
        <SectionSlip />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
