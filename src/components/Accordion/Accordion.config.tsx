import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { TfiLayoutAccordionMerged } from 'react-icons/tfi';
import { generate } from 'short-uuid';
import AccordionSettings, { BasicSettings } from './Accordion.settings';

export interface IAccordion {
  id: string;
  title: string;
  initialSsRef: string;
}

export default {
  craft: {
    displayName: 'Accordion',
    rules: {
      canMoveIn: () => true,
      canMoveOut: () => true,
    },
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
      items: [
        {
          id: generate(),
          title: 'Accordion 1',
          initialSsRef: 'accordion_1',
        },
      ],
      variant: 'default' as string,
    },
    related: {
      settings: Settings(AccordionSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Accordion',
    exposed: true,
    icon: TfiLayoutAccordionMerged,
    events: [
      {
        label: 'On Change',
        value: 'onchange',
      },
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
    ],
    datasources: {
      canAttach: () => false,
    },
  },
  defaultProps: {
    multiple: false,
    transition: 'duration-300',
    position: 'right',
    radius: 'rounded-none',
    openChevron: 'fa-chevron-up',
    closeChevron: 'fa-chevron-down',
  },
} as T4DComponentConfig<IAccordionProps>;

export interface IAccordionProps extends webforms.ComponentProps {
  items?: IAccordion[];
  variant?: 'default' | 'contained' | 'filled' | 'separated';
  openChevron?: string;
  closeChevron?: string;
  multiple?: boolean;
  transition?:
    | 'duration-0'
    | 'duration-75'
    | 'duration-100'
    | 'duration-150'
    | 'duration-200'
    | 'duration-300'
    | 'duration-500'
    | 'duration-700'
    | 'duration-1000';
  position?: 'left' | 'right';
  radius?:
    | 'rounded-none'
    | 'rounded-sm'
    | 'rounded'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-2xl'
    | 'rounded-3xl';
}
