import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Loader from './components/Loader';

const Home = React.lazy(()=> import('./pages/Home'));
const PageResult = React.lazy(()=> import('./pages/SearchResult'));
const Details = React.lazy(()=> import('./pages/Details'));
const Page404 = React.lazy(()=> import('./pages/Page404'));

export default function App () {

  return ( 
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/movie/:id' component={Details}  />
          <Route path='/search/:movie' component={PageResult} />
          <Route path='/*' component={Page404}  />
        </Switch>
      </Suspense>
    </Router>
  )
}