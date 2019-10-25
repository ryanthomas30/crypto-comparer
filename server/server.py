from flask import Flask
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def get_data():
	response = requests.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD')
	clean_response = {}
	currencies = ['BTC', 'ETH']
	fields = ['PRICE', 'TOTALVOLUME24HTO']
	for c in currencies:
		clean_response[c] = {}
		for f in fields:
			clean_response[c][f.lower()] = response.json()['RAW'][c]['USD'][f]
	return json.dumps(clean_response)

if __name__ == "__main__":
	app.run()