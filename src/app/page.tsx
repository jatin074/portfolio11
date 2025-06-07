import About from "@/components/About";
import Contact from "@/components/Contact";
import DesignProcess from "@/components/designProcess";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Work from "@/components/Work";


export default function HomePage() {

  return (
    <>
      <Header />
      <div id="home">
        <Herosection />
      </div>
      <div id="services" className="mb-[70px]">
        <Services />
      </div>
      <div id="about" className="mb-[70px]">
        <About />
      </div>
      <div className="mb-[70px]">
        <Experience />
      </div>
      <DesignProcess />
      <div id="work" className="mb-[70px]">
        <Work />
      </div>
      <div className="mb-[70px] bg-[url(/images/technologies/bg.svg)] bg-center bg-no-repeat bg-cover">
      <Technologies  />
      </div>
      <div id="contact">
        <Contact />
      </div>
     <div className="bg-[url(/images/technologies/bg.svg)] bg-center bg-no-repeat bg-cover">
     <Footer />
     </div>
    </>
  )
}

