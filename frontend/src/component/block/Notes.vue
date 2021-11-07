<template>
  <div :class="$style.block">
    <div :class="$style.body">
      <div
        :class="$style.note"
        v-for="x in notes"
        :key="x"
        :style="{
          left: x.note * 24 + 'px',
          top: x.start * 40 + 'px',
          height: x.length * 40 + 'px',
          opacity: time > x.start && time < x.start + x.length ? '1' : '0.5',
        }"
      >
        <div>{{ labels[x.note] }}</div>
        <div>{{ octave }}</div>
      </div>

      <div :class="$style.line" :style="{ top: time * 40 + 'px' }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    notes: Object,
    octave: Number,
    time: Number,
  },
  components: {},
  async mounted() {},
  methods: {},
  data: () => {
    return {
      labels: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    };
  },
});
</script>

<style lang="scss" module>
.block {
  background-color: #2b2b2b;
  padding: 10px;
  position: absolute;
  width: 300px;

  .body {
    background-color: #474747;
    padding: 10px;
    height: 240px;
    overflow-y: scroll;
    position: relative;

    .note {
      position: absolute;
      background-color: #ca3e3e;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      flex-direction: column;
      transition: opacity 0.3s;
    }

    .line {
      position: absolute;
      border-bottom: 1px solid #fefefe;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
    }
  }
}
</style>
