package hu.kyberszittya.personal.backend;

import hu.kyberszittya.personal.backend.model.ContactForm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ContactController {
    @PostMapping("/contact")
    public ResponseEntity<String> handleContactForm(@RequestBody ContactForm form) {
        return ResponseEntity.ok("form submit: success");
    }

}
