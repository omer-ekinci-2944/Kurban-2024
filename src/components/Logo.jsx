import { Link } from "react-router-dom";
import imhlogo from "../assets/imh-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-between space-x-12">
      <div>
        <Link to="/" className="text-xl font">
          <img src={imhlogo} className="scale-75" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
