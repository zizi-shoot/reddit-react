import ReactDOM from 'react-dom';
import { Header } from '../shared/Header';
import './main.scss';

ReactDOM.hydrate(<Header />, document.getElementById('app'));
