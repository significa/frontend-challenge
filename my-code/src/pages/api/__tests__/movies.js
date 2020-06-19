import movies from '../movies';
import fetch from 'isomorphic-fetch';
import http from 'http';
import listen from 'test-listen';
import { apiResolver } from 'next/dist/next-server/server/api-utils';

describe('api', () => {
  describe('movies', () => {
    let server;
    let url;

    beforeAll(async (done) => {
      server = http.createServer((req, res) => apiResolver(req, res, undefined, movies));
      url = await listen(server);
      done();
    });

    afterAll((done) => {
      server.close(done);
    });

    it('should return response', async () => {
      const data = await fetch(url + '/api/movies?titleToSearch=hunt');
      const response = await data.json();
      expect(response).toMatchObject({
        response: 'True'
      });
    });
  });
});
