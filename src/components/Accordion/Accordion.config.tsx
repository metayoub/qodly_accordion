import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { TfiLayoutAccordionMerged } from 'react-icons/tfi';
import { generate } from 'short-uuid';
import AccordionSettings, { BasicSettings } from './Accordion.settings';

export interface IAccordion {
  id: string;
  title: string;
  openChevron: string;
  closeChevron: string;
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
      tabs: [
        {
          id: generate(),
          title: 'Accordion 1',
          initialSsRef: 'accordion_1',
          openChevron: 'fa-chevron-up',
          closeChevron: 'fa-chevron-down',
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
  defaultProps: {},
} as T4DComponentConfig<IAccordionProps>;

export interface IAccordionProps extends webforms.ComponentProps {
  tabs?: IAccordion[];
  variant?: 'default' | 'contained' | 'filled' | 'separated';
}
