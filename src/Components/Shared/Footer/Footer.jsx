import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p className="text-center text-lg my-4">
        &copy; Copyright Reserved by{" "}
        <Link
          className="font-bold text-orange-400"
          href="https://shadullah.vercel.app/"
        >
          Shadullah
        </Link>
      </p>
    </div>
  );
};

export default Footer;
