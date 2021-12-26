import { FontSizes, FontWeights } from "../../styles/typography";

interface Props {
  value: string;

  fontSize?: FontSizes;
  fontWeight?: FontWeights;
}
export default function Description(p: Props) {
  return <span {...p} style={p}>{p.value}</span>;
}
