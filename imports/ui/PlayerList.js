import React from 'react';
import Player from './Player';
import propTypes from 'prop-types';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return <p>Add your first player to get started</p>;
    }
    return this.props.players.map((player) => {
      return <Player key={player._id} player={player}/>;
    });
  }
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: propTypes.array.isRequired
};
