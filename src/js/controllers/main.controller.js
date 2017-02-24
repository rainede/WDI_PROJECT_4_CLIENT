angular
  .module('sosohappy')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    // $state.go('usersShow');
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    // $state.go('login');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('home');
  };

}
