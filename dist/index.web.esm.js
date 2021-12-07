import React, { useState } from 'react';
import { Button as Button$1, Typography, Card as Card$1, TextField as TextField$1, ProgressIndicator as ProgressIndicator$1, Dialog, DialogTitle, DialogContent, DialogActions, Logo as Logo$1, AppBar as AppBar$1, Avatar as Avatar$1, Badge as Badge$1, Checkbox as Checkbox$1, Chip as Chip$1, Counter as Counter$1, Icon as Icon$1, IconButton as IconButton$1, Image as Image$1, Link as Link$1, ListItem as ListItem$1, ListItemAvatar as ListItemAvatar$1, ListItemIcon as ListItemIcon$1, ListItemSecondaryAction as ListItemSecondaryAction$1, ListItemText as ListItemText$1, Radio as Radio$1, Rating as Rating$1, Skeleton as Skeleton$1, TabContainer as TabContainer$1, ToggleButton as ToggleButton$1, Toolbar as Toolbar$1, AppBarHighlight as AppBarHighlight$1, Container as Container$1, Provider as Provider$1, ExpansionPanelSummary as ExpansionPanelSummary$1, ExpansionPanelDetails as ExpansionPanelDetails$1, ExpansionPanel as ExpansionPanel$1, List as List$1, ListSubheader as ListSubheader$1, CssBaseline as CssBaseline$1, themes as themes$1, Input as Input$1 } from '@naturacosmeticos/natds-web';
import styled from 'styled-components';
import { TabItem as TabItem$1 } from '@naturacosmeticos/natds-web/dist/Components/TabItem';

const Button = (props) => {
    const { color = "primary", variant = "contained", size = "medium", text, ...rest } = props;
    return (React.createElement(Button$1, { color: color, variant: variant, size: size, ...rest }, text));
};

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

const StyledView = styled.div `
  display: flex;
  flex-direction: column;
`;
const View = ({ className, children, testID }) => {
    return (React.createElement(StyledView, { className: className, "data-testid": testID }, children));
};

const Text = (props) => {
    const { children, testID, color, align, variant, classes, component, display, noWrap, gutterBottom, paragraph, variantMapping } = props;
    return (React.createElement(Typography, { "data-testid": testID, color: color, align: align, variant: variant, classes: classes, component: component, display: display, noWrap: noWrap, gutterBottom: gutterBottom, paragraph: paragraph, variantMapping: variantMapping }, children));
};

const Card = (props) => {
    const { children, testID, elevation, square } = props;
    return React.createElement(Card$1, { "data-testId": testID, elevation: elevation, square: square }, children);
};

const TextField = (props) => {
    const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
    const handleChangeText = (e) => {
        const { value } = e.target;
        onChangeText(value);
    };
    return (React.createElement(TextField$1, { onChange: handleChangeText, value: value, type: type, label: label, helpText: helpText, placeholder: placeholder, "data-testid": testID }));
};

const style = { height: 15 };
const HorizontalSpace = () => React.createElement("div", { style: style });

const ProgressIndicator = (props) => {
    return React.createElement(ProgressIndicator$1, { size: 32, ...props });
};

const CloseButton = styled(Button$1) ``;

const DialogWrapper = (props) => {
    const { openButtonText, title, closeButtonText, fullWidth, disableBackdropClick, scroll, fullScreen, disableTypography, classes, disableSpacing, actionContent, dialogContent, onBackdropClick, onClose, onEnter, onEntered, onEntering, onEscapeKeyDown, onExit, onExited, onExiting, maxWidth = "sm", open = false, } = props;
    const [isDialogOpen, setIsDialogOpen] = useState(open);
    return (React.createElement("div", null,
        React.createElement(Button$1, { color: "primary", onClick: () => setIsDialogOpen(true), size: "medium", variant: "outlined" }, openButtonText),
        React.createElement(Dialog, { fullWidth: fullWidth, maxWidth: maxWidth, disableBackdropClick: disableBackdropClick, open: isDialogOpen, scroll: scroll, fullScreen: fullScreen, onBackdropClick: onBackdropClick, onClose: onClose, onEnter: onEnter, onEntered: onEntered, onEntering: onEntering, onEscapeKeyDown: onEscapeKeyDown, onExit: onExit, onExited: onExited, onExiting: onExiting },
            React.createElement(DialogTitle, { disableTypography: disableTypography, classes: classes }, title),
            React.createElement(DialogContent, null, dialogContent && dialogContent),
            React.createElement(DialogActions, { disableSpacing: disableSpacing },
                actionContent && actionContent,
                closeButtonText ? (React.createElement(CloseButton, { color: "primary", onClick: () => setIsDialogOpen(false), variant: "text" }, closeButtonText)) : ("")))));
};

const Logo = (props) => {
    const { color, model, size, arialabel } = props;
    return (React.createElement(Logo$1, { color: color, model: model, size: size, arialabel: arialabel }));
};

