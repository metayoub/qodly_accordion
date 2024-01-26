import { useRenderer } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useEnhancedEditor, selectResolver } from '@ws-ui/webform-editor';

import { IAccordionProps } from './Accordion.config';
import AccordionItem from './AccordionItem';

const Accordion: FC<IAccordionProps> = ({
  style,
  variant,
  className,
  multiple,
  classNames = [],
  items,
  transition,
  position,
  raduis,
}) => {
  const { connect } = useRenderer();
  const { resolver } = useEnhancedEditor(selectResolver);
  const [accordion, setAccordion] = useState<number[]>([]);

  const toggleAccordion = (i: number) => {
    multiple
      ? accordion.includes(i)
        ? setAccordion(accordion.filter((item) => item !== i))
        : setAccordion([...accordion, i])
      : accordion.includes(i)
        ? setAccordion([])
        : setAccordion([i]);
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div
        className={cn(
          'accordion',
          'overflow-hidden',
          {
            'divide-y': variant === 'default' || variant === 'contained',
            border: variant === 'contained',
          },
          `${variant === 'contained' ? raduis : ''}`,
        )}
      >
        {items?.map((item: any, index: number) => (
          <AccordionItem
            resolver={resolver}
            key={item.id}
            onClick={() => toggleAccordion(index)}
            active={accordion.includes(index)}
            item={item}
            variant={variant}
            transition={transition}
            position={position}
            raduis={raduis}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
