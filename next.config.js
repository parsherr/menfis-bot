/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/oauth2/authorize?client_id=1264865635633205341&permissions=8&integration_type=0&scope=bot+applications.commands",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/menfis",
        permanent: false,
      },
      {
        source: "/vote",
        destination: "https://top.gg/",
        permanent: false,
      },
      {
        source: "/review",
        destination: "https://top.gg/bot/",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/parsherr",
        permanent: false,
      },
      {
        source: "/metrics",
        destination: "https://metrics.bsr.gg/",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/docs/introduction/getting-started",
        permanent: false,
      },
      {
        source: "/terms",
        destination: "/docs/legal/term-service",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/docs/legal/privacy-policy",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
