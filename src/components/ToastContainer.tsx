import { cva } from "class-variance-authority";
import { Toast } from "./Toast";
import { ToastContainerProps } from "./types";
import { useToast } from "./ToastContext";
import { cn } from "@/utils";

const containerVariants = cva(
  "fixed z-50 flex flex-col gap-3 pointer-events-none max-w-[100vw] max-h-[100vh] overflow-hidden",
  {
    variants: {
      position: {
        "top-right": "top-0 right-0",
        "top-center": "top-0 left-1/2 -translate-x-1/2",
        "top-left": "top-0 left-0",
        "bottom-right": "bottom-0 right-0",
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
        "bottom-left": "bottom-0 left-0",
      },
    },
    defaultVariants: {
      position: "bottom-right",
    },
  },
);

export function ToastContainer({
  position = "bottom-right",
  showClose = true,
  rounded = false,
  className = "",
  style,
}: ToastContainerProps) {
  const { toasts } = useToast();

  return (
    <div
      className={cn(containerVariants({ position }), className)}
      style={style}
    >
      <div className="flex flex-col gap-3 items-center w-[20rem] max-w-[calc(100vw-2rem)]">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast {...toast} showClose={showClose} rounded={rounded} />
          </div>
        ))}
      </div>
    </div>
  );
}
