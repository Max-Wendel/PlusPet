let env = {
    REACT_APP_PLUSPET_API_ENDPOINT: 'https://pluspet-backend-production.up.railway.app'
  };
  
  if (typeof window !== 'undefined') {
    window.env = env;
  }
  
  if (typeof module !== 'undefined') {
    module.exports = env;
  }