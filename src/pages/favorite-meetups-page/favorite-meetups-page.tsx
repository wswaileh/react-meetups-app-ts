import { useEffect } from "react";
import MeetupsList from "../../components/meetups-list/meetups-list";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMeetupsIfNeeded, selectFavoriteMeetups, selectIsLoading, toggleIsFavAction } from "../../redux/meetupsSlice";

function FavoriteMeetupsPage() {

    const favMeetups = useAppSelector(selectFavoriteMeetups);
    const isLoading = useAppSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(fetchMeetupsIfNeeded())
        }, [dispatch]
    );

    function toggleIsFav(id: string) {
        dispatch(toggleIsFavAction(id))
    }

    return (
        <section>
            <h1>Favorite Meetups</h1>
            {!isLoading && <MeetupsList meetups={favMeetups} noRecordsMsg={"No Favorite Meetups."} toggleIsFav={toggleIsFav} />}
        </section>
    );
}
export default FavoriteMeetupsPage;
