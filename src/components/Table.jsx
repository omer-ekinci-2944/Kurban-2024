const Table = ({ kurbanlar, handleEdit, handleDelete }) => {
  return (
    <div className="contain-table">
      <table className="striped-table">
        {/* Veri başlıkları */}
        <thead>
          <tr>
            <th>Kurban No</th>
            <th>Kesim Saati</th>
            <th>Hisse Bedeli</th>
            <th>Boş Hisse</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        {/* Verileri çekiyoruz. */}
        <tbody>
          {kurbanlar ? (
            kurbanlar.map((kurban, i) => (
              <tr key={kurban.id}>
                <td>{kurban.numara}</td>
                <td>{kurban.kesim}</td>
                <td>{kurban.hisseBedeli}</td>
                <td>{kurban.bosHisse.abc}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(kurban.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(kurban.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
