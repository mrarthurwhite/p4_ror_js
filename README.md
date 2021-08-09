
# README

* What this application does

        1. this application lists the vocabulary words in the SAT/ GRE standardized tests
        2. the words are listed with the category they are under along with the definition & sentence.
        3. you may add more words to the word list by clicking on the add a word button
        4. more functionality to come...

* Ruby version

        ruby 2.6.3p62 (2019-04-16 revision 67580) [x86_64-linux]
* System dependencies

            Windows 10 running WSL
            
* Configuration

        CONFIGURATION INFORMAION

* Database creation

        native PostgresSql DB.

* Database initialization

        inside of the rails /server component (in the folder api-wordlist)
        run db:migrate
        run db:seed

* How to run the test suite

        there are no tests accompanying this application

* Services (job queues, cache servers, search engines, etc.)

        there are no specific services (background or otherwise) to run

* How to download

    1. go to https://github.com/mrarthurwhite/proj4-arthur-rorjs-120919FT
    
* Deployment instructions
    
        1. clone the repository down to your machine using 'git clone'
        2. go inside the folder titled api-wordlist
        3. once inside the rails / server side start the rails server by typing "rails s"
        4. after the server starts in step 3 open the html file called index.html
        5. you should be able to run the application now
            5.1 you should be able to see the json from the server by going to the url http://localhost:3000/words