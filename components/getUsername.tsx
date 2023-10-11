const getUsername = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('username');
      return token;
    } else {
      // Handle the case where localStorage is not available
      return null;
    }
  };
  
  export default getUsername;