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
} from '../_components';

export default function Home() {
  return (
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
  );
}
