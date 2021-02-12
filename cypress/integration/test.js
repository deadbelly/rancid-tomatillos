describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movieListData'});
    cy.visit('http://localhost:3000');
  })

  it('Should see a header and home button on page load', () => {
    cy.get('header h1').should('have.text', 'RancidTomatillos');
    cy.get('header button').should('have.text', 'HOME');
  });

  it('Should be able to click a movie and direct it to a new URL to see movie details and click on the home button to go back', () => {
    cy.contains('Test 2')
      .click()
      .url()
      .should('contain', '/337401')
      .get('button')
      .click()
      .url()
      .should('contain', '/')
  });
});

describe('MovieList', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movieListData'});
    cy.visit('http://localhost:3000');
  });

  it('Should show 40 movie posters', () => {
    cy.get('.poster').should('have.length', 3);
  });

  it('Should have an image for each poster', () => {
    cy.get('.poster').each(poster => {
      cy.get(poster).get('img').should('have.class', 'poster-img')
    });
  });

  it('Should have a rating for each poster', () => {
    cy.get('.poster').each(poster => {
      cy.get(poster).get('p').should('contain', 'Freshness:')
    });
  });

  it('Should have an image for each poster', () => {
    cy.get('.poster').each(poster => {
      cy.get(poster).get('h2').should('be.visible')
    });
  });
});

describe('MovieDetail', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {fixture: 'movieDetailData'});
    cy.visit('http://localhost:3000/337401');
  });

  it('Should see a movie detail section', () => {
    cy.get('section').should('have.class', 'movie-detail-page');
  });

  it('Should have two info articles', () => {
    cy.get('article').should('have.length', 2);
  });

  it('Should have a backrop image', () => {
    cy.get('.movie-detail-page div').should('have.class', 'backdrop-img');
  });

  it('Should have a title', () => {
    cy.get('h2').should('contain', 'Test 2');
  });

  it('Should have a release date', () => {
    cy.get('p').should('contain', 'Release Date:');
  });

  it('Should list genres', () => {
    cy.get('p').should('contain', 'Genres:');
  });

  it('Should have a runtime', () => {
    cy.get('p').should('contain', 'Runtime:');
  });

  it('Should have a budget', () => {
    cy.get('p').should('contain', 'Budget:');
  });

  it('Should have a revenue', () => {
    cy.get('p').should('contain', 'Revenue:');
  });

  it('Should have a tagline', () => {
    cy.get('h3').should('contain', 'It\'s a movie!')
  });

  it('Should have an overview', () => {
    cy.get('p').should('have.class', 'overview');
  });

  it('Should have a rating', () => {
    cy.get('p').should('contain', 'Freshness:');
  });
});

describe('Error', () => {
  it('Should update the DOM to inform users of a 404', () => {
    cy.intercept({method: 'GET', url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, {
      statusCode: 404
    });
    cy.visit('http://localhost:3000')
    .get('.error-status').should('have.text', '404 - Not Found')
    .get('.error-expl').should('have.text', 'What you\'re looking for isn\'t here. Double Check the url and try again.');
  });

  it('Should update the DOM to inform users of a 500 error', () => {
    cy.intercept({method: 'GET', url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401'}, {
      statusCode: 500
    });
    cy.visit('http://localhost:3000/337401')
    .get('.error-status').should('have.text', '500 - Internal Server Error')
    .get('.error-expl').should('have.text', 'Something went wrong on our end. Try reloading the page. If the problem persists try back later.');
  });
});
