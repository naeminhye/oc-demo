var oc = require('oc');

var configuration = {
  verbosity: 0,
  baseUrl: 'https://openccomponents-demo.herokuapp.com/',
  port: 3000,
  tempDir: './temp/',
  refreshInterval: 600,
  pollingInterval: 5,
  s3: {
    key: 'metanet',
    secret: 'metanet',
    bucket: 'metanet',
    region: 'metanet',
    path: '//s3.amazonaws.com/metanet/',
    componentsDir: 'components',
  },
  env: { name: 'production' },
};

var registry = new oc.Registry(configuration);

registry.start(function (err, app) {
  if (err) {
    console.log('Registry not started: ', err);
    process.exit(1);
  }
});
