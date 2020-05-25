describe("Home", () => {
  it("Light Mode", () => {
    cy.visit("/")
    cy.findByLabelText("enable light mode").click()
    cy.findByText("Hi, I'm Blake Tarter.").trigger("mouseover").should("exist")
  })

  it("Dark Mode", () => {
    cy.visit("/")
    cy.findByLabelText("enable dark mode").click()
    cy.findByText("Hi, I'm Blake Tarter.").trigger("mouseover").should("exist")
  })
})
