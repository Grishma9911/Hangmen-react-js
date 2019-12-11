CREATE DATABASE game;
USE game;

CREATE TABLE `game` (
  `id` Int( 550 ) AUTO_INCREMENT NOT NULL,
  `player-1` VARCHAR( 255) NOT NULL,
  `player-2` VARCHAR( 255 ) NOT NULL
  
    PRIMARY KEY ( `id` ) 
);