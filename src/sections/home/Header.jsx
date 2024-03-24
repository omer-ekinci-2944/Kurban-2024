import Kargo from "../../assets/kargo.jpg";

const Header = () => {
  return (
    <>
      {/* Main */}
      <div className="flex items-center justify-between space-x-16">
        <div className="flex flex-col space-y-9 left-content basis-3/5">
          <div>
            <p className="text-5xl font-bold font-montserrat mb-6">
              Kurban ibadetini
            </p>
            <p className="text-5xl font-bold font-montserrat text-sac-primary">
              birlikte gerçekleştirelim.
            </p>
          </div>
          <p className="text-sac-gray">
            From concept to execution, we deliver web designs that make an
            impact. Let your brand shine with our innovative and visually
            stunning websites.
          </p>
          <div>
            <button className="text-xl text-white bg-sac-black hover:bg-sac-primary transtion duration-300 rounded py-3 px-6 mr-8">
              Hisse Al <i className="bi bi-arrow-right text-xl text-white"></i>
            </button>

            <button className="box-content text-xl outline outline-2 rounded py-3 px-4 hover:bg-sac-primary hover:text-white hover:outline-none transtion duration-300">
              Hisse Sorgula
            </button>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <i className="text-4xl text-sac-primary bi bi-people-fill"></i>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-xl font-bold pl-4">Vaktinde Teslim</p>
                  <p className="text-sac-gray pl-4">Bayramın ilk günü teslim</p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <i className="text-4xl text-sac-primary bi bi-stars"></i>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-xl font-bold pl-4">Temizlik İmandandır</p>
                  <p className="text-sac-gray pl-4">Hijyenik ortamda kesim</p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <i className="text-4xl text-sac-primary bi bi-emoji-smile-fill"></i>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-xl font-bold pl-4">İçiniz Rahat Olsun</p>
                  <p className="text-sac-gray pl-4">İslami usüllere uygun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="rounded-xl w-1/5 object-right basis-2/5" src={Kargo} />
      </div>
    </>
  );
};

export default Header;
