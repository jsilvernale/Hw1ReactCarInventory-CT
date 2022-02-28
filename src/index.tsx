import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, SignIn, Inventory } from './components';
// import 'styles.css';
import reportWebVitals from './reportWebVitals';
// import { firebaseConfig } from './firebaseConfig';
// import 'firebase/auth';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

let title = "My Car Collection"

ReactDOM.render(
    <React.StrictMode>
        {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <Provider store={store}> */}
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home title={title} />
                    </Route>
                    <Route exact path='/inventory'>
                        <Inventory></Inventory>
                    </Route>
                    <Route exact path='/contact'>
                        <Contact></Contact>
                    </Route>
                    <Route exact path='/about'>
                        <About></About>
                    </Route>
                    <Route exact path='/signin'>
                        <SignIn></SignIn>
                    </Route>
                </Switch>
            </Router>
        {/* </Provider>
        </FirebaseAppProvider>         */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
