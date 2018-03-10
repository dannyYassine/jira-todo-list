
import EventEmitter from 'wolfy87-eventemitter';

import { initialState } from './state';

export default function DataHub(newState = initialState) {
    const emitter = new EventEmitter();

    let state = newState;
    
    this.getState = getState;
    this.suscribe = suscribe;
    this.unsuscribe = unsuscribe;

    this.setTodos = setTodos;
    this.getTodos = getTodos;

    this.setUser = setUser;
    this.getUser = getUser;

    function suscribe(options) {
        options.state = options.state || 'state';
        if (!options.cb) {
            throw new Exception('need callback');
        }
        emitter.on(options.state, options.cb);
    }

    function unsuscribe(options) {
        options.eventName = options.eventName || 'state';
        if (!options.cb) {
            throw new Exception('need callback');
        }
        emitter.off(options.eventName, options.cb);
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
    function setUser(val) {
        state.user = val;
        _emit('user');
    }
    function getUser() {
        return state.user;
    }

    function _emit(eventName = 'state') {
        emitter.emitEvent(eventName, [eventName === 'state' ? state : state[eventName]]);
    }
}