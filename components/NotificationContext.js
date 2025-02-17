"use client"

// context/NotificationContext.js
import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, duration = 3000) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div
          className="fixed top-4 left-4 bg-green-500 text-white px-6 py-4 rounded shadow-lg z-50"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
