CREATE SCHEMA `big_DB` ;

CREATE TABLE `big_DB`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` INT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `big_DB`.`status` (
  `id` INT NOT NULL,
  `name` ENUM('created', 'in-progress', 'delivered') NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `big_DB`.`listing` (
  `id` INT NOT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NULL,
  `list_items` INT NOT NULL,
  `status_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`status_id` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`status_id`)
    REFERENCES `big_DB`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    CREATE TABLE `big_DB`.`user_listings` (
  `user_id` INT NOT NULL,
  `listings_id` INT NOT NULL,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `l_id_idx` (`listings_id` ASC) VISIBLE,
  CONSTRAINT `u_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `big_DB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `l_id`
    FOREIGN KEY (`listings_id`)
    REFERENCES `big_DB`.`listing` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);