class HeaderTableController {
	constructor($scope, $element, $attrs, HeaderTableService) {
		'ngInject';

		this.name = 'Angular Tables - Handsontable version';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.HeaderTableService = HeaderTableService;
	}

	$onInit() {

	}

	$postLink() {

	}

	$onChanges() {

	}

	$onDestroy() {

	}
}

export default HeaderTableController;
