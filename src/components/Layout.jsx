import React from 'react';
import GlobalSidebar from './GlobalSidebar';
import './Layout.css';

const Layout = ({ center, rightPanel }) => {
  return (
    <div className="app-container">
      <aside className="column-left">
        <GlobalSidebar />
      </aside>
      <main className="column-center">
        {center}
      </main>
      <aside className="column-right">
        {rightPanel}
      </aside>
    </div>
  );
};

export default Layout;
