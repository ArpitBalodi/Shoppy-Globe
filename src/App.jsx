import { useState } from "react";
import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
    const [search, setSearch] = useState(""); // State for search input


    return (
        <Provider store={appStore}>
            <Header setSearch={setSearch} />
            <Outlet context={{ search }} /> 
        </Provider>
    );
}

export default App;


