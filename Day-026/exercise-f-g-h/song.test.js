const Song = require('./song');

let song1 = null;
let song2 = null;
let song3 = null;
let song4 = null;
let duplicateSong1 = null;


beforeAll(function () {
    expect.extend({
        toBeInTheSameAlbumAs(song_r, song_p) {
            const pass = (song_r.album === song_p.album);
            if (pass === true) {
                return {
                    message: function () {
                        return 'both songs are the same album';
                    },
                    pass: true
                }
            }
            else {
                return {
                    message: function () {
                        return 'both songs are not the same album';
                    },
                    pass: false
                }
            }
        }
    });
    expect.extend({
        toBeDuplicateSong(song_r, song_p) {
            let pass = true;
            for (let item in song_r) {
                if (song_r[item] !== song_p[item]) {
                    pass = false;
                    break;
                }
            }
            if (pass === true) {
                return {
                    message: function() {
                        return `both songs are the same`;
                    },
                    pass: true
                }
            }
            else {
                return {
                    message: function() {
                        return `both songs are not the same`;
                    },
                    pass: false
                }
            }
        }
    });
});

beforeEach(function() {
    song1 = new Song('Chandelier', '1000 Forms of Fear', 'Sia');
    song2 = new Song('Big Girls Cry', '1000 Forms of Fear', 'Sia');
    song3 = new Song('The Sound of Silence', 'Wednesday Morning, 3 A.M.', 'Simon & Garfunkel');
    song4 = new Song('You Can Tell the World', 'Wednesday Morning, 3 A.M.', 'Simon & Garfunkel');
    duplicateSong1 = new Song('Chandelier', '1000 Forms of Fear', 'Sia');
    duplicateSong2 = new Song('The Sound of Silence', 'Wednesday Morning, 3 A.M.', 'Simon & Garfunkel');
});

describe('Testing Song getDescription method', function () {
    test('test getDescription method', function () {
        expect(song1.getDescription())
            .toBe(`The name of this song is Chandelier ` +
                `and it is from the album 1000 Forms of Fear. ` +
                `It is written by Sia`);
    });
    test('test getDescription method', function () {
        expect(song3.getDescription())
            .toBe(`The name of this song is The Sound of Silence ` +
                `and it is from the album Wednesday Morning, 3 A.M.. ` +
                `It is written by Simon & Garfunkel`);
    });
});

describe('Testing for song isInSameAlbum method', function() {
    test('the first test isInSameAlbum method', function () {
        expect(song1.isInSameAlbum(song2))
            .toBeTruthy();
    });
    test('the second test isInSameAlbum method', function () {
        expect(song1.isInSameAlbum(song3))
            .toBeFalsy();
    });
});

describe('Testing for custom matcher toBeInTheSameAlbumAs', function () {
    test('the first test custom matcher toBeInTheSameAlbumAs', function () {
        expect(song1).toBeInTheSameAlbumAs(song2);
    });
    test('the second test custom matcher toBeInTheSameAlbumAs', function () {
        expect(song3).toBeInTheSameAlbumAs(song4);
    });
});

describe('Tesing for custom matcher toBeDuplicateSong', function() {
    test('the first test custom matcher toBeDuplicateSong', function() {
        expect(song1).toBeDuplicateSong(duplicateSong1);
    });
    test('the second test custom matcher toBeDuplicateSong', function() {
        expect(song3).toBeDuplicateSong(duplicateSong2);
    });
});