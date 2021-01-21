import '../../styles.scss';

import React from 'react';

import layoutStyles from './Layout.module.scss';

const Layout = ({ header, children }: any) => (
  <div className={layoutStyles.layout}>
    <div className={layoutStyles.header}>
      {header}
    </div>
    <main className={layoutStyles.main}>
      {children}
    </main>
  </div>
);

export default Layout;
