import Nav from './Nav';

function Page({children}) {
  return (
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="/public/styles.css" />
      </head>
      <body>
        <Nav />
        {children}
        <script src="/public/js/main.js" type="module" />
      </body>
    </html>
  )
}

export default Page;