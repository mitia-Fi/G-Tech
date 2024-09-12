-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 28 oct. 2022 à 19:48
-- Version du serveur :  5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Esti_EDT`
--

-- --------------------------------------------------------

--
-- Structure de la table `Edt`
--

CREATE TABLE `Edt` (
  `id` int(100) NOT NULL,
  `Num_Salle` int(100) NOT NULL,
  `Classe_Etudiant` varchar(100) NOT NULL,
  `Nom_Module` varchar(100) NOT NULL,
  `Nom_Prof` varchar(100) NOT NULL,
  `start` datetime(6) NOT NULL,
  `end` datetime(6) NOT NULL,
  `duree` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Edt`
--

INSERT INTO `Edt` (`id`, `Num_Salle`, `Classe_Etudiant`, `Nom_Module`, `Nom_Prof`, `start`, `end`, `duree`) VALUES
(164, 1, 'L1G2', 'php', 'mr dina', '2022-10-28 10:47:00.000000', '2022-10-28 10:47:00.000000', 0);

-- --------------------------------------------------------

--
-- Structure de la table `Etudiant`
--

CREATE TABLE `Etudiant` (
  `Num_Etudiant` int(100) NOT NULL,
  `Nom_Etudiant` varchar(100) NOT NULL,
  `Prenom_Etudiant` varchar(100) NOT NULL,
  `Mail_Etudiant` varchar(100) NOT NULL,
  `Classe_Etudiant` varchar(100) NOT NULL,
  `Anne_Scolaire` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Etudiant`
--

INSERT INTO `Etudiant` (`Num_Etudiant`, `Nom_Etudiant`, `Prenom_Etudiant`, `Mail_Etudiant`, `Classe_Etudiant`, `Anne_Scolaire`) VALUES
(1, 'MITIA', 'Finiavana', 'mitia@esti.mg', 'L1G2', 2022),
(2, 'Johanna', 'Misaela', 'johanna.tahianaharison@esti.com', 'L1G2', 2022),
(3, 'Finoana', 'Randria', 'finoana@gmail.com', 'L1G2', 2022),
(4, 'Steave', 'steave', 'steave@gmail.com', 'L1G1', 2022),
(6, 'Tolotra', 'RANARISON', 'tolocha@esti.mg', 'L1G2', 2022),
(7, 'TOHY', 'Tohy', 'Tohy@gmail.com', 'L1G2', 2022),
(8, 'Landry', 'lanja', 'lanj@gmail.com', 'L1G2', 2022),
(10, 'Johanna', 'misaela@gmail.com', 'Misaela', 'L1G1', 2022),
(11, 'jose', 'fi@gmail.com', 'finiavana', 'L1G1', 2022),
(12, 'admin', 'mi@esti.mg', 'Ny aina', 'L1G2', 2022),
(13, 'josh', 'josua@esti.mg', 'josua', 'L1G1', 2022);

-- --------------------------------------------------------

--
-- Structure de la table `Login`
--

CREATE TABLE `Login` (
  `id` int(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `Nom` varchar(40) NOT NULL,
  `contact` int(10) NOT NULL,
  `Debut` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Login`
--

INSERT INTO `Login` (`id`, `Email`, `Password`, `status`, `Nom`, `contact`, `Debut`) VALUES
(1, 'admin@gmail.com', 'admin', '1', 'Admin', 0, 0),
(3, 'dina@gmail.com', 'dina', '0', 'mr dina', 383838838, 2018);

-- --------------------------------------------------------

--
-- Structure de la table `Module`
--

CREATE TABLE `Module` (
  `Id` int(100) NOT NULL,
  `Code` varchar(100) NOT NULL,
  `Nom_Module` varchar(100) NOT NULL,
  `Nom_Prof` varchar(100) NOT NULL,
  `Annee_Scolaire` int(4) NOT NULL,
  `Credit` int(100) NOT NULL,
  `Vh` int(100) NOT NULL,
  `Vh_Restant` int(100) NOT NULL,
  `suivie` varchar(45) NOT NULL,
  `Classes_Etudiants` varchar(100) NOT NULL,
  `Vh_Eff` int(34) NOT NULL,
  `Vh_Reel` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Module`
--

INSERT INTO `Module` (`Id`, `Code`, `Nom_Module`, `Nom_Prof`, `Annee_Scolaire`, `Credit`, `Vh`, `Vh_Restant`, `suivie`, `Classes_Etudiants`, `Vh_Eff`, `Vh_Reel`) VALUES
(1, 'info253', 'php', 'mr dina', 2022, 30, 30, 10, 'en cours', 'L1G1', 20, 16);

-- --------------------------------------------------------

--
-- Structure de la table `Prof`
--

CREATE TABLE `Prof` (
  `Num` int(100) NOT NULL,
  `Nom_Prof` varchar(100) NOT NULL,
  `Prenom_Prof` varchar(100) NOT NULL,
  `Contact` varchar(100) NOT NULL,
  `Nom_Module` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Mot_De_Passe` varchar(100) NOT NULL,
  `Nif_stat` varchar(100) NOT NULL,
  `Annee_Debut` year(4) NOT NULL,
  `Ancienete` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Prof`
--

INSERT INTO `Prof` (`Num`, `Nom_Prof`, `Prenom_Prof`, `Contact`, `Nom_Module`, `Email`, `Mot_De_Passe`, `Nif_stat`, `Annee_Debut`, `Ancienete`) VALUES
(1, 'mr dina', 'mr dina', '0323230232', 'php', 'dina@gmail.com', '1234', '1', 2020, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Salle`
--

CREATE TABLE `Salle` (
  `Num_Salle` int(11) NOT NULL,
  `Etat_salle` varchar(110) NOT NULL,
  `Classe_Etudiant` varchar(100) NOT NULL,
  `Nom_Module` varchar(100) NOT NULL,
  `Nom_Prof` varchar(110) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Salle`
--

INSERT INTO `Salle` (`Num_Salle`, `Etat_salle`, `Classe_Etudiant`, `Nom_Module`, `Nom_Prof`, `id`) VALUES
(1, 'libre', '0', '0', '0', 2),
(2, 'libre', '0', '0', '0', 3),
(3, 'libre', '0', '0', '0', 4),
(4, 'libre', '0', '0', '0', 5),
(5, 'libre', '0', '0', '0', 6),
(6, 'libre', '0', '0', '0', 7),
(7, 'libre', '0', '0', '0', 8),
(8, 'libre', '0', '0', '0', 9),
(9, 'libre', '0', '0', '0', 10),
(10, 'libre', '0', '0', '0', 11);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Edt`
--
ALTER TABLE `Edt`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Etudiant`
--
ALTER TABLE `Etudiant`
  ADD PRIMARY KEY (`Num_Etudiant`),
  ADD UNIQUE KEY `Mail_Etudiant` (`Mail_Etudiant`);

--
-- Index pour la table `Login`
--
ALTER TABLE `Login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`Email`);

--
-- Index pour la table `Module`
--
ALTER TABLE `Module`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Prof`
--
ALTER TABLE `Prof`
  ADD PRIMARY KEY (`Num`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Index pour la table `Salle`
--
ALTER TABLE `Salle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Edt`
--
ALTER TABLE `Edt`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT pour la table `Etudiant`
--
ALTER TABLE `Etudiant`
  MODIFY `Num_Etudiant` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `Login`
--
ALTER TABLE `Login`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `Module`
--
ALTER TABLE `Module`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Prof`
--
ALTER TABLE `Prof`
  MODIFY `Num` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Salle`
--
ALTER TABLE `Salle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
