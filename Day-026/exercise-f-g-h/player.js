class Player {
    play(song) {
        this.currentlyPlaySong = song;
        this.isPlaying = true;
    };

    pause() {
        this.isPlaying = false;
    };

    resume() {
        if (this.isPlaying === true) {
            throw new Error('Song is already playing');
        }
        else {
            this.isPlaying = true;
        }
    };

    makeFavourite() {
        this.currentlyPlaySong.persistFavouriteStatus(true);
    };
};

module.exports = Player;