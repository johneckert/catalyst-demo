describe("Bar Chart", function() {
  it("Click Event Emits an object", function() {
    cy.visit("http://localhost:8080/bar");
    cy.get(".bar:first-of-type")
      .click()
      .should("be.a", "Object");
  });
});

// Mouseover Event Doesn't seem to be supported
// describe("Bar Chart", function() {
//   it("Mousever Event Emits an object", function() {
//     cy.visit("http://localhost:8080/bar");
//     cy.get(".bar:first-of-type")
//       .mouseover()
//       .should("be.a", "Object");
//   });
// });
