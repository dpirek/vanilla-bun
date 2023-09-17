import { serve } from "bun";
import { Database } from "bun:sqlite";
import Page from "./components/Page";
import About from "./pages/About";
import Home from "./pages/Home";
import { renderToReadableStream } from "react-dom/server";
const PORT = 3000;

async function getContacts() {
  try {
    const db = new Database("test.sqlite");
    const query = db.query("select * from contacts;");
    return await query.all();
  }
  catch(e) {
    return e;
  }
}

async function renderComponent(Content, props = {}) {
  return await renderToReadableStream(<Page>
      <Content {...props} />  
    </Page>);
}

async function responseStatic(url) {
  const filePath = '.' + url.pathname;
  const file = Bun.file(filePath);
  return new Response(file);
}

async function router(url) {
  const headers = { "Content-Type": "text/html" };

  if(url.pathname === '/') {
    let contacts = [];
    let message = '';
    const result = await getContacts();

    if(result instanceof Error) {
      message = 'run: bun createContactsTable.js to create the database';
    } else {
      contacts = result;
    }

    return new Response(await renderComponent(Home, {contacts, message}), {headers: headers});
  }
  
  if(url.pathname === '/about') return new Response(await renderComponent(About), {headers: headers});
}

serve({
  async fetch(req) {
    const url = new URL(req.url);
    if(url.pathname.startsWith('/public/')) return await responseStatic(url);
    return await router(url);
  }, port: PORT
});