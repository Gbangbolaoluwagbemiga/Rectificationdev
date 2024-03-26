import Chain from "./component/Chain";
import Connect from "./component/Connect";
import Fail from "./component/Fail";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Header from "./component/Header";
import Initializing from "./component/Initializing";
import QuickStart from "./component/QuickStart";
import { Usewallet } from "./context/Usewallet";

function App() {
  const { walletVisible, formVisible, success } = Usewallet();
  return (
    <div>
      {success ? (
        <>
          <Header />
          {!formVisible &&
            (!walletVisible ? (
              <>
                <Chain />
                <QuickStart />
                <Footer />
              </>
            ) : (
              walletVisible && (
                <>
                  <Connect />
                  <Footer />
                </>
              )
            ))}

          {formVisible && <Form />}

          <Initializing />
          {/* <Fail /> */}
        </>
      ) : (
        <Fail />
      )}
    </div>
  );
}

export default App;
