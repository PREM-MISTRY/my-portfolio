import styles from "./Work.module.css";

export default function WorkCard({ title, subtitle, duration, grade, body }) {
  return (
    <div className="col-lg-6 p-2">
      <div className={`card rounded rounded-5 ${styles.card}`}>
        <div className="card-body bg-transparent">
          <h5 className={`card-title bg-transparent ${styles.cardTitle}`}>
            {title}
          </h5>
          <p className="card-subtitle bg-transparent text-secondary">
            {subtitle}
          </p>
          <div className="d-flex justify-content-between bg-transparent">
            <span className="bg-transparent">
              {grade ? "Grade " + grade : ""}
            </span>
            <span className="bg-transparent">{duration}</span>
          </div>
          <p className={`card-text bg-transparent mb-0 ${styles.cardBody}`}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
