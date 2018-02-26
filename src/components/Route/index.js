import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "@view/Home";
import Form from "@view/Form";
import Calendar from "@view/Calendar";

import Layout from "@comp/Layout.jsx";
import Login from "@view/Login";
import Register from "@view/Register";

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

const routeAdmin = (
	<Switch>
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="/" component={Layout} />
	</Switch>
);

export default routeAdmin;
