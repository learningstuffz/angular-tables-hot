import angular from 'angular';
import AppCore from './core/core.module';
import HeaderTable from './features/headerTable/headerTable.module';
import MainTable from './features/mainTable/mainTable.module';

// Construct Module
import appComponent from './app.component';
import config from './app.config';

/**
 * @ngdoc overview
 * @name _app
 *
 * @description
 * 	The root application module
 */

const appModule = angular.module('app', [
	// Core
	AppCore.name,

	// Features
	HeaderTable.name,
	MainTable.name
])
	.component('app', appComponent)
	.config(config);

export default appModule;
