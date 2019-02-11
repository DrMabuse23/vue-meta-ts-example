module.exports = {
  apps: [
    {
      name: "dcp-test",
      script: "./node_modules/.bin/nuxt-ts",
      args: "start",
      instances: 2,
      exec_mode: "cluster",
      wait_ready: true,
      listen_timeout: 5000,
    },
  ]
};
