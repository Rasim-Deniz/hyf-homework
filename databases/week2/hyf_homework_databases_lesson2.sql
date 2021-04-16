-- Part 1: Working with tasks
USE hyf_lesson1;

insert into task (title, description, created, updated, due_date, status_id, user_id) 
    values ('Do the homework', 'Hyf databases lesson2', NOW(),  NOW(), null, 1, 3);

SELECT *
FROM task;

UPDATE task
SET title = 'Do databases homework'
WHERE id= 36;

UPDATE task
SET due_date = '2021-04-15 02:29:29'
WHERE id= 36;

UPDATE task
SET status_id = 2
WHERE id= 36;

UPDATE task
SET status_id = 3
WHERE id= 36;

DELETE
FROM task
WHERE id= 36;

-- Part 2: School database
CREATE DATABASE hyf_homework;
USE hyf_homework;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_name
ON student (name);

ALTER TABLE class
ADD status enum('not-started', 'ongoing', 'finished') NOT NULL;

-- Part 3: More queries
use hyf_lesson2;

SELECT *
FROM task
JOIN user_task ON
task.id=user_task.task_id
JOIN user ON
user_task.user_id=user.id
WHERE user.email LIKE '%@spotify.com';

SELECT *
FROM task
JOIN user_task ON
task.id=user_task.task_id
JOIN user ON
user_task.user_id=user.id
JOIN status ON
task.status_id=status.id
WHERE user.name = "Donald Duck" AND status.name = "Not started";

SELECT *
FROM task
JOIN user_task ON
task.id=user_task.task_id
JOIN user ON
user_task.user_id=user.id
WHERE user.name LIKE "Maryrose%" AND month(created) = 09;

SELECT monthname(created) AS month, COUNT(*) AS count
FROM task
GROUP BY month(created);

-- Part 4: Creating a database
SET NAMES utf8mb4;

CREATE DATABASE hyf_homework_part4;
USE hyf_homework_part4;

CREATE TABLE `doctor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `patient` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `gender` enum('M', 'F') NOT NULL,
  `address` varchar(255) NULL,
  `phone` varchar(255) NULL,
  `doctor_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `diagnosis` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `details` text NULL DEFAULT NULL,
  `diagnosis_date` DATETIME NOT NULL,
  `patient_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `disease` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `symptoms` text NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `patient_disease` (
  `patient_id` int(10) unsigned NOT NULL,
  `disease_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`patient_id`, `disease_id`),
  CONSTRAINT `fk_patient_disease_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_patient_disease_disease` FOREIGN KEY (`disease_id`) REFERENCES `disease` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Doctors
insert into doctor (id, name) values (1, 'Dr. Collin Markwood');
insert into doctor (id, name) values (2, 'Dr. Jonas Mcculla');
insert into doctor (id, name) values (3, 'Dr. Kayden Riddell');
insert into doctor (id, name) values (4, 'Dr. Peter Rodman');
insert into doctor (id, name) values (5, 'Dr. Quinn Spellman');
insert into doctor (id, name) values (6, 'Dr. Diana Bersaw');
insert into doctor (id, name) values (7, 'Dr. Donna Billiel');
insert into doctor (id, name) values (8, 'Dr. Jennie Jira');
insert into doctor (id, name) values (9, 'Dr. Kaylie Rosul');
insert into doctor (id, name) values (10, 'Dr. Ryan Spang');
insert into doctor (id, name) values (11, 'Dr. Aubrie Alo');
insert into doctor (id, name) values (12, 'Dr. Geneva Minarik');
insert into doctor (id, name) values (13, 'Dr. Max Miu');
insert into doctor (id, name) values (14, 'Dr. Nyla Shryock');
insert into doctor (id, name) values (15, 'Dr. Trinity Vanwoert');

