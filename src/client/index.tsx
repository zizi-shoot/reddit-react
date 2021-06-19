import ReactDOM from 'react-dom';
import { Header } from '../shared/Header';
import './styles.css';

ReactDOM.hydrate(<Header />, document.getElementById('app'));
