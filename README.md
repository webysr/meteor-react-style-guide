# An auto generated Style Guide for your React Components as a Meteor package

## NPM Dependencies

You need to install the following node modules via npm:

```
npm install --save react react-dom react-mounter material-ui react-tap-event-plugin
```

Including them directly in the package caused problems related to having duplicate versions of react.

## Prerequisites

On the client you need to

```
import reactTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
reactTapEventPlugin();
```

## Configuration

To add your components to the style guide do the following on the client:

```
import ReactStyleGuide from 'meteor/webysr:react-style-guide';
import ChannelCard from '../channels/components/ChannelCard.jsx';
import ChannelList from '../channels/components/ChannelList.jsx';

const styleGuide = new ReactStyleGuide();

/**
 * Style Guide for the ChannelCard Component
 */
styleGuide.addComponent(ChannelCard, {
    channel: {
        _id: '2o439AHBRJ4083tgsh',
        name: 'My Test Channel'
    },
    settingsHref: '/channels/2o439AHBRJ4083tgsh',
    owner: 'Jürgen Schlieber',
    onTrashChannel(channel) {

        alert('onTrashChannel called with ', channel);
    }
});

/**
 * Style Guide for the ChannelList Component
 */
styleGuide.addComponent(ChannelList, {
    channels: [
        {
            _id: '2o439AHefBRJ4083tgsh',
            name: 'My first Channel',
            owner: '2o439AHBRJ4083tgsh'
        }, {
            _id: '2o439AHsdgBRJ4083tgsh',
            name: 'My second Channel',
            owner: '2o439AHBRJ4083tgsh'
        }, {
            _id: '2o439AHhreBRJ4083tgsh',
            name: 'My third Channel',
            owner: '2o439AHBRJ4083tgsh'
        }, {
            _id: '2o439AHweghBRJ4083tgsh',
            name: 'My forth Channel',
            owner: '2o439AHBRJ4083tgsh'
        }
    ]
});
```

## License

MIT