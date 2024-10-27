import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

type Props = {
  text: string;
  icon: string;
  url: string;
  customClasses?: string;
  showIcon?: boolean;
};
type CustomIcon = {
  iconname: string;
  customClasses: string;
};

const CustomIcon = ({ iconname = "", customClasses = "" }) => {
  if (iconname === "linkedin") {
    return <FaLinkedin className={`${customClasses}`} />;
  }
  if (iconname === "github") {
    return <FaGithub className={`${customClasses}`} />;
  }
  if (iconname === "mail") {
    return <FaEnvelope className={`${customClasses}`} />;
  }
  if (iconname === "cv") {
    return <FaFileDownload className={`${customClasses}`} />;
  }
};

const IconLink = ({
  text,
  icon,
  url,
  customClasses,
  showIcon = true,
}: Props) => {
  return (
    <Link
      title={text}
      href={url}
      className="flex items-center text-xl text-cyan-600 hover:text-orange-500"
    >
      <CustomIcon iconname={icon} customClasses={`${customClasses} mr-4`} />
      {showIcon && <span className="hidden md:inline">{text}</span>}
    </Link>
  );
};

export default IconLink;
