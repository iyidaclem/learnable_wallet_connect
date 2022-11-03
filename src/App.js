import { Web3Button, useAccount } from '@web3modal/react';
import "./App.css"
function App() {
  const { account } = useAccount()
  
  return (
    <div className='App'>
      {account.isConnected ? <h1>{account.address}</h1> : null}
      <Web3Button />
    </div>
  );
}

export default App;
