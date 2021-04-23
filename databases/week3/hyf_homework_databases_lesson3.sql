-- Data model
CREATE DATABASE hyf_meal_sharing;
USE hyf_meal_sharing;

CREATE TABLE `meal` (
`id` int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
`title` varchar(255) NOT NULL,
`description` text NOT NULL,
`location` varchar(255) NOT NULL,
`when` datetime NOT NULL,
`max_reservations` int unsigned NOT NULL,
`price` decimal NOT NULL,
`created_date` date NOT NULL
);

CREATE TABLE `reservation`(
`id` int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
`number_of_guests` int unsigned NOT NULL,
`meal_id` int unsigned NOT NULL,
`created_date` date NOT NULL,
`contact_phonenumber` varchar(255) NULL,
`contact_name` varchar(255) NOT NULL,
`contact_email` varchar(255) NOT NULL, 
CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
);

CREATE TABLE `review`(
`id`int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
`title` varchar(255) NOT NULL,
`description` text NOT NULL,
`meal_id` int unsigned NOT NULL,
`stars` int unsigned NOT NULL,
`created_date` date NOT NULL,
CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
);

-- Queries Meal
insert into meal (title, description, location, `when`, max_reservations, price, created_date) 
	values ('Turkish Noahs Ark Pudding Asure', 'The night before, put the wheat or barley in a large pot and cover it with plenty of water. Bring it to a boil, cover and reduce the heat. Allow it to boil gently for about 10 minutes. Turn off the heat and leave the grain to cool and soak overnight.The next morning, the grain should have absorbed most, if not all the liquid. Gather the rest of the ingredients. Add the chickpeas, beans, rice, dried fruits, sugar, and optional rose water or orange and lemon zest. Add more water to just cover the ingredients if needed. Bring the mixture to a boil. Stir the mixture gently with a wooden spoon as it cooks until it thickens. Remove it from the heat and fill dessert bowls or a large serving bowl with the pudding. Once it cools down and sets, cover, and refrigerate it for several hours. Before serving, garnish the pudding with fresh pomegranate seeds, pine nuts, finely chopped dried fruits, and groundnuts. Some prefer their pudding more watery, some prefer it stiffer. If you prefer a stiffer pudding, add 1 or 2 teaspoons of powdered gelatin while the mixture cooks. This will give you a firmer pudding once it cools down.', 'Konya', NOW(), 6, 20, '2021-04-22');
insert into meal (title, description, location, `when`, max_reservations, price, created_date) 
	values ('Turkish Highland Meadow Soup', 'First, put the rice in a covered saucepan with 3 cups of water and bring to a boil. Reduce the heat, cover, and cook the rice until it softens. In a separate bowl, beat the egg, plain yogurt, flour, and 1 cup of water briskly with a wire whisk until well blended and creamy. Make sure you have no lumps of flour or yogurt. Using your wire whisk, stir the rice-water mixture and add the yogurt-water mixture while gently whisking. Then, add salt and white pepper. Allow the mixture to heat through until steaming. Continue whisking gently without letting the soup come to a boil. If the soup becomes too thick for your liking, add a little more water. In a separate pan, melt the butter and add the dried mint. Stir thoroughly and remove from the heat quickly. Add the butter and mint to the soup and continue whisking until well combined. Garnish each bowl of soup with a sprig of fresh mint leaves. If you wish, you can also keep the butter and mint separate and drizzle it over the top of the soup just before serving. If you want to spice up your soup a little more, optionally add about 1 teaspoon hot red pepper flakes to the butter along with the mint. Serve and enjoy!', 'Ordu', NOW(), 2, 10, '2021-04-21');
insert into meal (title, description, location, `when`, max_reservations, price, created_date) 
	values ('Turkish Izmir Meatball and Potato Casserole', 'Izmir Köftesi means meatballs from Izmir and is a meatball casserole with fried potatoes, tomatoes, and peppers. It tastes even better if you take the first step and fry the potatoes and meatballs then combine it with the other ingredients, and let it sit overnight in the refrigerator for the flavors to blend.', 'Izmir', NOW(), 4, 40, '2021-04-23');

