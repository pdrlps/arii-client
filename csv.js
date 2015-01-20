{
	"server": {
		"name": "ariip",
		"host": "http://ariip.com/",
		"api_key": "7714864c29f8b9749b64eefea94def8a"
	},
	"agents": [{
		"identifier": "csv",
		"publisher": "csv",
		"payload": {
			"uri": "http://ariip.com/hgnc.csv",
			"headers": false,
			"delimiter": ",",
			"cache": "0",
			"selectors": [{
				"id": 0
			}, {
				"gene": 1
			}, {
				"name": 2
			}]
		}
	}]
}