import { Meetup } from "../models/Meetup.model";

export function constructMeetupsList(response: any) {
    const meetups = [] as Meetup[];
    for (const [key, value] of Object.entries(response.data)) {
        meetups.push(
            {
                id: key,
                image: (value as any).image,
                title: (value as any).title,
                description: (value as any).description,
                address: (value as any).address
            } as Meetup);
    }
    return meetups;
}