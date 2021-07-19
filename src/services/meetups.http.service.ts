import { Meetup } from "../models/Meetup.model";

const url =
  "https://react--meetups-672fc-default-rtdb.europe-west1.firebasedatabase.app";
const endPoint = "/meetups.json";

const axios = require('axios').default;

export function getMeetups() {
  return axios.get(`${url + endPoint}`)
}

export function postMeetup(newMeetup: Meetup) {
  return axios.post(`${url + endPoint}`, newMeetup);
}