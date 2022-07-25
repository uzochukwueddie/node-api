The Node API interacts with the fixer.io API (http://api.fixer.io). The API requires a query string to be added.
In this case, a base currency e.g EUR, USD, GBP etc (fixer.io fetches data from the European Central Bank) and date. The heroku
link is found https://fixerio-node-api.herokuapp.com. To get the latest currency rates, add /latest to the url

E.g. https://fixerio-node-api.herokuapp.com/latest

Similarly, to get the latest rates with a base currency, add ?base=... (EUR, USD, GBP etc)
E.g. https://fixerio-node-api.herokuapp.com/latest?base=EUR

Also, to get a previous currency rate, add date (YYYY-MM-DD)
E.g. https://fixerio-node-api.herokuapp.com/2016-03-16

### This was done a long time ago
