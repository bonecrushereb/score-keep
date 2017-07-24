import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // Players.insert({
  //   name: 'Pete',
  //   score: 5
  // });
  console.log(Players.find().fetch());
});
