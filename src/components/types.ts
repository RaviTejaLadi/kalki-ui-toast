import { ReactNode } from "react";

export type ToastVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "help"
  | "light"
  | "dark";

export interface ToastProps {
  id: number;
  message: ReactNode;
  variant?: ToastVariant;
  autoClose?: number | false;
  showClose?: boolean;
  icon?: ReactNode;
  rounded?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClose: () => void;
}

export type ToastPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface ToastContainerProps {
  position?: ToastPosition;
  showClose?: boolean;
  rounded?: boolean;
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ToastContextValue {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
  removeToast: (id: number) => void;
}
