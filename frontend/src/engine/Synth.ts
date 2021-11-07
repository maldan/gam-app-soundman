export class Synth {
  static render(freq: number, duration = 1): number[] {
    const length = duration * 44100.0;
    const out = [];
    const fadeTime = 1;

    for (let i = 0; i < length; i++) {
      const val = Math.sin((i / 44100) * Math.PI * 2 * freq);
      out.push(val * 1 * fadeTime);
    }

    return out;
  }
}
