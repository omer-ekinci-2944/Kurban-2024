import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Add = ({ kurbanlar, setKurbanlar, setIsAdding, getKurbanlar }) => {
  const [numara, setNumara] = useState("");
  const [kesim, setKesim] = useState("");
  const [hisseBedeli, setHisseBedeli] = useState("");
  const [bosHisse, setBosHisse] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    const yeniKurban = {
      numara,
      hisseBedeli,
      kesim,
      bosHisse,
    };

    kurbanlar.push(yeniKurban);

    try {
      await addDoc(collection(db, "kurbanlar"), {
        ...yeniKurban,
      });
    } catch (error) {
      console.log(error);
    }

    setKurbanlar(kurbanlar);
    setIsAdding(false);
    getKurbanlar();
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>New Sacrifice</h1>
        <label htmlFor="numara">Kurban No</label>
        <input
          id="numara"
          type="text"
          name="numara"
          value={numara}
          onChange={(e) => setNumara(e.target.value)}
        />
        <label htmlFor="kesim">Kesim Saati</label>
        <input
          id="kesim"
          type="text"
          name="kesim"
          value={kesim}
          onChange={(e) => setKesim(e.target.value)}
        />
        <label htmlFor="hisseBedeli">Hisse Bedeli</label>
        <input
          id="hisseBedeli"
          type="number"
          name="hisseBedeli"
          value={hisseBedeli}
          onChange={(e) => setHisseBedeli(e.target.value)}
        />
        <label htmlFor="bosHisse">Boş Hisse</label>
        <input
          id="bosHisse"
          type="number"
          name="bosHisse"
          value={bosHisse}
          onChange={(e) => setBosHisse(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
