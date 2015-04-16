{
    "server": {
        "name": "ariip",
        "host": "https://ariip.com/",
        "api_key": "7714864c29f8b9749b64eefea94def8a"
    },
    "agents": [{
        "identifier": "sql",
        "publisher": "sql",
        "payload": {
            "server": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "hcmt45",
            "database": "ariip",
            "query": "SELECT * FROM users;",
            "cache": "id",
            "selectors": [{
                "url": "last_sign_in_ip"
            }, {
                "content": "email"
            }, {
                "title": "username"
            }, {
                "author": "name"
            }]
        }
    }]
}