import { LinkProps } from "@naturacosmeticos/natds-rn";
import { ILinkProps as ILinkNatProps } from "@naturacosmeticos/natds-web";

export interface ILinkProps extends ILinkNatProps {
    children: LinkProps['children'];
}
