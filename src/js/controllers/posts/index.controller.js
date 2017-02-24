angular
  .module('sosohappy')
  .controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post){
  const vm = this;
  vm.posts = Post.query();
}
