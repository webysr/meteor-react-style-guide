# ReactStyleGuide

An auto generated style guide for React components in your Meteor app.

## Prerequisites

### NPM Dependencies

Add a package.json file to your project root either manually or with `npm init`.

You need to install the following node modules via npm:

```
npm install --save react react-dom react-mounter material-ui react-tap-event-plugin
```

Including them directly in the package caused problems related to having duplicate versions of react.

### Initialization

On the client you need to

```javascript
import reactTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
reactTapEventPlugin();
```

### Roboto Font

Material UI uses Google's Roboto Font. You can add it to your project's HTML if you wish.

```html
<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
```

## Configuration

To add your components to the style guide do the following on the client:

```javascript
import ReactStyleGuide from 'meteor/webysr:react-style-guide';
import HelloName from './HelloName.jsx';
import FavouriteNumber from './FavouriteNumber.jsx';

const styleGuide = new ReactStyleGuide();

// pass the component followed by some ingestible props:
styleGuide.addComponent(HelloName, {name: 'Jürgen'});
styleGuide.addComponent(FavouriteNumber, {
  name: 'Leonhard Euler',
  favouriteNumber: '2,71828 18284 59045 23536 02874 71352 66249 77572 47093 69995 ...'
});
```

## License

[MIT](../master/LICENSE)