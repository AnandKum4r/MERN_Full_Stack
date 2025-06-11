CREATE DATABASE college;
USE college;

/*
CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO student VALUES (1,"Anand",24);
INSERT INTO student VALUES (2,"Prateek",25);
INSERT INTO student VALUES (3,"Huzaifa",26);

SELECT * FROM student;

CREATE DATABASE IF NOT EXISTS college;
DROP DATABASE IF EXISTS company;

SHOW DATABASES;
SHOW TABLES;

DROP TABLE student;
*/

/*
CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50)
);

SELECT*FROM student;

INSERT INTO student
(rollno, name)
VALUES
(101,"Anand"),
(102,"Prateek"),
(103,"Huzaifa");

INSERT INTO student VALUES (104,"Karan");
*/

/*
CREATE DATABASE wipro;

USE wipro;

CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT NOT NULL
);

INSERT INTO employee
(id,name,salary)
VALUES
(1,"Anand",50000),
(2,"Prateek",49000),
(3,"Huzaifa",48000);

SELECT*FROM employee;
*/

/*
USE college;

CREATE TABLE temp1
(id INT UNIQUE );

INSERT INTO temp1 VALUES (101);
INSERT INTO temp1 VALUES (101);

CREATE TABLE temp2(
id INT,
name VARCHAR(50),
age INT,
city VARCHAR(50),
PRIMARY KEY(id,name)
);

CREATE TABLE emp(
id INT,
salary INT DEFAULT 25000
);

INSERT INTO emp(id) VALUES(101);

INSERT INTO emp VALUES
(102, 35000);

SELECT*FROM emp;
*/

/*
USE college;

CREATE TABLE students(
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO students
(rollno,name,marks,grade,city)
VALUES
(101,"Anil",78,"C","Pune"),
(102,"Bhumika",93,"A","Mumbai"),
(103,"Chetan",85,"B","Mumbai"),
(104,"Dhruv",96,"A","Delhi"),
(105,"Farah",12,"F","Mumbai"),
(106,"Rahul",82,"B","Delhi");

SELECT name, marks FROM students;

SELECT city FROM students;

SELECT DISTINCT city FROM students;

SELECT * FROM students;

SELECT * FROM students WHERE marks>80;

SELECT * FROM students WHERE city="Mumbai";

SELECT * FROM students WHERE marks>80 AND city="Mumbai";

SELECT * FROM students WHERE marks+10 >100;

SELECT * FROM students WHERE marks>90;

SELECT * FROM students WHERE marks>90 OR city="Mumbai";

SELECT * FROM students WHERE marks BETWEEN 80 AND 90;

USE college;

SELECT * FROM students WHERE city IN ("Delhi","Mumbai");

SELECT * FROM students WHERE city IN ("Noida","Kanpur");

SELECT * FROM students WHERE city NOT IN ("Delhi","Mumbai");

SELECT * FROM students LIMIT 3;
 
SELECT * FROM students WHERE marks>75 LIMIT 3;
 
SELECT * FROM students ORDER BY grade ASC;
 
SELECT * FROM students ORDER BY grade DESC;
 
SELECT * FROM students ORDER BY city ASC;
 
SELECT * FROM students ORDER BY marks DESC LIMIT 3;
 
SELECT MAX(marks) FROM students;
 
SELECT MIN(marks) FROM students;
 
SELECT AVG(marks) FROM students;

SELECT SUM(marks) FROM students;

SELECT COUNT(name) FROM students;

SELECT city FROM students GROUP BY city;

SELECT city, COUNT(rollno) FROM students GROUP BY city;

SELECT city, AVG(marks) FROM students GROUP BY city;

SELECT city, AVG(marks) FROM students GROUP BY city ORDER BY AVG(marks);

SELECT city, AVG(marks) FROM students GROUP BY city ORDER BY AVG(marks) DESC;

SELECT grade, COUNT(rollno) FROM students GROUP BY grade ORDER BY grade ASC;

USE college;

SELECT city, COUNT(rollno) FROM students GROUP BY city HAVING MAX(marks)>90;

SELECT city
FROM students
WHERE grade ="A"
GROUP BY city
HAVING MAX(marks) >90
ORDER BY city ASC;

SET SQL_SAFE_UPDATES = 0;

UPDATE students
SET grade = "O"
WHERE grade = "A";

UPDATE students
SET marks =90
WHERE rollno = 105;

UPDATE students
SET grade = "A"
WHERE marks BETWEEN 90 AND 95;

UPDATE students
SET marks = marks+1;

UPDATE students
SET marks =12
WHERE rollno = 105;

DELETE FROM students
WHERE marks < 33;

SELECT * FROM students;
*/

