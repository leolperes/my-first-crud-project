CREATE DATABASE  IF NOT EXISTS `my_first_project` 
USE `my_first_project`;


DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `birthday` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES (1,'Will','will@test.com','969525414','2000-01-01'),(2,'Leol','leo@leo.leo','12345678','1999-01-01'),(8,'name','will@test.com','48996661968','1999-08-12'),(9,'leo2','leo@leo','123','1231-03-12');

UNLOCK TABLES;


