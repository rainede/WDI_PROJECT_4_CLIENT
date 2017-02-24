angular
  .module('sosohappy')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('postsIndex', {
    url: '/posts',
    templateUrl: '/js/views/posts/index.html',
    controller: 'PostsIndexCtrl',
    controllerAs: 'postsIndex'
  })
  .state('postsNew', {
    url: '/posts/new',
    templateUrl: '/js/views/posts/new.html',
    controller: 'PostsNewCtrl',
    controllerAs: 'postsNew'
  })
  .state('postsShow', {
    url: '/posts/:id',
    templateUrl: '/js/views/posts/show.html',
    controller: 'PostsShowCtrl',
    controllerAs: 'postsShow'
  });

  $urlRouterProvider.otherwise('/');
}
