package hu.kyberszittya.personal.backend.controller;

import hu.kyberszittya.personal.backend.model.BlogPost;
import hu.kyberszittya.personal.backend.services.BlogPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class BlogPostController {
    private final BlogPostService blogPostService;

    public BlogPostController(BlogPostService blogPostService) {
        this.blogPostService = blogPostService;
    }

    @GetMapping("/blogposts")
    public List<BlogPost> getAllBlogPosts() {
        return blogPostService.getAllBlogPosts();
    }

    // GET blog post by ID
    @GetMapping("/blogposts/{id}")
    public ResponseEntity<BlogPost> getBlogPostById(@PathVariable Long id) {
        return ResponseEntity.ok(blogPostService.getBlogPostById(id));
    }

    // CREATE new blog post
    @PostMapping("/blogposts")
    public ResponseEntity<BlogPost> createBlogPost(@RequestBody BlogPost blogPost) {
        BlogPost createdPost = blogPostService.createBlogPost(blogPost);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    // DELETE blog post by ID
    @DeleteMapping("/blogposts/{id}")
    public ResponseEntity<Void> deleteBlogPost(@PathVariable Long id) {
        blogPostService.deleteBlogPost(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
