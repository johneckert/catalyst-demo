<template>
  <v-flex row>
        <v-card :height="height / 2">
          <bubble-chart
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
    ...mapGetters(["bubbleData"])
  }
};
</script>
<style>
</style>
