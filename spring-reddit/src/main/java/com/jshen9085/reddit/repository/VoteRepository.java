package com.jshen9085.reddit.repository;

import com.jshen9085.reddit.model.Post;
import com.jshen9085.reddit.model.Vote;
import com.jshen9085.reddit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);

}
