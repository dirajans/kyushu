import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Utama from './utama/IndexUtama';
import Pengenalan from './pengenalan/IndexPengenalan';
import Galeri from './galeri/IndexGaleri';
import Pertanyaan from './pertanyaan/IndexPertanyaan';
import Pentadbiran from './pentadbiran/IndexPentadbiran';

import PageNotFound from './shared/PageNotFound';
import Test from './test/Test';

import pages from './Pages';

const imports = {
  Utama,
  Pengenalan,
  Pentadbiran,
  Galeri,
  Pertanyaan,
}

const getImports = (name) => {
  return imports[name]
}

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Utama} />

        {pages.map( (page) => {
          return (
            <Route exact path={`/${page.name}`} component={getImports(page.name)} />
          )
        })}

        <Route render={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
