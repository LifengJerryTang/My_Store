
import config from '../../auth_config.json';

const {domain, clientId, appUri} = config;
export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirect_uri: appUri
  },
};
