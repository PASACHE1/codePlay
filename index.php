<?php include 'characters.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mundo Programador</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="dark-theme">
  <div id="customCursor" class="fas fa-microchip cursor-color-1"></div>
  <div class="container text-center mt-5">
    <h1 class="title-glow">Bienvenido a <span class="text-highlight">CodPlay</span></h1>
    <p class="lead typing-text">¡Explora el mundo de la programación con estilo y diversión!</p>
    <div id="time" class="time-clock"></div>
    <div class="mt-4">
      <button class="btn btn-primary me-2" onclick="toggleTheme()">Cambiar Tema</button>
      <button class="btn btn-success me-2" onclick="switchCharacter()">Cambiar Personaje</button>
      <button class="btn btn-warning" onclick="changeCursorColor()">Cambiar Color de Cursor</button>
    </div>
  </div>
  <canvas id="gameCanvas" width="600" height="300"></canvas>
  <script>
    const characters = <?= json_encode($characters) ?>;
  </script>
  <script src="script.js"></script>
</body>
</html>
