const Ayah = () => {
  return (
    <>
      {/* Ayet */}
      <div className="flex flex-col space-y-4 my-8">
        <p className="font-playfair text-4xl text-center font-medium">
          Şüphesiz kurbanlarınızın,{" "}
          <span className="font-playfair text-sac-primary">
            ne etleri ne de kanları
          </span>{" "}
          Allah'a ulaşır. <pre></pre> Fakat O'na sizin{" "}
          <span className="font-playfair text-sac-primary">takvanız</span>{" "}
          ulaşır.
        </p>
        <p className="font-playfair font-medium text-2xl text-center text-sac-gray">
          Hac Suresi, 37. Ayeti Kerime
        </p>
      </div>
    </>
  );
};

export default Ayah;
