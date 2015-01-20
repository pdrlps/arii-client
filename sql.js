{
    "server": {
        "name": "ariip",
        "host": "http://ariip.com/",
        "api_key": "7714864c29f8b9749b64eefea94def8a"
    },
    "agents": [{
        "identifier": "sql",
        "publisher": "sql",
        "schedule": "2d",
        "seed": {
            "publisher": "csv",
            "uri": "http://ariip.com/log.csv",
            "headers": true,
            "delimiter": ",",
            "selectors": [{
                "gene": "1"
            }]
        },
        "payload": {
            "server": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "telematica",
            "database": "i2x",
            "query": "SELECT * FROM content WHERE content LIKE '%{content}';",
            "cache": "id",
            "selectors": [{
                "refseq": "title"
            }, {
                "variant": "content"
            }, {
                "locus": "url"
            }]
        }
    }]
}