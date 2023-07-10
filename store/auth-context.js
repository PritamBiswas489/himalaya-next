import React,{useState, useEffect, useCallback} from "react";
import { getSession } from "next-auth/react";

const AuthContext = React.createContext({
    user:null,
    loading : false
    // login:function(){},
    // logout:function(){}
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
          }
          setLoading(false);
        };
    
        fetchData();
      }, []);

    //  const loginHandler = () =>
    //  {
    //     setIsLoggedin(true);
    //  }
    //  const logoutHandler = () =>
    //  {
    //     setIsLoggedin(false);
    //  }

    const contextValue = {
       user,
       loading
    }   
    return <AuthContext.Provider value={contextValue}>
     {props.children}
   </AuthContext.Provider>
}