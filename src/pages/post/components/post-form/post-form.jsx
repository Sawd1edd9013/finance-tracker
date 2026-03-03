import { Input, Icon } from "../../../../components";
import { SpecialPanel } from "../special-panel.js/special-panel";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { PROP_TYPE } from "../../../../constans";
import styled from "styled-components";
import React from "react";

const PostFormContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
  const [titleValue, setTitleValue] = useState(title);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    setImageUrlValue(imageUrl);
    setTitleValue(title);
  }, [imageUrl, title]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerText = content ?? "";
    }
  }, [id, content]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerText);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: imageUrlValue,
        title: titleValue,
        content: newContent,
      }),
    ).then(({ id }) => navigate(`/post/${id}`));
  };

  const onImageChange = ({ target }) => setImageUrlValue(target.value);
  const onTitleChange = ({ target }) => setTitleValue(target.value);

  return (
    <div className={className}>
      <Input
        value={imageUrlValue}
        placeholder="Изображение..."
        onChange={onImageChange}
      />
      <Input
        value={titleValue}
        placeholder="Заголовок..."
        onChange={onTitleChange}
      />
      <SpecialPanel
        id={id}
        publishedAt={publishedAt}
        margin="20px 0"
        editButton={
          <Icon
            id="fa-floppy-o"
            margin="0 6px 0 0"
            size="25px"
            onClick={onSave}
          />
        }
      />
      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning
        className="post-text"
      ></div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  & img {
    float: left;
    margin: 0 20px 10px 0;
  }

  & .post-text {
    font-size: 18px;
    white-space: pre-line;
    min-height: 80px;
    border: 1px solid #000;
  }
`;

PostForm.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
