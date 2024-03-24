import Logo from "../components/Logo";
import responsive from "../assets/responsive.png";

const Coming = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        {/* Navbar */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-0 ">
            <Logo />
            <p className="text-2xl font-medium">
              <span className="font-bold">İMH </span>Kurban
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/J2HHzTbZqtEeAybE8"
            target="_blank"
            className="text-white bg-sac-primary px-4 py-2 text-lg rounded-md hidden sm:block"
          >
            Kesim Yeri
          </a>
        </div>

        {/* Yayında */}
        <div className="my-2">
          <p className="font-header font-bold text-center text-4xl md:text-5xl mb-5 tracking-wide">
            Henüz çok erken.
          </p>
          <p className="text-center text-lg text-sac-gray ">
            Hisselerimiz çok yakında satışa sunulacaktır.
          </p>
        </div>

        {/* Görsel */}
        <div className="mx-auto md:-my-16">
          <img src={responsive} className="md:scale-75" />
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row space-y-4 text-center items-center justify-between text-sac-gray pb-8 ">
          <p className="hidden md:block">
            Tüm hakları saklıdır. ©2024 İnsan ve Medeniyet Hareketi Ankara
          </p>
          <p className="block md:hidden leading-10">
            Tüm hakları saklıdır. ©2024 İnsan ve Medeniyet Hareketi Ankara
          </p>
          {/* Icons */}
          <div className="flex space-x-2">
            <a
              href="https://www.facebook.com/imhankara06"
              target="_blank"
              className="bi bi-facebook text bg-sac-dark-white text-sac-dark-gray hover:text-sac-primary rounded-sm transition duration-300 px-2 py-1"
            ></a>
            <a
              href="https://twitter.com/imhankara"
              target="_blank"
              className="bi bi-twitter-x bg-sac-dark-white text-sac-dark-gray hover:text-sac-primary rounded-sm transition duration-300 px-2 py-1"
              icon="fa-brands fa-facebook-f"
            ></a>
            <a
              href="https://www.instagram.com/imhankara06/"
              target="_blank"
              className="bi bi-instagram bg-sac-dark-white text-sac-dark-gray hover:text-sac-primary rounded-sm transition duration-300 px-2 py-1"
            ></a>
            <a
              href="https://www.youtube.com/@insanvemedeniyethareketiankara"
              target="_blank"
              className="bi bi-youtube bg-sac-dark-white text-sac-dark-gray hover:text-sac-primary rounded-sm transition duration-300 px-2 py-1"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coming;
