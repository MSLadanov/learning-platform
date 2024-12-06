import React, { createContext, useContext, useState } from "react";
import Snackbar from "@/components/Snackbar/Snackbar";
import {
  SnackbarContextType,
  SnackbarProviderProps,
  SnackbarState,
} from "@/types/course/types";

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("Корневой компонент не обернут в SnackbarProvider!");
  }
  return context;
};

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    isOpen: false,
    message: "",
    type: "success",
  });

  const openSnackbar = (
    message: string,
    type: "success" | "warning" | "error" = "success"
  ) => {
    setSnackbar({ isOpen: true, message, type });
    setTimeout(() => {
      setSnackbar({ isOpen: false, message: "", type: "success" });
    }, 3000);
  };

  const closeSnackbar = () => {
    setSnackbar({ isOpen: false, message: "", type: "success" });
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      {snackbar.isOpen && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={closeSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
};
