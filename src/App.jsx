import Chain from "./component/Chain";
import Connect from "./component/Connect";
import Footer from "./component/Footer";
import Header from "./component/Header";
import QuickStart from "./component/QuickStart";
import { Usewallet } from "./context/Usewallet";

function App() {
  const { walletVisible } = Usewallet();
  return (
    <div>
      <Header />
      {!walletVisible && (
        <>
          <Chain />
          <QuickStart />
        </>
      )}

      {walletVisible && (
        <>
          <Connect />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
