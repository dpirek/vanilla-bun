import Nav from 'react-bootstrap/Nav';

function NavComponent({ url }) {
  return (
    <Nav variant="pills" defaultActiveKey={url.pathname}>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/users">Users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavComponent;