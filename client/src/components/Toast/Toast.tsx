import { Alert, Snackbar } from "@mui/material";
import { interval, timeInterval } from "rxjs";
import { useEffect, useState } from "react";

import { useToastStore } from "@/store";

const TOTAL_SECONDS_OPENED = 6; // Total time in seconds the toast will remain visible
const seconds = interval(25); // Observable emitting values every 25 milliseconds

/**
 * A functional component that displays a toast notification with a progress bar.
 *
 * The toast becomes visible when `isOpen` is true and will automatically close after
 * `TOTAL_SECONDS_OPENED` seconds, displaying a progress bar that fills up over time.
 *
 * @component
 * @returns {JSX.Element} The rendered toast notification.
 */
const Toast = () => {
  const toastState = useToastStore((state) => state.toastState);
  const handleClose = useToastStore((state) => state.handleClose);
  const { isOpen, message, type } = toastState;

  // open Toast when isOpen is true, then start a timer and hide Toast when timer reach TOTAL_SECONDS_OPENED
  useEffect(() => {
    if (isOpen) {
      // Create an observable that emits every 25 milliseconds
      const observable = seconds.pipe(timeInterval()).subscribe((value) => {
        // Calculate the progress percentage
        const newProgress = ((value.value / 40) * 100) / TOTAL_SECONDS_OPENED;
        if (newProgress === 100) handleClose();
      });
      // Cleanup function to reset progress and unsubscribe from observable
      return () => {
        observable.unsubscribe();
      };
    }
  }, [isOpen, message, type, handleClose]);

  return (
    <Snackbar open={isOpen} onClose={handleClose} id="alert-toast">
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
