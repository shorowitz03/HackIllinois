import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import cred

auth_manager = SpotifyClientCredentials(client_id=cred.client_ID, client_secret=cred.client_SECRET)
sp = spotipy.Spotify(auth_manager=auth_manager)

playlists = sp.user_playlists('spotify')
while playlists:
    for i, playlist in enumerate(playlists['items']):
        print("%4d %s %s" % (i + 1 + playlists['offset'], playlist['uri'],  playlist['name']))
    if playlists['next']:
        playlists = sp.next(playlists)
    else:
        playlists = None