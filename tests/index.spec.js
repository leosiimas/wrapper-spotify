import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch')
import SpotifyWrapper  from '../src/index';

describe('SpotifyWrapper Library', function () {

    it('should create an instance of SpotifyWrapper', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify).to.be.an.instanceof(SpotifyWrapper);
    });

    it('should receive apiURL as an option', () => {

        let spotify = new SpotifyWrapper({
          apiURL: 'blabla'
        });

        expect(spotify.apiURL).to.be.equal('blabla');
    });

    it('should use the default apiURL if not provided', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({
            apiURL: 'foo'
        });

        expect(spotify.apiURL).to.be.equal('foo');
    });

    describe('request method', () => {

        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('shold have request method', () => {
            let spotify = new SpotifyWrapper({});

            expect(spotify.request).to.exist;
        });

        it('should call fetch when request', () => {
            let spotfy = new SpotifyWrapper({
                token: 'foo'
            });

            spotfy.request('url');
            expect(fetchedStub).to.have.been.calledOnce;

        });

        it('should call fetch whit right url passed', () => {
            let spotfy = new SpotifyWrapper({
                token: 'foo'
            });

            spotfy.request('url');
            expect(fetchedStub).to.have.been.calledWith('url');

        });

        it('should call fetch whit right headers passed', () => {
            let spotfy = new SpotifyWrapper({
                token: 'foo'
            });

            const headers = {
                headers: {
                    Authorization: `'Bearer foo'`,
                },
            };

            spotfy.request('url');
            expect(fetchedStub).to.have.been.calledWith('url',headers);

        });
    });
});
