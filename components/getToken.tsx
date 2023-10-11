const getToken = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      return token;
    } else {
      // Handle the case where localStorage is not available
      return null;
    }
  };
  
  export default getToken;