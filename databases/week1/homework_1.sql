use hyf_lesson1;

SELECT COUNT(id)
FROM task;

SELECT COUNT(id)
FROM task
WHERE due_date IS NULL;

SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name = 'DONE';

SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name != 'DONE';

SELECT *
FROM task
ORDER BY created DESC;

SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

SELECT title, due_date
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

SELECT task.title, status.name AS status
FROM task
JOIN status ON task.status_id = status.id;

SELECT status.name, COUNT(status.id) AS count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.id;

SELECT status.name, COUNT(status.id) AS count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.id
ORDER BY count DESC;