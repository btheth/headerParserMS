# headerParserMS
Request header parser microservice for freeecodecamp

As long as request is a GET, returns json object with status 200 like:

{ ipaddress: <ip>, language: <language>, software: <operating_system> }
  
If request is not a GET, returns empty json object with status 405.
