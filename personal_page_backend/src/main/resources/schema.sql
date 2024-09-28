CREATE TABLE blog_post (
                           id BIGINT AUTO_INCREMENT PRIMARY KEY,
                           title VARCHAR(255) NOT NULL,
                           date DATE NOT NULL,
                           content TEXT NOT NULL
);