import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Navbar = () => {
  return (
    <header className="py-3 md:py-6 whitespace-nowrap">
      <div className="container flex items-center justify-between space-x-16">
        <div className="flex items-center space-x-0">
          <Logo />
          <p className="text-2xl font-medium">
            <span className="font-bold">İMH </span>Kurban
          </p>
        </div>

        <div className="md:hidden">
          <i className="bi bi-list text-3xl"></i>
        </div>

        <nav className="hidden md:flex items-center justify-between space-x-8 text-[#606261] font-medium ">
          <Link
            to="/"
            className="hover:text-sac-primary transition duration-300"
          >
            Anasayfa
          </Link>
          <Link
            to="/hakkimizda"
            className="hover:text-sac-primary transition duration-300"
          >
            Hakkımızda
          </Link>
          <Link
            to="/surec"
            className="hover:text-sac-primary transition duration-300"
          >
            Süreç
          </Link>
          <Link
            to="/hisseal"
            className="hover:text-sac-primary transition duration-300"
          >
            Hisse Al
          </Link>
          <Link
            to="/sorgula"
            className="hover:text-sac-primary transition duration-300"
          >
            Hisse Sorgula
          </Link>
          <Link
            to="/iletisim"
            className="hover:text-sac-primary transition duration-300"
          >
            Bize Ulaşın
          </Link>
        </nav>

        <div className="hidden md:flex space-x-8 items-center">
          <i className="bi bi-circle-half"></i>
          <a
            href=""
            className="bg-sac-primary rounded px-3 py-2 text-white hover:bg-sac-primary-dark transition duration-300"
          >
            Kesim Yeri
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
