-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeUsuario` VARCHAR(191) NOT NULL,
    `emailUsuario` VARCHAR(191) NOT NULL,
    `senhaUsuario` VARCHAR(191) NOT NULL,
    `tipoUsuario` ENUM('ESTAGIARIO', 'MENTOR', 'ADMIN', 'EXTERNO') NOT NULL,

    UNIQUE INDEX `Usuario_emailUsuario_key`(`emailUsuario`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estagiario` (
    `idEstagiario` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeEstagiario` VARCHAR(191) NOT NULL,
    `emailEstagiario` VARCHAR(191) NOT NULL,
    `senhaEstagiario` VARCHAR(191) NOT NULL,
    `funcaoEstagiario` VARCHAR(191) NOT NULL,
    `voluntario` BOOLEAN NOT NULL,
    `tipoUsuario` ENUM('ESTAGIARIO', 'MENTOR', 'ADMIN', 'EXTERNO') NOT NULL,

    UNIQUE INDEX `Estagiario_emailEstagiario_key`(`emailEstagiario`),
    PRIMARY KEY (`idEstagiario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mentor` (
    `idMentor` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeMentor` VARCHAR(191) NOT NULL,
    `emailMentor` VARCHAR(191) NOT NULL,
    `senhaMentor` VARCHAR(191) NOT NULL,
    `areaMentoria` VARCHAR(191) NOT NULL,
    `linkedinMentor` VARCHAR(191) NOT NULL,
    `tipoUsuario` ENUM('ESTAGIARIO', 'MENTOR', 'ADMIN', 'EXTERNO') NOT NULL,

    UNIQUE INDEX `Mentor_emailMentor_key`(`emailMentor`),
    PRIMARY KEY (`idMentor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administrativo` (
    `idAdmin` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeAdmin` VARCHAR(191) NOT NULL,
    `emailAdmin` VARCHAR(191) NOT NULL,
    `senhaAdmin` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `areaAdmin` VARCHAR(191) NOT NULL,
    `tipoUsuario` ENUM('ESTAGIARIO', 'MENTOR', 'ADMIN', 'EXTERNO') NOT NULL,

    UNIQUE INDEX `Administrativo_emailAdmin_key`(`emailAdmin`),
    PRIMARY KEY (`idAdmin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
