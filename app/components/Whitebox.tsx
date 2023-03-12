import React from 'react';
import cn from 'classnames';
interface Props {
   children: React.ReactNode;
   className?: string;
};
function Whitebox({children, className}: Props) {
  return (
    <div className={cn(
        'bg-white flex justify-center items-center p-2 w-5/6 mx-auto h-24 rounded-lg',
        className
    )}>
      {children}
    </div>
  )
}

export default Whitebox