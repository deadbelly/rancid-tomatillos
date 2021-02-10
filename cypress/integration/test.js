describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should see a header on page load', () => {
    cy.get('header h1').should('have.text', 'RancidTomatillos');
    cy.get('header button').should('have.text', 'HOME');
  });

  it('Should see a movie list on page load', () => {
    cy.get('.poster-grid');
  });
});

describe('MovieList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  // it('Should show an image, title, and rating for each movie', () => {
  //   expect(Array.isArray(cy.get('.poster'))).to.equal(true)
  // });
});

describe('MovieDetail', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/337401');
  });

  it('Should see a movie detail section', () => {
    cy.get('section').should('have.class', 'movie-detail-page');
  });

  it('Should have a backrop image', () => {
    cy.get('.movie-detail-page div').should('have.class', 'backdrop-img');
  });

  it('Should have two info articles', () => {
    cy.get('article').should('have.length', 2);
  });

  // it('Should change urls when you click the home button', () => {
  //
  // })
});

describe('Errors', () => {
  it('Should update the DOM to inform users of a 404', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/fakepath')
  })
});