/*
CREATE TABLE dept(
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO dept
VALUES
(101,"English"),
(102,"IT");

SELECT * FROM dept;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(50),
dept_id INT,
FOREIGN KEY (dept_id) REFERENCES dept(id)
ON UPDATE CASCADE
ON DELETE CASCADE
);

INSERT INTO teacher
VALUES
(101, "Adam", 101),
(102,"Eve", 102);

SELECT * FROM teacher;

UPDATE dept
SET id=103
WHERE id=102;
*/

/*
ALTER TABLE students
ADD COLUMN age INT;

ALTER TABLE students
DROP COLUMN age;

ALTER TABLE students
ADD COLUMN age INT NOT NULL DEFAULT 19;

ALTER TABLE students
MODIFY COLUMN age VARCHAR(2);

ALTER TABLE students
CHANGE age stu_age INT;

INSERT INTO students
(rollno,name,marks,stu_age)
VALUES
(107,"Gargi",68,100);

ALTER TABLE students
DROP COLUMN stu_age;

ALTER TABLE students
RENAME TO student;

ALTER TABLE student
RENAME TO students;

TRUNCATE TABLE students;

ALTER TABLE students
CHANGE name full_name VARCHAR(50);

DELETE FROM students
WHERE marks < 80;

ALTER TABLE students
DROP COLUMN grade;
*/

/*
USE college;

SELECT * FROM students;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO student(id,name)
VALUES
(101,"Adam"),
(102,"Bob"),
(103,"Casey");

CREATE TABLE course(
id INT PRIMARY KEY,
course VARCHAR(50)
);

INSERT INTO course (id,course)
VALUES
(102,"English"),
(105,"Math"),
(103,"Science"),
(107,"Computer Science");

SELECT * FROM student;
SELECT * FROM course;

SELECT * FROM student 
INNER JOIN course
ON student.id = course.id;

SELECT * FROM student 
LEFT JOIN course
ON student.id = course.id;

SELECT * FROM student 
RIGHT JOIN course
ON student.id = course.id;

SELECT * 
FROM student as a
LEFT JOIN course as b
ON a.id = b.id
UNION
SELECT * 
FROM student as a
RIGHT JOIN course as b
ON a.id = b.id;

SELECT * 
FROM student as a
LEFT JOIN course as b
ON a.id = b.id
WHERE b.id IS NULL;

SELECT * 
FROM student as a
RIGHT JOIN course as b
ON a.id = b.id
WHERE a.id IS NULL;

SELECT * 
FROM student as a
LEFT JOIN course as b
ON a.id = b.id
WHERE b.id IS NULL
UNION 
SELECT * 
FROM student as a
RIGHT JOIN course as b
ON a.id = b.id
WHERE a.id IS NULL;
*/

/*
CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
manager_id INT 
);

INSERT INTO employee (id,name,manager_id)
VALUES
(101,"adam",103),
(102,"bob",104),
(103,"casey",NULL),
(104,"donald",103);

SELECT * FROM employee;

SELECT a.name as manager_name, b.name
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;

SELECT name FROM employee
UNION ALL
SELECT name FROM employee;
*/

SELECT AVG(marks)
FROM students;

SELECT full_name, marks
FROM students
WHERE marks > 90;

SELECT full_name, marks
FROM students
WHERE marks > (SELECT AVG(marks) FROM students);

SELECT rollno
FROM students
WHERE rollno % 2 = 0;
