import ContentWrapper from "../../layout/ContentWrapper/ContentWrapper";
import FullHeightSection from "../../layout/FullHeightSection/FullHeightSection";
import SideHeading from "../../layout/SideHeading/SideHeading";
import ProgressWithLabel from "./ProgressWithLabel";
import styles from "./Skills.module.css";

const skills = [
  { label: "Javascript", progress: 95 },
  { label: "C++", progress: 90 },
  { label: "HTML", progress: 85 },
  { label: "CSS", progress: 80 },
];

export default function SkillsSection() {
  return (
    <ContentWrapper id="skills">
      <FullHeightSection>
        <SideHeading
          heading="skills"
          headingBg="skills"
          headingClassName={styles.heading}
          headingBgClassName={styles.headingBg}
        />
        <div className={styles.main}>
          <div className="row">
            {skills.map(({ label, progress }, idx) => (
              <ProgressWithLabel
                key={`skill-${idx}`}
                label={label}
                progress={progress}
              />
            ))}
          </div>
        </div>
      </FullHeightSection>
    </ContentWrapper>
  );
}
