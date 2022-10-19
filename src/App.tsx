import MainLayout from "components/layout/Main";
import ReduxStore from "components/redux/store";
import YourCardsSection from "components/YourCardsSection";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

const App: React.FC = () => {
  return (
    <ReduxProvider store={ReduxStore}>
      <MainLayout>
        <YourCardsSection />
      </MainLayout>
    </ReduxProvider>
  );
};

export default App;
