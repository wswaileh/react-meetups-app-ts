import { Meetup } from "../../models/Meetup.model";
import classes from "./meetups-list.module.css";
import MeetupItem from '../meetups-item/meetups-item'

interface MeetupsListProps {
    meetups: Meetup[],
    noRecordsMsg: string,
    toggleIsFav: (id: string) => void,
}

function MeetupsList(props: MeetupsListProps) {
    function toggleIsFav(id: string) {
        props.toggleIsFav(id);
    }
    return (
        <ul className={classes.list}>
            {props.meetups?.length ? (
                props.meetups.map((meetup, i) => (
                    <MeetupItem
                        key={i}
                        meetup={meetup}
                        toggleIsFav={toggleIsFav}
                    />
                ))
            ) : (
                <p>{props.noRecordsMsg ? props.noRecordsMsg : "No Meetups"}</p>
            )}
        </ul>
    );
}

export default MeetupsList;
