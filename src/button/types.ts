
import { ButtonTypes, ButtonSizes, IconPositions } from "@naturacosmeticos/natds-rn/build/lib/components/Button/Button.types";
import { ButtonSize, ButtonColor } from "@naturacosmeticos/natds-web/dist/Components/Button/Button.props";
import { IconName } from '@naturacosmeticos/natds-icons';
export interface IButtonProps {
  text: string;
  onPress: () => void;
  testID?: string;
  variant: ButtonTypes;
  size?: ButtonSize;
  mobileSize?: ButtonSizes;
  iconPosition?: IconPositions;
  iconName?: IconName;
  startIcon?: Element;
  endIcon?: Element;
  color?: ButtonColor;
}
