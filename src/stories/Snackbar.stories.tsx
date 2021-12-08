import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Snackbar } from '../snackbar/snackbar';
import { SnackbarContent, Text as Typography } from '../index';

export default {
  title: 'Components/Snackbar/Snackbar',
  component: Snackbar,
  argTypes: {
    anchorOrigin: {
      description: 'The anchor of the Snackbar. Defaults to',
      table: {
        type: { summary: '{ horizontal: "center", vertical: "bottom" }\
        { horizontal : "left" | "center" | "right", vertical: "top" | "bottom" }'},
      }
    },
    autoHideDuration: {
      description: 'The number of milliseconds to wait before automatically calling the onClose function.\
      onClose should then set the state of the open prop to hide the Snackbar. This behavior is disabled by default with the null value.',
      table: {
        type: {summary: 'number'},
      },
    },
    classes: {
      description: 'Override or extend the styles applied to the component.',
      table: {
        type: {summary: 'object'},
      },
      control: {
        type: 'object',
      }
    },
    key: {
      description: 'When displaying multiple consecutive Snackbars from a parent rendering a single <Snackbar/>,\
      Add the key prop to ensure independent treatment of each message. e.g. <Snackbar key={message} />.\
      Otherwise, the message may update-in-place and features such as autoHideDuration may be canceled.',
      table: {
        type: {summary: 'any'},
      },
    },
    children: {
      description: 'Replace the SnackbarContent component.',
      table: {
        type: {summary: 'element'},
      },
    },
    onClose: {
      description: 'Callback fired when the component requests to be closed.\
      Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop.\
      "Signature: function(event: object, reason: string) => void"\
      "(event, reason)"\
      "event  The event source of the `callback.reason`. Can be: `"timeout"` (`autoHideDuration` expired) or: `clickaway`."\
      "reason The `reason` parameter can optionally be used to control the response to `onClose`, for example ignoring `clickaway`."',
    },
    open: {
      description: 'If true, Snackbar is open.',
      table: {
        type: {summary: 'bool'},
      },
    },
    TransitionComponent: {
      description: 'The component used for the transition. Defaults to Grow.',
      table: {
        type: {summary: 'element'},
      },
    },
    action: {
      description: 'The action to display.',
      table: {
        type: {summary: 'node'},
      },
    },
    message: {
      description: 'The message to display.',
      table: {
        type: {summary: 'node'},
      },
    },
    onEnter: {
      description: 'Callback fired before the transition is entering.',
      table: {
        type: {summary: 'func'},
      },
    },
    onEntering: {
      description: 'Callback fired when the transition is entering.',
      table: {
        type: {summary: 'func'},
      },
    },
    onEntered: {
      description: 'Callback fired when the transition has entered.',
      table: {
        type: {summary: 'func'},
      },
    },
    onExit: {
      description: 'Callback fired before the transition is exiting.',
      table: {
        type: {summary: 'func'},
      },
    },
    onExiting: {
      description: 'Callback fired when the transition is exiting.',
      table: {
        type: {summary: 'func'},
      },
    },
    onExited: {
      description: 'Callback fired when the transition has exited.',
      table: {
        type: {summary: 'func'},
      },
    },
    ClickAwayListenerProps: {
      description: 'Props applied to the ClickAwayListener element.',
      table: {
        type: {summary: 'object'},
      },
    },
    ContentProps: {
      description: 'Props applied to the SnackbarContent element.',
      table: {
        type: {summary: 'object'},
      },
    },
    disableWindowBlurListener: {
      description: 'If true, the autoHideDuration timer will expire even if the window is not focused.',
      table: {
        type: {summary: 'bool'},
        defaultValue: {summary: 'false'}
      },
    },
    resumeHideDuration: {
      description: 'The number of milliseconds to wait before dismissing after user interaction.\
      If autoHideDuration prop isn\'t specified, it does nothing.\
      If autoHideDuration prop is specified but resumeHideDuration isn\'t, we default to autoHideDuration / 2 ms.',
      table: {
        type: {summary: 'number'},
      },
    },
    transitionDuration: {
      description: 'The duration for the transition, in milliseconds.\
      You may specify a single timeout for all transitions, or individually with an object. Defaults to',
      table: {
        type: {summary: '{ enter: duration.enteringScreen, exit: duration.leavingScreen }\
        number | { enter?: number, exit?: number }'},
      },
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => <Snackbar {...args} /> ;

export const SnackbarShow = Template.bind({});
SnackbarShow.args = {
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'top'
  },
  autoHideDuration: 5000,
  children: <SnackbarContent message={<div style={{ alignItems: "center", display: "flex" }}> <Typography variant="body2">Test snackBar</Typography></div>} />
}

export const SnackbarBottom = Template.bind({});
SnackbarBottom.args = {
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'bottom'
  },
  children: <SnackbarContent message={<div style={{ alignItems: "center", display: "flex" }}> <Typography variant="body2">Test snackBar</Typography></div>} />
}
