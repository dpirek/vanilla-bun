import { Database } from "bun:sqlite";
const db = new Database("test.sqlite");
const people = [
  { firstName: "Alice", lastName: "Johnson", phoneNumber: "123-456-7890", email: "alice.johnson@example.com" },
  { firstName: "Bob", lastName: "Smith", phoneNumber: "123-456-7891", email: "bob.smith@example.com" },
  { firstName: "Charlie", lastName: "Davis", phoneNumber: "123-456-7892", email: "charlie.davis@example.com" },
  { firstName: "Dana", lastName: "Lee", phoneNumber: "123-456-7893", email: "dana.lee@example.com" },
  { firstName: "Evan", lastName: "Garcia", phoneNumber: "123-456-7894", email: "evan.garcia@example.com" },
  { firstName: "Fiona", lastName: "Martinez", phoneNumber: "123-456-7895", email: "fiona.martinez@example.com" },
  { firstName: "Greg", lastName: "Brown", phoneNumber: "123-456-7896", email: "greg.brown@example.com" },
  { firstName: "Hannah", lastName: "Jones", phoneNumber: "123-456-7897", email: "hannah.jones@example.com" },
  { firstName: "Ian", lastName: "Miller", phoneNumber: "123-456-7898", email: "ian.miller@example.com" },
  { firstName: "Jasmine", lastName: "Davis", phoneNumber: "123-456-7899", email: "jasmine.davis@example.com" },
];

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
  const person = people[index];
  return await query.all(person.firstName, person.lastName, person.email, person.phoneNumber);
}

async function getUsers() {
  const sql = `SELECT * FROM contacts;`;
  const query = db.query(sql);
  return await query.all();
}

console.log(await createUserTable());
for(let i = 0; i < 10; i++) { console.log(await insertUser(i)); }
console.log(await getUsers());