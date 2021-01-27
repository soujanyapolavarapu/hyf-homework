/*part1: Working with Tasks*/
SELECT * 
FROM task;

SELECT * 
FROM user;

SELECT * 
FROM status;

SELECT * 
FROM user_task;

/*Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id */
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('Teaching', 'Telling somthing', '2018-10-25 07:54:16', '2019-10-15 13:05:09', null, 2);

SELECT * 
FROM task;

INSERT INTO user_task (user_id, task_id)
VALUES (4,13);

INSERT INTO user_task (user_id, task_id)
VALUES (2,36);

SELECT * 
FROM user_task;

/*Change the title of a task*/
UPDATE task
SET title='Teacher',due_date = '2021-11-23 10:13:42', status_id =3
WHERE ID=36;

DELETE
FROM task
WHERE ID=35;

SELECT * 
FROM task;

/*Part3 :More queries*/
/*Get all the tasks assigned to users whose email ends in @spotify.com*/
SELECT * 
FROM task AS t,user_task AS ut
WHERE t.id = ut. task_id
AND ut.user_id = (SELECT user.id 
FROM user
WHERE user.email LIKE '%@spotify.com');

/* above task using join*/
SELECT t.*
FROM task AS t
JOIN user_task AS ut ON t.id = ut.task_id
JOIN user AS u ON u.id = ut.user_id
WHERE u.email LIKE '%@spotify.com';

/*Get all the tasks for 'Donald Duck' with status 'Not started'*/

SELECT * 
FROM user AS U,user_task AS UT,task AS T
WHERE U.name = 'Donald Duck'
AND UT.user_id= U.id
AND T.status_id =(
SELECT S.id
FROM status AS S
WHERE S.name= 'Not started')
AND UT.task_id = T.id;


/*Get all the tasks for 'Donald Duck' with status 'Not started' __using join */
SELECT *
FROM task AS t
JOIN status AS s 
ON t.status_id = s.id
JOIN user_task AS ut
ON ut.task_id =t.id
JOIN user AS u
ON u.id = ut.user_id
WHERE s.name LIKE 'Not started'
AND u.name LIKE 'Donald Duck';

/*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
SELECT *
FROM user AS U,user_task AS UT,task AS T
WHERE U.name='Maryrose Meadows'
AND UT.user_id = U.id
AND UT.task_id= T.id
And month(T.created)=9;

/*Find how many tasks where created in each month, e.g. how many tasks were created in october,
 how many tasks were created in november, etc. (hint: use group by)*/
 
 SELECT COUNT(id) AS count, month(created) AS month
 FROM task
 GROUP BY month(created);