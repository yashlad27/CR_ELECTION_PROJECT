USE cr_election_project;

CREATE TABLE student_table (
	srno INT, 
    erpID INT PRIMARY KEY,
    rollno VARCHAR(255),
    name VARCHAR(255),
    gender VARCHAR(255),
    has_voted INT DEFAULT 0,
    candidate_id INT DEFAULT NULL
);

CREATE TABLE votes (
	candidate_id INT PRIMARY KEY,
    vote_count INT
);

CREATE TABLE class_teacher(
	id INT PRIMARY KEY,
    ct_name VARCHAR(255),
    panel VARCHAR(100)
);

SELECT * FROM student_table;
SELECT * FROM votes;
SELECT * FROM class_teacher;

DROP TABLE student_table;


