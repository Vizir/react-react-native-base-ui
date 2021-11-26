import { Sizes } from "@naturacosmeticos/natds-web/dist/Components/Counter/Counter.props";
export interface ICounterProps {
  value?: number;
  onChange: (newValue: number) => void;
  onIncrement: (newValue: number) => void;
  onDecrement: (newValue: number) => void;
  size?: Sizes;
}
