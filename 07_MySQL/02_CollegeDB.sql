CREATE DATABASE CollegeDB;

USE CollegeDB;

CREATE TABLE Students (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Age INT,
    Department VARCHAR(50),
    AdmissionDate DATE
);

INSERT INTO Students (Name, Age, Department, AdmissionDate)
VALUES 
('Anjali Sharma', 20, 'Computer Science', '2024-06-01'),
('Ravi Kumar', 22, 'Mechanical', '2023-08-15'),
('Priya Singh', 21, 'Electrical', '2022-07-10');

SELECT * FROM Students;

CREATE TABLE Marks (
    MarkID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    Subject VARCHAR(50),
    Score INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

INSERT INTO Marks (StudentID, Subject, Score)
VALUES
(1, 'Math', 85),
(1, 'English', 90),
(2, 'Math', 78),
(3, 'Physics', 88);

SELECT s.Name, s.Department, m.Subject, m.Score
FROM Students s
JOIN Marks m ON s.StudentID = m.StudentID;

SELECT * FROM Students;