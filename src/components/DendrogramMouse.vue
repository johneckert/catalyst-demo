<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs6>
        <v-card>
          <span>Node: {{selectedEl}}</span>
          <span v-if="clicked"> - Clicked</span>
        </v-card> 
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-card :height="height">
          <dendrogram
          @jsc_mouseover="handleMouseOver"
          @jsc_click="toggleClicked"
          :data-model="dendroData"
          title="Dendrogram"
      ></dendrogram>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { D3Dendrogram } from "jscatalyst";
import { mapGetters } from "vuex";

export default {
  name: "DendrogramMouse",
  components: {
    dendrogram: D3Dendrogram
  },
  data() {
    return {
      selectedEl: "",
      clicked: false
    };
  },
  computed: {
    ...mapGetters(["dendroData", "height"])
  },
  methods: {
    handleMouseOver(event) {
      this.selectedEl = event.data.name
        .split("-")
        .join(" ")
        .toUpperCase();
    },
    handleClick(data) {
      console.log(data);
    },
    toggleClicked() {
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style>
</style>
