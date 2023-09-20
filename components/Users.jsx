
function Users({contacts}) {
  return (
    <section>
      <h1>Users:</h1>
      <hr />
      {contacts.map((item, index) => (
        <div key={index}>
          <h5>{item.first_name} {item.last_name}</h5>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <hr />
        </div>))}
    </section>
  );
}

export default Users;