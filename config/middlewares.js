module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: '*',
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  },
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
