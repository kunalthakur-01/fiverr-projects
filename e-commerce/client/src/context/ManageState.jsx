import React, { useCallback, useState, useEffect } from "react";

let timeout;

export const contextManage = React.createContext({
  isLogin: false,
  token: null,
  userData: {},
  login: () => {},
  logout: () => {},
});

export const ContextProvider = (props) => {
  // const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState({});
  const [tokenExpirationTime, setTokenExpirationTime] = useState();


  const login = useCallback((data, expirationTime) => {
    // setIsLogin(true);
    setToken(data.token);
    setUserData(data);
    const tokenExpirationTime = expirationTime ||  new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationTime(tokenExpirationTime);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...data,
        expirationTime: tokenExpirationTime.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    // setIsLogin(false);
    setToken(null);
    setUserData({});
    localStorage.removeItem("userData");
    setTokenExpirationTime(null)
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
      login(storedData, new Date(storedData.expirationTime));
    }
  }, [login]);

  useEffect(() => {
    if(token && tokenExpirationTime) {
        const remainingTime = new Date(tokenExpirationTime).getTime() - new Date().getTime();
        timeout = setTimeout(logout, remainingTime);
    }
    else {
        clearTimeout(timeout);
    }
  }, [token, logout, tokenExpirationTime])

  return (
    <contextManage.Provider value={{ userData, token, login, logout }}>
      {props.children}
    </contextManage.Provider>
  );
};
