import angular from 'angular';
import module from '../headerTable.module';

describe('Service: HeaderTableService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, HeaderTableService) {
		this.service = HeaderTableService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
