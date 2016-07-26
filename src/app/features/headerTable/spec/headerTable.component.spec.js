import component from '../headerTable.component';
import template from '../headerTable.html';
import controller from '../headerTable.controller';

describe('Component: headerTable', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
