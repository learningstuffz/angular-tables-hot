import angular from 'angular';
import module from '../headerTable.module';

describe('Controller: HeaderTableController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.service('HeaderTableService', function() {
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('headerTable',
			{
				// locals
				$scope: this.$scope,
				$element: [{}],
				$attrs: []
			},
			{
				// scope bindings
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});
});
