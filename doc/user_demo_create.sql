/*
Navicat MySQL Data Transfer

Source Server         : local_db
Source Server Version : 50709
Source Host           : 127.0.0.1:3306
Source Database       : user_demo

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2018-12-24 17:34:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS `user_demo`;
CREATE DATABASE `user_demo`;
USE `user_demo`;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT '用户姓名',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` tinyint(1)  NOT NULL DEFAULT '0' COMMENT '性别，0表示男，1表示女 ',
  `create_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP() COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

