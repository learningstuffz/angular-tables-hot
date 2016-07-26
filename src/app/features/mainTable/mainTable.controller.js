class MainTableController {
	constructor($scope, $element, $attrs, MainTableService) {
		'ngInject';

		this.name = 'mainTable';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.MainTableService = MainTableService;
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

export default MainTableController;
