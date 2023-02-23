import Link from "next/link";
import { assetPrefix } from "../../../next.config";
import styles from "./Projects.module.css";

export default function ProjectCarouselItem({
  imgSrc,
  title,
  active,
  action1,
  action1Href,
  action2,
  action2Href,
}) {
  return (
    <div
      className={`carousel-item${active ? " active" : ""}`}
      style={{
        borderRadius: "3vw",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPrefix ? assetPrefix + imgSrc : imgSrc}
        className="d-block w-100"
        alt={title || "project image"}
        style={{
          borderRadius: "3vw 3vw 0 0",
        }}
      />
      <div
        className={`carousel-caption ${styles.carouselCaption}`}
        style={{
          width: "100%",
          position: "relative",
          left: "0",
          bottom: "0",
          backgroundColor: "black",
          borderRadius: "0 0 3vw 3vw",
        }}
      >
        <h6
          className="fs-4"
          style={{
            backgroundColor: "transparent",
            color: "rgb(var(--accent-1))",
            marginBottom: action1 || action2 ? "1rem" : "0px",
          }}
        >
          {title}
        </h6>
        <div
          className="row d-flex justify-content-center rounded"
          style={{ backgroundColor: "transparent" }}
        >
          {action1 ? (
            <div
              className="col-md-6"
              style={{ backgroundColor: "transparent" }}
            >
              {action1Href ? (
                <Link passHref href={action1Href}>
                  <button
                    className={`btn btn-dark m-1 w-100 rounded-pill ${styles.carouselButton}`}
                  >
                    {action1}
                  </button>
                </Link>
              ) : (
                <button
                  className={`btn btn-dark m-1 w-100 rounded-pill ${styles.carouselButton}`}
                >
                  {action1}
                </button>
              )}
            </div>
          ) : (
            ""
          )}
          {action2 ? (
            <div
              className="col-md-6"
              style={{ backgroundColor: "transparent" }}
            >
              {action2Href ? (
                <Link passHref href={action2Href}>
                  <button
                    className={`btn btn-dark m-1 w-100 rounded-pill ${styles.carouselButton}`}
                  >
                    {action2}
                  </button>
                </Link>
              ) : (
                <button
                  className={`btn btn-dark m-1 w-100 rounded-pill ${styles.carouselButton}`}
                >
                  {action2}
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
