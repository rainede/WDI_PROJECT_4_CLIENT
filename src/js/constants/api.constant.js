angular
.module('sosohappy')
.constant('API',window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : 'http://sohappy.herokuapp.com/');
