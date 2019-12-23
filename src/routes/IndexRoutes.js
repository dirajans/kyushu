import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import * as ROUTES from './Pages';

import Utama from './../components/pages/utama/IndexUtama';
import Pengenalan from './../components/pages/pengenalan/IndexPengenalan';
import Galeri from './../components/pages/galeri/IndexGaleri';
import Pertanyaan from './../components/pages/pertanyaan/IndexPertanyaan';
import Pentadbiran from './../components/pages/pentadbiran/IndexPentadbiran';
import Terkini from './../components/pages/terkini/IndexTerkini';

import PageNotFound from './../components/shared/PageNotFound';

export default function IndexRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.UTAMA} component={Utama} />
        <Route path={ROUTES.PENGENALAN} component={Pengenalan} />
        <Route path={ROUTES.PENTADBIRAN} component={Pentadbiran} />
        <Route path={ROUTES.TERKINI} component={Terkini} />
        <Route path={ROUTES.GALERI} component={Galeri} />
        <Route path={ROUTES.PERTANYAAN} component={Pertanyaan} />

        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
