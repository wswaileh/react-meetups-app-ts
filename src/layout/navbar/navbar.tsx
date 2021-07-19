import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

export interface NavbarItem {
    title: string;
    link: string;
    badge?: boolean;
}

interface NavbarProps {
    items: NavbarItem[],
    count: number
}

function Navbar(props: NavbarProps) {
    return (
        <header className={classes.header}>
            <Link to="/">
                <div className={classes.logo}>
                    React Meetups
                </div>
            </Link>
            <nav>
                <ul>
                    {props.items.map((item) => (
                        <li key={item.link}>
                            <Link to={item.link}>
                                {item.title}
                                {item.badge && props.count != null && (
                                    <span className={classes.badge}>{props.count}</span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;