import React, { useState } from 'react';
import { AppBar as AppBar$1, AppBarHighlight as AppBarHighlight$1, Avatar as Avatar$1, Badge as Badge$1, Button as Button$1, Card as Card$1, Checkbox as Checkbox$1, Chip as Chip$1, Container as Container$1, Counter as Counter$1, CssBaseline as CssBaseline$1, Dialog as Dialog$1, DialogTitle as DialogTitle$1, DialogContent as DialogContent$1, DialogActions as DialogActions$1, Divider as Divider$1, Typography, ExpansionPanel as ExpansionPanel$1, ExpansionPanelDetails as ExpansionPanelDetails$1, ExpansionPanelSummary as ExpansionPanelSummary$1, Icon as Icon$1, IconButton as IconButton$1, Image as Image$1, Input as Input$1, Link as Link$1, List as List$1, ListItem as ListItem$1, ListItemAvatar as ListItemAvatar$1, ListItemIcon as ListItemIcon$1, ListItemSecondaryAction as ListItemSecondaryAction$1, ListItemText as ListItemText$1, ListSubheader as ListSubheader$1, Logo as Logo$1, Popover as Popover$1, ProgressIndicator as ProgressIndicator$1, Provider as Provider$1, Radio as Radio$1, Rating as Rating$1, Skeleton as Skeleton$1, SnackbarContent as SnackbarContent$1, Snackbar as Snackbar$1, Spacing as Spacing$1, TabContainer as TabContainer$1, TextField as TextField$1, themes as themes$1, ToggleButton as ToggleButton$1, Toolbar as Toolbar$1 } from '@naturacosmeticos/natds-web';
import styled from 'styled-components';
import { TabItem as TabItem$1 } from '@naturacosmeticos/natds-web/dist/Components/TabItem';

const AppBar = React.forwardRef(({ children, position, color, classes, ...rest }, ref) => (React.createElement(AppBar$1, { position: position, color: color, classes: classes, ref: ref, ...rest }, children)));
AppBar.displayName = "AppBar";

const AppBarHighlight = (props) => {
    const { children, className, component, ...rest } = props;
    return (React.createElement(AppBarHighlight$1, { className: className, component: component, ...rest }, children));
};

const Avatar = React.forwardRef(({ testID, size, variant, alt, imgProps, color, children, src, srcSet, sizes, ...rest }, ref) => (React.createElement(Avatar$1, { color: color, "data-testid": testID, size: size, variant: variant, alt: alt, imgProps: imgProps, src: src, srcSet: srcSet, sizes: sizes, ref: ref, ...rest }, children)));
Avatar.displayName = "Avatar";

const Badge = React.forwardRef(({ children, anchorOrigin, badgeContent, color, invisible, max, overlap, showZero, variant, testID, ...rest }, ref) => (React.createElement(Badge$1, { anchorOrigin: anchorOrigin, badgeContent: badgeContent, color: color, invisible: invisible, max: max, overlap: overlap, showZero: showZero, variant: variant, "data-testid": testID, ref: ref, ...rest }, children)));
Badge.displayName = "Badge";

const Button = React.forwardRef(({ color = "primary", variant = "contained", size = "medium", text, onPress, ...rest }, ref) => (React.createElement(Button$1, { color: color, variant: variant, size: size, ...rest, onClick: onPress, ref: ref }, text)));
Button.displayName = "Button";

const Card = React.forwardRef(({ children, elevation, className, testID, square, ...rest }, ref) => (React.createElement(Card$1, { elevation: elevation, className: className, "data-testid": testID, ref: ref, square: square, ...rest }, children)));
Card.displayName = "Card";

const Checkbox = React.forwardRef(({ checked, color, disabled, indeterminate, action, disableFocusRipple, edge, centerRipple, disableTouchRipple, focusRipple, focusVisibleClassName, onFocusVisible, TouchRippleProps, checkedIcon, classes, disableRipple, icon, id, indeterminateIcon, inputProps, inputRef, onChange, required, value, ...rest }, ref) => (React.createElement(Checkbox$1, { checked: checked, color: color, disabled: disabled, indeterminate: indeterminate, action: action, disableFocusRipple: disableFocusRipple, edge: edge, centerRipple: centerRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, checkedIcon: checkedIcon, classes: classes, disableRipple: disableRipple, icon: icon, id: id, indeterminateIcon: indeterminateIcon, inputProps: inputProps, inputRef: inputRef, onChange: onChange, required: required, value: value, ref: ref, ...rest })));
Checkbox.displayName = "Checkbox";

