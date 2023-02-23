import styles from "./FullHeightSection.module.css";

export default function FullHeightSection({ children, className }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
