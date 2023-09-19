import Users from '../components/Users';

function UserPage({contacts}) {
  return (
    <section>
      <Users contacts={contacts} />
    </section>
  );
}

export default UserPage;