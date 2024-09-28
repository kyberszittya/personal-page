package hu.kyberszittya.personal.backend.model;

import jakarta.persistence.*;

import java.util.Date;


@Entity
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    /// Getters
    ///
    ///

    public String getTitle() {
        return title;
    }

    public Date getDate() {
        return date;
    }

    public String getContent() {
        return content;
    }

}
