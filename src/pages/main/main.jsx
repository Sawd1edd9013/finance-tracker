import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { PostCard, Pagination, Search } from "./components";
import { PAGINATION_LIMIT } from "../../constans";
import { useServerRequest } from "../../hooks";
import { debounce } from "./utils";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
      ({ res }) => {
        setPosts(res.posts);
        const computedLastPage = Math.ceil(res.totalCount / PAGINATION_LIMIT);
        setLastPage(computedLastPage);
      },
    );
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    setPage(1);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <Search searchPhrase={searchPhrase} onChange={onSearch} />

      <div className="content">
        {posts.length ? (
          <div className="post-list">
            {posts.map(
              ({ id, title, imageUrl, publishedAt, commentsCount }) => (
                <PostCard
                  key={id}
                  id={id}
                  title={title}
                  imageUrl={imageUrl}
                  publishedAt={publishedAt}
                  commentsCount={commentsCount}
                />
              ),
            )}
          </div>
        ) : (
          <div className="no-posts-found">Статьи не найдены</div>
        )}
      </div>

      {lastPage > 1 && (
        <div className="pagination">
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export const Main = styled(MainContainer)`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;

  & .content {
    flex: 1;
  }

  & .post-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }

  & .no-posts-found {
    font-size: 18px;
    margin-top: 40px;
    text-align: center;
  }

  & .pagination {
    padding: 0 0 20px;
  }
  padding-top: 40px;
`;
