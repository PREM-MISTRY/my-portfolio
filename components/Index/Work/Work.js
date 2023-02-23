import ContentWrapper from "../../layout/ContentWrapper/ContentWrapper";
import FullHeightSection from "../../layout/FullHeightSection/FullHeightSection";
import SideHeading from "../../layout/SideHeading/SideHeading";
import WorkCard from "./Card";
import styles from "./Work.module.css";

export const works = [
  {
    heading: "Education",
    items: [
      {
        title: "Ryan International School",
        subtitle: "Surat, Gujrat",
        duration: "2005 - 2020",
        grade: "81",
        body: false,
      },
      {
        title: "SRM Institute of Science and Technology",
        subtitle: false,
        duration: "2020 - 2024",
        grade: "9.7",
        body: false,
      },
    ],
  },
  {
    heading: "Internships",
    items: [
      {
        title: "UNIMAPLE MODUTECH PVT. LTD.",
        subtitle: false,
        duration: "Apr 2020 - Present",
        grade: false,
        body: false,
      },
    ],
  },
];

export default function WorkSection() {
  return (
    <ContentWrapper id="past-work">
      <FullHeightSection>
        <SideHeading
          heading="past work"
          headingBg="work"
          headingClassName={styles.heading}
          headingBgClassName={styles.headingBg}
        />
        <div className={styles.main}>
          {works.map(({ heading, items }, idx) => {
            const itemCards = items.map(
              ({ title, subtitle, duration, grade, body }, idxx) => {
                return (
                  <WorkCard
                    key={`work-${idx}-item-${idxx}`}
                    title={title}
                    subtitle={subtitle}
                    duration={duration}
                    grade={grade}
                    body={body}
                  />
                );
              }
            );

            return (
              <div key={`work-heading-${idx}`}>
                <h1 className={styles.workHeading}>{heading}</h1>
                <div className="row justify-content-center">{itemCards}</div>
              </div>
            );
          })}
        </div>
      </FullHeightSection>
    </ContentWrapper>
  );
}
