import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import * as ROUTES from './Pages';

// utama import
import Utama from './../components/pages/utama/IndexUtama';

// pengenalan import
import Penubuhan from './../components/pages/pengenalan/sejarah/Penubuhan';
import Peristiwa from './../components/pages/pengenalan/sejarah/PeristiwaPenting';
import UndangTubuh from './../components/pages/pengenalan/sejarah/UndangTubuh';

import Adat from './../components/pages/pengenalan/adat/IndexAdat';
import UndangLembaga from './../components/pages/pengenalan/undang/UndangLembaga';
import AlatKebesaran from './../components/pages/pengenalan/alat/AlatKebesaran';
import Institusi from './../components/pages/pengenalan/institusi/IndexInstitusi';
import Istana from './../components/pages/pengenalan/istana/IndexIstana';

import Lokasi from './../components/pages/pengenalan/lokasi/IndexLokasi';
import Bendera from './../components/pages/pengenalan/bendera/IndexBendera';
import Lagu from './../components/pages/pengenalan/lagu/IndexLagu';

import Yam from './../components/pages/pengenalan/yam/IndexYam';
import AbdulRahman from './../components/pages/pengenalan/yam/AbdulRahman';
import Antah from './../components/pages/pengenalan/yam/Antah';
import Imam from './../components/pages/pengenalan/yam/Imam';
import Jaafar from './../components/pages/pengenalan/yam/Jaafar';
import Muhammad from './../components/pages/pengenalan/yam/Muhammad';
import Muhriz from './../components/pages/pengenalan/yam/Muhriz';
import Munawir from './../components/pages/pengenalan/yam/Munawir';
import Radin from './../components/pages/pengenalan/yam/Radin';
import RajaHitam from './../components/pages/pengenalan/yam/RajaHitam';
import RajaLenggang from './../components/pages/pengenalan/yam/RajaLenggang';
import RajaMelewar from './../components/pages/pengenalan/yam/RajaMelewar';

// galeri import
import Galeri from './../components/pages/galeri/IndexGaleri';

// pertanyaan import
import Pertanyaan from './../components/pages/pertanyaan/IndexPertanyaan';

// pentadbiran import
import Pentadbiran from './../components/pages/pentadbiran/IndexPentadbiran';

// terkini import
import Terkini from './../components/pages/terkini/IndexTerkini';

import PageNotFound from './../components/pages/404/PageNotFound';

export default function IndexRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.UTAMA} component={Utama} />

        <Route path={ROUTES.PENUBUHAN} component={Penubuhan} />
        <Route path={ROUTES.PERISTIWA} component={Peristiwa} />
        <Route path={ROUTES.UNDANGTUBUH} component={UndangTubuh} />

        <Route path={ROUTES.INSTITUSI} component={Institusi} />
        <Route path={ROUTES.ADAT} component={Adat} />
        <Route path={ROUTES.UNDANGLEMBAGA} component={UndangLembaga} />
        <Route path={ROUTES.ISTANA} component={Istana} />
        <Route path={ROUTES.ALATKEBESARAN} component={AlatKebesaran} />

        <Route path={ROUTES.LOKASI} component={Lokasi} />
        <Route path={ROUTES.BENDERA} component={Bendera} />
        <Route path={ROUTES.LAGU} component={Lagu} />

        <Route path={ROUTES.YAM} component={Yam} />
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