-- Patients
insert into patient (id, name, gender, address, phone, doctor_id) values (1, 'Aarika Ellingworth', 'M', 'Los Angeles', '483-396-8795', 1);
insert into patient (id, name, gender, address, phone, doctor_id) values (2, 'Pren Goldsworthy', 'M', 'Waterbury', '635-572-8467', 10);
insert into patient (id, name, gender, address, phone, doctor_id) values (3, 'Pablo Kisbee', 'M', 'Manhattan', '790-962-8683', 13);
insert into patient (id, name, gender, address, phone, doctor_id) values (4, 'Rodie Duncan', 'F', 'Phoenix', '646-743-6191', 3);
insert into patient (id, name, gender, address, phone, doctor_id) values (5, 'Aubry Polak', 'M', 'Anaheim', '302-678-7931', 5);
insert into patient (id, name, gender, address, phone, doctor_id) values (6, 'Maryrose Meadows', 'F', 'Ephrata', '251-524-6594', 2);
insert into patient (id, name, gender, address, phone, doctor_id) values (7, 'Pavel Brushneen', 'M', 'Seattle', '316-170-3640', 11);
insert into patient (id, name, gender, address, phone, doctor_id) values (8, 'Hedy Gerault', 'F', 'Rush Center', '176-177-5579', 4);
insert into patient (id, name, gender, address, phone, doctor_id) values (9, '王秀英', 'M', 'Chicago', '891-952-6749', 7);
insert into patient (id, name, gender, address, phone, doctor_id) values (10, 'إلياس', 'M', 'Northampton', '202-517-6983', 9);

-- Diagnosis
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (1, 'COVID-19', 'Fever and chills,cough,shortness of breath or difficulty breathing,fatigue', '2020-10-25 06:54:16', 2);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (2, 'Bacterial Finger', 'Weight loss and blood in urine generally start within a few days, but both symptoms are always experienced at some time.', '2020-09-26 03:06:46', 3);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (3, 'Swine Migraine', 'Fainting and peeing difficulty slowly increase in severity over several hours, but both symptoms are always experienced at some time.', '2020-05-04 18:07:37', 4);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (4, 'Warping Head', 'Ringing ears and feeling sleepy may start within a few days, but both symptoms always start together.', '2020-09-20 19:34:43', 1);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (5, 'Fall Deficiency', 'Seizures and nail brittleness generally start within a few hours, but not necessarily at the same time.', '2020-03-27 15:17:08', 5);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (6, 'Snake Cancer', 'Hallucination and ankle pain often start out of nowhere within a week, but rarely are both experienced at once.', '2020-02-13 23:16:30', 7);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (7, 'Delirious Paralysis', 'Headache and pelvic pain generally start within a few days, but one symptom may be subdued in some cases.', '2020-01-06 19:39:16', 8);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (8, 'Permanent Paranoia', NULL, '2020-04-03 02:47:17', 6);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (9, 'Spastic Blisters', 'Shaking hands and an itchy skin often start out of nowhere within a week, but rarely together at the same time.', '2020-11-11 06:14:01', 9);
insert into diagnosis (id, name, details, diagnosis_date, patient_id) values (10, 'Summer Swelling', 'Seizures and excess sweating generally start within a few hours, but one symptom generally lags behind the other.', '2020-07-04 13:55:16', 10);

