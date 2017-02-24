angular
.module('sosohappy')
.controller('UsersShowCtrl', UsersShowCtrl);

// UsersShowCtrl.$inject = ['User', '$stateParams', 'CurrentUserService', '$moment'];
UsersShowCtrl.$inject = ['User', '$stateParams', 'CurrentUserService'];

function UsersShowCtrl(User, $stateParams,CurrentUserService){
  const vm = this;
  User.get($stateParams).$promise.then((data) => {
    console.log(data);
    // ideaUpdater(data.posts);
    vm.user = data;
  }).then(() => {
    let posts = vm.user.posts;
    // console.log(posts);
    // for (var i = 0; i < posts.length; i++) {
    //   posts[i].sinceWhen = $moment(posts[i].createdAt).fromNow();
    // }
    // console.log(posts[i]);
  });
  //
  // console.log(vm.user);
  // vm.idea = {};
  // vm.upvote   = upVote;
  // vm.downvote = downVote;
  // vm.addIdea  = addIdea;
  // vm.toShow   = 10;
  // vm.sortBy   = '-createdAt';
  //
  // //Menu functionality
  // vm.originatorEvent = null;
  // vm.openMenu = function($mdMenu, e) {
  //   vm.originatorEvent = e;
  //   $mdMenu.open(e);
  //
  //   //set max number of posts to be shown
  // };
  // vm.maxNum = function(int) {
  //   vm.toShow = int;
  //   console.log(vm.toShow);
  // };
  //
  // vm.sortMethod = function(sortType) {
  //   console.log('ping');
  //   vm.sortBy = sortType;
  //   console.log(vm.sortBy);
  // };
  //
  //
  // //Idea functions
  // function ideaUpdater(posts) {
  //   if (typeof(posts) !== 'object') throw 'posts should be an object';
  //   for (var i = 0; i < posts.length; i++) {
  //     posts[i].createdAt = createdOnParser(posts[i].createdAt);
  //     posts[i].score     = posts[i].upvotes.length - posts[i].downvotes.length;
  //     posts[i].engage    = posts[i].upvotes + posts[i].downvotes;
  //     console.log(posts[i].createdAt);
  //   }
  // }
  //
  //
  // //make sense of the timestamps.
  // function createdOnParser(data) {
  //   var str  = data.split('T');
  //   var date = str[0];
  //   var time = str[1].split('.')[0];
  //   return `${date} at ${time}`;
  // }
  //
  //
  // function addIdea() {
  //   console.log(vm.idea);
  //   vm.idea.randomUsername = randNameService.rndName();
  //   $http
  //     .post(`${API}/Users/${$stateParams.id}/posts`, {idea: vm.idea})
  //     .then((response) => {
  //       vm.user.posts.push(response.data);
  //     });
  // }
  //
  // function upVote(ideaId, $event) {
  //   $http
  //     .put(`${API}/Users/${$stateParams.id}/posts/${ideaId}/upvote`)
  //     .then(() => {
  //       vm.user = User.get($stateParams);
  //       // console.log(angular.element($event.target).children('.upvotes'));
  //     });
  // }
  //
  // function downVote(ideaId, $event) {
  //   $http
  //     .put(`${API}/Users/${$stateParams.id}/posts/${ideaId}/downvote`)
  //     .then(() => {
  //       vm.user = User.get($stateParams);
  //       // console.log($event.target);
  //     });
  // }
}
