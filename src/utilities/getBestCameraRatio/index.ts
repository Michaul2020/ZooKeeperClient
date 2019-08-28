export default function getBestCameraRatio(
  width: number,
  height: number,
  ratios: string[]
): string {
  const wantedRatio = height / width;
  let bestRatio;
  let bestRatioError = 100000;
  for (let ratio of ratios) {
    const [w, h] = ratio.split(":").map(val => parseInt(val));
    if (Math.abs(wantedRatio - w / h) < bestRatioError) {
      bestRatioError = Math.abs(wantedRatio - w / h);
      bestRatio = ratio;
    }
  }

  return bestRatio;
}
