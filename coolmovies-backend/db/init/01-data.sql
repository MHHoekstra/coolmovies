\connect coolmovies;

insert into public.users (id, name)
values  ('5f1e6707-7c3a-4acd-b11f-fd96096abd5a', 'Chrono'),
        ('65549e6a-2389-42c5-909a-4475fdbb3e69', 'Ayla'),
        ('beb2473b-2c31-44a2-81e3-01efd5c7ac6e', 'Robo'),
        ('ffd3a780-26e8-450b-856d-c45dc43c1315', 'Lucca'),
        ('7b4c31df-04b3-452f-a9ee-e9f8836013cc', 'Marle');


insert into public.movie_directors (id, name, age)
values  ('7467db60-d506-4f1a-b5b4-7f2620d61669', 'George Lucas', 100),
        ('c103cc08-ed39-4a3c-a1f3-0f431c07539e', 'Gareth Edwards', 46);

insert into public.movies (id, title, movie_director_id, user_creator_id, release_date, img_url)
values  ('b8d93229-e02a-4060-9370-3e073ada86c3', 'Star Wars: A New Hope', '7467db60-d506-4f1a-b5b4-7f2620d61669', '5f1e6707-7c3a-4acd-b11f-fd96096abd5a', '1977-05-25', 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg'),
        ('70351289-8756-4101-bf9a-37fc8c7a82cd', 'Rogue One: A Star Wars Story', 'c103cc08-ed39-4a3c-a1f3-0f431c07539e', '7b4c31df-04b3-452f-a9ee-e9f8836013cc', '2016-12-16', 'https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png');

insert into public.movie_reviews (id, title, body, rating, movie_id, user_reviewer_id)
values  ('e8edc53a-29cf-4470-8351-ed22cc144a3f', 'Great Movie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 5, 'b8d93229-e02a-4060-9370-3e073ada86c3', '5f1e6707-7c3a-4acd-b11f-fd96096abd5a'),
        ('3a295d43-da93-4994-8211-4bbccd59d06b', 'Instant Hit!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 4, 'b8d93229-e02a-4060-9370-3e073ada86c3', '65549e6a-2389-42c5-909a-4475fdbb3e69'),
        ('335f0ff2-7f96-413f-8d26-6224039356c4', 'Best Action Movie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 4, '70351289-8756-4101-bf9a-37fc8c7a82cd', '65549e6a-2389-42c5-909a-4475fdbb3e69'),
        ('5750da72-238b-44b3-9a92-02e3543861c4', 'One of the best', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 5, '70351289-8756-4101-bf9a-37fc8c7a82cd', '5f1e6707-7c3a-4acd-b11f-fd96096abd5a');