const Chip = React.forwardRef(({ clickable, size, label, color, variant, disabled, classes, component, icon, avatar, deleteIcon, onDelete, ...rest }, ref) => (React.createElement(Chip$1, { clickable: clickable, size: size, label: label, color: color, variant: variant, disabled: disabled, classes: classes, component: component, icon: icon, avatar: avatar, onDelete: onDelete, deleteIcon: deleteIcon, ref: ref, ...rest })));
Chip.displayName = "Chip";

const Container = React.forwardRef(({ children, className, component, fixed, disableGutters, maxWidth, ...rest }, ref) => (React.createElement(Container$1, { className: className, component: component, fixed: fixed, disableGutters: disableGutters, maxWidth: maxWidth, ref: ref, ...rest }, children)));
Container.displayName = "Container";

const Counter = (props) => {
    const { onChange, onDecrement, onIncrement, value, label, readOnly, size, maxValue, minValue, ...rest } = props;
    return (React.createElement(Counter$1, { value: value, label: label, readOnly: readOnly, size: size, maxValue: maxValue, minValue: minValue, onChange: onChange, onDecrement: onDecrement, onIncrement: onIncrement, ...rest }));
};

const CssBaseline = (props) => {
    return React.createElement(CssBaseline$1, { ...props });
};

const CloseButton = styled(Button$1) ``;

const DialogWrapper = (props) => {
    const { openButtonText, title, closeButtonText, fullWidth, disableBackdropClick, scroll, fullScreen, disableTypography, classes, disableSpacing, actionContent, dialogContent, onBackdropClick, onClose, onEnter, onEntered, onEntering, onEscapeKeyDown, onExit, onExited, onExiting, maxWidth = "sm", open = false, ...rest } = props;
    const [isDialogOpen, setIsDialogOpen] = useState(open);
    return (React.createElement("div", null,
        React.createElement(Button$1, { color: "primary", onClick: () => setIsDialogOpen(true), size: "medium", variant: "outlined" }, openButtonText),
        React.createElement(Dialog$1, { fullWidth: fullWidth, maxWidth: maxWidth, disableBackdropClick: disableBackdropClick, open: isDialogOpen, scroll: scroll, fullScreen: fullScreen, onBackdropClick: onBackdropClick, onClose: onClose, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onEscapeKeyDown: onEscapeKeyDown, onExit: onExit, onExited: onExited, onExiting: onExiting, ...rest },
            React.createElement(DialogTitle$1, { disableTypography: disableTypography, classes: classes }, title),
            React.createElement(DialogContent$1, null, dialogContent && dialogContent),
            React.createElement(DialogActions$1, { disableSpacing: disableSpacing },
                actionContent && actionContent,
                closeButtonText ? (React.createElement(CloseButton, { color: "primary", onClick: () => setIsDialogOpen(false), variant: "text" }, closeButtonText)) : ("")))));
};

const Divider = React.forwardRef((props, ref) => {
    const { variant, ...rest } = props;
    return React.createElement(Divider$1, { variant: variant, ...rest, ref: ref });
});
Divider.displayName = "Divider";

const ContainerWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Title = styled.div `
  margin: 30px 0 15px;
`;
const LinkButton = styled.div `
  margin-top: 50px;
`;

