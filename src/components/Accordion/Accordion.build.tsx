import { useEnhancedNode, useEnhancedEditor, selectResolver } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useState } from 'react';
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
  const {
    connectors: { connect },
  } = useEnhancedNode();
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

  const { resolver } = useEnhancedEditor(selectResolver);

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
            position={position}
            resolver={resolver}
            key={item.id}
            onClick={() => toggleAccordion(index)}
            active={accordion.includes(index)}
            item={item}
            variant={variant}
            transition={transition}
            raduis={raduis}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
