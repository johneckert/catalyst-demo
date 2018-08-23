<template>
  <v-flex row>
        <v-card :height="height">
          <bubble-chart
          @jsc_click="selectBubble"
            :dataModel='bubbleData'
            title='D3 Bubble Chart'
          ></bubble-chart>
        </v-card>
      </v-flex>  
</template>
<script>
import { D3BubbleChart } from "jscatalyst";
import { mapGetters } from "vuex";

export default {
  name: "BubbleChart",
  components: {
    bubbleChart: D3BubbleChart
  },
  computed: {
    ...mapGetters(["bubbleData", "height"])
  },
  methods: {
    selectBubble(data) {
      console.log(data);
      this.bc.postMessage(data.label);
    }
  },
  created() {
    this.bc = new BroadcastChannel("bubble_channel");
  },
  beforeDestroy() {
    this.bc.close();
  }
};
</script>
<style>
</style>
