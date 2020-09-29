/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import axios from "axios";

//REDUX
import { Provider } from "react-redux";
import stores from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

//STYLED COMPONETNS
import styled, { ThemeProvider } from "styled-components";
import DarkTheme from "./styles/themes/dark";
import LightTheme from "./styles/themes/light";
import GlobalStyle from "./styles/global";

//IMPORTED COMPONENTS
import Layout from "./components/Layout";
import HomePage from "./components/HomePage/HomePage";
import Repertuar from "./components/Repertuar/Repertuar";
import DetailPage from "./components/DetailPage/DetailPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
	return (
		<Provider store={stores.store}>
			<ThemeProvider theme={DarkTheme}>
				<SWRConfig
					value={{
						refreshInterval: 3000,
						fetcher: (url) => axios.get(url).then((res) => res.data),
					}}
				>
					<Application>
						<GlobalStyle />
						<Router>
							<PersistGate persistor={stores.persistor}>
								<Layout>
									<Switch>
										<Route path={"/Home"} component={HomePage} />
										<Route exact path={"/Repertuar/:option"} component={Repertuar} />
										<Route exact path={"/Movie/:id"} component={DetailPage} />
										<Route exact path={"/Login"} component={LoginPage} />
									</Switch>
								</Layout>
							</PersistGate>
						</Router>
					</Application>
				</SWRConfig>
			</ThemeProvider>
		</Provider>
	);
}

export default App;

export const Application = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	width: 100vw;
	min-height: 100vh;
`;
