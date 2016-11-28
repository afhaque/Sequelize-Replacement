CREATE DATABASE sequelizelibrary;
USE sequelizelibrary;

CREATE TABLE `books` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `title` VARCHAR( 255) NOT NULL,
  `author` VARCHAR( 255 ) NOT NULL,
  `genre` VARCHAR( 255 ) NOT NULL,

  PRIMARY KEY ( `id` ) );