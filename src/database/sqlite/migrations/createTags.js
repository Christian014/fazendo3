const createTags = `
CREATE TABLE IF NOT EXISTS tags(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FOREIGNKEY note_id REFERENCES notes (id),
    user_id REFERENCES notes(user_id),
    name VARCHAR
)
`;

module.exports = createTags;