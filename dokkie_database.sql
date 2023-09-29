-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema pb1b2324_anyanwm_dokkie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pb1b2324_anyanwm_dokkie` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `pb1b2324_anyanwm_dokkie` ;

-- -----------------------------------------------------
-- Table `pb1b2324_anyanwm_dokkie`.`Event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pb1b2324_anyanwm_dokkie`.`Event` (
  `eventId` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  `dateCreated` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`eventId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `pb1b2324_anyanwm_dokkie`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pb1b2324_anyanwm_dokkie`.`User` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `pb1b2324_anyanwm_dokkie`.`Participant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pb1b2324_anyanwm_dokkie`.`Participant` (
  `eventId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `userId` INT NULL,
  PRIMARY KEY (`eventId`, `name`),
  INDEX `event_idx` (`eventId` ASC),
  INDEX `user_idx` (`userId` ASC),
  CONSTRAINT `fk_participant_event`
    FOREIGN KEY (`eventId`)
    REFERENCES `pb1b2324_anyanwm_dokkie`.`Event` (`eventId`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_participant_user`
    FOREIGN KEY (`userId`)
    REFERENCES `pb1b2324_anyanwm_dokkie`.`User` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `pb1b2324_anyanwm_dokkie`.`Payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pb1b2324_anyanwm_dokkie`.`Payment` (
  `paymentId` INT NOT NULL AUTO_INCREMENT,
  `datePaid` DATE NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `amount` DOUBLE NOT NULL,
  `eventId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`paymentId`),
  INDEX `participant_idx` (`eventId` ASC, `name` ASC),
  CONSTRAINT `fk_payment_participant`
    FOREIGN KEY (`eventId` , `name`)
    REFERENCES `pb1b2324_anyanwm_dokkie`.`Participant` (`eventId` , `name`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;

USE `pb1b2324_anyanwm_dokkie` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
