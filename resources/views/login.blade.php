<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link href="style.css" rel="stylesheet" media="screen">
	<title>Login form</title>
</head>
<body>
	<form action="/user/login" method="POST" id="login-form">
		<div class="row">
			<label for="login">Логин:</label>
			<input type="text" name="username" id="login">
		</div>
		<div class="row">
			<label for="password">Пароль:</label>
			<input type="password" name="password" id="password">
		</div>
		<div class="row">
			<button type="submit">Вход</button>
		</div>
	</form>
</body>
</html>