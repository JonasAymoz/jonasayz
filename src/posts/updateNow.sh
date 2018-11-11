#!/bin/bash
echo '      ___           ___           ___     
     /__/\         /  /\         /__/\    
     \  \:\       /  /::\       _\_ \:\   
      \  \:\     /  /:/\:\     /__/\ \:\  
  _____\__\:\   /  /:/  \:\   _\_ \:\ \:\ 
 /__/::::::::\ /__/:/ \__\:\ /__/\ \:\ \:\
 \  \:\~~\~~\/ \  \:\ /  /:/ \  \:\ \:\/:/
  \  \:\  ~~~   \  \:\  /:/   \  \:\ \::/ 
   \  \:\        \  \:\/:/     \  \:\/:/  
    \  \:\        \  \::/       \  \::/   
     \__\/         \__\/         \__\/    '
echo ---------------------------------------------------
echo Vous allez créer le NOW du `date +%d/%m/%y` !
echo ---------------------------------------------------

#Desactiver l'ancien now 
sed -i '' "s/\'active\': 1/\'active\': 0/" nows.js

echo Un livre :npm up
read userInput
book=$userInput

echo Une techno :
read userInput
techno=$userInput

echo Une couleur
read userInput
color=$userInput

echo Une musique ! :
read userInput
music=$userInput

test="{'active': 1, 'book': '$book', 'date': '`date +%d/%m/%y`', 'techno': '$techno', 'color': '$color', 'music': '$music'},
"

echo Merci c\'est all good \;\°

#Add le dernier now en actif
sed -i'' -e  "/\]/i\\
$test" nows.js