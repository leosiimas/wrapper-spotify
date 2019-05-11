/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQAVK9i9zmMpHXU97iKIrmUWerAt5HoWiGBA3826oC-gn0XTOeYt5an9EydgWHowvyZ2bNBdgUIsTvsrnUAzEhcLA4hgoDy4qkT1NsXDjfl2tX2BTVWFPOiYSMkW2yVzi8hRy-6D8WMw6HcIFproxl5hOKRH0DGC9Sn5k-DU4clkpsup1brlbkQ5tYd3THrVZPHSHoHrHsdA91TuEeR6nbv7UsBM47E4IoNSqKfwyeDZ1MxS_M41iI5pHKbyinwDe0Beky6Vqrm0xGRHWEkF'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
