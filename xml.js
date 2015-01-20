{
	"server": {
		"name": "arii",
		"host": "http://ariip.com/",
		"api_key": "7714864c29f8b9749b64eefea94def8a"
	},
	"agents": [{
		"identifier": "agents_xml",
		"publisher": "xml",
		"schedule": "2h",
		"payload": {
			"uri": "https://eds.gene.le.ac.uk/api/rest.php/variants/COL3A1",
			"cache": "//title"
		}
	}]
}