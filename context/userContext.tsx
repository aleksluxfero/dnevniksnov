"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { LaunchParams, useLaunchParams } from "@telegram-apps/sdk-react";

// Определяем интерфейс для контекста пользователя
interface UserContextType {
  user?: LaunchParams;
  setUser: (user: LaunchParams) => void;
}

// Создаем контекст с типизацией
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<LaunchParams | undefined>();

  useEffect(() => {
    if (!user) {
      const userData = useLaunchParams();
      setUser(userData);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Хук для использования контекста
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
