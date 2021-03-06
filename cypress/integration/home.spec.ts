describe("Home", () => {
  it("Light Mode", () => {
    cy.visit("/")
    cy.findByLabelText("enable light mode").click()
    cy.findByText("Hi, I'm Blake Tarter.").trigger("mouseover").should("exist")

    cy.document().toMatchImageSnapshot()
  })

  it("Dark Mode", () => {
    cy.visit("/")
    cy.findByLabelText("enable dark mode").click()
    cy.findByText("Hi, I'm Blake Tarter.").trigger("mouseover").should("exist")

    cy.document().toMatchImageSnapshot()
  })

  it("Change Pattern", () => {
    cy.visit("/")
    cy.findByLabelText("enable light mode").click()

    cy.findByTestId("change-pattern").click({ force: true })
    cy.findByText("Hi, I'm Blake Tarter.").trigger("mouseover").should("exist")

    cy.document().toMatchImageSnapshot()

    cy.findByTestId("change-pattern").click({ force: true })
    cy.findByText("Hi, I'm Blake Tarter.").trigger("mouseover").should("exist")

    cy.document().toMatchImageSnapshot()
  })
})
