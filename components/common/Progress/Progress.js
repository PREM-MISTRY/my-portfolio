export default function ProgressBar({ progress }) {
  return (
    <div
      className="progress"
      style={{
        width: "80%",
        height: "7px",
        borderRadius: "0px",
        backgroundColor: "#363636",
        margin: "0 auto",
      }}
    >
      <div
        className="progress-bar bg-accent-1"
        role="progressbar"
        style={{
          width: `${progress ? progress : 0}%`,
        }}
        aria-label="progress bar"
        aria-valuenow={progress ? Number(progress) : 0}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
