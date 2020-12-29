import { atom, DefaultValue } from "recoil";
import { Movie } from "../models/Movie";

/** When the state is created or updated,
 * the value is read or changed from the browser local storage
 * This allows the user to refresh or close the tab without losing their data
 */

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
