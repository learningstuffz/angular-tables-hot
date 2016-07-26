import angular from 'angular';
import service from './mainTable.service';
import component from './mainTable.component';
import config from './mainTable.config';
import uiRouter from 'angular-ui-router';

const mainTableModule = angular.module('mainTable', [uiRouter])
	.config(config)
	.service('MainTableService', service)
	.component('mainTable', component);

export default mainTableModule;
