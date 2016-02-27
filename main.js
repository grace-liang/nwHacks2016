
//Retrieve existing DBs
Quizzes = new Mongo.Collection("quizzes");
Questions = new Mongo.Collection("questions");

Router.map(function () {
  this.route('homepage', {
    path: '/'
  });

  this.route('quizzes', {
    path: '/quizzes/:_qid',
    data: function () {return this.params}
  });
});
