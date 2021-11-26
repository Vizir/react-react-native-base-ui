import { IconName } from '@naturacosmeticos/natds-icons';
import { IconColor, IconSize } from "@naturacosmeticos/natds-web/dist/Components/Icon";
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
export interface IIconProps {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  theme?: Theme;
}
