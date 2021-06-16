/// <reference types="cypress" />

import '@cypress/code-coverage/support';

Cypress.on('window:before:load', (win) => {
	cy.stub(win.console, 'error').callsFake(
		(message) => !message.startsWith('Warning:') && console.error(message)
	);
});
