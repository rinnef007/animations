import PageTransition from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import About from '../components/About.jsx'
import RevealHeading from '../components/RevealHeading.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import Articles from '../components/Articles.jsx'
import Cta from '../components/Cta.jsx'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <About />
      <RevealHeading />
      <Services />
      <Projects />
      <Articles />
      <Cta />
    </PageTransition>
  )
}