const ErrorWrapper = (props) => {
    const { icon, title, description, textButton, actionButton } = props;
    return (React.createElement(ContainerWrapper, null,
        icon && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "106", height: "106", version: "1.1" },
            React.createElement("path", { fill: "#C2C2C2", fillRule: "nonzero", d: "M53.002 106C23.775 106 0 82.223 0 53.001 0 23.775 23.775 0 53.002 0 82.222 0 106 23.775 106 53.001 106 82.223 82.223 106 53.002 106zm0-99.169c-25.46 0-46.17 20.711-46.17 46.17 0 25.459 20.71 46.172 46.17 46.172 25.459 0 46.169-20.713 46.169-46.172 0-25.459-20.71-46.17-46.169-46.17zM64.17 55.518c-3.212 2.609-7.186 5.832-7.751 12.613-.148 1.763-1.61 3.137-3.33 3.137h-.178a3.268 3.268 0 0 1-2.37-1.018 3.102 3.102 0 0 1-.828-2.344c.682-9.863 6.618-14.666 10.168-17.536.717-.58 1.286-1.04 1.633-1.392a11.978 11.978 0 0 0 3.532-8.52c0-6.641-5.403-12.043-12.043-12.043-6.039 0-11.171 4.51-11.946 10.486-.225 1.747-1.668 3.064-3.362 3.064h-.177c-.918 0-1.79-.382-2.392-1.051a3.023 3.023 0 0 1-.776-2.358c.955-9.588 9.03-16.88 18.653-16.844 5 0 9.704 1.95 13.25 5.494a18.614 18.614 0 0 1 5.49 13.248 18.627 18.627 0 0 1-5.49 13.259c-.573.578-1.224 1.11-2.083 1.805zM53.002 76.385a4.863 4.863 0 0 1 4.857 4.857A4.864 4.864 0 0 1 53 85.962a4.864 4.864 0 0 1-4.859-4.72 4.862 4.862 0 0 1 4.861-4.857z" }))),
        React.createElement(Title, null,
            React.createElement(Typography, { variant: "h4", color: "textPrimary", align: "center" }, title)),
        description && (React.createElement(Typography, { variant: "subtitle1", color: "textSecondary", align: "center" }, description)),
        textButton && (React.createElement(LinkButton, null,
            React.createElement(Button$1, { color: "primary", variant: "text", onClick: actionButton, size: "large" },
                React.createElement("strong", null, textButton))))));
};

const ExpansionPanel = React.forwardRef((props, ref) => {
    const { children, classes, onChange, TransitionComponent, TransitionProps, disabled, expanded, defaultExpanded, ...rest } = props;
    return (React.createElement(ExpansionPanel$1, { classes: classes, onChange: onChange, TransitionComponent: TransitionComponent, TransitionProps: TransitionProps, disabled: disabled, expanded: expanded, defaultExpanded: defaultExpanded, ref: ref, ...rest }, children));
});
ExpansionPanel.displayName = "ExpansionPanel";

const ExpansionPanelDetails = React.forwardRef((props, ref) => {
    const { children, classes, ...rest } = props;
    return (React.createElement(ExpansionPanelDetails$1, { classes: classes, ref: ref, ...rest }, children));
});
ExpansionPanelDetails.displayName = "ExpansionPanelDetails";

const ExpansionPanelSummary = React.forwardRef((props, ref) => {
    const { children, expandIcon, classes, tabIndex, action, disabled, centerRipple, disableRipple, disableTouchRipple, focusRipple, focusVisibleClassName, TouchRippleProps, IconButtonProps, onFocusVisible, ...rest } = props;
    return (React.createElement(ExpansionPanelSummary$1, { expandIcon: expandIcon, classes: classes, tabIndex: tabIndex, action: action, disabled: disabled, centerRipple: centerRipple, disableRipple: disableRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, IconButtonProps: IconButtonProps, ref: ref, ...rest }, children));
});
ExpansionPanelSummary.displayName = "ExpansionPanelSummary";

const style = { height: 15 };
const HorizontalSpace = () => React.createElement("div", { style: style });

const Icon = React.forwardRef((props, ref) => {
    const { name, color, size, ...rest } = props;
    return (React.createElement(Icon$1, { name: name, color: color, size: size, ref: ref, ...rest }));
});
Icon.displayName = "Icon";

const IconButton = React.forwardRef((props, ref) => React.createElement(IconButton$1, { ...props, ref: ref }));
IconButton.displayName = "IconButton";

const Image = React.forwardRef((props, ref) => React.createElement(Image$1, { ...props, ref: ref }));
Image.displayName = 'Image';

const Input = React.forwardRef((props, ref) => React.createElement(Input$1, { ...props, ref: ref }));
Input.displayName = 'Input';

const Link = React.forwardRef((props, ref) => {
    const { children } = props;
    return (React.createElement(Link$1, { ...props, ref: ref }, children));
});
Link.displayName = "Link";

