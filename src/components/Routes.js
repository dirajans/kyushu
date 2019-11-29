import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Utama from './Utama';
import Pengenalan from './Pengenalan';
import Galeri from './Galeri';
import PageNotFound from './PageNotFound';
import Loading from './Loading';

// function PrivateRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/auth/signin', state: {from: props.location}}} />}
//     />
//   )
// }

// function PublicRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === false
//         ? <Component {...props} />
//         : <Redirect to='/' />}
//     />
//   )
// }

function Routes(){
  const [ isAuthed, setIsAuthed ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(false);

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Utama} />
          <Route exact path={'/utama'} component={Utama} />
          <Route exact path={'/galeri'} component={Galeri} />
          <Route exact path={'/pengenalan'} component={Pengenalan} />
          <Route render={PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;