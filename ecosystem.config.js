module.exports = {
    apps: [
      {
        script: 'yarn start',
        name: 'anco-storefront',
        log_date_format: 'HH:mm:ss MMDDYY',
        exec_mode: 'fork',
        instances: 1,
        autorestart: true,
      },
    ],
  };