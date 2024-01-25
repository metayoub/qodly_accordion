import { FC } from 'react';
import { Element } from '@ws-ui/craftjs-core';
import cn from 'classnames';

interface IAccordionItemProps {
  variant?: 'default' | 'contained' | 'filled' | 'separated';
  item: any;
  active: boolean;
  onClick: () => void;
  resolver: any;
  transition?: string;
}

const AccordionItem: FC<IAccordionItemProps> = ({
  variant,
  onClick,
  active,
  item,
  resolver,
  transition,
}) => {
  return (
    <div
      className={cn('accordion-item group', {
        'm-1': variant === 'separated',
        'bg-gray-100': (variant === 'separated' && !active) || (variant === 'filled' && active),
      })}
    >
      <div
        className={cn(
          'accordion-title',
          'hover:bg-indigo-500', // not working
          'flex mx-1 justify-between items-center gap-2',
        )}
      >
        <Element
          id={`accordion_${item.id}`}
          className="h-fit"
          role="accordionheader"
          is={resolver.StyleBox}
          deletable={false}
          canvas
        />
        <span
          onClick={onClick}
          className={cn(
            'fa cursor-pointer self-center p-2',
            'accordion-chevron',
            active ? item.openChevron : item.closeChevron,
          )}
        ></span>
      </div>
      <div
        className={cn(`accordion-content p-1 overflow-hidden ${transition}`, {
          'transition-max-height duration-300': transition !== '',
          'max-h-0 opacity-0': !active,
          'max-h-screen opacity-100': active,
        })}
      >
        <Element
          serverSideRef={item.initialSsRef}
          id={`body${item.id}`}
          role="accordioncontent"
          is={resolver.StyleBox}
          deletable={false}
          canvas
        />
      </div>
    </div>
  );
};

export default AccordionItem;
