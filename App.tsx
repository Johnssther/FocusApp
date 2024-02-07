import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Importa PersistGate
import {store, persistor} from './src/redux/store';

import Rutas from './src/Router/Rutas';


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
        
                    <Rutas />
        
            </PersistGate>
        </Provider>
    );
}

export default App;
