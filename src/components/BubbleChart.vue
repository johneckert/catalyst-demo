<template>
  <v-flex row>
        <v-card :height="height">
          <bubble-chart
          @click.native="selectBubble"
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
    selectBubble() {
      let tooltip = document.getElementsByClassName("d3_visuals_tooltip")[0];
      let label = null;
      if (tooltip.getElementsByTagName("b")[0]) {
        label = tooltip.getElementsByTagName("b")[0].innerHTML;
      }
      this.bc.postMessage(label);
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
