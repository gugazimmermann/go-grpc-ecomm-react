import React, { lazy, ReactElement, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Alert } from "react-bootstrap";
import { AppProvider } from "./context";
import { ENTRY_ROUTE, CATEGORY, STORE, CART } from "./constants";
import "./css/app.scss";

const Layout = lazy(() => import("./layout"));
const Category = lazy(() => import("./pages/category"));
const Cart = lazy(() => import("./pages/cart"));
const NotFound = lazy(() => import("./pages/not-found"));

const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <Alert variant="danger mt-5">
      <strong>Something went wrong:</strong> {error.message}. Try to reload the page!
    </Alert>
  );
};

function App(): ReactElement {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppProvider>
          <Layout>
            <Switch>
              <Route exact path={ENTRY_ROUTE}>
                <Redirect to={STORE} />
              </Route>
              <Route exact path={STORE} component={Category} />
              <Route exact path={CART} component={Cart} />
              <Route exact path={CATEGORY} component={Category} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </AppProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
