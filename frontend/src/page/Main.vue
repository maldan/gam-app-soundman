<template>
  <div class="main">
    <block-notes
      v-for="x in $store.state.main.blocks"
      :octave="x.octave"
      :notes="x.notes"
      :time="x.time"
      :key="x"
      :style="{ left: x.left, top: x.top }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Wave } from '../engine/Wave';
import { Synth } from '../engine/Synth';

export default defineComponent({
  components: {},
  async mounted() {
    const frame = 60 / 1000;

    /*setInterval(() => {
      for (let i = 0; i < this.$store.state.main.blocks.length; i++) {
        this.$store.state.main.blocks[i].time += 0.1;

        if (this.$store.state.main.blocks[i].time > 4) {
          this.$store.state.main.blocks[i].time = 0;
        }
      }
    }, 100);*/

    const b = this.$store.state.main.blocks[0];
    const wave = [] as number[];
    for (let i = 0; i < b.notes.length; i++) {
      const freq = Wave.FREQUENCY[12 * b.octave + b.notes[i].note];
      const len = b.notes[i].length;

      wave.push(...Synth.render(freq, len));
    }
    //const wave = [...Synth.render(440, 0.2), ...Synth.render(470, 0.2), ...Synth.render(510, 0.2)];

    // Wave.generateWavFile(wave);
  },
  methods: {},
  data: () => {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.main {
}
</style>
