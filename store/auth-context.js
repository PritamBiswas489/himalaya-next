import React,{useState, useEffect, useCallback, useContext} from "react";
import { getSession } from "next-auth/react";


const AuthContext = React.createContext({
    user:null,
    loading : false,
    login:()=>{},
    logout:()=>{},
    
    
});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props)=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const fetchData = async () => {
          const session = await getSession();
          if (session) {
            setUser(session.user);
            setLoading(false);
          }
          
        };
    
        fetchData();
      }, []);


    const  loginHandler = async () =>{
      const session = await getSession();
      if (session) {
        setUser(session.user);
      }
    }
    const logoutHandler = () =>{
      setUser(null);
    }

    const contextValue = {
      user:user,
      loading:loading,
      login:loginHandler,
      logout:logoutHandler
     
    }   
    return <AuthContext.Provider value={contextValue}>
     {props.children}
   </AuthContext.Provider>
}