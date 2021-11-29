describe("Homepage", () => {
    beforeEach(() => {
        cy.viewport("macbook-15");
        cy.visit("/");
    });

    it("should render home page", () => {
        cy.contains("Get Started").should("exist");
        cy.contains("Welcome To Builder").should("exist");
        cy.contains("Build your resume, portfolio and website.").should(
            "exist",
        );
        cy.contains("Try Demo").should("exist");
        cy.contains("Login").should("exist");
        cy.contains("About The Developer").should("exist");
    });
    
    it("should navigate properly", () => {
        cy.contains("Get Started").should("exist").click();
        cy.wait(3000);
        cy.url().should('contain', 'register');
        cy.go('back');
        cy.contains("Login").click();
        cy.wait(3000);
        cy.url().should('contain', 'login');
        cy.go('back');
        cy.contains("Try Demo").click()
        cy.wait(3000);
        cy.url().should('contain', 'builder');
        cy.go('back');
    });
});
