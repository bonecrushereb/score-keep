import React from 'react';
import propTypes from 'prop-types';

export default class TitleBar extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired
};
