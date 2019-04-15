import * as React from 'react';

import Header from './Header';

interface Props {
  children: React.ReactNode;
}

function Page({children}: Props) {

  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Page;
