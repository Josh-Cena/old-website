import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  src: string;
}

export default function Pic({children, src}: Props) {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={src} />
      <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
    </div>
  );
}
