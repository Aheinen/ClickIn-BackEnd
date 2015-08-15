# ClickIn-Client

## MONGODB SETUP

1. brew install mongodb
2. navigate to {root directory of Node app}
3. npm install mongodb --save
4. mkdir data
5. navigate to /usr/local/Cellar/mongodb/3.0.5/bin
6. mongod --dbpath {root directory of Node app}/data
e.g. mongod --dbpath /Users/sebsonic2o/Desktop/Projects/ClickIn/ClickIn-BackEnd/data
7. Launch new terminal window
8. navigate to /usr/local/Cellar/mongodb/3.0.5/bin
9. mongo
10. mongo > use {database}
e.g. use ClickIn-BackEnd
11. mongo > db.createCollection("name")
e.g. db.createCollection("sessions")
12. mongo > db.namecollection.insert({json})
e.g. db.sessionscollection.insert({code: "HI"})
13. mongo > db.namecollection.find()
e.g. db.sessionscollection.find()
14. mongo > show dbs