const AppBar = ({ children, position, color, classes }) => {
    return (React.createElement(AppBar$1, { position: position, color: color, classes: classes }, children));
};

const Avatar = (props) => {
    const { testID, size, variant, alt, imgProps, color, children, src, srcSet, sizes } = props;
    return (React.createElement(Avatar$1, { color: color, "data-testid": testID, size: size, variant: variant, alt: alt, imgProps: imgProps, src: src, srcSet: srcSet, sizes: sizes }, children));
};

const Badge = (props) => {
    const { children, anchorOrigin, badgeContent, color, invisible, max, overlap, showZero, variant, testID } = props;
    return (React.createElement(Badge$1, { anchorOrigin: anchorOrigin, badgeContent: badgeContent, color: color, invisible: invisible, max: max, overlap: overlap, showZero: showZero, variant: variant, "data-testid": testID }, children));
};

const Checkbox = (props) => {
    const { checked, color, disabled, indeterminate, action, disableFocusRipple, edge, centerRipple, disableTouchRipple, focusRipple, focusVisibleClassName, onFocusVisible, TouchRippleProps, checkedIcon, classes, disableRipple, icon, id, indeterminateIcon, inputProps, inputRef, onChange, required, value, } = props;
    return (React.createElement(Checkbox$1, { checked: checked, color: color, disabled: disabled, indeterminate: indeterminate, action: action, disableFocusRipple: disableFocusRipple, edge: edge, centerRipple: centerRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, checkedIcon: checkedIcon, classes: classes, disableRipple: disableRipple, icon: icon, id: id, indeterminateIcon: indeterminateIcon, inputProps: inputProps, inputRef: inputRef, onChange: onChange, required: required, value: value }));
};

const Chip = (props) => {
    const { clickable, size, label, color, variant, disabled, classes, component, icon, avatar, deleteIcon, onDelete, } = props;
    return (React.createElement(Chip$1, { clickable: clickable, size: size, label: label, color: color, variant: variant, disabled: disabled, classes: classes, component: component, icon: icon, avatar: avatar, onDelete: onDelete, deleteIcon: deleteIcon }));
};

const Counter = (props) => {
    const { onChange, onDecrement, onIncrement, value, label, readOnly, size, maxValue, minValue, } = props;
    return (React.createElement(Counter$1, { value: value, label: label, readOnly: readOnly, size: size, maxValue: maxValue, minValue: minValue, onChange: onChange, onDecrement: onDecrement, onIncrement: onIncrement }));
};

const Icon = ({ name, color, size }) => {
    return (React.createElement(Icon$1, { name: name, color: color, size: size }));
};

const IconButton = ({ children, ...rest }) => {
    return (React.createElement(IconButton$1, { ...rest }, children));
};

const Image = ({ alt, src, fallback, className, disableSelection, height, maxHeight, maxWidth, radius, state, style, }) => {
    return (React.createElement(Image$1, { alt: alt, src: src, fallback: fallback, className: className, disableSelection: disableSelection, height: height, maxHeight: maxHeight, maxWidth: maxWidth, radius: radius, state: state, style: style }));
};

const Link = (props) => {
    const { children, color, href, underline, variant, component, classes, display, noWrap, gutterBottom, paragraph, align, variantMapping, TypographyClasses, onClick, onKeyPress, } = props;
    return (React.createElement(Link$1, { color: color, href: href, underline: underline, variant: variant, component: component, classes: classes, display: display, noWrap: noWrap, gutterBottom: gutterBottom, paragraph: paragraph, align: align, variantMapping: variantMapping, TypographyClasses: TypographyClasses, onClick: onClick, onKeyPress: onKeyPress }, children));
};

const ListItem = (props) => {
    const { testID, disabled, onClick, selected, alignItems, autoFocus, ContainerComponent, ContainerProps, dense, disableGutters, divider, focusVisibleClassName, children, } = props;
    return (React.createElement(ListItem$1, { "data-testID": testID, disabled: disabled, onClick: onClick, selected: selected, alignItems: alignItems, autoFocus: autoFocus, ContainerComponent: ContainerComponent, ContainerProps: ContainerProps, dense: dense, disableGutters: disableGutters, divider: divider, focusVisibleClassName: focusVisibleClassName }, children));
};

const ListItemAvatar = (props) => {
    const { testID, children, ...rest } = props;
    return (React.createElement(ListItemAvatar$1, { "data-testID": testID, ...rest }, children));
};

const ListItemIcon = (props) => {
    const { testID, children } = props;
    return (React.createElement(ListItemIcon$1, { "data-testID": testID }, children));
};

const ListItemSecondaryAction = ({ children, classes, testID }) => {
    return (React.createElement(ListItemSecondaryAction$1, { "data-testID": testID, classes: classes }, children));
};

