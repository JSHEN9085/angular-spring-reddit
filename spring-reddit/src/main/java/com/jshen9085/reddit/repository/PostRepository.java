package com.jshen9085.reddit.repository;

import com.jshen9085.reddit.model.Post;
import com.jshen9085.reddit.model.Subreddit;
import com.jshen9085.reddit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllBySubreddit(Subreddit subreddit);

    List<Post> findByUser(User user);
}
