CREATE DATABASE game;
USE game;

CREATE TABLE `game_results` (
  `id` Int( 10 ) AUTO_INCREMENT NOT NULL,
  `player` VARCHAR( 255) NOT NULL,
  `result` INT ( 2 ) NOT NULL
  
    PRIMARY KEY ( `id` ) 
);