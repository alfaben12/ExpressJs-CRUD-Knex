-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 09, 2019 at 02:26 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pulsa`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id` int(11) NOT NULL,
  `judul` varchar(60) NOT NULL,
  `sinopsis` text NOT NULL,
  `penulis` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id`, `judul`, `sinopsis`, `penulis`) VALUES
(1, 'Membuat Website Dengan NodeJs', 'Buku belajar membuat website dengan menggunakan NodeJS', 'Buda Suyasa'),
(2, 'Web Design Dengan CSS 3 dan Bootstrap 4', 'Buku belajar membuat desain website dengan CSS3 dan framework CSS Bootstrap', 'Aditya Sudirman'),
(3, 'Jadi Penulis Blog dengan Wordpress', 'Buku tutorial membuat blog dengan menggunakan CMS Wordpress', 'Gayatri'),
(4, 'Permak Foto dengan Adobe Photoshop', 'Buku belajar Adobe Photoshop untuk melakukan editing gambar.', 'Ilham'),
(6, 'Express Js', 'Express Mysql', 'Thariq Alfa'),
(29, 'lbec', 'lbec', 'lbec');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
