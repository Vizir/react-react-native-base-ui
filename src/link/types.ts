import { LinkProps } from '@material-ui/core/Link';

export interface ILinkProps {
  children: LinkProps['children'];
  color?: 'default' | 'error' | 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
  variant?: LinkProps['variant'];
  underline?: LinkProps['underline'];
}
