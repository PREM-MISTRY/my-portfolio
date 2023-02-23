import ProgressBar from "../../common/Progress/Progress";

export default function ProgressWithLabel({ label, progress }) {
  return (
    <div className="col-lg-6 py-3">
      <div
        className="d-flex justify-content-between fs-4"
        style={{ width: "80%", margin: "0 auto" }}
      >
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}
