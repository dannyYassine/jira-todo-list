
import EventEmitter from 'wolfy87-eventemitter';

const initialState = {
    app: {
        name: 'Jira'
    },
    todos: [
        {
            id: '1',
            title: 'On Monday, clean stairs with vaccuum and detergent',
            priority: 'high',
            status: 'todo',
            description: 'Don\'t forget to vaccum',
            sorted_date: '1520686000246',
            user: {
                name: 'Danny',
                image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
            }
        },
        {
            id: '2',
            title: 'Clean the appartment',
            priority: 'high',
            status: 'todo',
            description: 'Don\'t forget to vaccum',
            sorted_date: '1520686000246',
            user: {
                name: 'Danny',
                image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
            }
        },
        {
            id: '3',
            title: 'Buy toilet paper for the appartment',
            priority: 'high',
            status: 'todo',
            description: 'Don\'t forget to vaccum',
            sorted_date: '1520686000246',
            user: {
                name: 'Danny',
                image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
            }
        }
    ],
    user: {
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

    function suscribe(subState, cb) {
        emitter.on(subState, cb)
    }

    function unsuscribe(subState, cb) {
        emitter.off(subState, cb);
    }
    
    function getState() {
        return state;
    }

    function setTodos(val) {
        state.todos = val;
        _emit('todos');
    }
    function getTodos() {
        return state.todos;
    }
    function setCurrentUser(val) {
        state.currentUser = val;
        _emit('user');
    }
    function getUser() {
        return state.user;
    }

    function addTodo(todo) {
        todo.user = {
            name: 'Danny',
                image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
        };
        let newState = Object.assign({}, state);
        newState.todos.push(todo);
        state = Object.assign(state, newState);
        _emit();
    }

    function _emit(eventName = 'state') {
        emitter.emitEvent(eventName, [eventName === 'state' ? state : state[eventName]]);
    }
}