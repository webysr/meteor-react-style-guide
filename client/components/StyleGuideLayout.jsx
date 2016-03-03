import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import Components from '../model/Components';

const StyleGuideLayout = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    return {
      components: Components.find({}).fetch()
    }
  },

  getInitialState() {

    return {
      sideNavOpen: false
    };
  },

  handleToggle() {

    this.setState({sideNavOpen: !this.state.sideNavOpen});
  },

  handleClose() {

    this.setState({sideNavOpen: false});
  },

  handleTitleTap() {

    FlowRouter.go('react-style-guide.root');
  },

  renderMenuItems() {

    if (this.data.components) {

      return this.data.components.map(component => (
        <MenuItem
          key={component._id}
          href={FlowRouter.path('react-style-guide.' + component.name)}
          onTouchTap={this.handleClose}>{component.name}</MenuItem>
      ));
    }
  },

  render() {

    return (
      <div>
        <AppBar
          title={<span style={{cursor: 'pointer'}}>React Style Guide</span>}
          onTitleTouchTap={this.handleTitleTap}
          showMenuIconButton={true}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
          open={this.state.sideNavOpen}
          docked={false}
          onRequestChange={open => this.setState({sideNavOpen: open})}>
          <AppBar
            title="Components"
            showMenuIconButton={false}
            iconElementRight={<IconButton onClick={this.handleToggle}><NavigationMenu /></IconButton>}
          />
          {this.renderMenuItems()}
        </LeftNav>
        <div className="style-guide-wrapper">
          <div className="style-guide-container">
            {this.props.yield}
          </div>
        </div>
      </div>
    );
  }
});

export default StyleGuideLayout;
