module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      providers: {
        linkedin: {
          key: env("LINKEDIN_CLIENT_ID"),
          secret: env("LINKEDIN_CLIENT_SECRET"),
          callback: `${env("APP_URL")}/api/connect/google/callback`,
          scope: ["openid", "profile", "email"],
        },
      },
    },
  },
});
