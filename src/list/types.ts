import { IListProps } from "@naturacosmeticos/natds-web";

export interface IWebListProps extends IListProps {
  children: IListProps['children']
}
