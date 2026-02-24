class loginpage {
  elements = {
    loginPortal: () => cy.get(".col-sm-8").contains("Signup / Login"),
    loginEmail: () => cy.get("input[type='email']").eq(0),
    password: () => cy.get("input[type='password']").eq(0),
    submit: () => cy.get("[data-qa='login-button']"),
  };
}
export default loginpage;
