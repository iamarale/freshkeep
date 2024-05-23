import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/">Pantry</Link>
        <Link to="/create">Add Item</Link>
      </div>
      <hr />
      <div className="p-2">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
