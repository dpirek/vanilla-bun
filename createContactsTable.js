import { Database } from "bun:sqlite";
const db = new Database("test.sqlite");

async function createUserTable() {
  const sql = `CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE
  );`;

  const query = db.query(sql);
  return await query.all();
}

async function insertUser(index) {
  const sql = `INSERT INTO contacts (first_name, last_name, email, phone) VALUES (?, ?, ?, ?);`;  
  const query = db.query(sql);
  return await query.all("John", "Doe", `john-${index}@gmail.com`, `732-757-292${index}`);
}

async function getUsers() {
  const sql = `SELECT * FROM contacts;`;
  const query = db.query(sql);
  return await query.all();
}

console.log(await createUserTable());
for(let i = 0; i < 10; i++) { console.log(await insertUser(i)); }
console.log(await getUsers());