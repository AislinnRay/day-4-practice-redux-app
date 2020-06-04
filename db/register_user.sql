insert into users (email, passwor)
values ($1, $2);

select * from users
where email = $1;