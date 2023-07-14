## login to mysql 
- sudo mysql -u root -p

## see already created users
- open mysql prompt
- SELECT User FROM mysql.user;

## Create a new user in sql 
1. Start the MySQL command-line tool by typing the following command and pressing Enter:
   - mysql -u root -p

2. Enter the password when prompted.

3. Once you are logged in to the MySQL command-line tool, you can create a new user using the `CREATE USER` statement. For example, to create a user named "newuser" with a password "password123", execute the following command:
    - CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password123';

    - Replace `'newuser'` with the desired username and `'password123'` with the desired password. You can also change `'localhost'` to a specific host or '%' for any host.

4. After creating the user, you need to grant appropriate privileges to the user. The following command grants all privileges to the user on a specific database (replace `database_name` with the actual name of the database):

   GRANT ALL PRIVILEGES ON database_name.* TO 'newuser'@'localhost';

   If you want to grant privileges on all databases, use `*.*` instead of `database_name.*`.

5. Once you have granted the privileges, you need to flush the privileges for the changes to take effect:

   FLUSH PRIVILEGES;

7. You can now exit the MySQL command-line tool by typing:

   ```shell
   EXIT;
   ```

That's it! You have successfully created a new user in MySQL. The new user can now log in to the MySQL server using the provided username and password.


## Delete user
- sudo mysql -u root -p // sudo mysql -u username -p -- it will prompt you to ask for password
- DROP USER 'username'@'localhost';

## Revoke the privilleges
- REVOKE ALL PRIVILEGES ON *.* FROM 'username'@'localhost';

- Once you have deleted the user and revoked the privileges (if applicable), you can flush the privileges for the changes to take effect:
 - FLUSH PRIVILEGES;

## Change the column name in a table
- ALTER TABLE products CHANGE desciption description VARCHAR(255);
- ALTER TABLE tablename CHANGE old_column_name new_column_name VARCHAR(255);   /


## Delete table data
- TRUNCATE TABLE my_table;  
// Truncating a table removes all rows from the table while keeping the table structure intact

- DELETE FROM my_table;     
// delete each row individually, you can use the DELETE statement without a WHERE clause to remove all rows from a table. This operation can take longer, especially if the table contains a large amount of data.

- DROP TABLE my_table;      
// removes the table structure along with the data, so use it with caution. Make sure you have a backup of your data before performing this action.