-- Diseases
insert into disease (id, name, symptoms) values (1, 'Bacterial Finger', 'Weight loss,blood in urine,weight gain,ringing ears,a dry skin');
insert into disease (id, name, symptoms) values (2, 'Swine Migraine', 'Fainting,peeing difficulty,eye twitching,toe numbness,breast pain');
insert into disease (id, name, symptoms) values (3, 'Warping Head', 'Ringing ears,feeling sleepy,peeing difficulty,rectal pain,moving difficulty');
insert into disease (id, name, symptoms) values (4, 'Fall Deficiency', 'Seizures,nail brittleness,hallucination,fainting,a metallic taste in mouth');
insert into disease (id, name, symptoms) values (5, 'Snake Cancer', 'hallucination,ankle pain,depression,cloudy urine,excessive yawning');
insert into disease (id, name, symptoms) values (6, 'Delirious Paralysis', 'Headache,pelvic pain,ringing ears,joint redness,moving difficulty');
insert into disease (id, name, symptoms) values (7, 'Permanent Paranoia', 'Breast pain,an itchy skin,temporary blindness,a skin bump outbreak,excess sweating');
insert into disease (id, name, symptoms) values (8, 'Spastic Blisters', 'Shaking hands,an itchy skin,frequent urination,ear pain,hyperactivity');
insert into disease (id, name, symptoms) values (9, 'Summer Swelling', 'Seizures,excess sweating,toothache,swallowing difficulty,bad breath');
insert into disease (id, name, symptoms) values (10, 'Red Infection', 'Hallucination and mood fluctuation generally start within a few days, but both symptoms are usually equally intense.');
insert into disease (id, name, symptoms) values (11, 'Ticklish Meningitis', 'Swallowing difficulty and excess sweating may start within a few hours, but one symptom generally lags behind the other.');
insert into disease (id, name, symptoms) values (12, 'Jungle Panic', 'Constipation and cloudy urine slowly increase in severity over a week, but one symptom generally lags behind the other.');
insert into disease (id, name, symptoms) values (13, 'Pygmy Ache', NULL);
insert into disease (id, name, symptoms) values (14, 'Tree Rabies', 'mouth sores and peeing difficulty slowly increase in severity over a week, but both symptoms always start together.');
insert into disease (id, name, symptoms) values (15, 'Bacterial Gangrene', NULL);
insert into disease (id, name, symptoms) values (16, 'Wizard Disease', 'Nasal congestion and back pain generally start within a few hours, but not necessarily at the same time.');
insert into disease (id, name, symptoms) values (17, 'Flower Virus', 'A loss of appetite and breathing difficulty may start within a few hours, but one symptom may be subdued in some cases.');
insert into disease (id, name, symptoms) values (18, 'Warping Head', 'Ringing ears,feeling sleepy,peeing difficulty,rectal pain,moving difficulty');
insert into disease (id, name, symptoms) values (19, 'Fall Deficiency', 'Seizures,nail brittleness,hallucination,fainting,a metallic taste in mouth');
insert into disease (id, name, symptoms) values (20, 'Deteriorating Malaria', 'Tingling hands and feeling sick often start out of nowhere within a few hours, but only one symptom may be experienced.');
insert into disease (id, name, symptoms) values (21, 'Dream Epilepsy', 'Finger numbness and a sore tongue generally start within a few days, but both symptoms always start together.');
insert into disease (id, name, symptoms) values (22, 'Brain Schizophrenia', 'A skin bump outbreak and acid reflux generally start within a week, but both symptoms are usually equally intense.');
insert into disease (id, name, symptoms) values (23, 'Autumn Dysfunctions', 'An itchy skin and drooling generally start within a week, but one symptom generally lags behind the other.');
insert into disease (id, name, symptoms) values (24, 'Intense Flu', 'Finger numbness and feeling tired generally start within a few hours, but only one symptom may be experienced.');
insert into disease (id, name, symptoms) values (25, 'Fatal Hallucinations', 'Cold feet and rectal pain slowly increase in severity over a few days, but both symptoms are always experienced at some time.');
insert into disease (id, name, symptoms) values (26, 'Avian Skin', 'Drooling and coughing often start out of nowhere within a week, but both symptoms are usually equally intense.');
insert into disease (id, name, symptoms) values (27, 'Guttural Fever', 'Finger numbness and abdominal pain generally start within a few days, but both symptoms always start together.');
insert into disease (id, name, symptoms) values (28, 'Violet Rash', NULL);
insert into disease (id, name, symptoms) values (29, 'Restless Tongue', 'Pelvic pain and chest pain often start out of nowhere within a few days, but both symptoms are always experienced at some time.');
insert into disease (id, name, symptoms) values (30, 'Phantom Baldness', NULL);
insert into disease (id, name, symptoms) values (31, 'Serpent Infertility', 'Tingling feet and a shortness of breath often start out of nowhere within a few hours, but both symptoms are usually equally intense.');
insert into disease (id, name, symptoms) values (32, 'Screaming Eyes', 'Pupil dilation and nail brittleness slowly increase in severity over a week, but rarely are both experienced at once.');
insert into disease (id, name, symptoms) values (33, 'Shivering Scurvy', ' Back pain and nasal congestion often start out of nowhere within a few hours, but both symptoms always start together.');
insert into disease (id, name, symptoms) values (34, 'Failing Aching', NULL);
insert into disease (id, name, symptoms) values (35, 'Ironbark Infection', 'A shortness of breath and moving difficulty slowly increase in severity over a few days, but only one symptom may be experienced.');

