import { FC } from 'react';
import { Element } from '@ws-ui/craftjs-core';
import cn from 'classnames';

interface IAccordionItemProps {
  variant?: 'default' | 'contained' | 'filled' | 'separated' | 'rounded';
  item: any;
  active: boolean;
  onClick: () => void;
  resolver: any;
  transition?: string;
  position?: 'left' | 'right';
  raduis?:
    | 'rounded-none'
    | 'rounded-sm'
    | 'rounded'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-2xl'
    | 'rounded-3xl';
}

const AccordionItem: FC<IAccordionItemProps> = ({
  variant,
  onClick,
  active,
  item,
  resolver,
  transition,
  position,
  raduis,
}) => {
  return (
    <div
      className={cn(
        'accordion-item',
        `${(variant === 'filled' || variant === 'separated') && raduis}`,
        {
          'm-1': variant === 'separated' || variant === 'filled',
          'bg-gray-100':
            (variant === 'separated' && !active) ||
            (variant === 'filled' && active) ||
            (variant === 'contained' && active),
          border: variant === 'separated' && active,
        },
      )}
    >
      <div
        className={cn(
          'accordion-title',
          'hover:bg-indigo-500', // not working
          'flex mx-1 justify-between items-center gap-2',
          { 'flex-row-reverse': position === 'left' },
        )}
      >
        <Element
          id={`accordion_${item.id}`}
          className="h-fit"
          role="accordion-header"
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
        className={cn(
          'accordion-content p-1 overflow-hidden transition-max-height ease-in-out',
          `${transition}`,
          {
            'max-h-0 opacity-0': !active,
            'max-h-screen opacity-100': active,
          },
        )}
      >
        <Element
          serverSideRef={item.initialSsRef}
          id={`body${item.id}`}
          role="accordion-content"
          is={resolver.StyleBox}
          deletable={false}
          canvas
        />
      </div>
    </div>
  );
};

export default AccordionItem;
