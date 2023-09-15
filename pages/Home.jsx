function Home({messages}) {
  return (
    <section>
      <h1>Welcome!</h1>
      <ul>
        {messages.map((item, index) => (
          <li key={index}>{item.message}</li>
        ))}
      </ul>
    </section>
  );
}

export default Home;