import { useEnhancedNode, useEnhancedEditor, selectResolver } from '@ws-ui/webform-editor';
import { Element } from '@ws-ui/craftjs-core';
import cn from 'classnames';
import { FC, useState } from 'react';
import { IAccordionProps } from './Accordion.config';
const Accordion: FC<IAccordionProps> = ({ style, variant, className, classNames = [], tabs }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const [accordion, setAccordion] = useState(0);

  const toggleAccordion = (i: number) => {
    setAccordion(accordion === i ? -1 : i);
  };

  const { resolver } = useEnhancedEditor(selectResolver);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div
        className={cn('accordion', {
          'divide-y': variant === 'default' || variant === 'contained',
          border: variant === 'contained',
        })}
      >
        {tabs?.map((tab: any, index: number) => (
          <div
            key={tab.id}
            className={cn('accordion-item group', {
              'm-1': variant === 'separated',
              'bg-gray-50':
                (variant === 'separated' && accordion !== index) ||
                (variant === 'filled' && accordion === index),
            })}
          >
            <div
              className={cn(
                'accordion-title',
                'hover:bg-indigo-500',
                'flex mx-1 justify-between items-center gap-2',
              )}
            >
              <Element
                id={`accordion_${tab.id}`}
                className="h-fit"
                role="accordionheader"
                is={resolver.StyleBox}
                deletable={false}
                canvas
              />
              <span
                onClick={() => toggleAccordion(index)}
                className={cn(
                  'fa cursor-pointer self-center p-2',
                  'accordion-chevron',
                  accordion === index ? tab.openChevron : tab.closeChevron,
                )}
              ></span>
            </div>
            <div
              className={cn(
                'accordion-content m-1 overflow-hidden transition-max-height duration-150 ease-in-out',
                {
                  'max-h-0 opacity-0': accordion !== index,
                  'max-h-full opacity-100': accordion === index,
                },
              )}
            >
              <Element
                serverSideRef={tab.initialSsRef}
                id={`body${tab.id}`}
                role="accordioncontent"
                is={resolver.StyleBox}
                deletable={false}
                canvas
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
