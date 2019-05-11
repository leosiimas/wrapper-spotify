import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index'

describe('Spotify Album', () => {

  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    })
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests:', () => {

    it('should exist the getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should exist the getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should exist the getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });

  });

  describe('getAlbum', () => {

    it('should call fetch function', () => {

      const album = spotify.album.getAlbum();

      expect(fetchedStub).to.have.been.calledOnce;

    });

    it('should call fetch with correct URL', () => {

      const artists = spotify.album.getAlbum('2ye2Wgw4gimLv2eAKyk1NB');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/albums/2ye2Wgw4gimLv2eAKyk1NB');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({body: 'json'});
      const artists = spotify.album.getAlbum('2ye2Wgw4gimLv2eAKyk1NB');

      expect(artists.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('getAlbums', () => {

    it('should call fetch function', () => {

      const albums = spotify.album.getAlbums();

      expect(fetchedStub).to.have.been.calledOnce;

    });

    it('should call fetch with correct URL', () => {

      const artists = spotify.album.getAlbums(['2ye2Wgw4gimLv2eAKyk1NB','2ye2Wgw4gimLv2eAKyk12B']);

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/albums/?ids=2ye2Wgw4gimLv2eAKyk1NB,2ye2Wgw4gimLv2eAKyk12B');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({album: 'name'});
      const artists = spotify.album.getAlbums(['2ye2Wgw4gimLv2eAKyk1NB','2ye2Wgw4gimLv2eAKyk12B']);

      expect(artists.resolveValue).to.be.eql({album: 'name'});
    });

  });

  describe('getTracks', () => {

    it('should call fetch function', () => {

      const tracks = spotify.album.getTracks();

      expect(fetchedStub).to.have.been.calledOnce;

    });

    it('should call fetch with correct URL', () => {

      const artists = spotify.album.getTracks('2ye2Wgw4gimLv2eAKyk1NB');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/albums/2ye2Wgw4gimLv2eAKyk1NB/tracks');
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({album: 'name'});
      const artists = spotify.album.getTracks('2ye2Wgw4gimLv2eAKyk1NB');

      expect(artists.resolveValue).to.be.eql({album: 'name'});
    });

  });

})
