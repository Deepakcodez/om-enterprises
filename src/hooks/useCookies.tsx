import Cookies from "js-cookie";

const useCookies = () => {

  const setToken = (token:string)=>{
      const BearerToken = `Bearer ${token}`
      Cookies.set("token", BearerToken, { expires: 7 });   
  }

  const removeAuthToken = ()=>{
     Cookies.remove("token")
  }

  const getToken= ()=>{
    return  Cookies.get("token")
  }

  return {getToken, setToken, removeAuthToken} ;
};

export default useCookies;