SELECT * 
FROM meal;

insert into meal (title, description, location, `when`, max_reservations, price, created_date) 
	values ('Yaprak Sarma', 'Rinse the rice well. Heat some olive oil in a pan. Add the rice and fry shortly. Add the tomato and pepper paste and stir everything together well. Fry for about a minute. Add parsley, paprika powder, mint, pepper, and salt. Use a bit more than you would usually do because in the boiling process, part of the flavor will evaporate. Stir well and take the pan off the heat. You are going to fill the vine leaves with uncooked rice. The rice will be cooked later with the vine leaves. Leave the mixture to cool down. In the meantime, take the vine leaves from the package and carefully take them apart. Rinse them one by one. Put all the leaves in a pan with boiled water (not on the stove) and leave them for five minutes. Drain. Take a large pan and put some olive oil on the bottom. Put a few broken vine leaves on the bottom of the pan. This will stop the yaprak sarma from sticking to the pan. Now you can start rolling the vine leaves. Use a cutting board to put the vine leaves on. On one side of the board, put the pan with the rice mixture and put a plate with vine leaves and on the other side to put the yaprak sarma in. Take a vine leave and put it on the cutting board with the veins up. Cut or break the stem off carefully. Put a little bit of the rice mixture onto the bottom of the leaf. Make sure you leave some space between the rice and the end of the leaf. Take the two lowest ends of the leaf and fold them over the rice. Do the same for the left and the right end of the leaf. Then roll up the leaf tightly from the bottom to the top. The first ones will be a bit difficult, but after a few you will know how to do it. Put the sarma into the pan and repeat the same steps for the other vine leaves. Make sure that you put the yaprak sarma close to each other in the pan. If they are too loose, the rolls can open while cooking. If the bottom of the pan has been filled, you can put the next sarma on top of the others. When you have finished all the sarmas, cut a lemon into slices. Put the slices on top of the sarmas and put a plate, turned upside-down on top of that. This will prevent the sarmas from opening while boiling . Mix boiling water with a tablespoon of tomato paste and a stock cube. Pour the water into the pan until the plate is just under water. Put the pan on the stove and bring to boil. Leave the sarmas to simmer for 45 minutes on low heat. It is important that you use a pan that is big enough because the sarmas will get bigger while boiling. The rice increases in volume when it is cooked. Turn off the heat after 45 minutes and leave the sarmas in the pan with a lid on (without draining the water) for at least 30 more minutes.', 'Izmir', NOW(), 4, 40, '2021-04-23');

SELECT * 
FROM meal
WHERE id= 1;

UPDATE meal
SET max_reservations = 12
WHERE id = 1;

DELETE 
FROM meal
WHERE id = 3;

-- Reservation    
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
	values (20, 4, '2021-04-23', NULL, 'John Doe', 'johndoe@mail.com');
    
SELECT * 
FROM reservation;

insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
	values (7, 2, '2021-04-21', 123455316316, 'Melody Fang', 'melody@hotmail.com');
    
SELECT * 
FROM reservation
WHERE id= 1;

UPDATE reservation
SET number_of_guests = 17
WHERE id = 2;

DELETE 
FROM reservation
WHERE id = 1;

-- Review
insert into review (title, description, meal_id, stars, created_date) 
	values ('Perfect', 'Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Rasim was very accommodating. Will be back definitely!', 1, 5, '2021-04-23');
    
SELECT * 
FROM review;

insert into review (title, description, meal_id, stars, created_date) 
	values ('Wonderful', 'The food was absolutely wonderful, from preparation to presentation, very pleasing.', 2, 3, '2021-04-15');
    
SELECT * 
FROM review
WHERE id= 1;

UPDATE review
SET stars = 5
WHERE id = 2;

DELETE 
FROM review
WHERE id = 2;

