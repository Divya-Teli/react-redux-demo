import { combineReducers } from 'redux';
import user from './user';
import item from './item'
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
	key: 'root',
	storage
  }
  export default combineReducers({
	user,
	item
});


// const rootReducer= combineReducers({
// 	user,
// 	item
// });
// export default persistReducer(persistConfig, rootReducer)
