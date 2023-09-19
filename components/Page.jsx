import Nav from './Nav';

function Page({children, url}) {
  return (
    <html>
      <head>
        <title>My App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
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