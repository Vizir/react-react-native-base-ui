import { IRatingSizes } from "@naturacosmeticos/natds-web/dist/Components/Rating/Rating.props";

export interface IRatingProps {
  id: string;
  size?: IRatingSizes;
  rate?: number;
}
