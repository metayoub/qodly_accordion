import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    type: ESetting.SELECT,
    label: 'Variant',
    isClearable: false,
    options: [
      {
        label: 'Default',
        value: 'default',
      },
      {
        label: 'Contained',
        value: 'contained',
      },
      {
        label: 'Filled',
        value: 'filled',
      },
      {
        label: 'Rounded',
        value: 'rounded',
      },
      {
        label: 'Separated',
        value: 'separated',
      },
    ],
    key: 'variant',
    isSearchable: false,
  },
  {
    type: ESetting.CHECKBOX,
    label: 'Multiple',
    key: 'multiple',
    defaultValue: false,
  },
  {
    type: ESetting.SELECT,
    label: 'Transition',
    key: 'transition',
    defaultValue: 'ease-in-out',
    options: [
      {
        label: 'Ease In Out',
        value: 'ease-in-out',
      },
      {
        label: 'Ease In',
        value: 'ease-in',
      },
      {
        label: 'Ease Out',
        value: 'ease-out',
      },
      {
        label: 'Linear',
        value: 'linear',
      },
      {
        label: 'None',
        value: '',
      },
    ],
  },
  {
    type: ESetting.DATAGRID,
    key: 'items',
    name: 'Items',
    label: 'Items',
    titleProperty: 'title',
    data: [
      {
        key: 'title',
        label: 'Title',
        type: ESetting.TEXT_FIELD,
        defaultValue: '',
      },
      {
        key: 'openChevron',
        label: 'Open Chevron',
        // type: ESetting.ICON_PICKER, to be fixed
        type: ESetting.TEXT_FIELD,
        defaultValue: 'fa-chevron-up',
      },
      {
        key: 'closeChevron',
        label: 'CLose Chevron',
        // type: ESetting.ICON_PICKER,
        type: ESetting.TEXT_FIELD,
        defaultValue: 'fa-chevron-down',
      },
    ],
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...load(DEFAULT_SETTINGS).filter('datasource'),
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter(
    'display',
    'style.overflow',
    'style.overflow',
    'style.textAlign',
    'style.fontSize',
    'style.fontWeight',
    'style.fontFamily',
  ),
];

export default Settings;
