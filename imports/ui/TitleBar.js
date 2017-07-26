import React from 'react';
import propTypes from 'prop-types';

export default class TitleBar extends React.Component{
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h3>{this.props.subtitle}</h3>;
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string
};
