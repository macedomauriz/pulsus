import React, { createContext, useState } from "react"

const NotificationContext = createContext<any>(null)

interface NotificationProviderProps {
  children: React.ReactNode
}

const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [isNotificationClosed, setNotificationClosed] = useState(false)

  const closeNotification = () => {
    setNotificationClosed(true)
  }

  return (
    <NotificationContext.Provider
      value={{ isNotificationClosed, closeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationContext, NotificationProvider }
