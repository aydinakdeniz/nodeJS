module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "aktorler",
      user: "admin",
      password: "admin",
    },
    migration: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {},
};
