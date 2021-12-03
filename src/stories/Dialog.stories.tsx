import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActionContentSample, DialogContentSample } from "./utils/dialog.utils";

import { DialogWrapper } from "../dialog/dialog-wrapper";

export default {
  title: "Components/DialogWrapper",
  argTypes: {
    openButtonText: {
      description:
        "Text that will be displayed in the button that opens the dialog",
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      description: "Text that will be displayed in the title of dialog",
      table: {
        type: { summary: "string" },
      },
    },
    closeButtonText: {
      description:
        "Text that will be displayed in the button that closes the dialog",
      table: {
        type: { summary: "string" },
      },
    },
    open: {
      description: "If true, the Dialog is open.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "If true, the dialog stretches to maxWidth.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    disableBackdropClick: {
      description:
        "If true, clicking the backdrop will not fire the onClose callback.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    scroll: {
      description: "Determine the container for scrolling the dialog.",
      table: {
        type: { summary: '"body" | "paper"' },
        defaultValue: { summary: "paper" },
      },
      options: ["body", "paper"],
      control: { type: "radio" },
    },
    fullScreen: {
      description: "If true, the dialog will be full-screen.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    disableTypography: {
      description:
        "Used in DialogTitle. If true, the children won't be wrapped by a Typography component.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    disableSpacing: {
      description:
        "Used in DialogActions. If true, the actions do not have additional margin.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    maxWidth: {
      description: "Determine the max-width of the dialog.",
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg" | "xl"' },
        defaultValue: { summary: "sm" },
      },
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
    actionContent: {
      description:
        "The content that will be informed in the '</DialogActions>' such as a '</Button>'",
    },
    dialogContent: {
      description:
        "The content that will be informed in the '</DialogContent>' such as a '</Button>'",
    },
    onBackdropClick: {
      description: "Callback fired when the backdrop is clicked.",
      table: {
        type: { summary: "Function" },
      },
    },
    onClose: {
      description: "Callback fired when the component requests to be closed.",
      table: {
        type: { summary: "Function" },
      },
    },
    onEnter: {
      description: "Callback fired before the dialog enters.",
      table: {
        type: { summary: "Function" },
      },
    },
    onEntered: {
      description: "Callback fired when the dialog has entered.",
      table: {
        type: { summary: "Function" },
      },
    },
    onEntering: {
      description: "Callback fired when the dialog is entering.",
      table: {
        type: { summary: "Function" },
      },
    },
    onEscapeKeyDown: {
      description:
        "Callback fired when the escape key is pressed, disableKeyboard is false and the modal is in focus.",
      table: {
        type: { summary: "Function" },
      },
    },
    onExit: {
      description: "Callback fired before the dialog exits.",
      table: {
        type: { summary: "Function" },
      },
    },
    onExited: {
      description: "Callback fired when the dialog has exited.",
      table: {
        type: { summary: "Function" },
      },
    },
    onExiting: {
      description: "Callback fired when the dialog is exiting.",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  component: DialogWrapper,
} as ComponentMeta<typeof DialogWrapper>;

const Template: ComponentStory<typeof DialogWrapper> = (args) => (
  <DialogWrapper {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  openButtonText: "Open Dialog",
  title: "Dialog title content",
  open: false,
  dialogContent: <p>Dialog content text</p>,
  closeButtonText: "Close",
  maxWidth: "md",
  fullWidth: true,
  disableBackdropClick: undefined,
  scroll: undefined,
  fullScreen: false,
  onBackdropClick: undefined,
  onClose: undefined,
  onEnter: undefined,
  onEntered: undefined,
  onEntering: undefined,
  onEscapeKeyDown: undefined,
  onExit: undefined,
  onExited: undefined,
  onExiting: undefined,
  disableTypography: false,
  classes: undefined,
  disableSpacing: undefined,
  actionContent: undefined,
};

export const DialogActions = Template.bind({});
DialogActions.args = {
  openButtonText: "Open Dialog Action",
  title: "Dialog title Action",
  open: false,
  closeButtonText: undefined,
  maxWidth: "md",
  fullWidth: true,
  disableBackdropClick: undefined,
  scroll: undefined,
  fullScreen: false,
  onBackdropClick: undefined,
  onClose: undefined,
  onEnter: undefined,
  onEntered: undefined,
  onEntering: undefined,
  onEscapeKeyDown: undefined,
  onExit: undefined,
  onExited: undefined,
  onExiting: undefined,
  disableTypography: false,
  classes: undefined,
  disableSpacing: undefined,
  actionContent: ActionContentSample(),
};

export const DialogRadioGroup = Template.bind({});
DialogRadioGroup.args = {
  openButtonText: "Open Dialog Radio Group",
  title: "Dialog title Radio",
  open: false,
  closeButtonText: undefined,
  maxWidth: "md",
  fullWidth: true,
  disableBackdropClick: undefined,
  scroll: undefined,
  fullScreen: false,
  onBackdropClick: undefined,
  onClose: undefined,
  onEnter: undefined,
  onEntered: undefined,
  onEntering: undefined,
  onEscapeKeyDown: undefined,
  onExit: undefined,
  onExited: undefined,
  onExiting: undefined,
  disableTypography: false,
  classes: undefined,
  disableSpacing: undefined,
  actionContent: undefined,
  dialogContent: DialogContentSample(),
};
