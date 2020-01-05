import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Router } from '@reach/router';

import Header from './components/Header';
import Overview from './components/pages/Overview';
import Details from './components/pages/Details';
import Recipe from './components/pages/Recipe';
// import SearchParams from './components/SearchParams';

import './assets/CSS/App.css';
import './assets/CSS/styles2.css';

const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <Header/>

      <main id={'main'}>
        <Router>
          {/*<SearchParams path={'/'}/>*/}
          <Overview path={'/'}/>
          <Details path={'/details/:id'}/>
          <Recipe path={'recipe/:id'} />
        </Router>
        {/*<FormikLogin />*/}
        {/*<FormikLogin email={'andrew@test.de'}/>*/}
        {/*<RecipeForm />*/}
      </main>
    </React.StrictMode>
  );
};

export default App;
