let env = {
    REACT_APP_PLUSPET_API_ENDPOINT: 'http://localhost:8080'
  };
  
  if (typeof window !== 'undefined') {
    window.env = env;
  }
  
  if (typeof module !== 'undefined') {
    module.exports = env;
  }