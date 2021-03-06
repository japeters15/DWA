const expect = require('chai').expect;
const url = require('../src/models/url');
const util = require('../lib/util');

let testUrl = {};

describe('Url Routes', () => {
  // before every test

beforeEach() => {
  const mockUrl = {
    name: 'Janay',
    longurl: 'www.google.com',
    shorturl:'',
  };

  url.create(mockUrl, (error) => {
    util.debug('Error creating mock user.', error);
  }, (newDbUrl) => {
    testUrl = newDbUrl;
  });
});

// Test for multiple urls
it('GET /api/v1/urls returns multiple urls', (done) => {
  request(server)
    .get('/api/v1/urls')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const users = res.body;

      // Save one single url from the list to test on later
      this.url = urls[0]

      expect(users.length).to.be.above(0)
    })
    .end(done)
  });

  //test for a single url
  it('GET /api/v1/urls/:id returns a url with a id and name property', (done) => {
    request(server)
    .get('/api/v1/urls/' + this.url.id)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const url = res.body;
      expect (url).to.have.property('id')
      expect (url).to.have.property('name')
    })
    .end(done)
  });


    it('Should be able to Create', () => {
      expect(testUrl.id).to.not.be.null;
    });

    it('Should be able to Update', (done) => {
      const updateInfo = {
        id: testUrl.id,
        name: 'Kevin',
      };
      url.update(updateInfo, (err) => util.debug('failed to update', err),
      (updatedDbUrl) => {
        expect(updatedDbUrl.name).to.be.equal(updateInfo.name);
        testUrl = updatedDbUrl;
        done();
      });
    });
    it('Should be able to Delete', (done) => {
      url.destroy(testUrl, (err) => util.debug('User Errored while destroying', err),
      (responseFromDestroy) => {
        expect(responseFromDestroy).to.be.equal(1);
        done();
      });
    });
  });
