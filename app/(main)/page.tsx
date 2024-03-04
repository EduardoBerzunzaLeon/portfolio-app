import {
  About,
  Contact,
  Header,
  Navbar,
  Parallax,
  Project,
  Skill,
  Testimonial,
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
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
