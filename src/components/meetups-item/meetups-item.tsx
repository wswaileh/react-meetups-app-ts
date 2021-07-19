import { Meetup } from "../../models/Meetup.model";
import Card from "../card/card";
import classes from "./meetup-item.module.css";

interface MeetupItemProps {
    meetup: Meetup,
    toggleIsFav: (id: string) => void
}
function MeetupItem(props: MeetupItemProps) {

    function toggleIsFav() {
        props.toggleIsFav(props.meetup.id);
    }

    return <li key={props.meetup.id} className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.meetup.image} alt={props.meetup.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleIsFav}>{!props.meetup.isFavorite ? 'Add To Favorites' : 'Remove From Favorites'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;