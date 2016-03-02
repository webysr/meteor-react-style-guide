import React from 'react';

const StyleGuideComponent = React.createClass({

    propTypes: {
        initialProps: React.PropTypes.object,
        component: React.PropTypes.func.isRequired
    },

    render() {

        let {initialProps} = this.props;
        let Component = this.props.component;

        return (
            <div>
                <h1>{Component.displayName} Component</h1>
                <h2>Props</h2>
                <pre>{JSON.stringify(initialProps, null, 4)}</pre>
                <h2>Rendered</h2>
                <Component {...initialProps}/>
            </div>
        );
    }
});

export default StyleGuideComponent;