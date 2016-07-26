
const mainTableConfig = function($stateProvider) {
	$stateProvider
		.state('main-table', {
			url: '/home',
			template: '<main-table layout="row" flex></main-table>'
		});
};

export default mainTableConfig;
