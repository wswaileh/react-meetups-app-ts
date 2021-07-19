import React from "react";
import { Meetup } from "../../models/Meetup.model";
import Card from "../card/card";
import classes from "./new-meetup-form.module.css";

interface NewMeetupFormProps {
    onSubmit: (newMeetup: Meetup) => void
}
function NewMeetupForm(props: NewMeetupFormProps) {
    const titleInputRef = React.useRef<HTMLInputElement>(null);
    const imageInputRef = React.useRef<HTMLInputElement>(null);
    const addressInputRef = React.useRef<HTMLInputElement>(null);
    const descriptionInputRef = React.useRef<HTMLTextAreaElement>(null);

    function submitHandler(event: any) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current?.value;
        const enteredImage = imageInputRef.current?.value;
        const enteredAddress = addressInputRef.current?.value;
        const enteredDescription = descriptionInputRef.current?.value;

        const newMeetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        } as Meetup;

        props.onSubmit(newMeetup);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                {/* TITLE */}
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input
                        type="text"
                        required
                        id="title"
                        name="title"
                        ref={titleInputRef}
                    />
                </div>

                {/* IMAGE */}
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input
                        type="url"
                        required
                        id="image"
                        name="image"
                        ref={imageInputRef}
                    />
                </div>

                {/* ADDRESS */}
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input
                        type="text"
                        required
                        id="address"
                        name="address"
                        ref={addressInputRef}
                    />
                </div>

                {/* DESCRIPTION */}
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea
                        required
                        id="description"
                        name="description"
                        rows={5}
                        ref={descriptionInputRef}
                    ></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
