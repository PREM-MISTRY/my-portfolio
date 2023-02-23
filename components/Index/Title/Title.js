import useWindowScroll from "@react-hook/window-scroll";
import { assetPrefix } from "../../../next.config";
import ContentWrapper from "../../layout/ContentWrapper/ContentWrapper";
import FullHeightSection from "../../layout/FullHeightSection/FullHeightSection";
import styles from "./Title.module.css";

export default function HomeTitleSection() {
  const scrollY = useWindowScroll(64);
  return (
    <ContentWrapper id="heading">
      <FullHeightSection>
        <div className={styles.container}>
          <div className={styles.beforeHeading}>I’m a</div>
          <h1 className={styles.heading}>Frontend</h1>
          <h2 className={styles.heading}>
            Developer
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  assetPrefix
                    ? assetPrefix + "/title/full-stop.svg"
                    : "/title/full-stop.svg"
                }
                alt="full stop"
                className={styles.fullStop}
              />
            </span>
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              assetPrefix
                ? assetPrefix + "/title/scroll.svg"
                : "/title/scroll.svg"
            }
            alt="scroll down"
            className={styles.scroll}
            style={{ display: scrollY && scrollY !== 0 ? "none" : "initial" }}
          />
          <a
            href="https://www.linkedin.com/in/prem1404/"
            target="__blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                assetPrefix
                  ? assetPrefix + "/title/linkedin.svg"
                  : "/title/linkedin.svg"
              }
              alt="My Linkedin profile"
              className={styles.linkedin}
            />
          </a>
          <a
            href="https://github.com/PREM-MISTRY"
            target="__blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                assetPrefix
                  ? assetPrefix + "/title/github.svg"
                  : "/title/github.svg"
              }
              alt="My Github profile"
              className={styles.github}
            />
          </a>
        </div>
      </FullHeightSection>
    </ContentWrapper>
  );
}
