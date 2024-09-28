package hu.kyberszittya.personal.backend.repository;

import hu.kyberszittya.personal.backend.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
}
