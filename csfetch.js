var request = require('request');

const api_key = "blt4f22b7b7b5c131b0";
const access_token = "blt83dc39df2c313598";
const content_type_uid = "fun";
const environment = "production";

var global={};

global.a="a";

let page = 0;
var count = 3;
let i = 0;



while (page<count) {
    console.log("OBJ-TEST:" + global.a);
    i++;
    var options = {
        'method': 'GET',
        'url': 'https://cdn.contentstack.io/v3/content_types/' + content_type_uid + '/entries?&environment='+environment+'&include_count=true&skip='+page+'&limit=1&only[BASE][]=title',
        'headers': {
            'api_key': api_key,
            'access_token': access_token
        }
    };

    request(options, function (error, response) { 
    if (error) throw new Error(error);
    var body = response.body;
    var obj = JSON.parse(body);
    global.a='b';
    

    console.log("count:" + count);
    console.log('*'+i+'*' + page + ' | ' + obj.entries[0].title);
    });
    page++;

}
