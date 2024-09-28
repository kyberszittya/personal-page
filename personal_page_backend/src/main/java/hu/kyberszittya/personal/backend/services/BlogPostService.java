package hu.kyberszittya.personal.backend.services;

import hu.kyberszittya.personal.backend.model.BlogPost;
import hu.kyberszittya.personal.backend.repository.BlogPostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostService {
    private final BlogPostRepository blogPostRepository;

    public BlogPostService(BlogPostRepository blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }

    public List<BlogPost> getAllBlogPosts() {
        return blogPostRepository.findAll();
    }

    public BlogPost getBlogPostById(Long id) {
        return blogPostRepository.findById(id).orElseThrow(
                () -> new RuntimeException("BlogPost not found")
        );
    }

    public BlogPost createBlogPost(BlogPost blogPost) {
        return blogPostRepository.save(blogPost);
    }

    public void deleteBlogPost(Long id) {
        blogPostRepository.deleteById(id);
    }
}
