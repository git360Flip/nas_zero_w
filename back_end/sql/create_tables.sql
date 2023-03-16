CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY UNIQUE,
  password TEXT,
  lastLoggedInDate TEXT
);