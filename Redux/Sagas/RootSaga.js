import { all } from 'redux-saga/effects';
import numberSagas from './NumberSaga';
import nameSagas from './NameSaga';
import userSagas from './UserSaga';

export default function* root() {
    yield all([
        // Oluşturduğumuz yeni saga dosyalarını (numberSagas gibi) buraya ekliyoruz
        ...numberSagas,
        ...nameSagas,
        ...userSagas,
    ])
};
