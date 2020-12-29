import { RecoilRoot } from "recoil";
import { AlertBanner } from "./AlertBanner";
import { Header } from "./Header";
import { NominationTab } from "./NominationTab";
import { ResultList } from "./ResultList";
import { SearchBar } from "./SearchBar";

export const App = () => (
  <div className="pb-14">
    <RecoilRoot>
      <AlertBanner />
      <Header />
      <SearchBar />
      <ResultList />
      <NominationTab />
    </RecoilRoot>
  </div>
);
