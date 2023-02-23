import { assetPrefix } from "../../../next.config";
import ContentWrapper from "../../layout/ContentWrapper/ContentWrapper";
import FullHeightSection from "../../layout/FullHeightSection/FullHeightSection";
import SideHeading from "../../layout/SideHeading/SideHeading";
import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <ContentWrapper id="about">
      <FullHeightSection>
        <SideHeading heading="About me" headingBg="About" />
        <div className={styles.main}>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.profileBorder}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    assetPrefix
                      ? assetPrefix + "/about/prem.png"
                      : "/about/prem.png"
                  }
                  alt="Prem standing next to a classic car"
                  className={`img-fluid ${styles.profile}`}
                />
              </div>
            </div>
            <div className={`col-lg-6 ${styles.right}`}>
              <div>
                <p>
                  My name is <span className="highlight">PREM MISTRY.</span>
                </p>
                <p>
                  I am passionate programmer and a front-end developer based in
                  India, focused on creating intuitive and complex designs on
                  Javascript.
                </p>
                <p>
                  I have expertise in C, C++, Java, and JavaScript. I make
                  programs and applets for fun.
                </p>
                <p>
                  I am currently pursuing my B.Tech in Computer Science
                  Technology from{" "}
                  <span className="highlight">
                    SRM Institute of technology, Kattankulathur, Chennai.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FullHeightSection>
    </ContentWrapper>
  );
}
