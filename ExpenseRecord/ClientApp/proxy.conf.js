const { env } = require('process');

const target = 'https://localhost:7081';

const PROXY_CONFIG = [
  {
    context: [
      "/**",
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
