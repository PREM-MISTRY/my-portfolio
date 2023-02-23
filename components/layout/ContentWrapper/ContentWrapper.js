import styles from "./ContentWrapper.module.css";

export default function ContentWrapper({ children, id }) {
  return (
    <div id={id || ""} className={`.section ${styles.outer}`}>
      <div className={`container-fluid ${styles.inner}`}>{children}</div>
    </div>
  );
}
