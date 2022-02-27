import spotipy
import spotipy.util as util
import cred

scope = 'user-read-recently-played'

token = util.prompt_for_user_token(username=cred.username, 
                                   scope=scope, 
                                   client_id=cred.client_ID,   
                                   client_secret=cred.client_SECRET,     
                                   redirect_uri=cred.redirect_uri)
# current_user_top_tracks
sp = spotipy.client.Spotify(auth=token)
results = sp.current_user_recently_played(limit=1)['items'][0]['track']
print(results['name'], results['artists'][0]['name'])