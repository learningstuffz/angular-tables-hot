import angular from 'angular';
import module from '../mainTable.module';

describe('Controller: MainTableController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.service('MainTableService', function() {
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('mainTable',
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
