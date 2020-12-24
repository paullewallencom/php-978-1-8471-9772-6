CREATE TABLE chat
(
chat_id int(11) NOT NULL auto_increment,
posted_on datetime NOT NULL,
user_name varchar(255) NOT NULL,
message text NOT NULL,
color char(7) default '#000000',
PRIMARY KEY (chat_id)
);
