import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface SnackbarProps {
  message: string;
  type: "success" | "warning" | "error";
  onClose: () => void;
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(20px);
    }
`;

const SnackbarContainer = styled.div<{
  visible: boolean;
  exiting: boolean;
  type: string;
}>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  border-radius: 4px;
  color: white;
  z-index: 1000;
  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "green";
      case "warning":
        return "orange";
      case "error":
        return "red";
      default:
        return "gray";
    }
  }};
  opacity: ${({ visible, exiting }) => (visible ? (exiting ? 0 : 1) : 0)};
  animation: ${({ visible, exiting }) =>
      visible ? (exiting ? fadeOut : fadeIn) : "none"}
    0.5s ease forwards;
  transition: opacity 0.5s ease;
`;

const Snackbar: React.FC<SnackbarProps> = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const showTimer = setTimeout(() => {
      setIsExiting(true);
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 500);

      return () => clearTimeout(exitTimer);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, [message, onClose]);

  return (
    <SnackbarContainer visible={isVisible} exiting={isExiting} type={type}>
      {message}
    </SnackbarContainer>
  );
};

export default Snackbar;
