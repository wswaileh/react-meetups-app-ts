import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchMeetupsIfNeeded, selectIsLoading, selectMeetups, toggleIsFavAction } from '../../redux/meetupsSlice';
import MeetupsList from '../../components/meetups-list/meetups-list';
import { useEffect } from 'react';

export function AllMeetupsPage() {
  const meetups = useAppSelector(selectMeetups);
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
    <div>
      <h1>All Meetups</h1>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && <MeetupsList meetups={meetups} noRecordsMsg={'No Meetups Found'} toggleIsFav={toggleIsFav} />}
    </div>
  );
}

