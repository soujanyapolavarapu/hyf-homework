
SELECT `status`.`id`,
    `status`.`name`
FROM `homewrk DB`.`status`;


SELECT `task`.`id`,
    `task`.`title`,
    `task`.`description`,
    `task`.`created`,
    `task`.`updated`,
    `task`.`due_date`,
    `task`.`status_id`,
    `task`.`user_id`
FROM `homewrk DB`.`task`;


SELECT COUNT(*)
FROM `homewrk DB`.`task`;

/* 1.Find out how many tasks are in the task table */
SELECT `task`.`due_date`
FROM `homewrk DB`.`task`
WHERE `task`.`due_date` is NULL;
--35

/*2.Find out how many tasks in the task table do not have a valid due date*/
SELECT *
FROM `status` , `task`
WHERE `status`.`name` = 'Done' 
AND `status`.`id` = `task`.`status_id`;
--8

/*3.Find all the tasks that are marked as done*/
SELECT *
FROM `status` , `task`
WHERE `status`.`name` != 'Done' 
AND `status`.`id` = `task`.`status_id`;

/*4.Find all the tasks that are not marked as done*/
SELECT *
FROM `task`
ORDER BY `task`.`created` DESC;

/*5.Get all the tasks, sorted with the most recently created first*/
SELECT `user`.`id`,
    `user`.`name`,
    `user`.`email`,
    `user`.`phone`
FROM `homewrk DB`.`user`;

/*6.Get the single most recently created task*/
SELECT *
FROM `task`
ORDER BY `task`.`created` DESC
LIMIT 0,1;

/*7.Get the title and due date of all tasks where the title or description contains database*/
SELECT `title`, `due_date`
FROM  `task`
WHERE `task`.`description` like '%database%' OR
      `task`.`title` like '%database%';

/*8.Get the title and status (as text) of all tasks*/      
SELECT `task`.`title`,  `status`.`name`
FROM `task`, `status`
WHERE `task`.`status_id` = `status`.`id`;

/*9.Get the name of each status, along with a count of how many tasks have that status*/
SELECT `status`.`name`, count(`status`.`name`)
FROM `task`, `status`
WHERE `task`.`status_id` = `status`.`id`
GROUP BY `status`.`name`;

/*10.Get the names of all statuses, sorted by the status with most tasks first*/
--without join
SELECT `status`.`name`
FROM `task`, `status`
WHERE `task`.`status_id` = `status`.`id`
GROUP BY `status`.`name`
ORDER BY COUNT(*) DESC;

--with join
SELECT `status`.`name` 
FROM `task`
JOIN `status`
ON`task`.`status_id` = `status`.`id`
GROUP BY `status`.`name`
ORDER BY COUNT(*) DESC;