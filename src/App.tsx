import { AllMeetupsPage } from './pages/all-meetups-page/all-meetups-page';
import './App.css';
import Layout from './layout/layout/layout';
import { Switch, Route } from "react-router-dom";
import { CreateMeetupPage } from './pages/create-meetup-page/create-meetup-page';
import FavoriteMeetupsPage from './pages/favorite-meetups-page/favorite-meetups-page';
import { useAppSelector } from './redux/hooks';
import { selectFavoriteMeetupsCount } from './redux/meetupsSlice';
function App() {

  const favoriteMeetupsCount = useAppSelector(selectFavoriteMeetupsCount);

  return (
    <Layout favoriteMeetupsCount={favoriteMeetupsCount}>
      <Switch>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/new-meetup" exact component={CreateMeetupPage} />
        <Route path="/favorites" exact component={FavoriteMeetupsPage} />
      </Switch>
    </Layout>

  );
}

export default App;
