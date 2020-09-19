package com.jshen9085.reddit.repository;

import com.jshen9085.reddit.model.Comment;
import com.jshen9085.reddit.model.Post;
import com.jshen9085.reddit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
