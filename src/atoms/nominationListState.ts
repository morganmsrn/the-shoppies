import { atom } from "recoil";
import Movie from "../models/Movie";

const nominationListState = atom<Movie[]>({
  key: "NominationList",
  default: [],
});

export default nominationListState;
