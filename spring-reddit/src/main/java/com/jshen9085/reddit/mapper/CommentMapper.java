package com.jshen9085.reddit.mapper;

import com.jshen9085.reddit.dto.CommentDto;
import com.jshen9085.reddit.model.Comment;
import com.jshen9085.reddit.model.Post;
import com.jshen9085.reddit.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "text", source = "commentsDto.text")
    @Mapping(target = "post", source = "post")
    @Mapping(target = "createdDate", expression = "java(java.time.Instant.now())")
    Comment map(CommentDto commentsDto, Post post, User user);

    @Mapping(target = "postId", expression = "java(comment.getPost().getPostId())")
    @Mapping(target = "userName", expression = "java(comment.getUser().getUsername())")
    CommentDto mapToDto(Comment comment);
}
