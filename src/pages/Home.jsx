import { Ayah, Header } from "../sections/";

const Home = () => {
  return (
    <>
      <Ayah />
      <Header />
      <p className="text-4xl text-center">Bugüne Kadar...</p>

      <div className="flex items-center justify-center gap-6">
        <p>5 Yıl+ Tecrübe</p>
        <p>5 Yıl+ Tecrübe</p>
        <p>5 Yıl+ Tecrübe</p>
      </div>

      <p className="text-4xl text-center text-header">Bu seneki Fiyatlarımız</p>
      <p className="text-4xl text-center text-header">Sıkça Sorulan Sorular</p>
    </>
  );
};

export default Home;
