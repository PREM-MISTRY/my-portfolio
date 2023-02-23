import PageHead from "../../common/Head";
import Navbar from "../../Navbar/Navbar";

export default function PageLayout({ children }) {
  return (
    <div>
      <PageHead />
      <Navbar />
      {children}
    </div>
  );
}
