import Cursor  from './components/Cursor';
import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Marquee from './components/Marquee';
import Work    from './components/Work';
import Studio  from './components/Studio';
import Contact from './components/Contact';
import Footer  from './components/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <Marquee />
      <Studio />
      <Contact />
      <Footer />
    </>
  );
}
