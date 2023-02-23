import FooterCard from "./Card";
import styles from "./Footer.module.css";

const email = "pm2525@srmist.edu.in";

export const contacts = [
  {
    iconUrl: "/footer/email.svg",
    title: "Email",
    content: email,
  },
  {
    iconUrl: "/footer/location.svg",
    title: "Location",
    content: "SRM, Kattankulathur, Chennai",
  },
  {
    iconUrl: "/footer/phone.svg",
    title: "Call me on",
    content: "+91 9537463133",
  },
];

export default function Footer() {
  return (
    <div id="contact" className="mw-100 bg-accent-1 py-5 px-2">
      <h1 className="tt-uppercase bg-transparent text-center text-black fw-bold">
        contact me
      </h1>
      <div className="py-5 bg-transparent">
        <div className={`row bg-transparent mx-auto ${styles.cardsRow}`}>
          {contacts.map((contact, idx) => (
            <FooterCard key={`footer-card-${idx}`} {...contact} />
          ))}
        </div>
      </div>
      <a href={`mailto:${email}`}>
        <button
          className="btn px-5 py-2 mx-auto d-flex tt-uppercase"
          style={{
            borderRadius: "1vw",
            backgroundColor: "rgb(var(--accent-2))",
            color: "white",
          }}
        >
          Send Message
        </button>
      </a>
    </div>
  );
}
