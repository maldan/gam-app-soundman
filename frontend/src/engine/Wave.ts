export class Wave {
  static FREQUENCY: number[] = [
    ...[16.35, 17.32, 18.35, 19.45, 20.6, 21.83, 23.12, 24.5, 25.96, 27.5, 29.14, 30.87], // 0
    ...[32.7, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49, 51.91, 55, 58.27, 61.74], // 1
    ...[65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83, 110, 116.54, 123.47], // 2
    ...[130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185, 196, 207.65, 220, 233.08, 246.94], // 3
    ...[261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.3, 440, 466.16, 493.88], // 4
    ...[
      523.25, 554.37, 587.33, 622.25, 659.25, 698.46, 739.99, 783.99, 830.61, 880, 932.33, 987.77,
    ], // 5
    ...[
      1046.5, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760, 1864.66,
      1975.53,
    ], // 6
    ...[
      2093, 2217.46, 2349.32, 2489.02, 2637.02, 2793.83, 2959.96, 3135.96, 3322.44, 3520, 3729.31,
    ], // 7
    ...[
      3951.07, 4186.01, 4434.92, 4698.63, 4978.03, 5274.04, 5587.65, 5919.91, 6271.93, 6644.88,
      7040, 7458.62, 7902.13,
    ], // 8
  ];
  static generateWavFile(wave: number[]) {
    const NCH = 1; // number of channels
    const SPS = 44100; // samples per second
    const BPS = 1; // bytes per sample
    const DUR = wave.length / SPS; // duration in seconds
    const size = Math.round(DUR * NCH * SPS * BPS);

    const buffer = new ArrayBuffer(size + 44);
    const data = new DataView(buffer);

    data.setUint32(0, 1179011410, true); // RIFF
    data.setUint32(4, 44 + size, true);
    data.setUint32(8, 1163280727, true); // WAVE
    data.setUint32(12, 544501094, true); // fmt
    data.setUint32(16, 16, true); // 16

    data.setUint16(20, 1, true); // wFormatTag
    data.setUint16(22, NCH, true); // nChannels
    data.setUint32(24, SPS, true); // nSamplesPerSec
    data.setUint32(28, NCH * BPS * SPS, true); // nAvgBytesPerSec
    data.setUint16(32, NCH * BPS, true); // nBlockAlign
    data.setUint16(34, BPS * 8, true); // wBitsPerSample
    data.setUint32(36, 1635017060, true); // data
    data.setUint32(40, size, true); // size

    for (let i = 0; i < wave.length; i++) {
      if (wave[i] > 1) {
        wave[i] = 1;
      }
      if (wave[i] < -1) {
        wave[i] = -1;
      }

      data.setUint8(40 + i, ~~(((1 + wave[i]) / 2) * 255));
    }

    const blob = new Blob([buffer], { type: 'Audio/WAV' });
    const url = URL.createObjectURL(blob);
    const aa = new Audio(url);
    aa.play();
  }
}
