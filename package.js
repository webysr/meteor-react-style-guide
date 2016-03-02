Package.describe({
  name: 'webysr:react-style-guide',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'An auto generated style guide for your react components using meteor and flow router',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "material-ui": "0.15.0-alpha.1",
  "react": "0.14.7",
  "react-dom": "0.14.7",
  "react-mounter": "1.1.0",
  "react-tap-event-plugin": "0.2.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use('mongo');
  api.use('templating');
  api.use('react-meteor-data');

  api.use('meteorhacks:flow-router@1.17.2', 'client', {weak: true});
  api.use('kadira:flow-router@2.6.0', 'client', {weak: true});

  api.addFiles([
    'client/style-guide.html'
  ], 'client');

  api.mainModule('client/styleGuide.js', 'client');
  api.export('ReactStyleguide');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jschlieber:react-style-guide');
  api.addFiles('test/test.js');
});
