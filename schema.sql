CREATE DATABASE game;
USE game;

SET time_zone='+00:00';

CREATE TABLE `game_results` (
  `id` Int( 10 ) AUTO_INCREMENT NOT NULL,
  `player` VARCHAR( 255) NOT NULL,
  `result` INT ( 2 ) NOT NULL
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  PRIMARY KEY ( `id` ) 
);