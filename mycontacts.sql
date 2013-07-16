-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 16, 2013 at 12:56 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `mycontacts`
--

CREATE TABLE IF NOT EXISTS `mycontacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `picture` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `mycontacts`
--

INSERT INTO `mycontacts` (`id`, `firstname`, `surname`, `mobile`, `email`, `dob`, `picture`) VALUES
(1, 'Joe', 'Burton', '07768989345', 'joeburton@gmail.com', '04/10/1979', 'default.gif'),
(2, 'Miriam', 'Heinke', '0776253235', 'miriam.heinke@yahoo.de', '24/09/19823', 'default.gif'),
(14, 'Mark', 'Smith', '07768989524', 'mark.smith@hotmail.com', '09/08/1982', NULL),
(15, 'Josh', 'Payne', '07768989358', 'josh.payne@gmail.co.uk', '12/05/1985', NULL),
(16, 'James', 'Brown', '078989854', 'jamesbrown@gmail.com', '04/10/1979', NULL),
(17, 'Tod', 'Prat', '0778595561', 'todprat@hotmail.com', '15/09/1985', NULL),
(19, 'Timothy', 'Horn', '07768989345', 'timhorn@gmail.com', '08/09/1976', NULL),
(21, 'Tina', 'Tolpot', '345566788', 'Tolpotmail@mail.com', '04/10/79', NULL),
(22, 'Seb', 'Greengrass', '07768989345', 'seb@googlemail.com', '07/10/1978', NULL),
(23, 'Fish', 'Frap', '07768989345', 'fishfrap@fishfarm.com', '23/03/1972', NULL),
(24, 'Fish', 'Head', '07768989345', 'fishhead@gmail.com', '04/10/1979', NULL),
(26, 'Spanky', 'Stinks', '07768989345', 'spankystinks@gmail.com', '04/10/1979', NULL);
