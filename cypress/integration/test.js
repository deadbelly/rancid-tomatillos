describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
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
    cy.visit('http://localhost:3000');
  });

  it('Should show 40 movie posters', () => {
    cy.get('.poster').should('have.length', 40);
  });
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

  it('Should change urls when you click the home button', () => {
    cy.get('button').click()
      .get('section').should('have.class', '.poster-grid');
  })
});

describe('Error', () => {
  it('Should update the DOM to inform users of a 404', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      ok: false,
      status: 404,
      statusText: 'Not Found'
    })
    cy.visit('http://localhost:3000/337401')
    // .get('.error-status').should('have.text', '404 - Not Found')
    // .get('.error-expl').should('have.text', 'What you\'re looking for isn\'t here. Double Check the url and try again.');
  });
  //
  // it('Should update the DOM to inform users of a 500 error', () => {
  //   cy.visit('http://localhost:3000/fakepath')
  //   .get('.error-status').should('have.text', '500 - Internal Server Error')
  //   .get('.error-expl').should('have.text', 'Something went wrong on our end. Try reloading the page. If the problem persists try back later.');
  // });
});
