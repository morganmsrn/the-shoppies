import { RecoilRoot } from "recoil";
import Header from "./Header";
import NominationList from "./NominationList";
import ResultList from "./ResultList";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="h-max bg-gray-200">
      <RecoilRoot>
        <Header />
        <SearchBar />
        <ResultList />
        <NominationList />
      </RecoilRoot>
    </div>
  );
}

export default App;
