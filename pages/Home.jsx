function Home() {
  return (
    <section>
      <h1>Welcome Home!</h1>
      <hr />
      <p>Server side rendered component updated via websockets:</p>
      <div id="message" />
    </section>
  );
}

export default Home;