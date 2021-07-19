import { useHistory } from "react-router-dom";
import NewMeetupForm from "../../components/new-meetup-form/new-meetup-form";
import { Meetup } from "../../models/Meetup.model";
import { useAppDispatch } from "../../redux/hooks";
import { addMeetup } from "../../redux/meetupsSlice";

export function CreateMeetupPage() {

    const history = useHistory();
    const dispatch = useAppDispatch();

    function submitHandler(newMeetup: Meetup) {
        dispatch(addMeetup(newMeetup))
            .then(() => history.replace('/'))
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onSubmit={submitHandler} />
    </section>
}