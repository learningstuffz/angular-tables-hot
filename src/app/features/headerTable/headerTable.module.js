import angular from 'angular';
import service from './headerTable.service';
import component from './headerTable.component';

const headerTableModule = angular.module('headerTable', [
])
	.service('HeaderTableService', service)
	.component('headerTable', component);

export default headerTableModule;
