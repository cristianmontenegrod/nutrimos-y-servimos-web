import { Outlet } from "react-router-dom";

function BaseLayout({ header, footer }) {
  return (
    <div className="layout-container">
      {header}

      <div className="layout-body">
        <main className="layout-content">
          <Outlet />
        </main>
      </div>

      {footer}
    </div>
  );
}

export default BaseLayout;