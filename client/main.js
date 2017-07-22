import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [
  {
    _id: '1',
    name: 'Ben',
    score: 60,
  },
  {
    _id: '2',
    name: 'Pete',
    score: 10
  },
  {
    _id: '3',
    name: 'Gail',
    score: 80
  }
];

const renderPlayers = () => {
  return [<p key="1">1</p>,<p key="2">2</p>,<p key="3">3</p>];
};

Meteor.startup(() => {
  let title = 'Score Keep';
  let name = 'Ben';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
    {renderPlayers()}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
