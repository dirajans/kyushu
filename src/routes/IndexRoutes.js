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
import Sejarah from './../components/pages/pengenalan/sejarah/IndexSejarah';
import Adat from './../components/pages/pengenalan/adat/IndexAdat';
import Bendera from './../components/pages/pengenalan/bendera/IndexBendera';
import Institusi from './../components/pages/pengenalan/institusi/IndexInstitusi';
import Lagu from './../components/pages/pengenalan/lagu/IndexLagu';
import Yam from './../components/pages/pengenalan/yam/IndexYam';

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

        <Route path={ROUTES.SEJARAH} component={Sejarah} />
        <Route path={ROUTES.INSTITUSI} component={Institusi} />
        <Route path={ROUTES.ADAT} component={Adat} />
        <Route path={ROUTES.BENDERA} component={Bendera} />
        <Route path={ROUTES.LAGU} component={Lagu} />
        <Route path={ROUTES.YAM} component={Yam} />

        <Route path={ROUTES.PENTADBIRAN} component={Pentadbiran} />

        <Route path={ROUTES.TERKINI} component={Terkini} />

        <Route path={ROUTES.GALERI} component={Galeri} />

        <Route path={ROUTES.PERTANYAAN} component={Pertanyaan} />

        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
