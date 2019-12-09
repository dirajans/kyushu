import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Utama from './utama/IndexUtama';
import Pengenalan from './pengenalan/IndexPengenalan';
import Galeri from './galeri/IndexGaleri';
import Pertanyaan from './pertanyaan/IndexPertanyaan';
import Pentadbiran from './pentadbiran/IndexPentadbiran';
import Terkini from './terkini/IndexTerkini';

import PageNotFound from './shared/PageNotFound';
// import Test from './test/Test';

import pages from './Pages';
import capitalize from './Helpers';

const imports = {
  Utama,
  Pengenalan,
  Pentadbiran,
  Galeri,
  Pertanyaan,
  Terkini,
  // Test
}

const getImports = (name) => {
  return imports[name]
}

export default function Routes(){
  return (
    <HashRouter basename={'/'}>
      <Switch>
        <Route exact path={'/'} component={Utama} />

        {pages.map( (page) => {
          return (
            <Route
              key={page.name}
              path={`/${page.href}`}
              component={getImports(capitalize(page.href))}
            />
          )
        })}

        <Route render={PageNotFound} />
      </Switch>
    </HashRouter>
  )
}
