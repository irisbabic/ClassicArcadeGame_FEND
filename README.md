# Arcade Game - FROGGER

This is an arcade game named Frogger.


* [Why this project](#why-this-project)
* [What I learned](#what-i-learned)
* [What did I do](#what-did-i-do)
* [How to run](#how-to-run)
* [How to play](#how-to-play)

## Why this Project?

This project was built as part of a FEND course and the goal was to use OOP practices to create an arcade game.

## What I learned?

I learned to use OOP to create a game.

## What did I do?

Most of the code was already provided by mentors. Most of the changes were made in app.js file and some minor changes
in index.html and engine.js file.

I created Character, Enemy and Player classes and wrote their functionalities.
Character class is a super class that provides x and y coordinates which both Player and Enemy objects must have as well 
as sprite property which is the picture that presents certain character in game.
Additionally, Enemy has a speed property for moving across the canvas. Player moves by pressing up, down, left or right keys on keyboard
and that input is handled accordingly. 

Main functionality of the game is detecting Player-Enemy collisions and detecting if Player has reached the water which
means he won the game.

Game is over when Player runs out of lives.

## How to run?
Download the zip folder of the game and find the <strong>index.html</strong> file.
Run the file in your browser.

## How to play?
Player moves by <strong>up, down, left</strong> or <strong>right</strong> keys on keyboard and the goal is to reach the water.
If Player reaches the water then you get an alert that you have won the game and you can start over. If by moving along canvas
you collide with any of the bugs you are moved back to starting position and you lose one life. When you reach 0 lives, you 
still get one bonus life. If you collide again, you lose the game and the alert shows, when you click OK you can start over.
