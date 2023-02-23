import { assetPrefix } from "../../../next.config";
import { useClipboard } from "@mantine/hooks";

export default function FooterCard({ iconUrl, title, content }) {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <div className="col-lg-4 bg-transparent d-flex justify-lg-content-center mb-2">
      <div
        className="row bg-transparent clickable"
        onClick={() => clipboard.copy(content)}
      >
        <div className="col-1 bg-transparent d-flex align-items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPrefix ? assetPrefix + iconUrl : iconUrl}
            alt={title || "contact me"}
            className="h-50 w-auto bg-transparent"
          />
        </div>
        <div className="col-10 bg-transparent ms-2">
          <div
            className="fs-5 bg-transparent text-black"
            style={{ lineHeight: "0.8" }}
          >
            {title}
          </div>
          <div className="bg-transparent text-black">
            {content} {clipboard.copied ? "Copied!" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
