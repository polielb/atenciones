/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - atencionesfsa
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`atencionesfsa` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `atencionesfsa`;

/*Table structure for table `reseteo_clave` */

DROP TABLE IF EXISTS `reseteo_clave`;

CREATE TABLE `reseteo_clave` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL COMMENT 'Referencia al campo usuario (no correo)',
  `token` varchar(255) NOT NULL,
  `nueva_clave` varchar(255) NOT NULL COMMENT 'Campo agregado para almacenar la nueva contraseña hasheada',
  `fecha_expira` timestamp NOT NULL DEFAULT (current_timestamp() + interval 24 hour),
  `utilizado` tinyint(1) DEFAULT 0,
  `fecha_utilizado` timestamp NULL DEFAULT NULL,
  `usu_alta` varchar(50) NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  KEY `idx_token` (`token`),
  KEY `idx_usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

/*Data for the table `reseteo_clave` */

insert  into `reseteo_clave`(`id`,`usuario`,`token`,`nueva_clave`,`fecha_expira`,`utilizado`,`fecha_utilizado`,`usu_alta`,`fecha_alta`) values 
(9,'polielb','cc139d446242fdff271e93848f810c60ec529d31f1d40149f0cf1ccf50005311','$2y$10$v80akDpXgPq/bmbABp7S6umaf0/4ayqPVJtrcOLG71Kh8MlxOGGgK','2025-08-13 17:23:21',1,'2025-08-12 12:25:05','','2025-08-12 12:23:21'),
(10,'test','5bfbccc7649ddb2b7a96778adc96401639c1a0bca666e6b737fff0eed645c328','$2y$10$l5cmNaHQdWssTvRJlMW7IOA85h8SxhLkRDIKVYXQAwz1ESBtibn2S','2025-08-14 16:47:51',1,'2025-08-13 11:54:51','','2025-08-13 11:47:51');

/*Table structure for table `reseteo_clave_hist` */

DROP TABLE IF EXISTS `reseteo_clave_hist`;

CREATE TABLE `reseteo_clave_hist` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL COMMENT 'Referencia al campo usuario (no correo)',
  `token` varchar(255) NOT NULL,
  `nueva_clave` varchar(255) NOT NULL COMMENT 'Campo agregado para almacenar la nueva contraseña hasheada',
  `fecha_expira` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `utilizado` tinyint(1) DEFAULT 0,
  `fecha_utilizado` timestamp NULL DEFAULT NULL,
  `usu_alta` varchar(50) NOT NULL,
  `fecha_alta` timestamp NULL DEFAULT NULL,
  `usu_mod` varchar(50) NOT NULL,
  `fecha_mod` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_token_hist` (`token`),
  KEY `idx_usuario_hist` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

/*Data for the table `reseteo_clave_hist` */

