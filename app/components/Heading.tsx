import React, {forwardRef} from 'react';
import cn from 'classnames';
interface HeadingPropsType  {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  ref?: React.RefObject<any>;
}

const Heading = forwardRef(function MyInput(
  {as: Comp = 'div', children, className}: HeadingPropsType, ref) 
  {
  return (
      <Comp ref={ref} className={className}>{children}</Comp>
    )
  });
export const H1 = ({className, ...props} : HeadingPropsType) => (
  <Heading 
    as={'h1'} 
    className={cn(className, 'text-2xl font-bold')}
    {...props}
  />
)
export const H2 = ({className, ...props} : HeadingPropsType) => (
  <Heading 
    as={'h2'} 
    className={cn(
      'text-xl leading-10 text-primary font-bold my-6',
      className
    )}
    {...props}
  />
)
export const H3 = ({className, ...props} : HeadingPropsType) => (
  <Heading 
    as={'h3'} 
    className={cn(
      className,
      'text-md leading-9 text-primary font-bold my-6'
    )}
    {...props}
  />
)
export default Heading