import { atom, DefaultValue } from "recoil";
import { Movie } from "../models/Movie";

let key = "NominationList";

export const nominationListState = atom<Movie[]>({
  key: key,
  default: [],
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const storedList = localStorage.getItem(key);
      if (storedList != null) {
        setSelf(JSON.parse(storedList));
      }
    },
    ({ onSet }) => {
      onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      });
    },
  ],
});
