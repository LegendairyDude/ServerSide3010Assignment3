const pool = require('./pool');

async function populateDB() {
  try {
    const testMessages = [
      { text: "Hi there!", username: "Amando" },
      { text: "Hello World!", username: "Charles" },
      { text: "This is a test message.", username: "TestUser1" },
      { text: "Another message for testing.", username: "TestUser2" }
    ];

    // Loop through each message and insert it into the messages table
    const insertQuery = 'INSERT INTO messages (text, username) VALUES ($1, $2)';
    for (const msg of testMessages) {
      await pool.query(insertQuery, [msg.text, msg.username]);
      console.log(`Inserted message: "${msg.text}" by ${msg.username}`);
    }

    console.log("Test data populated successfully.");
  } catch (err) {
    console.error("Error populating test data:", err);
  } finally {
    await pool.end();
    console.log("Database connection closed.");
  }
}

populateDB();
