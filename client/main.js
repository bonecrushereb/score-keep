import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';


const renderPlayers = (playersList) => {

  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  let playerName = e.target.playerName.value;

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {

  Tracker.autorun(() => {
    let title = 'Score Keep';
    let players = Players.find().fetch();
    let name = 'Ben';
    let jsx = (
      <div>
        <h1>{title}</h1>
      <p>Hello {name}!</p>
    {renderPlayers(players)}
    <form onSubmit={handleSubmit}>
      <input type="text" name="playerName" placeholder="Player Name"/>
      <button>Add Players</button>
    </form>
  </div>
);
ReactDOM.render(jsx, document.getElementById('app'));
  });

});