-- Additional queries
insert into meal (title, description, location, `when`, max_reservations, price, created_date) 
	values ('Baba Ganoush - Yoghurt And Aubergine Salad', 'Preheat your oven to 200 degrees celsius. Arrange your aubergines onto a baking tray and place in the centre of the oven. Roast for around 30 minutes, until soft. Around 5 minutes before you remove your aubergines, add your garlic cloves to the tray and allow to cook and soften. Remove the aubergine and garlic from the oven and allow to cool. Now make a slit down the centre of your aubergines. Carefully scrape out the pulp, removing excess seeds. Add the pulp to a bowl. Now remove the skin from your garlic and roughly chop and smash it with a knife. Add this to your aubergine pulp. Squeeze the lemon juice over your mixture. Now add your yoghurt and mix everything together. Add your olive oil, mint and salt and mix thoroughly. Do a taste test and add more lemon or yoghurt to your taste. Serve with a sprinkling of freshly chopped parsley and a drizzle of olive oil', 'Antakya', NOW(), 2, 100, '2021-03-03');
insert into meal (title, description, location, `when`, max_reservations, price, created_date) 
	values ('Musakka', 'Preheat your oven to 220 degrees celsius. Remove the stalks from your aubergines and slice lengthways - around 1 cm thick. Lay your aubergine slices onto an oven tray and lightly drizzle with olive oil. Bake in the oven for approx 15 minutes until the aubergines are softening and have taken on colour. Remove from the oven and allow to cool. Meanwhile, heat a dash of olive oil over a medium heat in a frying pan. Add your onion and peppers and saute gently until the onions start to sweat. Now add your meat and garlic and stir in. Saute until your meat browns and starts to release its juices. Now you can add your kekik and paprika and mix. Add your chopped tomatoes, stir and cook for 5 minutes until your tomatoes start to soften. Pour in around 50ml warm water and add your salça and mix. Simmer for 5 minutes, do a taste test and season to taste with salt and pepper. Add more water if you want a thinner sauce and simmer for 15-20 mins until you have a rich tomato sauce. Now return to your aubergines. Remove from your baking tray and cut each length into about 4 pieces. Now take an oven proof dish and lay your aubergines over the base. Pour the meat mixture over the top along with a cup of hot water. Place in the centre of your oven at around 200 degrees celsius. Cook for 20 minutes until youır sauce is bubbling. Remove from the oven and leave to stand to cool a little before garnishing with fresh chopped parsley. Serve on its own or with a side of rice or mashed potato.', 'Ankara', NOW(), 8, 120, '2021-04-02');

insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
	values (10, 5, '2021-06-22', 0521321421, 'Carl Max', 'carlmax@gmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
	values (3, 6, '2021-07-12', 921514216, 'Bill Gates', 'bill@hotmail.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
	values (1, 2, '2021-03-11', 14215161, 'Cristiano Ronaldo', 'cr7@gmail.com');

insert into review (title, description, meal_id, stars, created_date) 
	values ('Expensive', 'I do not mind spending a lot of money but 4 pieces of yaprak sarma for 40$ that was hilarious.', 4, 2, '2021-04-22');
insert into review (title, description, meal_id, stars, created_date) 
	values ('Bad', 'This place is a joke...', 5, 1, '2021-04-21');
insert into review (title, description, meal_id, stars, created_date) 
	values ('Nice', 'Meal was quite good.', 5, 3, '2021-04-22');

SELECT *
FROM meal
WHERE price < 90;

SELECT meal.title, meal.max_reservations, reservation.number_of_guests, reservation.created_date
FROM meal
JOIN reservation ON
meal.id = reservation.meal_id
HAVING meal.max_reservations > reservation.number_of_guests;

SELECT *
FROM meal
WHERE title LIKE "Baba%";

SELECT *
FROM meal
WHERE created_date BETWEEN '2021-04-20' AND '2021-04-23';

SELECT *
FROM meal
LIMIT 2;

SELECT *
FROM meal
JOIN review ON 
meal.id= review.meal_id
WHERE review.stars >= 4;

SELECT *
FROM reservation
JOIN meal ON 
meal.id = reservation.meal_id
WHERE meal.id = 2
ORDER BY reservation.created_date;

SELECT meal.title, AVG(review.stars) AS stars
FROM meal
LEFT JOIN review ON 
meal.id= review.meal_id
GROUP BY meal.id;