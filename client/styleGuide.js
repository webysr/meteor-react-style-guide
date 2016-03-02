import StyleGuideRouter from './StyleGuideRouter.jsx';
import reactTapEventPlugin from 'react-tap-event-plugin';
import Components from './model/Components';

export default class ReactStyleGuide {

  constructor() {
    this.init();
  }

  init() {
    // Needed for onTouchTap
    // Can go away when react 1.0 release
    // Check this repo:
    // https://github.com/zilverline/react-tap-event-plugin
    reactTapEventPlugin();

    console.log('Auto generating style guide...');
    this.router = new StyleGuideRouter();
  }

  addComponent(component, initialProps) {

    let name = component.displayName;
    Components.insert({name});
    this.router.addRoute(component, initialProps);
  }
}