var client_id='fd55fa1376d34e4bb68ecb6d2c7154d8'
var client_SECRET='ebter here'   
var redirect_uri = 'http://localhost:7777/callback'

function getToken(){
    var app = express();
    var token = ''

    app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
            }));
        });

        return token
}   