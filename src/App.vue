<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row text-center text-white">
        <div class="col-12 p-2">
          <img
            alt="Vue logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/NASA_Worm_logo.svg"
            class="img-fluid m-2"
          />
          <h1>Picture of the Day</h1>
        </div>
        <div class="col-6 m-auto form-group">
          <label for="nasaApod">Enter a date...</label>
          <div class="d-flex align-items-center">
            <input type="date" name="nasaApod" id="nasaApod" class="form-control" v-model="query" />
            <button type="submit" class="btn btn-primary" @click="getOnePicture">Find</button>
          </div>
          <div class>
            <button
              type="button"
              class="btn btn-primary m-3"
              @click="getRandomPicture"
            >Get a Random Picture</button>
          </div>
        </div>
      </div>
      <div class="row">
        <Results></Results>
        <PictureDetails></PictureDetails>
      </div>
    </div>
  </div>
</template>



<script>
import Results from "./components/Results";
import PictureDetails from "./components/PictureDetails";
export default {
  name: "App",
  data() {
    return {
      query: "",
    };
  },

  mounted() {
    // if we had a basic request we could make that, our api requires a query and so we will require user input
    // this.$store.dispatch("getMovies")
  },
  methods: {
    getOnePicture() {
      this.$store.dispatch("getOnePicture", this.query);
    },
    getRandomPicture() {
      this.$store.dispatch("getRandomPicture", 1);
    },
  },

  components: {
    Results,
    PictureDetails,
  },
};
</script>