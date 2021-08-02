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
-- Table `temperature_range`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `temperature_range` ;

CREATE TABLE IF NOT EXISTS `temperature_range` (
  `id` INT NOT NULL,
  `min_temp` INT NULL,
  `max_temp` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `plant_distance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant_distance` ;

CREATE TABLE IF NOT EXISTS `plant_distance` (
  `id` INT NOT NULL,
  `min_inches_apart` INT NULL,
  `max_inches_apart` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `root_depth`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `root_depth` ;

CREATE TABLE IF NOT EXISTS `root_depth` (
  `id` INT NOT NULL,
  `min_inches` INT NULL,
  `max_inches` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sunlight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sunlight` ;

CREATE TABLE IF NOT EXISTS `sunlight` (
  `id` INT NOT NULL,
  `min_hours` VARCHAR(45) NULL,
  `max_hours` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grow_height`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `grow_height` ;

CREATE TABLE IF NOT EXISTS `grow_height` (
  `id` INT NOT NULL,
  `min_inches` INT NULL,
  `max_inches` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `time_to_harvest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `time_to_harvest` ;

CREATE TABLE IF NOT EXISTS `time_to_harvest` (
  `id` INT NOT NULL,
  `min_days` INT NULL,
  `max_days` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `soil_ph`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `soil_ph` ;

CREATE TABLE IF NOT EXISTS `soil_ph` (
  `id` INT NOT NULL,
  `min_ph` FLOAT NULL,
  `max_ph` FLOAT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `water_per_week`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `water_per_week` ;

CREATE TABLE IF NOT EXISTS `water_per_week` (
  `id` INT NOT NULL,
  `min_inches` FLOAT NULL,
  `max_inches` FLOAT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant` ;

CREATE TABLE IF NOT EXISTS `plant` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `temperature_range_id` INT NOT NULL,
  `plant_distance_id` INT NOT NULL,
  `root_depth_id` INT NOT NULL,
  `sunlight_id` INT NOT NULL,
  `grow_height_id` INT NOT NULL,
  `time_to_harvest_id` INT NOT NULL,
  `soil_ph_id` INT NOT NULL,
  `water_per_week_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_plant_temperature_range_idx` (`temperature_range_id` ASC),
  INDEX `fk_plant_plant_distance1_idx` (`plant_distance_id` ASC),
  INDEX `fk_plant_root_depth1_idx` (`root_depth_id` ASC),
  INDEX `fk_plant_sunlight1_idx` (`sunlight_id` ASC),
  INDEX `fk_plant_grow_height1_idx` (`grow_height_id` ASC),
  INDEX `fk_plant_time_to_harvest1_idx` (`time_to_harvest_id` ASC),
  INDEX `fk_plant_soil_ph1_idx` (`soil_ph_id` ASC),
  INDEX `fk_plant_water_per_week1_idx` (`water_per_week_id` ASC),
  CONSTRAINT `fk_plant_temperature_range`
    FOREIGN KEY (`temperature_range_id`)
    REFERENCES `temperature_range` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_plant_distance1`
    FOREIGN KEY (`plant_distance_id`)
    REFERENCES `plant_distance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_root_depth1`
    FOREIGN KEY (`root_depth_id`)
    REFERENCES `root_depth` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_sunlight1`
    FOREIGN KEY (`sunlight_id`)
    REFERENCES `sunlight` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_grow_height1`
    FOREIGN KEY (`grow_height_id`)
    REFERENCES `grow_height` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_time_to_harvest1`
    FOREIGN KEY (`time_to_harvest_id`)
    REFERENCES `time_to_harvest` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_soil_ph1`
    FOREIGN KEY (`soil_ph_id`)
    REFERENCES `soil_ph` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_water_per_week1`
    FOREIGN KEY (`water_per_week_id`)
    REFERENCES `water_per_week` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
-- Data for table `temperature_range`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `temperature_range` (`id`, `min_temp`, `max_temp`) VALUES (1, 65, 75);

COMMIT;


-- -----------------------------------------------------
-- Data for table `plant_distance`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `plant_distance` (`id`, `min_inches_apart`, `max_inches_apart`) VALUES (1, 12, 24);

COMMIT;


-- -----------------------------------------------------
-- Data for table `root_depth`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `root_depth` (`id`, `min_inches`, `max_inches`) VALUES (1, 13, 20);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sunlight`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `sunlight` (`id`, `min_hours`, `max_hours`) VALUES (1, '8', '10');

COMMIT;


-- -----------------------------------------------------
-- Data for table `grow_height`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `grow_height` (`id`, `min_inches`, `max_inches`) VALUES (1, 18, 48);

COMMIT;


-- -----------------------------------------------------
-- Data for table `time_to_harvest`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `time_to_harvest` (`id`, `min_days`, `max_days`) VALUES (1, 80, 100);

COMMIT;


-- -----------------------------------------------------
-- Data for table `soil_ph`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `soil_ph` (`id`, `min_ph`, `max_ph`) VALUES (1, 6.0, 7.0);

COMMIT;


-- -----------------------------------------------------
-- Data for table `water_per_week`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `water_per_week` (`id`, `min_inches`, `max_inches`) VALUES (1, 1, 1.5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `plant`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsdb`;
INSERT INTO `plant` (`id`, `name`, `temperature_range_id`, `plant_distance_id`, `root_depth_id`, `sunlight_id`, `grow_height_id`, `time_to_harvest_id`, `soil_ph_id`, `water_per_week_id`) VALUES (1, 'Broccolil', 1, 1, 1, 1, 1, 1, 1, 1);

COMMIT;

