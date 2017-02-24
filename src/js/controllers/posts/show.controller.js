angular
.module('sosohappy')
.controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject = [
  'Post',
  '$state',
  '$scope'
];
function PostsShowCtrl(
  Post,
  $state,
$stateParams
) {
  const vm = this;
  vm.post = Post.get($stateParams);

  vm.delete = function() {
    Post.delete($stateParams).$promise.then(() => {
      $state.go('postsIndex');
    });
  };

  console.log($stateParams.id);

  // vm.application = {
  //   message: 'I would love to do this!',
  //   job_id: $stateParams.id
  // };
  //
  // vm.apply = function() {
  //   Job
  //     .apply(vm.application)
  //     .$promise
  //     .then((data) => {
  //       console.log(data);
  //     }, err => {
  //       console.log(err);
  //     });
  // };
  //

}
