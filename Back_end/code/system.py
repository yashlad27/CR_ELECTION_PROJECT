import mysql.connector

cnx = mysql.connector.connect(host="localhost", user="root", password=""
                              ,database="cr_election")
my_cursor = cnx.cursor()

my_cursor.execute("CREATE TABLE student_table(srno INT, prn INT primary key, rollno VARCHAR(255), name VARCHAR(255), "
                  "gender VARCHAR(10), has_voted INT, candidate_id INT DEFAULT NULL)")