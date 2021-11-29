describe("Register Page", () => {
    beforeEach(() => {
        cy.viewport("macbook-15");
        cy.visit("/register");
    });
    it("should render login page", () => {
        cy.contains('Register').should('exist');
        cy.contains('Username').should('exist');
        cy.contains('Email').should('exist');
        cy.contains('Password').should('exist');
        cy.get('button').contains('Register').should('exist');
        cy.contains('Login').eq(0).click();
        cy.url().should('contain', 'login')
        cy.wait(3000);
        cy.go('back')
        cy.url().should('contain', 'register')
    });

    it.only('should register a new user', () => {
        cy.get('input').eq(0).type('tester');
        cy.get('input').eq(1).type('tester@mail.com');
        cy.get('input').eq(2).type('tester');
        cy.get('button').contains('Register').click();
        cy.get('button').contains('Loading..').should('exist');
        cy.wait(3000);
        cy.url().should('contain', 'document');
        cy.contains('Create New Document');
        cy.contains('tester').should('exist')
        cy.contains('tester').click();
        cy.contains('My Documents').should('exist')
        cy.contains('Logout').should('exist')
        cy.contains('About Us').should('exist')
        
    });

});
