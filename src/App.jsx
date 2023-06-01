import React from "react";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import router from "./router";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <Auth0Provider
      domain={`${import.meta.env.VITE_DOMAIN}`}
      clientId={`${import.meta.env.VITE_CLIENTID}`}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Auth0Provider>
  );
}

export default App;
