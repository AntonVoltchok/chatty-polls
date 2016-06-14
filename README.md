# chatty-polls
Prototyping with React , Webpack , RethinkDB / Horizon.io

###Notes: horizon / rethinkdb basics**

starting horizon server: hz serve --dev

dropping old collection (horizon doesn't have this directly yet): 
  
 1. install recli -> sudo npm install -g recli 
 2. start rethink server -> rethinkdb 
 3. run -> r.dbDrop('nameOfYourCollection')  
 4. run -> r.dbDrop('nameOfYourCollection_internal')  


