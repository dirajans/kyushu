import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as ROUTES from './Pages';
import { firebase } from './../firebaseConfig';

// utama import
import Utama from './../components/pages/utama/IndexUtama';

// pengenalan import
// sejarah
import Sejarah from './../components/pages/pengenalan/sejarah/Sejarah';
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
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }

  const PublicRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/' />}
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
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.UTAMA} component={Utama} />
  
          {/* Admin routes */}
          <PublicRoute authed={authed} exact path={ROUTES.SIGNIN} component={SignIn} />
          <PublicRoute authed={authed} exact path={ROUTES.FORGOTPASSWORD} component={ForgotPassword} />
          <PrivateRoute authed={authed} exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <PrivateRoute authed={authed} exact path={ROUTES.POST} component={Post} />
  
          <Route path={ROUTES.SEJARAH} component={Sejarah} />
          <Route path={ROUTES.PENUBUHAN} component={Penubuhan} />
          <Route path={ROUTES.PERISTIWA} component={Peristiwa} />
  
          <Route path={ROUTES.UNDANGTUBUH} component={UndangTubuh} />
  
          <Route path={ROUTES.INSTITUSI} component={Institusi} />
          <Route path={ROUTES.DIRAJA} component={Diraja} />
          <Route path={ROUTES.ADAT} component={Adat} />
          <Route path={ROUTES.UNDANGLEMBAGA} component={UndangLembaga} />
          <Route path={ROUTES.ISTANA} component={Istana} />
          <Route path={ROUTES.ALATKEBESARAN} component={AlatKebesaran} />
  
          <Route path={ROUTES.NEGERI} component={Negeri} />
          <Route path={ROUTES.LOKASI} component={Lokasi} />
          <Route path={ROUTES.BENDERA} component={Bendera} />
          <Route path={ROUTES.LAGU} component={Lagu} />
  
          <Route path={ROUTES.YAMTUAN} component={Yamtuan} />
          <Route path={ROUTES.ABDULRAHMAN} component={AbdulRahman} />
          <Route path={ROUTES.ANTAH} component={Antah} />
          <Route path={ROUTES.IMAM} component={Imam} />
          <Route path={ROUTES.JAAFAR} component={Jaafar} />
          <Route path={ROUTES.MUHAMMAD} component={Muhammad} />
          <Route path={ROUTES.MUHRIZ} component={Muhriz} />
          <Route path={ROUTES.MUNAWIR} component={Munawir} />
          <Route path={ROUTES.RADIN} component={Radin} />
          <Route path={ROUTES.RAJAHITAM} component={RajaHitam} />
          <Route path={ROUTES.RAJALENGGANG} component={RajaLenggang} />
          <Route path={ROUTES.RAJAMELEWAR} component={RajaMelewar} />
  
          <Route path={ROUTES.PENTADBIRAN} component={Pentadbiran} />
  
          <Route path={ROUTES.TERKINI} component={Terkini} />
  
          <Route path={ROUTES.GALERI} component={Galeri} />
  
          <Route path={ROUTES.PERTANYAAN} component={Pertanyaan} />
  
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
