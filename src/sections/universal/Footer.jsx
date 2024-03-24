import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <div className="bg-sac-black text-white py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-0">
          <Logo />
          <p className="text-2xl font-medium text-white">
            <span className="font-bold text-white">İMH </span>Kurban
          </p>
        </div>
        <div className="flex space-x-6">
          <i className="text-white text-xl bg-[#3C3E41] rounded px-2 py-1 hover:text-sac-primary bi bi-facebook"></i>
          <i className="text-white text-xl bg-[#3C3E41] rounded px-2 py-1 hover:text-sac-primary bi bi-twitter-x"></i>
          <i className="text-white text-xl bg-[#3C3E41] rounded px-2 py-1 hover:text-sac-primary bi bi-instagram"></i>
          <i className="text-white text-xl bg-[#3C3E41] rounded px-2 py-1 hover:text-sac-primary bi bi-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
