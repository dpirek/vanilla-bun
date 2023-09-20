import Nav from './Nav';

function Page({children, url}) {
  return (
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="/public/styles.css" />
      </head>
      <body>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Nav url={url} />
        </header>
        {children}
        <script src="/public/js/main.js" type="module" />
      </body>
    </html>
  )
}

export default Page;