-- Patient-diseases
insert into patient_disease (patient_id, disease_id) values(1, 5);
insert into patient_disease (patient_id, disease_id) values(1, 35);
insert into patient_disease (patient_id, disease_id) values(1, 11);
insert into patient_disease (patient_id, disease_id) values(2, 4);
insert into patient_disease (patient_id, disease_id) values(2, 26);
insert into patient_disease (patient_id, disease_id) values(2, 29);
insert into patient_disease (patient_id, disease_id) values(3, 22);
insert into patient_disease (patient_id, disease_id) values(3, 13);
insert into patient_disease (patient_id, disease_id) values(3, 19);
insert into patient_disease (patient_id, disease_id) values(4, 24);
insert into patient_disease (patient_id, disease_id) values(4, 20);
insert into patient_disease (patient_id, disease_id) values(5, 20);
insert into patient_disease (patient_id, disease_id) values(5, 18);
insert into patient_disease (patient_id, disease_id) values(5, 15);
insert into patient_disease (patient_id, disease_id) values(6, 10);
insert into patient_disease (patient_id, disease_id) values(6, 7);
insert into patient_disease (patient_id, disease_id) values(6, 27);
insert into patient_disease (patient_id, disease_id) values(7, 33);
insert into patient_disease (patient_id, disease_id) values(7, 18);
insert into patient_disease (patient_id, disease_id) values(7, 23);
insert into patient_disease (patient_id, disease_id) values(8, 26);
insert into patient_disease (patient_id, disease_id) values(8, 30);
insert into patient_disease (patient_id, disease_id) values(8, 11);
insert into patient_disease (patient_id, disease_id) values(9, 34);
insert into patient_disease (patient_id, disease_id) values(9, 15);
insert into patient_disease (patient_id, disease_id) values(9, 1);
insert into patient_disease (patient_id, disease_id) values(10, 29);
insert into patient_disease (patient_id, disease_id) values(10, 16);
insert into patient_disease (patient_id, disease_id) values(10, 1);
insert into patient_disease (patient_id, disease_id) values(11, 26);
insert into patient_disease (patient_id, disease_id) values(11, 27);
insert into patient_disease (patient_id, disease_id) values(11, 17);
insert into patient_disease (patient_id, disease_id) values(11, 2);
insert into patient_disease (patient_id, disease_id) values(1, 3);
insert into patient_disease (patient_id, disease_id) values(2, 6);
insert into patient_disease (patient_id, disease_id) values(3, 8);
insert into patient_disease (patient_id, disease_id) values(4, 9);
insert into patient_disease (patient_id, disease_id) values(5, 12);
insert into patient_disease (patient_id, disease_id) values(6, 14);
insert into patient_disease (patient_id, disease_id) values(7, 21);
insert into patient_disease (patient_id, disease_id) values(8, 25);
insert into patient_disease (patient_id, disease_id) values(9, 28);
insert into patient_disease (patient_id, disease_id) values(10, 31);