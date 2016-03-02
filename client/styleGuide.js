import StyleGuideRouter from './StyleGuideRouter.jsx';
import reactTapEventPlugin from 'react-tap-event-plugin';
import Components from './model/Components';

export default class ReactStyleGuide {

  constructor() {
    this.init();
  }

  init() {
    console.log('Auto generating style guide...');
    this.router = new StyleGuideRouter();
  }

  addComponent(component, initialProps) {

    let name = component.displayName;
    Components.insert({name});
    this.router.addRoute(component, initialProps);
  }
}