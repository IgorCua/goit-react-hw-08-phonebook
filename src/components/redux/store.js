import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactsReducer } from "./phonebookForm/phonebookSlice"; 
import { filterReducer } from "./contactsList/contactsListSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
      filter: filterReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  });
  
  export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer
//     },
// })