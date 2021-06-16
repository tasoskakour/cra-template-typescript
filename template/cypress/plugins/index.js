/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	require('@cypress/code-coverage/task')(on, config);

	// config.env.JWT_TOKEN = process.env.JWT_TOKEN;

	// return config;
};
