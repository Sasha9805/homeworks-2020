<?php
  $data = $_POST;
  // Можно обращаться и так
  // echo $data['username-offer'];
  // Вывести все данные
  // echo json_encode($data);
  // Если сломалась кодировка
  // echo json_encode($data, JSON_UNESCAPED_UNICODE);
  // Можно так
  // echo $data['username-offer'] . ', Ваша форма отправлена';
  echo $data['username-offer'];
?>