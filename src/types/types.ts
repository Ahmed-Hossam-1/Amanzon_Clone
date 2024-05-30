/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export type TItem = {
  id: number;
  name: string;
  price: number;
};

// export type TUser = {
//   id: string;
//   name: string;
//   email: string;
// };
export type TUser = any;

export type TAction =
  | { type: "SET_USER"; user: TUser }
  | { type: "ADD_TO_BASKET"; item: TItem }
  | { type: "REMOVE_FROM_BASKET"; id: number }
  | { type: "EMPTY_BASKET" };

export type TinitailState = {
  basket: TItem[];
  user: TUser;
};
