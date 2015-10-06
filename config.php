; <?php die(); __halt_compiler();
;
; Cliqr configuration file
; (note the first line. php opener/die included to prevent dumping settings to browser)
;

[shortener]
; COMMENT these and UNCOMMENT the second set to use Google's urlshortener
file = lib/BasicShortener.php
class = \Cliqr\BasicShortener

;file = lib/MockShortener.php
;class = \Cliqr\MockShortener

;file = lib/GoogleShortener.php
;class = \Cliqr\GoogleShortener

[basicshortener]
url = http://vt.uos.de/shorten.php?longurl=%s

[google]
;api_url = https://www.googleapis.com/urlshortener/v1/url
; INSERT your google api key here, see:
;   https://developers.google.com/url-shortener/v1/getting_started#APIKey
;api_key = <MY-GOOGLE-KEY>

[pusher]
;key = <MY-PUSHER-KEY>
;secret = <MY-PUSHER-SECRET>
;app_id = <MY-PUSHER-APP-ID>
;host = http://localhost
;api_port = 4567
;ws_port = 8080
