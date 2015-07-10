var rc = require('rc');

var config = {
    host: '127.0.0.1',
    port: 3000,
    ga_id: '',
    user_agent: function() {
        return 'Gistfy-App ' + require('../package.json').version;
    }()
};

config.base_url = (function() {
    return '//' + this.host + ':' + this.port;
}).call(config);

module.exports = rc('gistfy', config);
