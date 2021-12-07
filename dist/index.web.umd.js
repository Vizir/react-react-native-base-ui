(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@naturacosmeticos/natds-web'), require('styled-components'), require('@naturacosmeticos/natds-web/dist/Components/TabItem')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@naturacosmeticos/natds-web', 'styled-components', '@naturacosmeticos/natds-web/dist/Components/TabItem'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseUI = {}, global.React, global.natdsWeb, global.styled, global.TabItem$1));
}(this, (function (exports, React, natdsWeb, styled, TabItem$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  const Button = (props) => {
      const { color = "primary", variant = "contained", size = "medium", text, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Button, { color: color, variant: variant, size: size, ...rest }, text));
  };

  const ContainerWrapper = styled__default['default'].div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
  const Title = styled__default['default'].div `
  margin: 30px 0 15px;
`;
  const LinkButton = styled__default['default'].div `
  margin-top: 50px;
`;

  const ErrorWrapper = (props) => {
      const { icon, title, description, textButton, actionButton } = props;
      return (React__default['default'].createElement(ContainerWrapper, null,
          icon && (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "106", height: "106", version: "1.1" },
              React__default['default'].createElement("path", { fill: "#C2C2C2", fillRule: "nonzero", d: "M53.002 106C23.775 106 0 82.223 0 53.001 0 23.775 23.775 0 53.002 0 82.222 0 106 23.775 106 53.001 106 82.223 82.223 106 53.002 106zm0-99.169c-25.46 0-46.17 20.711-46.17 46.17 0 25.459 20.71 46.172 46.17 46.172 25.459 0 46.169-20.713 46.169-46.172 0-25.459-20.71-46.17-46.169-46.17zM64.17 55.518c-3.212 2.609-7.186 5.832-7.751 12.613-.148 1.763-1.61 3.137-3.33 3.137h-.178a3.268 3.268 0 0 1-2.37-1.018 3.102 3.102 0 0 1-.828-2.344c.682-9.863 6.618-14.666 10.168-17.536.717-.58 1.286-1.04 1.633-1.392a11.978 11.978 0 0 0 3.532-8.52c0-6.641-5.403-12.043-12.043-12.043-6.039 0-11.171 4.51-11.946 10.486-.225 1.747-1.668 3.064-3.362 3.064h-.177c-.918 0-1.79-.382-2.392-1.051a3.023 3.023 0 0 1-.776-2.358c.955-9.588 9.03-16.88 18.653-16.844 5 0 9.704 1.95 13.25 5.494a18.614 18.614 0 0 1 5.49 13.248 18.627 18.627 0 0 1-5.49 13.259c-.573.578-1.224 1.11-2.083 1.805zM53.002 76.385a4.863 4.863 0 0 1 4.857 4.857A4.864 4.864 0 0 1 53 85.962a4.864 4.864 0 0 1-4.859-4.72 4.862 4.862 0 0 1 4.861-4.857z" }))),
          React__default['default'].createElement(Title, null,
              React__default['default'].createElement(natdsWeb.Typography, { variant: "h4", color: "textPrimary", align: "center" }, title)),
          description && (React__default['default'].createElement(natdsWeb.Typography, { variant: "subtitle1", color: "textSecondary", align: "center" }, description)),
          textButton && (React__default['default'].createElement(LinkButton, null,
              React__default['default'].createElement(natdsWeb.Button, { color: "primary", variant: "text", onClick: actionButton, size: "large" },
                  React__default['default'].createElement("strong", null, textButton))))));
  };

  const StyledView = styled__default['default'].div `
  display: flex;
  flex-direction: column;
`;
  const View = ({ className, children, testID }) => {
      return (React__default['default'].createElement(StyledView, { className: className, "data-testid": testID }, children));
  };

  const Text = (props) => {
      const { children, testID, color, align, variant, classes, component, display, noWrap, gutterBottom, paragraph, variantMapping } = props;
      return (React__default['default'].createElement(natdsWeb.Typography, { "data-testid": testID, color: color, align: align, variant: variant, classes: classes, component: component, display: display, noWrap: noWrap, gutterBottom: gutterBottom, paragraph: paragraph, variantMapping: variantMapping }, children));
  };

  const Card = (props) => {
      const { children, testID, elevation, square } = props;
      return React__default['default'].createElement(natdsWeb.Card, { "data-testId": testID, elevation: elevation, square: square }, children);
  };

  const TextField = (props) => {
      const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
      const handleChangeText = (e) => {
          const { value } = e.target;
          onChangeText(value);
      };
      return (React__default['default'].createElement(natdsWeb.TextField, { onChange: handleChangeText, value: value, type: type, label: label, helpText: helpText, placeholder: placeholder, "data-testid": testID }));
  };

  const style = { height: 15 };
  const HorizontalSpace = () => React__default['default'].createElement("div", { style: style });

  const ProgressIndicator = (props) => {
      return React__default['default'].createElement(natdsWeb.ProgressIndicator, { size: 32, ...props });
  };

  const CloseButton = styled__default['default'](natdsWeb.Button) ``;

  const DialogWrapper = (props) => {
      const { openButtonText, title, closeButtonText, fullWidth, disableBackdropClick, scroll, fullScreen, disableTypography, classes, disableSpacing, actionContent, dialogContent, onBackdropClick, onClose, onEnter, onEntered, onEntering, onEscapeKeyDown, onExit, onExited, onExiting, maxWidth = "sm", open = false, } = props;
      const [isDialogOpen, setIsDialogOpen] = React.useState(open);
      return (React__default['default'].createElement("div", null,
          React__default['default'].createElement(natdsWeb.Button, { color: "primary", onClick: () => setIsDialogOpen(true), size: "medium", variant: "outlined" }, openButtonText),
          React__default['default'].createElement(natdsWeb.Dialog, { fullWidth: fullWidth, maxWidth: maxWidth, disableBackdropClick: disableBackdropClick, open: isDialogOpen, scroll: scroll, fullScreen: fullScreen, onBackdropClick: onBackdropClick, onClose: onClose, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onEscapeKeyDown: onEscapeKeyDown, onExit: onExit, onExited: onExited, onExiting: onExiting },
              React__default['default'].createElement(natdsWeb.DialogTitle, { disableTypography: disableTypography, classes: classes }, title),
              React__default['default'].createElement(natdsWeb.DialogContent, null, dialogContent && dialogContent),
              React__default['default'].createElement(natdsWeb.DialogActions, { disableSpacing: disableSpacing },
                  actionContent && actionContent,
                  closeButtonText ? (React__default['default'].createElement(CloseButton, { color: "primary", onClick: () => setIsDialogOpen(false), variant: "text" }, closeButtonText)) : ("")))));
  };

  const Logo = (props) => {
      const { color, model, size, arialabel } = props;
      return (React__default['default'].createElement(natdsWeb.Logo, { color: color, model: model, size: size, arialabel: arialabel }));
  };

  const AppBar = ({ children, position, color, classes }) => {
      return (React__default['default'].createElement(natdsWeb.AppBar, { position: position, color: color, classes: classes }, children));
  };

  const Avatar = (props) => {
      const { testID, size, variant, alt, imgProps, color, children, src, srcSet, sizes } = props;
      return (React__default['default'].createElement(natdsWeb.Avatar, { color: color, "data-testid": testID, size: size, variant: variant, alt: alt, imgProps: imgProps, src: src, srcSet: srcSet, sizes: sizes }, children));
  };

  const Badge = (props) => {
      const { children, anchorOrigin, badgeContent, color, invisible, max, overlap, showZero, variant, testID } = props;
      return (React__default['default'].createElement(natdsWeb.Badge, { anchorOrigin: anchorOrigin, badgeContent: badgeContent, color: color, invisible: invisible, max: max, overlap: overlap, showZero: showZero, variant: variant, "data-testid": testID }, children));
  };

  const Checkbox = (props) => {
      const { checked, color, disabled, indeterminate, action, disableFocusRipple, edge, centerRipple, disableTouchRipple, focusRipple, focusVisibleClassName, onFocusVisible, TouchRippleProps, checkedIcon, classes, disableRipple, icon, id, indeterminateIcon, inputProps, inputRef, onChange, required, value, } = props;
      return (React__default['default'].createElement(natdsWeb.Checkbox, { checked: checked, color: color, disabled: disabled, indeterminate: indeterminate, action: action, disableFocusRipple: disableFocusRipple, edge: edge, centerRipple: centerRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, checkedIcon: checkedIcon, classes: classes, disableRipple: disableRipple, icon: icon, id: id, indeterminateIcon: indeterminateIcon, inputProps: inputProps, inputRef: inputRef, onChange: onChange, required: required, value: value }));
  };

  const Chip = (props) => {
      const { clickable, size, label, color, variant, disabled, classes, component, icon, avatar, deleteIcon, onDelete, } = props;
      return (React__default['default'].createElement(natdsWeb.Chip, { clickable: clickable, size: size, label: label, color: color, variant: variant, disabled: disabled, classes: classes, component: component, icon: icon, avatar: avatar, onDelete: onDelete, deleteIcon: deleteIcon }));
  };

  const Counter = (props) => {
      const { onChange, onDecrement, onIncrement, value, label, readOnly, size, maxValue, minValue, } = props;
      return (React__default['default'].createElement(natdsWeb.Counter, { value: value, label: label, readOnly: readOnly, size: size, maxValue: maxValue, minValue: minValue, onChange: onChange, onDecrement: onDecrement, onIncrement: onIncrement }));
  };

  const Icon = ({ name, color, size }) => {
      return (React__default['default'].createElement(natdsWeb.Icon, { name: name, color: color, size: size }));
  };

  const IconButton = ({ children, ...rest }) => {
      return (React__default['default'].createElement(natdsWeb.IconButton, { ...rest }, children));
  };

  const Image = ({ alt, src, fallback, className, disableSelection, height, maxHeight, maxWidth, radius, state, style, }) => {
      return (React__default['default'].createElement(natdsWeb.Image, { alt: alt, src: src, fallback: fallback, className: className, disableSelection: disableSelection, height: height, maxHeight: maxHeight, maxWidth: maxWidth, radius: radius, state: state, style: style }));
  };

  const Link = (props) => {
      const { children, color, href, underline, variant, component, classes, display, noWrap, gutterBottom, paragraph, align, variantMapping, TypographyClasses, onClick, onKeyPress, } = props;
      return (React__default['default'].createElement(natdsWeb.Link, { color: color, href: href, underline: underline, variant: variant, component: component, classes: classes, display: display, noWrap: noWrap, gutterBottom: gutterBottom, paragraph: paragraph, align: align, variantMapping: variantMapping, TypographyClasses: TypographyClasses, onClick: onClick, onKeyPress: onKeyPress }, children));
  };

  const ListItem = (props) => {
      const { testID, disabled, onClick, selected, alignItems, autoFocus, ContainerComponent, ContainerProps, dense, disableGutters, divider, focusVisibleClassName, children, } = props;
      return (React__default['default'].createElement(natdsWeb.ListItem, { "data-testID": testID, disabled: disabled, onClick: onClick, selected: selected, alignItems: alignItems, autoFocus: autoFocus, ContainerComponent: ContainerComponent, ContainerProps: ContainerProps, dense: dense, disableGutters: disableGutters, divider: divider, focusVisibleClassName: focusVisibleClassName }, children));
  };

  const ListItemAvatar = (props) => {
      const { testID, children, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemAvatar, { "data-testID": testID, ...rest }, children));
  };

  const ListItemIcon = (props) => {
      const { testID, children } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemIcon, { "data-testID": testID }, children));
  };

  const ListItemSecondaryAction = ({ children, classes, testID }) => {
      return (React__default['default'].createElement(natdsWeb.ListItemSecondaryAction, { "data-testID": testID, classes: classes }, children));
  };

  const ListItemText = (props) => {
      const { testID, children, primary, secondary, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemText, { primary: primary, secondary: secondary, "data-testID": testID, ...rest }, children));
  };

  const Radio = ({ ...props }) => {
      return (React__default['default'].createElement(natdsWeb.Radio, { ...props }));
  };

  const Rating = ({ id, size, rate }) => {
      return (React__default['default'].createElement(natdsWeb.Rating, { id: id, size: size, rate: rate }));
  };

  const Skeleton = (props) => {
      const { variant, height, width, animation, } = props;
      return (React__default['default'].createElement(natdsWeb.Skeleton, { variant: variant, height: height, width: width, animation: animation }));
  };

  const TabContainer = ({ children, value = false, variant }) => {
      return (React__default['default'].createElement(natdsWeb.TabContainer, { value: value, variant: variant }, children));
  };

  const TabItem = ({ children, id, ...rest }) => {
      return (React__default['default'].createElement(TabItem$1.TabItem, { id: id, ...rest }, children));
  };

  const ToggleButton = ({ iconOff, iconOn, onPress }) => {
      return (React__default['default'].createElement(natdsWeb.ToggleButton, { iconOff: iconOff, iconOn: iconOn, onClick: onPress }));
  };

  const Toolbar = (props) => {
      const { children, variant, color, disableGutters } = props;
      return (React__default['default'].createElement(natdsWeb.Toolbar, { variant: variant, color: color, disableGutters: disableGutters }, children));
  };

  const AppBarHighlight = (props) => {
      const { children, className, component } = props;
      return (React__default['default'].createElement(natdsWeb.AppBarHighlight, { className: className, component: component }, children));
  };

  const Container = (props) => {
      const { children, className, component, fixed, disableGutters, maxWidth, } = props;
      return (React__default['default'].createElement(natdsWeb.Container, { className: className, component: component, fixed: fixed, disableGutters: disableGutters, maxWidth: maxWidth }, children));
  };

  const Provider = (props) => {
      const { children, theme, testID, cssPrefix } = props;
      return (React__default['default'].createElement(natdsWeb.Provider, { "data-testID": testID, theme: theme, cssPrefix: cssPrefix }, children));
  };

  const ExpansionPanelSummary = (props) => {
      const { children, expandIcon, classes, tabIndex, action, disabled, centerRipple, disableRipple, disableTouchRipple, focusRipple, focusVisibleClassName, TouchRippleProps, IconButtonProps, onFocusVisible, } = props;
      return (React__default['default'].createElement(natdsWeb.ExpansionPanelSummary, { expandIcon: expandIcon, classes: classes, tabIndex: tabIndex, action: action, disabled: disabled, centerRipple: centerRipple, disableRipple: disableRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, IconButtonProps: IconButtonProps }, children));
  };

  const ExpansionPanelDetails = (props) => {
      const { children, classes } = props;
      return (React__default['default'].createElement(natdsWeb.ExpansionPanelDetails, { classes: classes }, children));
  };

  const ExpansionPanel = (props) => {
      const { children, classes, onChange, TransitionComponent, TransitionProps, disabled, expanded, defaultExpanded, } = props;
      return (React__default['default'].createElement(natdsWeb.ExpansionPanel, { classes: classes, onChange: onChange, TransitionComponent: TransitionComponent, TransitionProps: TransitionProps, disabled: disabled, expanded: expanded, defaultExpanded: defaultExpanded }, children));
  };

  const List = (props) => {
      const { className, dense, disablePadding, subheader, children } = props;
      return (React__default['default'].createElement(natdsWeb.List, { className: className, dense: dense, disablePadding: disablePadding, subheader: subheader }, children));
  };

  const ListSubheader = (props) => {
      const { children, component, classes, color, disableGutters, disableSticky, inset } = props;
      return (React__default['default'].createElement(natdsWeb.ListSubheader, { component: component, classes: classes, color: color, disableGutters: disableGutters, disableSticky: disableSticky, inset: inset }, children));
  };

  const CssBaseline = (props) => {
      const { children, classes, testID } = props;
      return (React__default['default'].createElement(natdsWeb.CssBaseline, { classes: classes, "data-testid": testID }, children));
  };

  const themes = natdsWeb.themes;

  const Input = (props) => {
      const { color, className, mask, margin, disabled, multiline, state, size, inputComponent, hasIcon, testID, value, onClick, onKeyPress, } = props;
      return (React__default['default'].createElement(natdsWeb.Input, { color: color, className: className, mask: mask, margin: margin, disabled: disabled, multiline: multiline, state: state, size: size, inputComponent: inputComponent, hasIcon: hasIcon, "data-testid": testID, onClick: onClick, onKeyPress: onKeyPress, value: value }));
  };

  exports.AppBar = AppBar;
  exports.AppBarHighlight = AppBarHighlight;
  exports.Avatar = Avatar;
  exports.Badge = Badge;
  exports.Button = Button;
  exports.Card = Card;
  exports.Checkbox = Checkbox;
  exports.Chip = Chip;
  exports.Container = Container;
  exports.Counter = Counter;
  exports.CssBaseline = CssBaseline;
  exports.DialogWrapper = DialogWrapper;
  exports.ErrorWrapper = ErrorWrapper;
  exports.ExpansionPanel = ExpansionPanel;
  exports.ExpansionPanelDetails = ExpansionPanelDetails;
  exports.ExpansionPanelSummary = ExpansionPanelSummary;
  exports.HorizontalSpace = HorizontalSpace;
  exports.Icon = Icon;
  exports.IconButton = IconButton;
  exports.Image = Image;
  exports.Input = Input;
  exports.Link = Link;
  exports.List = List;
  exports.ListItem = ListItem;
  exports.ListItemAvatar = ListItemAvatar;
  exports.ListItemIcon = ListItemIcon;
  exports.ListItemSecondaryAction = ListItemSecondaryAction;
  exports.ListItemText = ListItemText;
  exports.ListSubheader = ListSubheader;
  exports.Logo = Logo;
  exports.ProgressIndicator = ProgressIndicator;
  exports.Provider = Provider;
  exports.Radio = Radio;
  exports.Rating = Rating;
  exports.Skeleton = Skeleton;
  exports.TabContainer = TabContainer;
  exports.TabItem = TabItem;
  exports.Text = Text;
  exports.TextField = TextField;
  exports.ToggleButton = ToggleButton;
  exports.Toolbar = Toolbar;
  exports.View = View;
  exports.themes = themes;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
