import styled from "styled-components";
import { Icon } from "../../../../../../components";
import React from "react";
import {
  openModal,
  CLOSE_MODAL,
  removeCommentAsync,
} from "../../../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../../../../../hooks";
import { selectUserRole } from "../../../../../../selectors";
import { ROLE } from "../../../../../../constans";
import PropTypes from "prop-types";

const CommentsContainer = ({
  className,
  postId,
  id,
  author,
  publishedAt,
  content,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const userRole = useSelector(selectUserRole);

  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(removeCommentAsync(requestServer, postId, id));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      }),
    );
  };

  const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon inactive={true} id="fa-user-circle-o" size="22px" />
            <span>{author}</span>
          </div>

          <div className="published-at">
            <Icon inactive={true} id="fa-calendar-o" size="18px" />
            <span>{publishedAt}</span>
          </div>
        </div>

        <div className="comment-text">{content}</div>
      </div>

      {/* корзина вне карточки */}
      <div className="delete-icon">
        {isAdminOrModerator && (
          <Icon
            id="fa-trash-o"
            size="20px"
            onClick={() => onCommentRemove(id)}
          />
        )}
      </div>
    </div>
  );
};

export const Comment = styled(CommentsContainer)`
  position: relative;
  margin-top: 15px;

  & .comment {
    border: 1px solid #000;
    padding: 10px;
    background: #fff;
  }

  & .information-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  & .author {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & .published-at {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }

  & .comment-text {
    font-size: 16px;
    margin-top: 4px;
  }

  /* корзина справа вне блока */
  & .delete-icon {
    position: absolute;
    top: 12px;
    right: -35px;
    cursor: pointer;
  }
`;

Comment.propTypes = {
  postId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};
