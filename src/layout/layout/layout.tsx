import React from "react";
import Navbar from "../navbar/navbar";
import classes from "./layout.module.css";
import { NAV_ITEMS } from "./Nav-items";

interface LayoutProps {
    children: JSX.Element,
    favoriteMeetupsCount: number
}

function Layout(props: LayoutProps) {
    return (
        <div>
            <Navbar items={NAV_ITEMS} count={props.favoriteMeetupsCount} />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;