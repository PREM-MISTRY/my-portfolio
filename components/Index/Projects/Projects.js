import ContentWrapper from "../../layout/ContentWrapper/ContentWrapper";
import FullHeightSection from "../../layout/FullHeightSection/FullHeightSection";
import SideHeading from "../../layout/SideHeading/SideHeading";
import ProjectsCarousel from "./Carousel";
import styles from "./Projects.module.css";

export default function ProjectsSection() {
  return (
    <ContentWrapper id="projects">
      <FullHeightSection>
        <SideHeading
          heading="projects"
          headingBg="projects"
          headingClassName={styles.heading}
          headingBgClassName={styles.headingBg}
        />
        <ProjectsCarousel />
      </FullHeightSection>
    </ContentWrapper>
  );
}
