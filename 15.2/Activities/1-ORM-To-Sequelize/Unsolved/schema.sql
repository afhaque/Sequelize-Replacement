/*
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already.
*/

/* Create and use the todolist db */
CREATE DATABASE  `todolist`;
USE `todolist`;

/* Create a table for all your todos */
CREATE TABLE `todos` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`text` VARCHAR( 255) NOT NULL,
	`complete` BOOLEAN NOT NULL,

	PRIMARY KEY ( `id` ) );
  /* Set ID as primary key */
