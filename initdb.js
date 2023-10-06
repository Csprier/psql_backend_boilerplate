const pgp = require('pg-promise')();
const connection = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
};

const db = pgp(connection);

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

async function seedDatabase() {
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
    .then(() => db.none('DROP TABLE IF EXISTS users;')) // This is to temporarily prevent duplications of the same 2 users that get seeded
    .then(() => {
        console.log('Connected to the database.');

        // Create the "users" table if it doesn't exist
        return createUsersTable();
    })
    .then(() => {
        // Seed the database with initial data
        return seedDatabase();
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    })
    .finally(() => {
        // Close the database connection when done
        pgp.end();
    });
};