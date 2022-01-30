-- DATABASE AND SCHEMA
-- create database coolmovies with owner postgres;
\c coolmovies;

--  USERS
create table if not exists users
(
	id uuid default gen_random_uuid() not null
		constraint user_pk
			primary key,
	name varchar not null
);

alter table users owner to postgres;

create unique index if not exists user_id_uindex
	on users (id);

-- MOVIE DIRECTORS
create table if not exists movie_directors
(
	id uuid default gen_random_uuid() not null
		constraint movie_director_pk
			primary key,
	name varchar not null,
	age integer not null
);

alter table movie_directors owner to postgres;

create unique index if not exists movie_director_id_uindex
	on movie_directors (id);

-- MOVIES
create table movies
(
	id uuid default gen_random_uuid() not null
		constraint movies_pk
			primary key,
	title varchar not null,
	movie_director_id uuid not null
		constraint movies_movie_director_id_fk
			references movie_directors
				on update cascade on delete cascade,
	user_creator_id uuid not null
		constraint movies_user_id_fk
			references users
				on update cascade on delete cascade,
	release_date date not null,
	img_url varchar not null
);

alter table movies owner to postgres;

create unique index if not exists movie_director_id_uindex
	on movie_directors (id);

-- MOVIE REVIEWS
create table movie_reviews
(
	id uuid default gen_random_uuid() not null
		constraint movie_reviews_pk
			primary key,
	title varchar not null,
	body text,
	rating integer,
	movie_id uuid not null
		constraint movie_reviews_movies_id_fk
			references movies
				on update cascade on delete cascade,
	user_reviewer_id uuid not null
		constraint movie_reviews_users_id_fk
			references users
				on update cascade on delete cascade
);

alter table movie_reviews owner to postgres;

create unique index if not exists movie_review_id_uindex
    on movie_reviews (id);

-- COMMENTS
create table if not exists comments
(
	id uuid default gen_random_uuid() not null
		constraint comment_pk
			primary key,
	user_id uuid not null
		constraint comment_user_id_fk
			references users
				on update cascade on delete cascade,
	title varchar,
	body text,
	movie_review_id uuid not null
		constraint comments_movie_reviews_id_fk
			references movie_reviews (id)
				on update cascade on delete cascade
);

alter table comments owner to postgres;

-- FAKE CURRENT USER
create function "current_user"() returns users
    stable
    SET search_path = "$user", public
    language sql
as
$$
select *
  from users
  order by name
  limit 1;
$$;

alter function "current_user"() owner to postgres;