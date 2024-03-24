import { useState, useEffect } from "react";

import { AdminHeader, SacrificeAdministration } from "../sections";
import { Table, SignOut } from "../components";
import { Add, Edit } from "../functions";

import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../config/firebase";

const Buy = () => {
  // Tüm kurbanlıklar için
  const [kurbanlar, setKurbanlar] = useState();

  // Düzenleme ve silme için
  const [selectedSacrifice, setSeciliKurban] = useState(null);

  // Düzenleme ve eklemeyi active etmek için.
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Kurbanlıkları getirmek
  const getKurbanlar = async () => {
    const querySnapshot = await getDocs(collection(db, "kurbanlar"));

    // Gelen kurbanlıkları dizi haine getirip kurbanlar'da tutmak
    const kurbanlar = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setKurbanlar(kurbanlar);
  };

  // Yukarıda oluşturduğumuz fonksiyonu aşağıda çağırıyoruz.
  useEffect(() => {
    getKurbanlar();
  }, []);

  const handleToplu = async (e) => {
    console.log("deneme");

    e.preventDefault();

    const yeniKurban = {
      numara: 5,
      hisseBedeli: 5,
      kesim: 5,
      bosHisse: 5,
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

  // Düzenleme yapmak için çağıracağımız fonksiyon
  const handleEdit = (id) => {
    const [kurban] = kurbanlar.filter((kurban) => kurban.id === id);

    setSeciliKurban(kurban);
    setIsEditing(true);
  };

  // Silme yapmak için çağıracağımız fonksiyon
  const handleDelete = (id) => {
    // const [kurban] = kurbanlar.filter((kurban) => kurban.id === id);

    deleteDoc(doc(db, "kurbanlar", id));

    // const kurbanlarCopy = kurbanlar.filter(
    //   (kurban) => kurban.id !== id
    // );
    // setKurbanlar(kurbanlarCopy);
    getKurbanlar();
  };

  return (
    <>
      {!isAdding && !isEditing && (
        <>
          <AdminHeader setIsAdding={setIsAdding} handleToplu={handleToplu} />
          <SacrificeAdministration />
          <Table
            kurbanlar={kurbanlar}
            // Tabloda satır yanlarında çıkan edit ve delete butonları için
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <SignOut />
        </>
      )}
      {isAdding && (
        <Add
          kurbanlar={kurbanlar}
          // Ekleme işlemi bitince yeni değerlerle getirmek için.
          setKurbanlar={setKurbanlar}
          getKurbanlar={getKurbanlar}
          //  Düzenleme işlemini tekrar geri almak için
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          kurbanlar={kurbanlar}
          selectedSacrifice={selectedSacrifice}
          // Düzenleme işlemi bitince yeni değerlerle getirmek için.
          setKurbanlar={setKurbanlar}
          getKurbanlar={getKurbanlar}
          // İşlem sonunda isEditing'i false'a çekmek
          setIsEditing={setIsEditing}
        />
      )}
    </>
  );
};

export default Buy;
