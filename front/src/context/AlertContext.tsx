import React, { useEffect, useState } from "react";
import { AlertMessageType } from "../types/AlertMessageTypes";

const Context = React.createContext(null);

export function AlertContextProvider({ children }: { children: any }) {
  const [alert, setAlert] = useState();

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  }, [alert]);

  return (
    <Context.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
