-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plantsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `plantsdb` ;

-- -----------------------------------------------------
-- Schema plantsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `plantsdb` DEFAULT CHARACTER SET utf8 ;
USE `plantsdb` ;

-- -----------------------------------------------------
-- Table `plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant` ;

CREATE TABLE IF NOT EXISTS `plant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `max_temperature` INT NULL,
  `min_temperature` INT NULL,
  `max_grow_height_inches` INT NULL,
  `min_grow_height_inches` INT NULL,
  `max_days_to_harvest` INT NULL,
  `min_days_to_harvest` INT NULL,
  `max_inches_water_per_week` DOUBLE NULL,
  `min_inches_water_per_week` DOUBLE NULL,
  `max_root_depth_inches` INT NULL,
  `min_root_depth_inches` INT NULL,
  `max_soil_ph` DOUBLE NULL,
  `min_soil_ph` DOUBLE NULL,
  `max_hours_sunlight` INT NULL,
  `min_hours_sunlight` INT NULL,
  `max_inches_plant_distance` INT NULL,
  `min_inches_plant_distance` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS plantsuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'plantsuser'@'localhost' IDENTIFIED BY 'plant';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'plantsuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `plant`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `plant` (`id`, `name`, `max_temperature`, `min_temperature`, `max_grow_height_inches`, `min_grow_height_inches`, `max_days_to_harvest`, `min_days_to_harvest`, `max_inches_water_per_week`, `min_inches_water_per_week`, `max_root_depth_inches`, `min_root_depth_inches`, `max_soil_ph`, `min_soil_ph`, `max_hours_sunlight`, `min_hours_sunlight`, `max_inches_plant_distance`, `min_inches_plant_distance`) VALUES (1, 'Broccoli', 75, 65, 48, 18, 100, 80, 1.5, 1, 20, 13, 7.0, 6.0, 10, 8, 24, 12);
INSERT INTO `plant` (`id`, `name`, `max_temperature`, `min_temperature`, `max_grow_height_inches`, `min_grow_height_inches`, `max_days_to_harvest`, `min_days_to_harvest`, `max_inches_water_per_week`, `min_inches_water_per_week`, `max_root_depth_inches`, `min_root_depth_inches`, `max_soil_ph`, `min_soil_ph`, `max_hours_sunlight`, `min_hours_sunlight`, `max_inches_plant_distance`, `min_inches_plant_distance`) VALUES (2, 'Cabbage', 65, 60, 14, 12, 180, 80, 1.5, 1, 36, 18, 6.8, 6.5, 8, 6, 24, 12);

COMMIT;