insert  into `reseteo_clave_hist`(`id`,`usuario`,`token`,`nueva_clave`,`fecha_expira`,`utilizado`,`fecha_utilizado`,`usu_alta`,`fecha_alta`,`usu_mod`,`fecha_mod`) values 
(4,'polielb','30423336dddd843e72e2368b3ec02246499925ec1c9244b850d11f8750bad4d6','$2y$10$OvT4fry9YII1WeTWaPGQo.WjdMdAmjKB/h7Y2LAHfxjbIXUTFtFjW','2025-08-12 16:19:38',0,NULL,'','2025-08-11 11:19:38','polielb','2025-08-11 11:19:59'),
(5,'polielb','f9226d544b63c7914280cebbd2b60cde46d9ab3d029fb005a422da0c6b19c9e2','$2y$10$5eQ9M2bP/Qbka6we3975TuZATuIG6cdXuYmVC56uH8GEjz0fUQmPu','2025-08-12 17:21:03',0,NULL,'','2025-08-11 12:21:03','polielb','2025-08-11 12:21:24'),
(6,'polielb','ca609ad60c4801e95d078883f56cbea5dbfbbd65c0380f302dc92fc10bd404ac','$2y$10$jdni/xwEsIn67bI5FFOC0.IQ4s0bKUevpsynnP.0ZkHpaukZqOuiO','2025-08-12 17:48:37',0,NULL,'','2025-08-11 12:48:37','polielb','2025-08-11 12:48:58'),
(7,'polielb','cd7e8a7aca158c8df2b06053e68347707536df58f28725c3d17b07108eb29b8e','$2y$10$1kvqedAoj2s0ofWm6wUJ8OPHECozWu1g5pgkCAaX77DZERyL02LRC','2025-08-12 17:57:03',0,NULL,'','2025-08-11 12:57:03','polielb','2025-08-11 12:57:24'),
(8,'polielb','f4d4724835c77b2d5b3567ec38b2a425e2e64783bcabbf682a9a9eb709b38622','$2y$10$GJLd8lWVos4y57eDMNW1xePpPwOg33mHokuEg2vCzEjKtJNdWVMkK','2025-08-13 13:16:56',0,NULL,'','2025-08-12 08:16:56','polielb','2025-08-12 08:17:17'),
(9,'polielb','cc139d446242fdff271e93848f810c60ec529d31f1d40149f0cf1ccf50005311','$2y$10$v80akDpXgPq/bmbABp7S6umaf0/4ayqPVJtrcOLG71Kh8MlxOGGgK','2025-08-13 17:23:21',0,NULL,'','2025-08-12 12:23:21','polielb','2025-08-12 12:25:05'),
(10,'test','5bfbccc7649ddb2b7a96778adc96401639c1a0bca666e6b737fff0eed645c328','$2y$10$l5cmNaHQdWssTvRJlMW7IOA85h8SxhLkRDIKVYXQAwz1ESBtibn2S','2025-08-14 16:47:51',0,NULL,'','2025-08-13 11:47:51','test','2025-08-13 11:54:51');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL COMMENT 'Campo usuario agregado (ej: polielb)',
  `correo` varchar(255) NOT NULL COMMENT 'Correo completo (ej: polielb@gmail.com)',
  `clave` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `mobil` varchar(20) NOT NULL,
  `activo` tinyint(1) DEFAULT 1,
  `usu_alta` varchar(50) NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `idx_usuario` (`usuario`),
  KEY `idx_correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`usuario`,`correo`,`clave`,`apellidos`,`nombres`,`dni`,`mobil`,`activo`,`usu_alta`,`fecha_alta`) values 
(1,'test','test@example.com','$2y$10$l5cmNaHQdWssTvRJlMW7IOA85h8SxhLkRDIKVYXQAwz1ESBtibn2S','Prueba','Usuario','12345678','123456789',1,'','2025-08-05 12:46:36'),
(2,'admin','admin@atencionesfsa.com','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Administrador','Sistema','87654321','987654321',1,'','2025-08-05 12:46:36'),
(3,'polielb','polielb@gmail.com','$2y$10$v80akDpXgPq/bmbABp7S6umaf0/4ayqPVJtrcOLG71Kh8MlxOGGgK','Beltran','Polidoro','11223344','1234567890',1,'','2025-08-05 12:46:36'),
(4,'romina','romina@clinica.com','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Garcia','Romina','22334455','2345678901',1,'','2025-08-05 12:46:36'),
(5,'juana','juana@clinica.com','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Martinez','Juana','33445566','3456789012',1,'','2025-08-05 12:46:36');

/*Table structure for table `usuarios_hist` */

DROP TABLE IF EXISTS `usuarios_hist`;

CREATE TABLE `usuarios_hist` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL COMMENT 'Campo usuario agregado (ej: polielb)',
  `correo` varchar(255) NOT NULL COMMENT 'Correo completo (ej: polielb@gmail.com)',
  `clave` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `mobil` varchar(20) NOT NULL,
  `activo` tinyint(1) DEFAULT 1,
  `usu_alta` varchar(50) NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usu_mod` varchar(50) NOT NULL,
  `fecha_mod` timestamp NOT NULL DEFAULT current_timestamp(),
  KEY `id` (`id`),
  KEY `idx_usuario` (`usuario`),
  KEY `idx_correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

/*Data for the table `usuarios_hist` */

insert  into `usuarios_hist`(`id`,`usuario`,`correo`,`clave`,`apellidos`,`nombres`,`dni`,`mobil`,`activo`,`usu_alta`,`fecha_alta`,`usu_mod`,`fecha_mod`) values 
(3,'polielb','polielb@gmail.com','$2y$10$.3pgR87FXIWg5pmD8F94K.9AJKuY/XDwA8Z3Jt32O7xGvmSb1AZVy','Beltran','Polidoro','11223344','1234567890',1,'','2025-08-05 12:46:36','polielb','2025-08-12 12:25:05'),
(1,'test','test@example.com','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Prueba','Usuario','12345678','123456789',1,'','2025-08-05 12:46:36','test','2025-08-13 11:54:51');

/*Table structure for table `usuarios_relacionados` */

DROP TABLE IF EXISTS `usuarios_relacionados`;

CREATE TABLE `usuarios_relacionados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_admin` varchar(255) NOT NULL COMMENT 'Usuario que da permisos (ej: ''romina'')',
  `usuario_permitido` varchar(255) NOT NULL COMMENT 'Usuario que recibe permisos (ej: ''juana'')',
  `activo` tinyint(1) DEFAULT 1,
  `usu_alta` varchar(50) NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_relation` (`usuario_admin`,`usuario_permitido`),
  KEY `idx_admin` (`usuario_admin`),
  KEY `idx_permitido` (`usuario_permitido`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

/*Data for the table `usuarios_relacionados` */

insert  into `usuarios_relacionados`(`id`,`usuario_admin`,`usuario_permitido`,`activo`,`usu_alta`,`fecha_alta`) values 
(1,'romina','juana',1,'system','2025-08-05 12:46:36'),
(2,'polielb','admin',1,'system','2025-08-05 12:46:36');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
