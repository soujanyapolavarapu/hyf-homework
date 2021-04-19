/* CREATE SCHEMA `meal_sharing_db` ; */

CREATE TABLE `meal_sharing_db`.`Meal` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL(5) NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE Reservation (
id INT NOT NULL,
number_of_guests INT NOT NULL ,
meal_id INT NOT NULL,
created_date DATE NOT NULL,
contact_phonenumber VARCHAR(45) NOT NULL,
contact_name VARCHAR(45) NOT NULL,
contact_email VARCHAR(45) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (meal_id) REFERENCES Meal(id));

CREATE TABLE Review(
id INT NOT NULL,
title VARCHAR(45) NOT NULL,
description TEXT(45),
meal_id INT NOT NULL,
stars INT,
created_date DATE NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (meal_id) REFERENCES Meal(id)
);


DESCRIBE Meal;

/* Get all meals */
SELECT * FROM Meal;

/* Add a new meal */
INSERT INTO `Meal`
(`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES
(1,'Indian Meal','south indian biryani','Hyderabad','2021-1-25 10:00:00',20,30,'2021-01-28');

INSERT INTO `Meal`
(`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES
(2,'Danish Meal','Danish morgen mad','Denmark','2021-1-26 10:00:00',40,25.00,'2021-01-25');

INSERT INTO `Meal`
(`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES
(3,'Mini Meal','Danish aftens mad','Denmark','2021-1-26 16:00:00',40,25.00,'2021-01-25');

INSERT INTO `Meal`
(`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES
(4,'Ragi Meal','Meal prepared with raghi flour','vishakaptnam','2021-1-24 16:00:00',40,25.00,'2021-01-23');

INSERT INTO `Meal`
(`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES
(5,'veg Meal','Meal prepared with veggies','vishakaptnam','2021-1-24 13:00:00',40,25.00,'2021-01-24');

INSERT INTO `Meal`
(`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)
VALUES
(6,'nonveg Meal','Meal prepared with chicken,fish','kothakota','2021-1-23 13:00:00',40,25.00,'2021-01-20');


/* Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE Meal
SET `when`= '2021-1-28 10:00:00' ,`created_date`= '2021-01-25'
WHERE `id`=1;

UPDATE Meal
SET `max_reservations`= '0'
WHERE `id`=6;

UPDATE Meal
SET `title`= 'Rød grød med fløde'
WHERE `id`=3;

/* Get a meal with any id, fx 1 */
SELECT * 
FROM Meal
WHERE `id`=2;

/* Delete a meal with any id, fx 1 */
DELETE FROM Meal
WHERE `id`=2;

DESCRIBE Reservation;

/* Get all reservations */
SELECT * 
FROM Reservation;

/* Add a new reservation */
INSERT INTO `Reservation`
(`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
(1,5,1,'2021-01-25','+914354657687','Soujanya','soujanya@gmail.com');

INSERT INTO `Reservation`
(`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
(2,5,3,'2021-01-25','+914354657656','Aashrith','aashrith@gmail.com');

INSERT INTO `Reservation`
(`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
(3,5,4,'2021-01-25','+914354657659','Rajesh','rajesh@gmail.com');

INSERT INTO `Reservation`
(`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
(4,5,5,'2021-01-26','+914354657659','Shoba','sobha@gmail.com');

INSERT INTO `Reservation`
(`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
(5,5,5,'2021-01-25','+914354657659','rajesh','rajesh@gmail.com');

/* Get a reservation with any id, fx 1 */
SELECT * 
FROM Reservation
WHERE `id`=1;

/* Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE Reservation
SET `number_of_guests`= 3 ,`created_date`= '2021-01-24'
WHERE `id`=2;

/* Delete a reservation with any id, fx 1 */
DELETE FROM Reservation
WHERE `id`=2;

DESCRIBE Review;

/* Get all reviews */
SELECT * 
FROM Review;

/* Add a new review */
INSERT INTO `Review`
(`id`,`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES
(1,'Excellent','food tastes awesome','1',10,'2021-01-25');

INSERT INTO `Review`
(`id`,`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES
(2,'Good','food tastes good','3',7,'2021-01-25');

INSERT INTO `Review`
(`id`,`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES
(3,'Excellent','food tastes very good','3',9,'2021-01-23');

INSERT INTO `Review`
(`id`,`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES
(4,'Excellent','food tastes very good','3',9,'2021-01-24');

INSERT INTO `Review`
(`id`,`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES
(5,'Good','food tastes very good','3',5,'2021-01-22');

/* Get a review with any id, fx 1 */
SELECT * 
FROM Review
WHERE `id`=1;

/* Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE Review
SET `description`= 'food tastes better' ,`created_date`= '2021-01-24'
WHERE `id`=2;

/* Delete a review with any id, fx 1 */
DELETE FROM Review
WHERE `id`=2;

/* Additional queries */
/* 1.Get meals that has a price smaller than a specific price fx 90 */
SELECT * 
FROM Meal
WHERE `price`<90;

/* 2.Get meals that still has available reservations. */
SELECT *
FROM Meal AS m,Reservation AS r
WHERE m.id= r.meal_id
AND r.created_date >= CURDATE();

/* 3.Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde */
SELECT * 
FROM Meal
WHERE title LIKE '%Rød grød med%';

/* 4.Get meals that has been created between two dates */
SELECT *
FROM Meal
WHERE created_date BETWEEN '2021-1-24' AND '2021-1-28';

/* 5.Get only specific number of meals fx return only 5 meals */
SELECT *
FROM Meal
LIMIT 0, 5;

/* 6.Get the meals that have good reviews */
SELECT *
FROM review
WHERE title = 'Good';

/* 7.Get reservations for a specific meal sorted by created_date */
SELECT *
FROM reservation
WHERE meal_id = 5
ORDER BY created_date;

/* 8.Sort all meals by average number of stars in the reviews */
SELECT Meal.*
FROM Meal
INNER JOIN Review ON Meal.id=Review.meal_id
GROUP BY (
    SELECT AVG(Review.stars)
    FROM Review
    );