CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(255) NOT NULL,
	"category_id" INT REFERENCES "category"
);

INSERT INTO "favorites" ("url", "category_id")
VALUES ('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', 1), 
('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', 2), 
('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', 1), 
('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', NULL), 
('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', 4), 
('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', 5), 
('https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g', NULL);
