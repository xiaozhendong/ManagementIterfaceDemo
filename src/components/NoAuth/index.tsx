import {history} from 'ice'

const NoAuth = () => {
  history.push('/login')
  return null;
};

export default NoAuth;
