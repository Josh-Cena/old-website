<template>
  <div class="music">
    <h1>My playlist</h1>
    <h2>(Work in progress)</h2>
    <ul>
      <li v-for="(artist, index1) in artists" :key="index1">
        <div class="artist">
          <h2>{{ artist.name }}</h2>
          <ul>
            <li v-for="(album, index2) in artist.albums" :key="index2">
              <div class="album">
                <h3 @click="album.expand ^= true">{{ album.name }}</h3>
                <ul v-if="album.expand">
                  <li v-for="(track, index3) in album.tracks" :key="index3">
                    <div
                      class="playBtn"
                      @click="play(index1, index2, index3)"
                    ></div>
                    <p>{{ track }}</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div id="player">
      <p>{{ curTrack() }}</p>
      <audio id="audio" @ended="ended()">
        <source
          :src="'../assets/music/' + this.curTrack() + '.mp3'"
          type="audio/mpeg"
        />
      </audio>
      <button @click="playPrev()">Previous</button>
      <button @click="playNext()">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      artists: [
        {
          name: "Ed Sheeran",
          albums: [
            {
              name: "X",
              tracks: [
                "Afire Love",
                "All of the Stars",
                "I'm a Mess",
                "One",
                "Photograph",
                "Shirtsleeves",
                "Tenerife Sea",
                "The Man",
                "Thinking Out Loud"
              ],
              expand: false
            },
            {
              name: "+",
              tracks: ["Drunk", "Lego House", "Wake Me Up"],
              expand: false
            },
            {
              name: "÷",
              tracks: ["Drunk"],
              expand: false
            },
            {
              name: "No.6 Collaborations Project",
              tracks: [
                "Beautiful People",
                "Best Part of Me",
                "Cross Me",
                "I Don't Care",
                "South of the Border",
                "Way To Break My Heart"
              ],
              expand: false
            },
            {
              name: "5",
              tracks: [
                "Cold Coffee",
                "Drown Me Out",
                "Fall",
                "Fire Alarms",
                "Goodbye To You",
                "Let It Out",
                "Nightmares",
                "One Night",
                "Radio",
                "Where We Land",
                "You"
              ],
              expand: false
            }
          ]
        }
      ],
      curTrack: function() {
        return this.artists[this.curIndex[0]].albums[this.curIndex[1]].tracks[
          this.curIndex[2]
        ];
      },
      curIndex: [0, 0, 0],
      paused: true
    };
  },
  methods: {
    playPrev: function() {
      var a = this.curIndex;
      var i1, i2, i3;
      if (a[2] == 0) {
        if (a[1] == 0) {
          i1 = a[0] == 0 ? this.artists.length - 1 : a[0] - 1;
          i2 = this.artists[i1].albums.length - 1;
        } else {
          i1 = a[0];
          i2 = a[1] - 1;
        }
        i3 = this.artists[i1].albums[i2].tracks.length - 1;
      } else {
        i1 = a[0];
        i2 = a[1];
        i3 = a[2] - 1;
      }
      this.play(i1, i2, i3);
    },
    playNext: function() {
      var a = this.curIndex;
      var i1, i2, i3;
      if (a[2] == this.artists[a[0]].albums[a[1]].tracks.length - 1) {
        if (a[1] == this.artists[a[0]].albums.length - 1) {
          i1 = a[0] == this.artists.length - 1 ? 0 : a[0] + 1;
          i2 = 0;
        } else {
          i1 = a[0];
          i2 = a[1] + 1;
        }
        i3 = 0;
      } else {
        i1 = a[0];
        i2 = a[1];
        i3 = a[2] + 1;
      }
      console.log(i1, i2, i3);
      this.play(i1, i2, i3);
    },
    play: function(index1, index2, index3) {
      this.curIndex = [index1, index2, index3];
      event.stopPropagation();
      var player = document.getElementById("audio");
      player.play();
    }
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.playBtn {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-left: 10px solid black;
  border-bottom: 7px solid transparent;
  margin-right: 10px;
  cursor: pointer;
  float: left;
}
h3 {
  text-align: left;
  cursor: pointer;
}
.album {
  text-align: left;
  vertical-align: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 400px;
}
</style>
