import angular from 'angular';
import module from '../mainTable.module';

describe('Service: MainTableService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, MainTableService) {
		this.service = MainTableService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
