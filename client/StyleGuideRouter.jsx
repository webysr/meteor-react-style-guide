import React from 'react';
import {mount} from 'react-mounter';
import StyleGuideLayout from './components/StyleGuideLayout.jsx';
import StyleGuideComponent from './components/StyleGuideComponent.jsx';

export default class StyleGuideRouter {

  constructor() {

    this.routerGroup = FlowRouter.group({
      prefix: '/react-style-guide',
      name: 'react-style-guide'
    });

    this.init();
  }

  init() {

    this.routerGroup.route('/', {
      name: 'react-style-guide.root',
      action() {

        mount(StyleGuideLayout, {
          yield: (
            <div>
              <h1>Welcome to the React Style Guide</h1>
            </div>
          )
        });
      }
    });
  }

  addRoute(component, initialProps) {

    let componentName = component.displayName;
    let path = '/' + componentName;
    this.routerGroup.route(path, {
      name: 'react-style-guide.' + componentName,
      action() {

        mount(StyleGuideLayout, {
          yield: (
            <StyleGuideComponent
              initialProps={initialProps}
              component={component} />
          )
        });
      }
    });
  }
}