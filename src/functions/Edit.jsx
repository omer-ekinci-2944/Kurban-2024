import { useState } from "react";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Edit = ({
  kurbanlar,
  selectedSacrifice,
  setKurbanlar,
  setIsEditing,
  getKurbanlar,
}) => {
  const id = selectedSacrifice.id;

  // Değişim gerçekleşecek tüm değerler için state oluşturuyoruz.

  const [numara, setNumara] = useState(selectedSacrifice.numara);
  const [kesim, setKesim] = useState(selectedSacrifice.kesim);
  const [hisseBedeli, setHisseBedeli] = useState(selectedSacrifice.hisseBedeli);
  const [bosHisse, setBosHisse] = useState(selectedSacrifice.bosHisse);

  // Düzenlemeyi yapan fonksiyon
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Yeni değerler
    const kurban = {
      id,
      numara,
      kesim,
      hisseBedeli,
      bosHisse,
    };

    // Yeni değerleri yolluyoruz.
    await setDoc(doc(db, "kurbanlar", id), {
      ...kurban,
    });

    setKurbanlar(kurbanlar);
    setIsEditing(false);
    getKurbanlar();
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Kurbanlık Düzenle</h1>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
