function Home({contacts, message}) {
  return (
    <section>
      <h1>Welcome!</h1>
      {message && <p>{message}</p>}
      <ul>
        {contacts.map((item, index) => (
          <li key={index}>{item.first_name} {item.email} {item.phone}</li>
        ))}
      </ul>
      <div id="message" />
    </section>
  );
}

export default Home;