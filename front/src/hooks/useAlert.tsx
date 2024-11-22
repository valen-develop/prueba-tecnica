import { useContext } from "react";
import AlertContext from "../context/AlertContext";
import { AlertMessageType } from "../types/AlertMessageTypes";

export function useAlert() {
  const { alert, setAlert } = useContext(AlertContext);

  const showAlert = ({ text, timeout }: AlertMessageType) => {
    setAlert({
      text,
      timeout,
    });

    if (timeout) {
      setTimeout(() => {
        closeAlert();
      }, timeout);
    }
  };

  const closeAlert = () => {
    setAlert(null);
  };

  return {
    alert,
    showAlert,
    closeAlert,
  };
}
