import React, {useContext} from 'react';
import HookSwitcher from '../hookSwitcher';

const Context = React.createContext();

const Child = () => {
  const value = useContext(Context);

  return <p>{value}</p>
}

export default function App() {

  return (
    <div>
      <Context.Provider value="Hi context">
        <HookSwitcher />
        <Child />
      </Context.Provider>
    </div>
  )
}
