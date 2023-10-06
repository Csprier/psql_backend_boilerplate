const pgp = require('pg-promise')();
const connection = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
};

const db = pgp(connection);

// ========================================================================
async function createGreetingTable() {
    try {
        await db.none(`
        CREATE TABLE IF NOT EXISTS greeting (
            greeting_id serial PRIMARY KEY,
            greeting VARCHAR(255) NOT NULL
        );`);
    } catch(error) {
        console.error(error);
    }
};

// ========================================================================
async function seedGreeting() {
    try {
        // Insert initial data into the "users" table
        await db.none(`
        INSERT INTO greeting (greeting)
        VALUES
            ('Welcome to the database. Your GET request seems to be working as intended.'),
        `);

        console.log('Greeting seeded.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

// ========================================================================
async function createUsersTable() {
    try {
        await db.none(`
        CREATE TABLE IF NOT EXISTS users (
            user_id serial PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        );`);

        console.log('Users table created (if not exists).');
    } catch (error) {
        console.error('Error creating users table:', error);
    }
};


// ========================================================================
async function seedUsers() {
    try {
        // Insert initial data into the "users" table
        await db.none(`
        INSERT INTO users (username, email, password)
        VALUES
            ('user1', 'user1@example.com', 'password1'),
            ('user2', 'user2@example.com', 'password2')
        `);

        console.log('Database seeded with initial data.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};


module.exports = async function initdb() {
    db.connect()
    .then(() => db.none('DROP TABLE IF EXISTS greeting'))
    .then(() => db.none('DROP TABLE IF EXISTS users;')) // This is to temporarily prevent duplications of the same 2 users that get seeded
    .then(() => {
        console.log('Connected to the database. Creating tables.');
        createGreetingTable();
        createUsersTable();
        return;
    })
    .then(() => {
        console.log('Table creation successful. Seeding the database.');
        seedGreeting();
        seedUsers();
        console.log('Seeding complete.');
        return;
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    })
    .finally(() => {
        // Close the database connection when done
        pgp.end();
        console.log('Database Initialization complete.');
        console.log('-- Ending Server Connection --')
    });
};