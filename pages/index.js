import Footer from "../components/common/Footer/Footer";
import AboutSection from "../components/Index/About/About";
import ProjectsSection from "../components/Index/Projects/Projects";
import SkillsSection from "../components/Index/Skills/Skills";
import HomeTitleSection from "../components/Index/Title/Title";
import WhatIDoSection from "../components/Index/WhatIDo/WhatIDo";
import WorkSection from "../components/Index/Work/Work";
import PageLayout from "../components/layout/ContentWrapper/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div id="snapper">
        <HomeTitleSection />
        <hr></hr>
        <AboutSection />
        <hr></hr>
        <WhatIDoSection />
        <hr></hr>
        <SkillsSection />
        <hr></hr>
        <ProjectsSection />
        <hr></hr>
        <WorkSection />
        <Footer />
      </div>
    </PageLayout>
  );
}
