module.exports = {
    apps: [
      {
        script: './index.js',
        name: 'p2p-invest-blockchain',
        log_date_format: 'HH:mm:ss MMDDYY',
        exec_mode: 'fork',
        instances: 1,
        autorestart: true,
      },
    ],
  };