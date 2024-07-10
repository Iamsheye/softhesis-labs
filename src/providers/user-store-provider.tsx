"use client";
import { type ReactNode, createContext, useRef, useContext, use } from "react";
import { useStore } from "zustand";
import { State, type UserStore, createUsersStore } from "src/store/user-store";

export type UserStoreApi = ReturnType<typeof createUsersStore>;

export const UserStoreContext = createContext<UserStoreApi | undefined>(
  undefined
);

export interface UserStoreProviderProps {
  children: ReactNode;
}

export const UserStoreProvider = ({ children }: UserStoreProviderProps) => {
  const storeRef = useRef<UserStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUsersStore();
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = <T,>(selector: (store: State) => T): T => {
  const store = useContext(UserStoreContext);

  if (!store) {
    throw new Error(`useCounterStore must be used within UserStoreProvider`);
  }

  return useStore(store, selector);
};
