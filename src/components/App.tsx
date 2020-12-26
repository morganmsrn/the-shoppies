import { RecoilRoot } from "recoil";
import AlertBanner from "./AlertBanner";
import Header from "./Header";
import NominationTab from "./NominationTab";
import ResultList from "./ResultList";
import SearchBar from "./SearchBar";

function App() {
  return (
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
}

export default App;
