import '../../styles.scss';

import React, { FunctionComponent, ReactNode } from 'react';

import layoutStyles from './Layout.module.scss';

export interface LayoutProps {
  header: ReactNode;
  footer: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ header, footer, children }) => (
  <div className={layoutStyles.layout}>
    <div className={layoutStyles.header}>
      {header}
    </div>
    <main className={layoutStyles.main}>
      {children}
    </main>
    <footer className={layoutStyles.footer}>
      {footer}
    </footer>
  </div>
);
