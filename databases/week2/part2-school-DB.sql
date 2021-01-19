CREATE TABLE Class(id INT NOT NULL PRIMARY KEY, 
                   name VARCHAR(45) NOT NULL, 
                   begins DATETIME NOT NULL, 
                   ends DATETIME NOT NULL);

SELECT *
FROM Class;

CREATE TABLE Student(id INT NOT NULL PRIMARY KEY, 
                      name VARCHAR(45) NOT NULL, 
                      email VARCHAR(45),
                      phone INT,
                      class_id INT NOT NULL,
                      FOREIGN KEY (class_id) REFERENCES Class(id));
SELECT *
FROM Student;

CREATE INDEX student_index
ON Student (name);

ALTER TABLE Class
ADD status ENUM('not-started', 'ongoing', 'finished');

SELECT *
FROM class;