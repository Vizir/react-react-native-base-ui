(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@naturacosmeticos/natds-web'), require('styled-components'), require('@naturacosmeticos/natds-web/dist/Components/TabItem')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@naturacosmeticos/natds-web', 'styled-components', '@naturacosmeticos/natds-web/dist/Components/TabItem'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseUI = {}, global.React, global.natdsWeb, global.styled, global.TabItem$1));
}(this, (function (exports, React, natdsWeb, styled, TabItem$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  const AppBar = React__default['default'].forwardRef(({ children, position, color, classes, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.AppBar, { position: position, color: color, classes: classes, ref: ref, ...rest }, children)));
  AppBar.displayName = "AppBar";

  const AppBarHighlight = (props) => {
      const { children, className, component, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.AppBarHighlight, { className: className, component: component, ...rest }, children));
  };

  const Avatar = React__default['default'].forwardRef(({ testID, size, variant, alt, imgProps, color, children, src, srcSet, sizes, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Avatar, { color: color, "data-testid": testID, size: size, variant: variant, alt: alt, imgProps: imgProps, src: src, srcSet: srcSet, sizes: sizes, ref: ref, ...rest }, children)));
  Avatar.displayName = "Avatar";

  const Badge = React__default['default'].forwardRef(({ children, anchorOrigin, badgeContent, color, invisible, max, overlap, showZero, variant, testID, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Badge, { anchorOrigin: anchorOrigin, badgeContent: badgeContent, color: color, invisible: invisible, max: max, overlap: overlap, showZero: showZero, variant: variant, "data-testid": testID, ref: ref, ...rest }, children)));
  Badge.displayName = "Badge";

  const Button = React__default['default'].forwardRef(({ color = "primary", variant = "contained", size = "medium", text, onPress, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Button, { color: color, variant: variant, size: size, ...rest, onClick: onPress, ref: ref }, text)));
  Button.displayName = "Button";

  const Card = React__default['default'].forwardRef(({ children, elevation, className, testID, square, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Card, { elevation: elevation, className: className, "data-testid": testID, ref: ref, square: square, ...rest }, children)));
  Card.displayName = "Card";

  const Checkbox = React__default['default'].forwardRef(({ checked, color, disabled, indeterminate, action, disableFocusRipple, edge, centerRipple, disableTouchRipple, focusRipple, focusVisibleClassName, onFocusVisible, TouchRippleProps, checkedIcon, classes, disableRipple, icon, id, indeterminateIcon, inputProps, inputRef, onChange, required, value, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Checkbox, { checked: checked, color: color, disabled: disabled, indeterminate: indeterminate, action: action, disableFocusRipple: disableFocusRipple, edge: edge, centerRipple: centerRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, checkedIcon: checkedIcon, classes: classes, disableRipple: disableRipple, icon: icon, id: id, indeterminateIcon: indeterminateIcon, inputProps: inputProps, inputRef: inputRef, onChange: onChange, required: required, value: value, ref: ref, ...rest })));
  Checkbox.displayName = "Checkbox";

  const Chip = React__default['default'].forwardRef(({ clickable, size, label, color, variant, disabled, classes, component, icon, avatar, deleteIcon, onDelete, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Chip, { clickable: clickable, size: size, label: label, color: color, variant: variant, disabled: disabled, classes: classes, component: component, icon: icon, avatar: avatar, onDelete: onDelete, deleteIcon: deleteIcon, ref: ref, ...rest })));
  Chip.displayName = "Chip";

  const Container = React__default['default'].forwardRef(({ children, className, component, fixed, disableGutters, maxWidth, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Container, { className: className, component: component, fixed: fixed, disableGutters: disableGutters, maxWidth: maxWidth, ref: ref, ...rest }, children)));
  Container.displayName = "Container";

  const Counter = (props) => {
      const { onChange, onDecrement, onIncrement, value, label, readOnly, size, maxValue, minValue, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Counter, { value: value, label: label, readOnly: readOnly, size: size, maxValue: maxValue, minValue: minValue, onChange: onChange, onDecrement: onDecrement, onIncrement: onIncrement, ...rest }));
  };

  const CssBaseline = (props) => {
      return React__default['default'].createElement(natdsWeb.CssBaseline, { ...props });
  };

  const CloseButton = styled__default['default'](natdsWeb.Button) ``;

  const DialogWrapper = (props) => {
      const { openButtonText, title, closeButtonText, fullWidth, disableBackdropClick, scroll, fullScreen, disableTypography, classes, disableSpacing, actionContent, dialogContent, onBackdropClick, onClose, onEnter, onEntered, onEntering, onEscapeKeyDown, onExit, onExited, onExiting, maxWidth = "sm", open = false, ...rest } = props;
      const [isDialogOpen, setIsDialogOpen] = React.useState(open);
      return (React__default['default'].createElement("div", null,
          React__default['default'].createElement(natdsWeb.Button, { color: "primary", onClick: () => setIsDialogOpen(true), size: "medium", variant: "outlined" }, openButtonText),
          React__default['default'].createElement(natdsWeb.Dialog, { fullWidth: fullWidth, maxWidth: maxWidth, disableBackdropClick: disableBackdropClick, open: isDialogOpen, scroll: scroll, fullScreen: fullScreen, onBackdropClick: onBackdropClick, onClose: onClose, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onEscapeKeyDown: onEscapeKeyDown, onExit: onExit, onExited: onExited, onExiting: onExiting, ...rest },
              React__default['default'].createElement(natdsWeb.DialogTitle, { disableTypography: disableTypography, classes: classes }, title),
              React__default['default'].createElement(natdsWeb.DialogContent, null, dialogContent && dialogContent),
              React__default['default'].createElement(natdsWeb.DialogActions, { disableSpacing: disableSpacing },
                  actionContent && actionContent,
                  closeButtonText ? (React__default['default'].createElement(CloseButton, { color: "primary", onClick: () => setIsDialogOpen(false), variant: "text" }, closeButtonText)) : ("")))));
  };

  const Divider = React__default['default'].forwardRef((props, ref) => {
      const { variant, ...rest } = props;
      return React__default['default'].createElement(natdsWeb.Divider, { variant: variant, ...rest, ref: ref });
  });
  Divider.displayName = "Divider";

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

  const ExpansionPanel = React__default['default'].forwardRef((props, ref) => {
      const { children, classes, onChange, TransitionComponent, TransitionProps, disabled, expanded, defaultExpanded, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ExpansionPanel, { classes: classes, onChange: onChange, TransitionComponent: TransitionComponent, TransitionProps: TransitionProps, disabled: disabled, expanded: expanded, defaultExpanded: defaultExpanded, ref: ref, ...rest }, children));
  });
  ExpansionPanel.displayName = "ExpansionPanel";

  const ExpansionPanelDetails = React__default['default'].forwardRef((props, ref) => {
      const { children, classes, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ExpansionPanelDetails, { classes: classes, ref: ref, ...rest }, children));
  });
  ExpansionPanelDetails.displayName = "ExpansionPanelDetails";

  const ExpansionPanelSummary = React__default['default'].forwardRef((props, ref) => {
      const { children, expandIcon, classes, tabIndex, action, disabled, centerRipple, disableRipple, disableTouchRipple, focusRipple, focusVisibleClassName, TouchRippleProps, IconButtonProps, onFocusVisible, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ExpansionPanelSummary, { expandIcon: expandIcon, classes: classes, tabIndex: tabIndex, action: action, disabled: disabled, centerRipple: centerRipple, disableRipple: disableRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, IconButtonProps: IconButtonProps, ref: ref, ...rest }, children));
  });
  ExpansionPanelSummary.displayName = "ExpansionPanelSummary";

  const style = { height: 15 };
  const HorizontalSpace = () => React__default['default'].createElement("div", { style: style });

  const Icon = React__default['default'].forwardRef((props, ref) => {
      const { name, color, size, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Icon, { name: name, color: color, size: size, ref: ref, ...rest }));
  });
  Icon.displayName = "Icon";

  const IconButton = React__default['default'].forwardRef((props, ref) => React__default['default'].createElement(natdsWeb.IconButton, { ...props, ref: ref }));
  IconButton.displayName = "IconButton";

  const Image = React__default['default'].forwardRef((props, ref) => React__default['default'].createElement(natdsWeb.Image, { ...props, ref: ref }));
  Image.displayName = 'Image';

  const Input = React__default['default'].forwardRef((props, ref) => React__default['default'].createElement(natdsWeb.Input, { ...props, ref: ref }));
  Input.displayName = 'Input';

  const Link = React__default['default'].forwardRef((props, ref) => {
      const { children } = props;
      return (React__default['default'].createElement(natdsWeb.Link, { ...props, ref: ref }, children));
  });
  Link.displayName = "Link";

  const List = React__default['default'].forwardRef((props, ref) => {
      const { children } = props;
      return (React__default['default'].createElement(natdsWeb.List, { ...props, ref: ref }, children));
  });
  List.displayName = 'List';

  const ListItem = (props) => {
      const { testID, disabled, onClick, selected, alignItems, autoFocus, ContainerComponent, ContainerProps, dense, disableGutters, divider, focusVisibleClassName, children, } = props;
      return (React__default['default'].createElement(natdsWeb.ListItem, { "data-testid": testID, disabled: disabled, onClick: onClick, selected: selected, alignItems: alignItems, autoFocus: autoFocus, ContainerComponent: ContainerComponent, ContainerProps: ContainerProps, dense: dense, disableGutters: disableGutters, divider: divider, focusVisibleClassName: focusVisibleClassName }, children));
  };

  const ListItemAvatar = React__default['default'].forwardRef((props, ref) => {
      const { children } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemAvatar, { ...props, ref: ref }, children));
  });
  ListItemAvatar.displayName = 'ListItemAvatar';

  const ListItemIcon = React__default['default'].forwardRef((props, ref) => {
      const { children, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemIcon, { ...rest, ref: ref }, children));
  });
  ListItemIcon.displayName = "ListItemIcon";

  const ListItemSecondaryAction = React__default['default'].forwardRef((props, ref) => {
      const { children, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemSecondaryAction, { ...rest, ref: ref }, children));
  });
  ListItemSecondaryAction.displayName = "ListItemSecondaryAction";

  const ListItemText = React__default['default'].forwardRef((props, ref) => {
      const { children, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ListItemText, { ...rest, ref: ref }, children));
  });
  ListItemText.displayName = "ListItemText";

  const ListSubheader = (props) => {
      const { children, ...rest } = props;
      return React__default['default'].createElement(natdsWeb.ListSubheader, { ...rest }, children);
  };

  const Logo = (props) => {
      const { color, model, size, arialabel, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Logo, { color: color, model: model, size: size, arialabel: arialabel, ...rest }));
  };

  const Popover = React__default['default'].forwardRef((props, ref) => {
      const { children, placement, id, maxWidth, open, component, container, direction, anchorEl, disablePortal, keepMounted, popperOptions, popperRef, transition, actionLink, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Popover, { placement: placement, id: id, maxWidth: maxWidth, open: open, component: component, container: container, direction: direction, anchorEl: anchorEl, disablePortal: disablePortal, keepMounted: keepMounted, popperOptions: popperOptions, transition: transition, popperRef: popperRef, actionLink: actionLink, ...rest, ref: ref }, children));
  });
  Popover.displayName = "Popover";

  const ProgressIndicator = (props) => {
      const { size = 32, ...rest } = props;
      return React__default['default'].createElement(natdsWeb.ProgressIndicator, { size: size, ...rest });
  };

  const Provider = (props) => {
      const { children, theme, cssPrefix, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Provider, { theme: theme, cssPrefix: cssPrefix, ...rest }, children));
  };

  const Radio = React__default['default'].forwardRef((props, ref) => {
      const { ...rest } = props;
      return React__default['default'].createElement(natdsWeb.Radio, { ...rest, ref: ref });
  });
  Radio.displayName = "Radio";

  const Rating = (props) => {
      const { id, size, rate, ...rest } = props;
      return React__default['default'].createElement(natdsWeb.Rating, { id: id, size: size, rate: rate, ...rest });
  };

  const Skeleton = React__default['default'].forwardRef(({ variant, height, width, animation, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Skeleton, { variant: variant, height: height, width: width, animation: animation, ref: ref, ...rest })));
  Skeleton.displayName = "Skeleton";

  const SnackbarContent = React__default['default'].forwardRef((props, ref) => {
      const { classes, role, color, action, message } = props;
      return (React__default['default'].createElement(natdsWeb.SnackbarContent, { classes: classes, role: role, color: color, action: action, message: message, ref: ref }));
  });
  SnackbarContent.displayName = "SnackbarContent";

  const Snackbar = React__default['default'].forwardRef(({ children, anchorOrigin, autoHideDuration, classes, key, onClose, open, TransitionComponent, action, ...rest }, ref) => (React__default['default'].createElement(natdsWeb.Snackbar, { anchorOrigin: anchorOrigin, autoHideDuration: autoHideDuration, classes: classes, key: key, onClose: onClose, open: open, TransitionComponent: TransitionComponent, action: action, ref: ref, ...rest }, children)));
  Snackbar.displayName = "Snackbar";

  const Spacing = (props) => {
      const { children, className, display, style, testID, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Spacing, { className: className, display: display, style: style, "data-testid": testID, ...rest }, children));
  };

  const TabContainer = React__default['default'].forwardRef((props, ref) => {
      const { children, value = false, variant, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.TabContainer, { value: value, variant: variant, ref: ref, ...rest }, children));
  });
  TabContainer.displayName = "TabContainer";

  const TabItem = React__default['default'].forwardRef((props, ref) => {
      const { children, id, ...rest } = props;
      return (React__default['default'].createElement(TabItem$1.TabItem, { id: id, ref: ref, ...rest }, children));
  });
  TabItem.displayName = "TabItem";

  const Text = React__default['default'].forwardRef((props, ref) => {
      const { children } = props;
      return (React__default['default'].createElement(natdsWeb.Typography, { ...props, ref: ref }, children));
  });
  Text.displayName = 'Text';

  const TextField = React__default['default'].forwardRef((props, ref) => React__default['default'].createElement(natdsWeb.TextField, { ...props, ref: ref }));
  TextField.displayName = 'TextField';

  const themes = natdsWeb.themes;

  const ToggleButton = React__default['default'].forwardRef((props, ref) => {
      const { iconOff, iconOn, onPress, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.ToggleButton, { iconOff: iconOff, iconOn: iconOn, onClick: onPress, ref: ref, ...rest }));
  });
  ToggleButton.displayName = "ToggleButton";

  const Toolbar = React__default['default'].forwardRef((props, ref) => {
      const { children, variant, color, disableGutters, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Toolbar, { variant: variant, color: color, disableGutters: disableGutters, ref: ref, ...rest }, children));
  });
  Toolbar.displayName = "Toolbar";

  const StyledView = styled__default['default'].div `
  display: flex;
  flex-direction: column;
`;
  const View = ({ className, children, testID }) => {
      return (React__default['default'].createElement(StyledView, { className: className, "data-testid": testID }, children));
  };

  const Dialog = React__default['default'].forwardRef((props, ref) => {
      const { children, fullWidth, maxWidth, disableBackdropClick, open = false, scroll, fullScreen, onBackdropClick, onClose, onEnter, onEntered, onEntering, onEscapeKeyDown, onExit, onExited, onExiting, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.Dialog, { fullWidth: fullWidth, maxWidth: maxWidth, disableBackdropClick: disableBackdropClick, open: open, scroll: scroll, fullScreen: fullScreen, onBackdropClick: onBackdropClick, onClose: onClose, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onEscapeKeyDown: onEscapeKeyDown, onExit: onExit, onExited: onExited, onExiting: onExiting, ...rest, ref: ref }, children));
  });
  Dialog.displayName = "Dialog";

  const DialogActions = React__default['default'].forwardRef((props, ref) => {
      const { children, disableSpacing, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.DialogActions, { disableSpacing: disableSpacing, ...rest, ref: ref }, children));
  });
  DialogActions.displayName = "DialogActions";

  const DialogContent = React__default['default'].forwardRef((props, ref) => {
      const { children, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.DialogContent, { ...rest, ref: ref }, children));
  });
  DialogContent.displayName = "DialogContent";

  const DialogTitle = React__default['default'].forwardRef((props, ref) => {
      const { children, classes, disableTypography, ...rest } = props;
      return (React__default['default'].createElement(natdsWeb.DialogTitle, { disableTypography: disableTypography, classes: classes, ...rest, ref: ref }, children));
  });
  DialogTitle.displayName = "DialogTitle";

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
  exports.Dialog = Dialog;
  exports.DialogActions = DialogActions;
  exports.DialogContent = DialogContent;
  exports.DialogTitle = DialogTitle;
  exports.DialogWrapper = DialogWrapper;
  exports.Divider = Divider;
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
  exports.Popover = Popover;
  exports.ProgressIndicator = ProgressIndicator;
  exports.Provider = Provider;
  exports.Radio = Radio;
  exports.Rating = Rating;
  exports.Skeleton = Skeleton;
  exports.Snackbar = Snackbar;
  exports.SnackbarContent = SnackbarContent;
  exports.Spacing = Spacing;
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
