angular
.module('sosohappy')
.controller('PostsNewCtrl', PostsNewCtrl);

PostsNewCtrl.$inject = [
  'Post',
  '$state',
  '$scope'
];
function PostsNewCtrl(
  Post,
  $state,
  $scope
){
  const vm = this;
  vm.create = (post) => {
    Post.save(post).$promise
      .then(data => {
        $state.go('postsIndex');
        console.log(data);
      }, err => {
        console.log(err);
      });
  };
  $scope.montres=[
    { name: "Feelings?",
      pic: 'http://findicons.com/files/icons/963/very_emotional_emoticons/128/128_4.png',
      pico: 'http://findicons.com/files/icons/814/very_emotional/128/idiotic_smile.png',
      pict: 'http://findicons.com/files/icons/963/very_emotional_emoticons/128/128_39.png'
    }
  ];
}
