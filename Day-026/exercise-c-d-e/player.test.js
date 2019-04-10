const Player = require('./Player');
const Song = require('./song');

let player = null;
let song1 = null;
let song2 = null;


beforeAll(function () {
    expect.extend({
        toBePlaying(player_p, song_p) {
            const pass = (player_p.currentlyPlaySong === song_p);
            if (pass === true) {
                return {
                    message: function () {
                        return `expected ${song_p} to be playing`;

                    },
                    pass: true
                };
            }
            else {
                return {
                    message: function () {
                        return `expected ${song_p} to be playing, and I did not get it...`;
                    },
                    pass: false
                };
            }
        }
    });
});

beforeEach(function () {
    player = new Player();
    song1 = new Song('Chandelier', '1000 Forms of Fear', 'Sia');
    song2 = new Song('Big Girls Cry', '1000 Forms of Fear', 'Sia');
})

describe('Players should be able to play songs', function () {
    test('the first test player.currentlPlaySong', function () {
        player.play(song1);
        expect(player.currentlyPlaySong).toEqual(song1);
    });
    test('the second test player.currentlPlaySong', function () {
        player.play(song2);
        expect(player.currentlyPlaySong).toEqual(song2);
    });
});

describe('Testing for custom matcher toBePlaying', function () {
    test('the first test custom matcher toBePlaying', function () {
        player.play(song1);
        expect(player).toBePlaying(song1);
    });
    test('the second test custom matcher toBePlaying', function () {
        player.play(song2);
        expect(player).toBePlaying(song2);
    });
});