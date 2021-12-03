import React from "react";
import { Chip as NatChip } from "@naturacosmeticos/natds-web";

import { IChipProps } from "./types";

export const Chip = (props: IChipProps): React.ReactElement => {
  const {
    clickable,
    size,
    label,
    color,
    variant,
    disabled,
    classes,
    component,
    icon,
    avatar,
    deleteIcon,
    onDelete,
  } = props;

  return (
    <NatChip
      clickable={clickable}
      size={size}
      label={label}
      color={color}
      variant={variant}
      disabled={disabled}
      classes={classes}
      component={component}
      icon={icon}
      avatar={avatar}
      onDelete={onDelete}
      deleteIcon={deleteIcon}
    />
  );
};
