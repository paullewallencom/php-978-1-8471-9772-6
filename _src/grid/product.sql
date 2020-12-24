CREATE TABLE product
(
  product_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL DEFAULT '',
  price DECIMAL(10,2) NOT NULL DEFAULT '0.00',
  on_promotion TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (product_id)
);

INSERT INTO product(name, price, on_promotion) VALUES('Santa Costume', 14.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Medieval Lady', 49.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Caveman', 12.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Costume Ghoul', 18.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Ninja', 15.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Monk', 13.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Elvis Black Costume', 35.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Robin Hood', 18.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Pierot Clown', 22.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Austin Powers', 49.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Alien Visitor', 35.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Deadly Phantom Costume', 18.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Black Screamer Cape and Mask', 30.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Devil Sexy Costume', 23.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Flower Power', 14.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Queen of Flames', 19.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Angel', 14.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Witch', 12.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Cleopatra', 17.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Black Boa', 19.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Mystic Witch', 25, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Pink Fairy Set', 24.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Space Warrior', 10.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Hippie', 9.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Sheriff Hat', 6.5, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Bolt-action Machine Gun', 5.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Easter Bonnet', 1.75, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Police Plastic Helmet', 1.35, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Multicolor Tinsel Boppers', 1.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Bug Eyes', 2.75, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Darth Vader', 46.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Lightsaber', 9.49, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Beard and teeth', 8.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Detective Kit', 7.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Samurai Sword', 4.25, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Sword Cavalier Scabbard', 4.25, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Pirate Set', 3.5, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Squeaking Caveman Club', 1.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Magic Relight Candles', 0.8, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Mystic Smoke', 1.98, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Jumping Beans', 0.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Remote Control Jammer', 5.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Smoke Bombs', 2.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Monster Teeth', 0.5, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Metallic Voodoo Black/Silver', 3.5, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Droopy Eye Specs', 2.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Exploding Lighter', 1.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Beast Mask', 5.99, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Skull Moving', 7.5, 1);
INSERT INTO product(name, price, on_promotion) VALUES('Exploding Chewing Gum', 1.75, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Foaming Sugar', 0.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Snappy Chewing Gum', 1.25, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Hot Pepper Gum', 0.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Love Potion', 0.99, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Squirting Chewing Gum', 1.49, 0);
INSERT INTO product(name, price, on_promotion) VALUES('Blue Mouth Gum', 1.29, 1);
