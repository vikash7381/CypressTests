describe("API tests for search product", () => {
  it("Scenario: Product search Tshirt", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/searchProduct",
      form: true,
      body: { search_product: "tshirt" },
    }).then((response) => {
      expect(response.status).to.equal(200);
      const data = JSON.parse(response.body);
      expect(data.responseCode).to.equal(200);
      expect(data.products).to.be.an("array");
      cy.log(data.message);
    });
  });
});
