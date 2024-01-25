import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';
import { FaHandPointRight, FaHandPointLeft } from 'react-icons/fa';

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
    type: ESetting.RADIOGROUP,
    label: 'Chevron Position',
    key: 'position',
    defaultValue: 'right',
    options: [
      {
        icon: FaHandPointRight,
        value: 'right',
      },
      {
        icon: FaHandPointLeft,
        value: 'left',
      },
    ],
  },
  {
    type: ESetting.SELECT,
    label: 'Transition',
    key: 'transition',
    defaultValue: 'ease-in-out',
    options: [
      {
        label: '0 ms',
        value: 'duration-0',
      },
      {
        label: '75 ms',
        value: 'duration-75',
      },
      {
        label: '100 ms',
        value: 'duration-100',
      },
      {
        label: '150 ms',
        value: 'duration-150',
      },
      {
        label: '200 ms',
        value: 'duration-200',
      },
      {
        label: '300 ms',
        value: 'duration-300',
      },
      {
        label: '500 ms',
        value: 'duration-500',
      },
      {
        label: '700 ms',
        value: 'duration-700',
      },
      {
        label: '1000 ms',
        value: 'duration-1000',
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