const List = React.forwardRef((props, ref) => {
    const { children } = props;
    return (React.createElement(List$1, { ...props, ref: ref }, children));
});
List.displayName = 'List';

const ListItem = (props) => {
    const { testID, disabled, onClick, selected, alignItems, autoFocus, ContainerComponent, ContainerProps, dense, disableGutters, divider, focusVisibleClassName, children, } = props;
    return (React.createElement(ListItem$1, { "data-testid": testID, disabled: disabled, onClick: onClick, selected: selected, alignItems: alignItems, autoFocus: autoFocus, ContainerComponent: ContainerComponent, ContainerProps: ContainerProps, dense: dense, disableGutters: disableGutters, divider: divider, focusVisibleClassName: focusVisibleClassName }, children));
};

const ListItemAvatar = React.forwardRef((props, ref) => {
    const { children } = props;
    return (React.createElement(ListItemAvatar$1, { ...props, ref: ref }, children));
});
ListItemAvatar.displayName = 'ListItemAvatar';

const ListItemIcon = React.forwardRef((props, ref) => {
    const { children, ...rest } = props;
    return (React.createElement(ListItemIcon$1, { ...rest, ref: ref }, children));
});
ListItemIcon.displayName = "ListItemIcon";

const ListItemSecondaryAction = React.forwardRef((props, ref) => {
    const { children, ...rest } = props;
    return (React.createElement(ListItemSecondaryAction$1, { ...rest, ref: ref }, children));
});
ListItemSecondaryAction.displayName = "ListItemSecondaryAction";

const ListItemText = React.forwardRef((props, ref) => {
    const { children, ...rest } = props;
    return (React.createElement(ListItemText$1, { ...rest, ref: ref }, children));
});
ListItemText.displayName = "ListItemText";

const ListSubheader = (props) => {
    const { children, ...rest } = props;
    return React.createElement(ListSubheader$1, { ...rest }, children);
};

const Logo = (props) => {
    const { color, model, size, arialabel, ...rest } = props;
    return (React.createElement(Logo$1, { color: color, model: model, size: size, arialabel: arialabel, ...rest }));
};

const Popover = React.forwardRef((props, ref) => {
    const { children, placement, id, maxWidth, open, component, container, direction, anchorEl, disablePortal, keepMounted, popperOptions, popperRef, transition, actionLink, ...rest } = props;
    return (React.createElement(Popover$1, { placement: placement, id: id, maxWidth: maxWidth, open: open, component: component, container: container, direction: direction, anchorEl: anchorEl, disablePortal: disablePortal, keepMounted: keepMounted, popperOptions: popperOptions, transition: transition, popperRef: popperRef, actionLink: actionLink, ...rest, ref: ref }, children));
});
Popover.displayName = "Popover";

const ProgressIndicator = (props) => {
    const { size = 32, ...rest } = props;
    return React.createElement(ProgressIndicator$1, { size: size, ...rest });
};

const Provider = (props) => {
    const { children, theme, cssPrefix, ...rest } = props;
    return (React.createElement(Provider$1, { theme: theme, cssPrefix: cssPrefix, ...rest }, children));
};

const Radio = React.forwardRef((props, ref) => {
    const { ...rest } = props;
    return React.createElement(Radio$1, { ...rest, ref: ref });
});
Radio.displayName = "Radio";

const Rating = (props) => {
    const { id, size, rate, ...rest } = props;
    return React.createElement(Rating$1, { id: id, size: size, rate: rate, ...rest });
};

const Skeleton = React.forwardRef(({ variant, height, width, animation, ...rest }, ref) => (React.createElement(Skeleton$1, { variant: variant, height: height, width: width, animation: animation, ref: ref, ...rest })));
Skeleton.displayName = "Skeleton";

const SnackbarContent = React.forwardRef((props, ref) => {
    const { classes, role, color, action, message } = props;
    return (React.createElement(SnackbarContent$1, { classes: classes, role: role, color: color, action: action, message: message, ref: ref }));
});
SnackbarContent.displayName = "SnackbarContent";

