describe('Automatic testing', () => {

  it('Sign in Admin', () => {

    //Accs url: localhost:8000
    cy.visit('http://localhost:8000/')
    //Check title Home page 
    cy.title().should('eq', 'Print Solution')

    //Sign in 
    cy.get(".cads-button--outlined").click()
    cy.get("input[id='username']").type('admin')
    cy.get("input[id='password']").type('admin')
    cy.get("#kc-form-buttons").click()

    let nameTest = "Admin Nguyen"

    //Check Admin's name 
    cy.get(".css-p1puod").then((x) => {
      let currenUsername = x.text()

      expect(currenUsername).to.equal(nameTest)
    })
  })

  it('Search Product', () => {

    //Accs url: localhost:8000
    cy.visit('http://localhost:8000/')

    //Check title Home page 
    cy.title().should('eq', 'Print Solution')

    //Fill search
    cy.get('.css-19cvzs6-MuiInputBase-input').type("th")

    //Click search button
    cy.get(".css-zylse7-MuiButtonBase-root-MuiIconButton-root").click()

    //Check length of Result searach = 4
    cy.xpath("//div[@class='css-whpnf8']/div").should("have.length", 4)
  })

  it('Wath Product detail', () => {

    //Accs url: localhost:8000
    cy.visit('http://localhost:8000/')

    //Check title Home page 
    cy.title().should('eq', 'Print Solution')

    //Click 1 Product in Ấn phẩm phổ biến
    cy.get("a[href='/product/MHUjGfrOIb']").click()

    const textButton = "THIỆP CẢM ƠN"

    //Check Button Đặt in ngay
    cy.get(".MuiTypography-h4").then((x) => {
      let currenUsername = x.text()

      expect(currenUsername).to.equal(textButton)
    })
  })

  it("Watch Manage Product Page", () => {
    //Accs url: localhost:8000
    cy.visit('http://localhost:8000/')
    //Check title Home page 
    cy.title().should('eq', 'Print Solution')

    //Sign in 
    cy.get(".cads-button--outlined").click()
    cy.get("input[id='username']").type('admin')
    cy.get("input[id='password']").type('admin')
    cy.get("#kc-form-buttons").click()

    //Watch list product
    cy.get("a[href='/admin/product']").click()
    
    //Check amount product =6
    cy.xpath("//tbody/tr").should("have.length", 6)
  })

  it("Watch cart",()=>{
    //Accs url: localhost:8000
    cy.visit('http://localhost:8000/')
    //Check title Home page 
    cy.title().should('eq', 'Print Solution')

    //Watch product detail
    cy.get("a[href='/product/MHUjGfrOIb']").click()

    //Order product
    cy.get(".MuiButton-containedSuccess").click()

    //Watch cart
        //Check cart have 1 product
        cy.xpath("//tbody/tr").should("have.length", 1)
  })

})