import styles from "./SideHeading.module.css";

export default function SideHeading({
  heading,
  headingBg,
  headingClassName,
  headingBgClassName,
}) {
  return (
    <div>
      <div>
        <div
          className={`tt-uppercase ${styles.headingBg} ${headingBgClassName}`}
        >
          {headingBg}
        </div>
        <div className={`tt-uppercase ${styles.heading} ${headingClassName}`}>
          {heading}
        </div>
      </div>
    </div>
  );
}
