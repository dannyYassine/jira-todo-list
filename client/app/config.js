
let config = {};
if (process.env.NODE_ENV === 'production') {
    config.API_HOST = 'http://dannyyassine-jira-todo.herokuapp.com/api';
} else {
    config.API_HOST = 'http://localhost:3000/api';
}
export default config;