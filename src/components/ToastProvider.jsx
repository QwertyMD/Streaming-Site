import React from "react";
import { Toaster } from "sonner";
import { Check, Trash2 } from "lucide-react";

/**
 * ToastProvider wraps Sonner's Toaster with app-specific styling and options.
 */
const ToastProvider = () => (
  <Toaster
    position="bottom-right"
    maxToasts={1}
    richColors
    toastOptions={{
      success: {
        icon: <Check className="text-primeblue" />,
        style: {
          background: "rgba(255,255,255,0.1)",
          color: "#fff",
          borderRadius: "0.75rem",
          padding: "0.75rem",
        },
      },
      error: {
        icon: <Trash2 className="text-primered" />,
        style: {
          background: "rgba(255,255,255,0.1)",
          color: "#fff",
          borderRadius: "0.75rem",
          padding: "0.75rem",
        },
      },
    }}
    gutter={12}
    containerStyle={{ zIndex: 1000 }}
  />
);

export default ToastProvider;
