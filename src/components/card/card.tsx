import classes from './card.module.css';

interface CardProps {
    children: JSX.Element[] | JSX.Element;
}
function Card(props: CardProps) {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;