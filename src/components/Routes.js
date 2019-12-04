import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Utama from './utama/IndexUtama';
import Pengenalan from './pengenalan/IndexPengenalan';
import Galeri from './galeri/IndexGaleri';
import PageNotFound from './shared/PageNotFound';
import Pertanyaan from './pertanyaan/IndexPertanyaan';
import Test from './test/Test';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Utama} />
        <Route exact path={'/utama'} component={Utama} />
        <Route exact path={'/galeri'} component={Galeri} />
        <Route exact path={'/pengenalan'} component={Pengenalan} />
        <Route exact path={'/pertanyaan'} component={Pertanyaan} />
        <Route exact path={'/test'} component={Test} />
        <Route render={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;