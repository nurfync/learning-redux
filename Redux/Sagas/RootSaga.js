import { all } from 'redux-saga/effects';
import numberSagas from '../Sagas/NumberSaga';

export default function* root() {
    yield all([
        // Oluşturduğumuz yeni saga dosyalarını (numberSagas gibi) buraya ekliyoruz
        ...numberSagas,
    ])
};
