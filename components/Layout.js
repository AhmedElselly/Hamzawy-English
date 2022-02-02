import { Fragment } from "react";
import Navbar from "./Navbar";

const Layout = props => {
	return(
		<Fragment>
			
			{props.children}
		</Fragment>
	)
}

export default Layout;