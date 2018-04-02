
let config = {};
if (process.env.NODE_ENV === 'production') {
    config.API_HOST = 'http://dannyyassine-jira-todo.herokuapp.com';
} else {
    config.API_HOST = 'http://localhost:3000';
}
export default config;