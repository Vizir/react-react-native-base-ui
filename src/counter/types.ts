import { ICounterProps as NatICounterProps } from "@naturacosmeticos/natds-web";

export interface ICounterProps extends NatICounterProps {
  value?: number;
  onChange: (newValue: number) => void;
  onIncrement: (newValue: number) => void;
  onDecrement: (newValue: number) => void;
}
