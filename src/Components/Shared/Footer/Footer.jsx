import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <p className="text-center text-lg my-4">
        &copy; Copyright Reserved by{" "}
        <Link className="font-bold" href="https://shadullah.vercel.app/">
          Shadullah
        </Link>
      </p>
    </div>
  );
};

export default Footer;
