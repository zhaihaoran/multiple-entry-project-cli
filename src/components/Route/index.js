import { Route, Switch } from "react-router-dom";

import Home from "@view/Home.jsx";
import Form from "@view/Form.jsx";
import Calendar from "@view/Calendar.jsx";
import Login from "@view/Login.jsx";
import Register from "@view/Register.jsx";

import Layout from "@comp/Layout.jsx";

export const Routes = [
	{
		path: "/index",
		component: Home,
		exactly: true
	},
	{
		path: "/activity",
		component: Form
	},
	{
		path: "/course",
		component: Calendar
	}
];

export const routeAdmin = (
	<Switch>
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="/" component={Login} />
	</Switch>
);
