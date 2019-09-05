import appConfig from "../../../app.json";

const labelProbabilityThreshold = appConfig.labelProbabilityThreshold;

export type Label = {
  name: string;
  probability: number;
};

export default async function getSuggestedLabels(
  base64Image: string
): Promise<Label[]> {
  const response = await await fetch("http://192.168.1.69:5001/api/labels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      base64Image
    })
  });

  const allLabels: Label[] = await response.json();
  const goodLabels: Label[] = allLabels.filter(
    label => label.probability >= labelProbabilityThreshold
  );

  return goodLabels;
}
