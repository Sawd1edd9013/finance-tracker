import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components";
import { selectUserId, selectUserRole } from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import { addCommentAsync } from "../../../../actions";
import React from "react";
import { PROP_TYPE, ROLE } from "../../../../constans";
import PropTypes from "prop-types";

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const userId = useSelector(selectUserId);
  const userRole = useSelector(selectUserRole);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onNewCommentAdd = () => {
    if (!newComment.trim()) return;
    dispatch(addCommentAsync(requestServer, userId, postId, newComment));
    setNewComment("");
  };
  const isGuest = userRole === ROLE.GUEST;
  return (
    <div className={className}>
      {!isGuest && (
        <div className="new-comment">
          <textarea
            name="comment"
            value={newComment}
            placeholder="Комментарий..."
            onChange={({ target }) => setNewComment(target.value)}
          />

          <div className="send-icon">
            <Icon id="fa-paper-plane-o" size="22px" onClick={onNewCommentAdd} />
          </div>
        </div>
      )}

      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            postId={postId}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 580px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;

  & .new-comment {
    position: relative;
    margin-bottom: 20px;
  }

  & textarea {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    padding: 10px;
    font-size: 16px;
    box-sizing: border-box;
  }

  /* самолетик справа снаружи */
  & .send-icon {
    position: absolute;
    top: 10px;
    right: -35px;
    cursor: pointer;
  }

  & .comments {
    display: flex;
    flex-direction: column;
  }
`;

Comments.propTypes = {
  comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
  postId: PropTypes.string.isRequired,
};
