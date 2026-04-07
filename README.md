Области хранения данных:

- база данных на json-server
- BFF
- Redux Store

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего пользователя), Redux store (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), Redux Store (использование на клиенте)
- статья: БД (список статей), Redux Store (отображение в браузере)
- комментарии БД (список комментариев), Redux Store (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id
- роль - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / autor_id / post_id / content / published_at

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для Redux Store на клиенте:

- user: id / login / role_id / session
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив coment: id / autor / content / publishedAt
- users: массив user: id / login / registeredAt / role
