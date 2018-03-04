
import EventEmitter from 'wolfy87-eventemitter';

const initialState = {
    app: {
        name: 'Jira'
    },
    todos: [
        {
            id: '1',
            title: 'Clean stairs',
            priority: 'high',
            status: 'todo',
            description: 'Don\'t forget to vaccum'
        }
    ],
    currentUser: {
        name: 'Danny',
        image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
    },
    ui: {
    }
};

export default function DataHub(newState = initialState) {
    const emitter = new EventEmitter();

    let state = newState;
    
    this.getState = getState;
    this.suscribe = suscribe;
    this.unsuscribe = unsuscribe;
    this.addTodo = addTodo;

    function suscribe(cb) {
        emitter.on('state', cb)
    }

    function unsuscribe(cb) {
        emitter.off('state', cb)
    }
    
    function getState() {
        return state;
    }

    function addTodo(todo) {
        let newState = Object.assign({}, state);
        newState.todos.push(todo);
        state = Object.assign(state, newState);
        _emit();
    }

    function _emit() {
        emitter.emitEvent('state', [state]);
    }
}