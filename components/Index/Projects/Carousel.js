import { assetPrefix } from "../../../next.config";
import ProjectCarouselItem from "./CarouselItem";
import styles from "./Projects.module.css";

export const projects = [
  {
    imgSrc: "/projects/self-avoiding-walk.png",
    title: "SELF AVOIDING WALK",
    action1: "View on p5.js",
    action1Href: "https://editor.p5js.org/mistryprem85/sketches/1dITe9UaU",
  },
  {
    imgSrc: "/projects/triangulation.jpg",
    title: "TRIANGULATION",
    action1: "View live",
    action1Href: "https://prem-mistry.github.io/Triangulation/",
    action2: "Github",
    action2Href: "https://github.com/PREM-MISTRY/Triangulation",
  },
];

export default function ProjectsCarousel() {
  return (
    <div
      id="projectsCarousel"
      className={`carousel carousel-light slide ${styles.carousel}`}
      data-bs-ride="carousel"
      data-bs-interval="5000"
      style={{
        maxWidth: "25rem",
        borderRadius: "3vw",
      }}
    >
      <div className="carousel-inner">
        {projects.map((project, idx) => {
          if (idx === 0) {
            return (
              <ProjectCarouselItem
                key={`project-slide-${idx}`}
                active
                {...project}
              />
            );
          } else {
            return (
              <ProjectCarouselItem key={`project-slide-${idx}`} {...project} />
            );
          }
        })}
      </div>
      <button
        className="carousel-control-prev opacity-100"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="prev"
        style={{ left: "-15%" }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{
            borderRadius: "50%",
            backgroundImage: `url(${
              assetPrefix
                ? assetPrefix + "/projects/left-chevron.svg"
                : "/projects/left-chevron.svg"
            })`,
          }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next opacity-100"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="next"
        style={{ right: "-15%" }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{
            borderRadius: "50%",
            backgroundImage: `url(${
              assetPrefix
                ? assetPrefix + "/projects/right-chevron.svg"
                : "/projects/right-chevron.svg"
            })`,
          }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
