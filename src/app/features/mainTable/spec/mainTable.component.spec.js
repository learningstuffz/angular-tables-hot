import component from '../mainTable.component';
import template from '../mainTable.html';
import controller from '../mainTable.controller';

describe('Component: mainTable', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
