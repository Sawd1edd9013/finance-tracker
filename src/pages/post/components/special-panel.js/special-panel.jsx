import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { openModal, CLOSE_MODAL, removePostAsync } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../../components";
import { useServerRequest } from "../../../../hooks";
import { checkAccess } from "../../../../utils";
import { ROLE } from "../../../../constans";
import { selectUserRole } from "../../../../selectors";
import PropTypes from "prop-types";
import React from "react";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);
  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() =>
            navigate("/"),
          );
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      }),
    );
  };

  const isAdmin = checkAccess([ROLE.ADMIN], userRole);

  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && <Icon inactive={true} id="fa-calendar-o" size="22px" />}
        {publishedAt}
      </div>
      {isAdmin && (
        <div className="buttons">
          {editButton}
          {publishedAt && (
            <Icon
              id="fa-trash-o"
              size="25px"
              onClick={() => onPostRemove(id)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ margin }) => margin};

  & .published-at {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #444;
  }

  & .buttons {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  & .buttons i {
    cursor: pointer;
    transition: 0.2s ease;
  }

  & .buttons i:hover {
    opacity: 0.6;
  }
`;

SpecialPanel.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  editButton: PropTypes.node.isRequired,
};
