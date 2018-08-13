import Button from './Button.html'
import Checkbox from './Checkbox.html';
import Dialog from './Dialog.html';
import List from './List.html';
import PasswordField from './PasswordField.html';
import Spinner from './Spinner.html';
import TextField from './TextField.html';
import Toggle from './Toggle.html';

export const componentRoutes = [
  {
    label: 'Button',
    path: 'components/Button',
    description: 'The base button component.',
    component: Button
  },
  {
    label: 'Checkbox',
    path: 'components/Checkbox',
    description: 'Checkbox component for use in forms.',
    component: Checkbox
  },
  {
    label: 'Dialog',
    path: 'components/Dialog',
    description: 'A modal dialog useful for confirmation dialogs or quick interactions.',
    component: Dialog
  },
  {
    label: 'List',
    path: 'components/List',
    description: 'Presents a number of related items as a vertical list.',
    component: List
  },
  {
    label: 'PasswordField',
    path: 'components/PasswordField',
    description: 'The PasswordField component enables a user to type passwords into an app.',
    component: PasswordField
  },
  {
    label: 'Spinner',
    path: 'components/Spinner',
    description: 'Displays the progress of an operation when the percentage complete can not be determined.',
    component: Spinner
  },
  {
    label: 'TextField',
    path: 'components/TextField',
    description: 'The TextField component enables a user to type text into an app.',
    component: TextField
  },
  {
    label: 'Toggle',
    path: 'components/Toggle',
    description: 'Allows for turning on or off a setting.',
    component: Toggle
  }
]
