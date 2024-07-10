import { createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type State = {
  user: {
    id: number;
    email: string;
    password: string;
    name?: string;
    address?: string;
    age?: string;
  };
};

export type StoreActions = {
  setUser: (user: State["user"]) => void;
  updateUser: (user: Partial<State["user"]>) => void;
};

export type UserStore = State & StoreActions;

export const DefaultUser: State["user"] = {
  id: 0,
  email: "",
  password: "",
  name: "",
  address: "",
  age: "",
};

export const createUsersStore = () => {
  return createStore(
    persist(
      (set, get: () => { user: State["user"] }) => ({
        user: DefaultUser,
        setUser: (user: State["user"]) => set({ user }),
        updateUser: (user: Partial<State["user"]>) =>
          set({ user: { ...get().user, ...user } }),
      }),
      {
        name: "SL_USER",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
