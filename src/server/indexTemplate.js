const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <title>myReddit</title>
  <script defer src="/static/client.js"></script>
</head>
<body>
  <div id="app">${content}</div>
</body>
</html>
`;

export default indexTemplate;
