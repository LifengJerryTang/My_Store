import config from '../../auth_config.json';

const {domain, clientId, appUri} = config;
export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    redirectUri: appUri
  },
};