const Snackbar = React.forwardRef(({ children, anchorOrigin, autoHideDuration, classes, key, onClose, open, TransitionComponent, action, ...rest }, ref) => (React.createElement(Snackbar$1, { anchorOrigin: anchorOrigin, autoHideDuration: autoHideDuration, classes: classes, key: key, onClose: onClose, open: open, TransitionComponent: TransitionComponent, action: action, ref: ref, ...rest }, children)));
Snackbar.displayName = "Snackbar";

const Spacing = (props) => {
    const { children, className, display, style, testID, ...rest } = props;
    return (React.createElement(Spacing$1, { className: className, display: display, style: style, "data-testid": testID, ...rest }, children));
};

const TabContainer = React.forwardRef((props, ref) => {
    const { children, value = false, variant, ...rest } = props;
    return (React.createElement(TabContainer$1, { value: value, variant: variant, ref: ref, ...rest }, children));
});
TabContainer.displayName = "TabContainer";

const TabItem = React.forwardRef((props, ref) => {
    const { children, id, ...rest } = props;
    return (React.createElement(TabItem$1, { id: id, ref: ref, ...rest }, children));
});
TabItem.displayName = "TabItem";

const Text = React.forwardRef((props, ref) => {
    const { children } = props;
    return (React.createElement(Typography, { ...props, ref: ref }, children));
});
Text.displayName = 'Text';

const TextField = React.forwardRef((props, ref) => React.createElement(TextField$1, { ...props, ref: ref }));
TextField.displayName = 'TextField';

const themes = themes$1;

const ToggleButton = React.forwardRef((props, ref) => {
    const { iconOff, iconOn, onPress, ...rest } = props;
    return (React.createElement(ToggleButton$1, { iconOff: iconOff, iconOn: iconOn, onClick: onPress, ref: ref, ...rest }));
});
ToggleButton.displayName = "ToggleButton";

const Toolbar = React.forwardRef((props, ref) => {
    const { children, variant, color, disableGutters, ...rest } = props;
    return (React.createElement(Toolbar$1, { variant: variant, color: color, disableGutters: disableGutters, ref: ref, ...rest }, children));
});
Toolbar.displayName = "Toolbar";

const StyledView = styled.div `
  display: flex;
  flex-direction: column;
`;
const View = ({ className, children, testID }) => {
    return (React.createElement(StyledView, { className: className, "data-testid": testID }, children));
};

const Dialog = React.forwardRef((props, ref) => {
    const { children, fullWidth, maxWidth, disableBackdropClick, open = false, scroll, fullScreen, onBackdropClick, onClose, onEnter, onEntered, onEntering, onEscapeKeyDown, onExit, onExited, onExiting, ...rest } = props;
    return (React.createElement(Dialog$1, { fullWidth: fullWidth, maxWidth: maxWidth, disableBackdropClick: disableBackdropClick, open: open, scroll: scroll, fullScreen: fullScreen, onBackdropClick: onBackdropClick, onClose: onClose, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onEscapeKeyDown: onEscapeKeyDown, onExit: onExit, onExited: onExited, onExiting: onExiting, ...rest, ref: ref }, children));
});
Dialog.displayName = "Dialog";

const DialogActions = React.forwardRef((props, ref) => {
    const { children, disableSpacing, ...rest } = props;
    return (React.createElement(DialogActions$1, { disableSpacing: disableSpacing, ...rest, ref: ref }, children));
});
DialogActions.displayName = "DialogActions";

const DialogContent = React.forwardRef((props, ref) => {
    const { children, ...rest } = props;
    return (React.createElement(DialogContent$1, { ...rest, ref: ref }, children));
});
DialogContent.displayName = "DialogContent";

const DialogTitle = React.forwardRef((props, ref) => {
    const { children, classes, disableTypography, ...rest } = props;
    return (React.createElement(DialogTitle$1, { disableTypography: disableTypography, classes: classes, ...rest, ref: ref }, children));
});
DialogTitle.displayName = "DialogTitle";

export { AppBar, AppBarHighlight, Avatar, Badge, Button, Card, Checkbox, Chip, Container, Counter, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, DialogWrapper, Divider, ErrorWrapper, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, HorizontalSpace, Icon, IconButton, Image, Input, Link, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Logo, Popover, ProgressIndicator, Provider, Radio, Rating, Skeleton, Snackbar, SnackbarContent, Spacing, TabContainer, TabItem, Text, TextField, ToggleButton, Toolbar, View, themes };
