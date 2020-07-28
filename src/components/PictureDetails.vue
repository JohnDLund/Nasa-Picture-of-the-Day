<template>
  <div v-if="nasaPicture.hdurl" class="col-12 pb-5 d-flex justify-content-center">
    <div class="card" style="width: 60%">
      <img :src="nasaPicture.url" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{nasaPicture.title}}</h5>
        <p class="card-text">{{nasaPicture.explanation}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <b>Date:</b>
          {{nasaPicture.date}}
        </li>
        <li class="list-group-item">
          <b>Copyright:</b>
          {{nasaPicture.copyright}}
        </li>
      </ul>
    </div>
  </div>
</template>







<script>
export default {
  name: "PictureDetails",
  data() {
    return {};
  },

  computed: {
    nasaPicture() {
      return this.$store.state.activePicture;
    },
  },

  methods: {},
};
</script>
<style>
</style>