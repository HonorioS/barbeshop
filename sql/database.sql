-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Out-2020 às 13:58
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `barbeshopdb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `logs`
--

CREATE TABLE `logs` (
  `ID` int(11) NOT NULL,
  `COD` varchar(12) NOT NULL,
  `Cliente` varchar(60) NOT NULL,
  `Contacto` varchar(15) NOT NULL,
  `Data` date NOT NULL,
  `Hora` time NOT NULL,
  `Servico` varchar(40) NOT NULL,
  `Status` varchar(12) NOT NULL,
  `Obs` varchar(100) NOT NULL,
  `info` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `logs`
--

INSERT INTO `logs` (`ID`, `COD`, `Cliente`, `Contacto`, `Data`, `Hora`, `Servico`, `Status`, `Obs`, `info`) VALUES
(1, 'PBMC0000', 'Honorio', '923090000', '2020-10-06', '00:00:12', 'corte cabelo', 'Pendente', 'TEST', '2020-10-07 16:47:06'),
(9, 'PBMC0000', 'admin', '923090000', '2020-10-06', '12:00:00', 'corte cabelo', 'Ausência', ' test app', '2020-10-07 17:19:29'),
(10, 'PBMC0000', 'Honorio', '923090000', '2020-10-06', '00:00:12', 'corte cabelo', 'Pendente', 'TEST', '2020-10-07 16:47:06');

-- --------------------------------------------------------

--
-- Estrutura da tabela `marcacao`
--

CREATE TABLE `marcacao` (
  `ID` int(11) NOT NULL,
  `Cod` varchar(12) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Contacto` varchar(25) NOT NULL,
  `Servico` varchar(30) NOT NULL,
  `Datas` date NOT NULL,
  `Horario` varchar(11) NOT NULL,
  `Observacao` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `marcacao`
--

INSERT INTO `marcacao` (`ID`, `Cod`, `Nome`, `Contacto`, `Servico`, `Datas`, `Horario`, `Observacao`) VALUES
(66, 'PBMC0001', 'admin', '923090000', 'corte cabelo', '2020-10-06', '12:00', 'test app'),
(68, 'PBMC0010', 'admin', '923090000', 'corte cabelo', '2020-10-06', '12:00', 'test app'),
(69, 'PBMC0000', 'admin', '923090000', 'corte cabelo', '2020-10-06', '12:00', 'test app'),
(70, 'PBMCnull', 'Honorio Silva', 'fdfdf', 'Cabelo & Barba', '0000-00-00', '11:00:00', 'test app'),
(71, 'PBMC00070', 'Antonio Da Silva ', '932345675', 'Barba', '0000-00-00', '11:30:00', 'test app ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `recrutamento`
--

CREATE TABLE `recrutamento` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Contacto` varchar(25) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Morada` varchar(200) NOT NULL,
  `ExpProfissional` varchar(3500) DEFAULT NULL,
  `CV` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `recrutamento`
--

INSERT INTO `recrutamento` (`ID`, `Nome`, `Contacto`, `Email`, `Morada`, `ExpProfissional`, `CV`) VALUES
(4, 'user', '89378393', 'user@hesasoft.pt', 'test', 'test', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `timer`
--

CREATE TABLE `timer` (
  `ID` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Time` time NOT NULL,
  `User` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `timer`
--

INSERT INTO `timer` (`ID`, `Data`, `Time`, `User`) VALUES
(1, '2020-10-06', '10:00:00', 'Admin'),
(2, '2020-10-06', '10:30:00', 'Admin'),
(5, '2020-10-06', '12:00:00', 'Admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizadores`
--

CREATE TABLE `utilizadores` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Utilizador` varchar(12) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Tipo` varchar(20) NOT NULL,
  `Acesso` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `utilizadores`
--

INSERT INTO `utilizadores` (`ID`, `Nome`, `Email`, `Utilizador`, `Password`, `Tipo`, `Acesso`) VALUES
(12, 'Andre Ventura ', 'comercial@hesa.pt', 'comercial', '$2y$10$9mZHaVyjJKbmChsVvYxRs.JwfiXR1J.1vb7618o7hcdMrktS2wjcS,', 'admin', 'desbloqueado');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `marcacao`
--
ALTER TABLE `marcacao`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `recrutamento`
--
ALTER TABLE `recrutamento`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `timer`
--
ALTER TABLE `timer`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `logs`
--
ALTER TABLE `logs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `marcacao`
--
ALTER TABLE `marcacao`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de tabela `recrutamento`
--
ALTER TABLE `recrutamento`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `timer`
--
ALTER TABLE `timer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
