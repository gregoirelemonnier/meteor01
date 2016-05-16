Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('postsGreg', function() {
  return Posts.find({author: 'Greg'});
});
