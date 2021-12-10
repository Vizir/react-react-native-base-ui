import React from "react";
import { Checkbox as NatCheckbox } from "@naturacosmeticos/natds-web";

import { ICheckboxProps } from "./types";

export const Checkbox = React.forwardRef<HTMLButtonElement, ICheckboxProps>(
  (
    {
      checked,
      color,
      disabled,
      indeterminate,
      action,
      disableFocusRipple,
      edge,
      centerRipple,
      disableTouchRipple,
      focusRipple,
      focusVisibleClassName,
      onFocusVisible,
      TouchRippleProps,
      checkedIcon,
      classes,
      disableRipple,
      icon,
      id,
      indeterminateIcon,
      inputProps,
      inputRef,
      onChange,
      required,
      value,
      ...rest
    }: ICheckboxProps,
    ref
  ) => (
    <NatCheckbox
      checked={checked}
      color={color}
      disabled={disabled}
      indeterminate={indeterminate}
      action={action}
      disableFocusRipple={disableFocusRipple}
      edge={edge}
      centerRipple={centerRipple}
      disableTouchRipple={disableTouchRipple}
      focusRipple={focusRipple}
      focusVisibleClassName={focusVisibleClassName}
      onFocusVisible={onFocusVisible}
      TouchRippleProps={TouchRippleProps}
      checkedIcon={checkedIcon}
      classes={classes}
      disableRipple={disableRipple}
      icon={icon}
      id={id}
      indeterminateIcon={indeterminateIcon}
      inputProps={inputProps}
      inputRef={inputRef}
      onChange={onChange}
      required={required}
      value={value}
      ref={ref}
      {...rest}
    />
  )
);

Checkbox.displayName = "Checkbox";
