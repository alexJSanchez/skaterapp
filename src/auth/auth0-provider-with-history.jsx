// src/auth/auth0-provider-with-history.js

import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { PropTypes } from "prop-types";

const Auth0ProviderWithHistory = ({ children }) => {
	const history = useHistory();
	const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
	const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;

	const onRedirectCallback = (appState) => {
		history.push(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

Auth0ProviderWithHistory.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Auth0ProviderWithHistory;
