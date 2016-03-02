Package.describe({
  name: 'webysr:react-style-guide',
  version: '1.0.0',
  summary: 'An auto generated style guide for your react components using meteor and flow router',
  git: 'https://github.com/webysr/react-style-guide',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use('mongo');
  api.use('react-meteor-data');

  api.use('meteorhacks:flow-router@1.17.2', 'client', {weak: true});
  api.use('kadira:flow-router@2.6.0', 'client', {weak: true});

  api.mainModule('client/styleGuide.js', 'client');
  api.export('ReactStyleGuide');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('webysr:react-style-guide');
  api.addFiles('test/test.js');
});
