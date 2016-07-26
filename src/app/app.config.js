
/**
 * @ngdoc overview
 * @name _app
 *
 * @description
 * 	The root application route
 *
 */
const appConfig = function(
	$urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: true});
	$urlRouterProvider
		.when('', '/home')
		.otherwise('/home');
};

export default appConfig;
