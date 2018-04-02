
import HttpService from './httpService';

export default function HttpServiceProvider() {
    const provider = this;
    let options = {};

    this.$get = $get;

    function setHost(host) {
        options.host = host;
    }

    function $get() {
        return new HttpService(options);
    }

}