module.exports = {
  networks: {
    development: {
      host: "localhost",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    docker: {
      host: "ganache-cli",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "57771",       // Any network (default: none)
    },
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  db: {
    enabled: false
  }
};