const ListItemText = (props) => {
    const { testID, children, primary, secondary, ...rest } = props;
    return (React.createElement(ListItemText$1, { primary: primary, secondary: secondary, "data-testID": testID, ...rest }, children));
};

const Radio = ({ ...props }) => {
    return (React.createElement(Radio$1, { ...props }));
};

const Rating = ({ id, size, rate }) => {
    return (React.createElement(Rating$1, { id: id, size: size, rate: rate }));
};

const Skeleton = (props) => {
    const { variant, height, width, animation, } = props;
    return (React.createElement(Skeleton$1, { variant: variant, height: height, width: width, animation: animation }));
};

const TabContainer = ({ children, value = false, variant }) => {
    return (React.createElement(TabContainer$1, { value: value, variant: variant }, children));
};

const TabItem = ({ children, id, ...rest }) => {
    return (React.createElement(TabItem$1, { id: id, ...rest }, children));
};

const ToggleButton = ({ iconOff, iconOn, onPress }) => {
    return (React.createElement(ToggleButton$1, { iconOff: iconOff, iconOn: iconOn, onClick: onPress }));
};

const Toolbar = (props) => {
    const { children, variant, color, disableGutters } = props;
    return (React.createElement(Toolbar$1, { variant: variant, color: color, disableGutters: disableGutters }, children));
};

const AppBarHighlight = (props) => {
    const { children, className, component } = props;
    return (React.createElement(AppBarHighlight$1, { className: className, component: component }, children));
};

const Container = (props) => {
    const { children, className, component, fixed, disableGutters, maxWidth, } = props;
    return (React.createElement(Container$1, { className: className, component: component, fixed: fixed, disableGutters: disableGutters, maxWidth: maxWidth }, children));
};

const Provider = (props) => {
    const { children, theme, testID, cssPrefix } = props;
    return (React.createElement(Provider$1, { "data-testID": testID, theme: theme, cssPrefix: cssPrefix }, children));
};

const ExpansionPanelSummary = (props) => {
    const { children, expandIcon, classes, tabIndex, action, disabled, centerRipple, disableRipple, disableTouchRipple, focusRipple, focusVisibleClassName, TouchRippleProps, IconButtonProps, onFocusVisible, } = props;
    return (React.createElement(ExpansionPanelSummary$1, { expandIcon: expandIcon, classes: classes, tabIndex: tabIndex, action: action, disabled: disabled, centerRipple: centerRipple, disableRipple: disableRipple, disableTouchRipple: disableTouchRipple, focusRipple: focusRipple, focusVisibleClassName: focusVisibleClassName, onFocusVisible: onFocusVisible, TouchRippleProps: TouchRippleProps, IconButtonProps: IconButtonProps }, children));
};

const ExpansionPanelDetails = (props) => {
    const { children, classes } = props;
    return (React.createElement(ExpansionPanelDetails$1, { classes: classes }, children));
};

const ExpansionPanel = (props) => {
    const { children, classes, onChange, TransitionComponent, TransitionProps, disabled, expanded, defaultExpanded, } = props;
    return (React.createElement(ExpansionPanel$1, { classes: classes, onChange: onChange, TransitionComponent: TransitionComponent, TransitionProps: TransitionProps, disabled: disabled, expanded: expanded, defaultExpanded: defaultExpanded }, children));
};

const List = (props) => {
    const { className, dense, disablePadding, subheader, children } = props;
    return (React.createElement(List$1, { className: className, dense: dense, disablePadding: disablePadding, subheader: subheader }, children));
};

const ListSubheader = (props) => {
    const { children, component, classes, color, disableGutters, disableSticky, inset } = props;
    return (React.createElement(ListSubheader$1, { component: component, classes: classes, color: color, disableGutters: disableGutters, disableSticky: disableSticky, inset: inset }, children));
};

const CssBaseline = (props) => {
    const { children, classes, testID } = props;
    return (React.createElement(CssBaseline$1, { classes: classes, "data-testid": testID }, children));
};

const themes = themes$1;

const Input = (props) => {
    const { color, className, mask, margin, disabled, multiline, state, size, inputComponent, hasIcon, testID, value, onClick, onKeyPress, } = props;
    return (React.createElement(Input$1, { color: color, className: className, mask: mask, margin: margin, disabled: disabled, multiline: multiline, state: state, size: size, inputComponent: inputComponent, hasIcon: hasIcon, "data-testid": testID, onClick: onClick, onKeyPress: onKeyPress, value: value }));
};

export { AppBar, AppBarHighlight, Avatar, Badge, Button, Card, Checkbox, Chip, Container, Counter, CssBaseline, DialogWrapper, ErrorWrapper, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, HorizontalSpace, Icon, IconButton, Image, Input, Link, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Logo, ProgressIndicator, Provider, Radio, Rating, Skeleton, TabContainer, TabItem, Text, TextField, ToggleButton, Toolbar, View, themes };
