import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';



const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player={player}/>;
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = 'Score Keep';
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar title={title} subtitle="Created By Ben Nolan"/>
      {renderPlayers(players)}
      <AddPlayer score={10}/>
  </div>
);
ReactDOM.render(jsx, document.getElementById('app'));
  });

});
