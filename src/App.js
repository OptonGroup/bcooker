import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Dish } from "./components/Dish"
import { Save } from "./pages/Save"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home/>} />
                    <Route path=":id" element={<Dish/>} />
                </Route>
				<Route path={"/save"} exact element={<Save/>}/>
				<Route path={"/profile"} exact element={<Profile/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
