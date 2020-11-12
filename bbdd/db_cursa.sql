-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2020 a las 12:56:20
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_cursa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categoria`
--

CREATE TABLE `tbl_categoria` (
  `ID_Categoria` int(5) NOT NULL,
  `Nombre_Categoria` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Sexo_Categoria` enum('Hombre','Mujer','Niños/niñas','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Edad_Minima` int(5) NOT NULL,
  `Edad_Maxima` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tbl_categoria`
--

INSERT INTO `tbl_categoria` (`ID_Categoria`, `Nombre_Categoria`, `Sexo_Categoria`, `Edad_Minima`, `Edad_Maxima`) VALUES
(1, '0-6 Años', 'Niños/niñas', 0, 6),
(2, '6-12 Años', 'Niños/niñas', 6, 12),
(3, '12-14 Años Hombre', 'Hombre', 12, 14),
(4, '12-14 Años Mujer', 'Mujer', 12, 14),
(5, '14-16 Años Hombre', 'Hombre', 14, 16),
(6, '14-16 Años Mujer', 'Mujer', 14, 16),
(7, '16-20 Años Hombre', 'Hombre', 16, 20),
(8, '16-20 Años Mujer', 'Mujer', 16, 20),
(9, '20-45 Años Hombre', 'Hombre', 20, 45),
(10, '20-45 Años Mujer', 'Mujer', 20, 45),
(11, '45-55 Años Hombre', 'Hombre', 45, 55),
(12, '45-55 Años Mujer', 'Mujer', 45, 55),
(13, '55-65 Años Hombre', 'Hombre', 55, 65),
(14, '55-65 Años Mujer', 'Mujer', 55, 65),
(15, 'Mayor 65 Hombre', 'Hombre', 65, 120),
(16, 'Mayor 65 Hombre', 'Mujer', 65, 120);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cursa`
--

CREATE TABLE `tbl_cursa` (
  `ID_Cursa` int(5) NOT NULL,
  `Fecha_Cursa` date NOT NULL,
  `Lugar_Cursa` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tbl_cursa`
--

INSERT INTO `tbl_cursa` (`ID_Cursa`, `Fecha_Cursa`, `Lugar_Cursa`) VALUES
(1, '2021-05-25', 'L\'Hospitalet de Llobregat');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_inscripcion`
--

CREATE TABLE `tbl_inscripcion` (
  `Dorsal` int(5) NOT NULL,
  `Pagado` enum('Si','No','','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ID_Participante` int(5) NOT NULL,
  `ID_Cursa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tbl_inscripcion`
--

INSERT INTO `tbl_inscripcion` (`Dorsal`, `Pagado`, `ID_Participante`, `ID_Cursa`) VALUES
(14, 'No', 18, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_participante`
--

CREATE TABLE `tbl_participante` (
  `ID_Participante` int(5) NOT NULL,
  `Nombre_Participante` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Primer_apellido` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Segundo_apellido` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Sexo_Participante` enum('Hombre','Mujer','Otro','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Fecha_Nacimiento_Participante` date NOT NULL,
  `ID_Categoria` int(5) NOT NULL,
  `DNI_Participante` varchar(9) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_participante` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tbl_participante`
--

INSERT INTO `tbl_participante` (`ID_Participante`, `Nombre_Participante`, `Primer_apellido`, `Segundo_apellido`, `Sexo_Participante`, `Fecha_Nacimiento_Participante`, `ID_Categoria`, `DNI_Participante`, `email_participante`) VALUES
(18, 'Manel', 'Portillo', 'Martinez', 'Hombre', '2020-10-31', 3, '48070198Z', 'manelportillo13@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  ADD PRIMARY KEY (`ID_Categoria`);

--
-- Indices de la tabla `tbl_cursa`
--
ALTER TABLE `tbl_cursa`
  ADD PRIMARY KEY (`ID_Cursa`);

--
-- Indices de la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  ADD PRIMARY KEY (`Dorsal`),
  ADD KEY `FK_inscripcion_participante` (`ID_Participante`),
  ADD KEY `FK_inscripcion_Cursa` (`ID_Cursa`);

--
-- Indices de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  ADD PRIMARY KEY (`ID_Participante`),
  ADD KEY `FK_Categoria_Participante` (`ID_Categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  MODIFY `ID_Categoria` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tbl_cursa`
--
ALTER TABLE `tbl_cursa`
  MODIFY `ID_Cursa` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  MODIFY `Dorsal` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  MODIFY `ID_Participante` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  ADD CONSTRAINT `FK_inscripcion_Cursa` FOREIGN KEY (`ID_Cursa`) REFERENCES `tbl_cursa` (`ID_Cursa`),
  ADD CONSTRAINT `FK_inscripcion_participante` FOREIGN KEY (`ID_Participante`) REFERENCES `tbl_participante` (`ID_Participante`);

--
-- Filtros para la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  ADD CONSTRAINT `FK_Categoria_Participante` FOREIGN KEY (`ID_Categoria`) REFERENCES `tbl_categoria` (`ID_Categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
