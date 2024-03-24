import { Navbar } from ".";

const AdminHeader = ({ setIsAdding, handleToplu }) => {
  return (
    <header>
      <Navbar />
      <h1>Kurbanlık Yönetim Ekranı</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        {/* setIsAdding ile kurban ekleme menüsüne yönlendiriyoruz. */}
        <button
          className="bg-sac-primary text-white py-2 px-2 rounded "
          onClick={() => setIsAdding(true)}
        >
          Kurban Ekle
        </button>
        <button
          className="bg-sac-primary text-white py-2 px-2 rounded mx-2"
          onClick={handleToplu}
        >
          Toplu Kurban Ekle
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
