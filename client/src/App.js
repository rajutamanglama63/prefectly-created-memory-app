import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Posts from './pages/Posts';
import Navbar from './components/Navbar';
import FormPage from './pages/FormPage';
import {getPostData} from './redux/actions/memoriesActions';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostData());
  }, [currentId, dispatch])

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' render={(props) => <Posts {...props} setCurrentId={setCurrentId} />} />
        <Route exact path='/form' render={(props) => <FormPage {...props} currentId={currentId} setCurrentId={setCurrentId} />} />
      </Switch>
    </>
  );
}

export default App;
