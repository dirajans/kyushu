import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import * as ROUTES from './Pages';
import { firebase } from './../firebaseConfig';

// utama import
import Utama from './../components/pages/utama/IndexUtama';

// pengenalan import
// sejarah
import Penubuhan from './../components/pages/pengenalan/sejarah/penubuhan/Penubuhan';
import Peristiwa from './../components/pages/pengenalan/sejarah/peristiwa/PeristiwaPenting';
import UndangTubuh from './../components/pages/pengenalan/sejarah/undangtubuh/UndangTubuh';

// institusi
import Institusi from './../components/pages/pengenalan/institusi/Institusi';
import Diraja from './../components/pages/pengenalan/institusi/diraja/Diraja';
import Adat from './../components/pages/pengenalan/institusi/adat/IndexAdat';
import UndangLembaga from './../components/pages/pengenalan/institusi/undang/UndangLembaga';
import AlatKebesaran from './../components/pages/pengenalan/institusi/alat/AlatKebesaran';
import Istana from './../components/pages/pengenalan/institusi/istana/IndexIstana';
import Pembesar from './../components/pages/pengenalan/institusi/pembesar/Pembesar';

// negeri
import Negeri from './../components/pages/pengenalan/negeri/Negeri';
import Lokasi from './../components/pages/pengenalan/negeri/lokasi/IndexLokasi';
import Bendera from './../components/pages/pengenalan/negeri/bendera/IndexBendera';
import Lagu from './../components/pages/pengenalan/negeri/lagu/IndexLagu';

// yamtuan
import Yamtuan from './../components/pages/pengenalan/yamtuan/Yamtuan';
import AbdulRahman from './../components/pages/pengenalan/yamtuan/yam/AbdulRahman';
import Antah from './../components/pages/pengenalan/yamtuan/yam/Antah';
import Imam from './../components/pages/pengenalan/yamtuan/yam/Imam';
import Jaafar from './../components/pages/pengenalan/yamtuan/yam/Jaafar';
import Muhammad from './../components/pages/pengenalan/yamtuan/yam/Muhammad';
import Muhriz from './../components/pages/pengenalan/yamtuan/yam/Muhriz';
import Munawir from './../components/pages/pengenalan/yamtuan/yam/Munawir';
import Radin from './../components/pages/pengenalan/yamtuan/yam/Radin';
import RajaHitam from './../components/pages/pengenalan/yamtuan/yam/RajaHitam';
import RajaLenggang from './../components/pages/pengenalan/yamtuan/yam/RajaLenggang';
import RajaMelewar from './../components/pages/pengenalan/yamtuan/yam/RajaMelewar';

// galeri import
import Galeri from './../components/pages/galeri/IndexGaleri';

// pertanyaan import
import Pertanyaan from './../components/pages/pertanyaan/IndexPertanyaan';

// pentadbiran import
import Pentadbiran from './../components/pages/pentadbiran/IndexPentadbiran';

// terkini import
import Terkini from './../components/pages/terkini/IndexTerkini';

// admin import
import SignIn from './../components/admins/auth/SignIn';
import ForgotPassword from './../components/admins/auth/ForgotPassword';
import Dashboard from './../components/admins/dashboards/Dashboard';
import Post from './../components/admins/posts/Post';
import Settings from './../components/admins/settings/Settings';

// misc import
import PageNotFound from './../components/pages/404/PageNotFound';
import Loading from './../components/shared/Loading';

export default function IndexRoutes(){
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: ROUTES.SIGNIN, state: {from: props.location}}} />}
      />
    )
  }

  const PublicRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to={{ pathname: ROUTES.DASHBOARD, state: {from: props.location}}} />}
      />
    )
  }

  const checkLoggedIn = () => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
        setLoading(false);
      } else {
        setAuthed(false);
        setLoading(false);
      }
    })
  }

  useEffect( () => {
    checkLoggedIn();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
      <HashRouter>
        <Switch>
          <Route exact path={ROUTES.UTAMA} component={Utama} />
          
          {/* Admin routes */}
          <PublicRoute authed={authed} exact path={ROUTES.SIGNIN} component={SignIn} />
          <PublicRoute authed={authed} exact path={ROUTES.FORGOTPASSWORD} component={ForgotPassword} />
          <PrivateRoute authed={authed} exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <PrivateRoute authed={authed} exact path={ROUTES.POST} component={Post} />
          <PrivateRoute authed={authed} exact path={ROUTES.SETTINGS} component={Settings} />

          {/* Site routes */}
          <Route exact path={ROUTES.PENUBUHAN} component={Penubuhan} />
          <Route exact path={ROUTES.PERISTIWA} component={Peristiwa} />
          <Route exact path={ROUTES.UNDANGTUBUH} component={UndangTubuh} />
  
          <Route exact path={ROUTES.INSTITUSI} component={Institusi} />
          <Route exact path={ROUTES.DIRAJA} component={Diraja} />
          <Route exact path={ROUTES.ADAT} component={Adat} />
          <Route exact path={ROUTES.UNDANGLEMBAGA} component={UndangLembaga} />
          <Route exact path={ROUTES.ISTANA} component={Istana} />
          <Route exact path={ROUTES.ALATKEBESARAN} component={AlatKebesaran} />
          <Route exact path={ROUTES.PEMBESAR} component={Pembesar} />
  
          <Route exact path={ROUTES.NEGERI} component={Negeri} />
          <Route exact path={ROUTES.LOKASI} component={Lokasi} />
          <Route exact path={ROUTES.BENDERA} component={Bendera} />
          <Route exact path={ROUTES.LAGU} component={Lagu} />
  
          <Route exact path={ROUTES.YAMTUAN} component={Yamtuan} />
          <Route exact path={ROUTES.ABDULRAHMAN} component={AbdulRahman} />
          <Route exact path={ROUTES.ANTAH} component={Antah} />
          <Route exact path={ROUTES.IMAM} component={Imam} />
          <Route exact path={ROUTES.JAAFAR} component={Jaafar} />
          <Route exact path={ROUTES.MUHAMMAD} component={Muhammad} />
          <Route exact path={ROUTES.MUHRIZ} component={Muhriz} />
          <Route exact path={ROUTES.MUNAWIR} component={Munawir} />
          <Route exact path={ROUTES.RADIN} component={Radin} />
          <Route exact path={ROUTES.RAJAHITAM} component={RajaHitam} />
          <Route exact path={ROUTES.RAJALENGGANG} component={RajaLenggang} />
          <Route exact path={ROUTES.RAJAMELEWAR} component={RajaMelewar} />
  
          <Route exact path={ROUTES.PENTADBIRAN} component={Pentadbiran} />
  
          <Route exact path={ROUTES.TERKINI} component={Terkini} />
  
          <Route exact path={ROUTES.GALERI} component={Galeri} />
  
          <Route exact path={ROUTES.PERTANYAAN} component={Pertanyaan} />
  
          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
      </>
    )
  }
}
