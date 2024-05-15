import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Auth0Provider
			domain={import.meta.env.REACT_APP_AUTH0_DOMAIN}
			clientId={import.meta.env.REACT_APP_AUTH0_CLIENT_ID}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Auth0Provider>
	</BrowserRouter>
);
