import ContentWrapper from "../../layout/ContentWrapper/ContentWrapper";
import FullHeightSection from "../../layout/FullHeightSection/FullHeightSection";
import SideHeading from "../../layout/SideHeading/SideHeading";
import WhatIDoCards from "./Card";
import styles from "./WhatIDo.module.css";

const whatIDoThings = [
  {
    imgSrc: "/what-i-do/js.png",
    imgAlt: "Javascript logo",
    text: "Javascript",
  },
  { imgSrc: "/what-i-do/cpp.svg", imgAlt: "C plus plus logo", text: "C++" },
  { imgSrc: "/what-i-do/java.svg", imgAlt: "Java logo", text: "Java" },
  { imgSrc: "/what-i-do/html.svg", imgAlt: "html logo", text: "HTML" },
  { imgSrc: "/what-i-do/p5js.svg", imgAlt: "p5js logo", text: "P5.js" },
];

export default function WhatIDoSection() {
  return (
    <ContentWrapper id="what-i-do">
      <FullHeightSection>
        <SideHeading
          heading="What I do"
          headingBg="what"
          headingClassName={styles.headingClassName}
          headingBgClassName={styles.headingBgClassName}
        />
        <div className={styles.main}>
          <div className="row justify-content-center">
            {whatIDoThings.map((thing, idx) => (
              <WhatIDoCards key={`what-i-do-${idx}`} {...thing} />
            ))}
          </div>
        </div>
      </FullHeightSection>
    </ContentWrapper>
  );
}
