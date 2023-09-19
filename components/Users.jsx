import Card from 'react-bootstrap/Card';

function Users({contacts}) {
  return (
    <section>
      <h1>Users:</h1>
      <hr />
      <div className='row'>
        {contacts.map((item, index) => (
          <div key={index} className='col-4 mb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://placehold.co/400" />
              <Card.Body>
                <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                <Card.Text>
                  {item.email}<br />
                  {item.phone}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>))}
      </div>
    </section>
  );
}

export default Users;