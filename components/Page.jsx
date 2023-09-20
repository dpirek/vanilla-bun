import Nav from './Nav';

function Page({children, url}) {
  return (
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="/public/styles.css" />
        <link rel="stylesheet" href="/public/clock.css" />
      </head>
      <body>
        <header>
          <Nav url={url} />
        </header>
        {children}
        <script src="/public/js/main.js" type="module" />
      </body>
    </html>
  )
}

export default Page;