function ListaPostaci({ data }) {
  return (
    <div>
      {data.map((item) => (
        <>
          <h3 key={item.id}>
            {item.name} - {item.status}
          </h3>
        </>
      ))}
    </div>
  );
}

export default ListaPostaci;
