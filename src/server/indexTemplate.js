const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <title>myReddit</title>
  <link rel="stylesheet" href="/static/main.css">
  <script defer src="/static/client.js"></script>
  <script>
    window.history.replaceState(null, null, document.location.origin)
    window.__token__ = '${token}'
  </script>
</head>
<body>
  <div id="app">${content}</div>
  <div id="modal" class="post post--hidden"></div>
  <div id="dropdown"></div>
</body>
</html>
`;

export default indexTemplate;
