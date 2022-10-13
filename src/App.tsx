import MainLayout from "components/layout/Main";
import ReduxStore from "components/redux/store";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

const App: React.FC = () => {
  return (
    <ReduxProvider store={ReduxStore}>
      <MainLayout>Main Content</MainLayout>
    </ReduxProvider>
  );
};

export default App;
