import ReactDOM from 'react-dom';
import routes from './routes';
import {createHistory} from 'history';

const history = createHistory();

ReactDOM.render(routes(history), document.getElementById('react-root'));