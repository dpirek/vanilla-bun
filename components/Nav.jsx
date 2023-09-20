
function Nav({ url }) {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: '/users', text: 'Users' },
    { href: '/about', text: 'About' },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className={url.pathname === item.href ? 'active' : ''}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;