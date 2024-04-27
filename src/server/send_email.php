<?php
// Проверяем метод запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из тела запроса
    $data = json_decode(file_get_contents("php://input"), true);

    // Извлекаем данные из запроса
    $email = $data['email'];
    $message = $data['message'];

    // Email, на который будут отправлены сообщения
    $to = 'nikitakx9@gmail.com.ru';

    // Тема письма
    $subject = 'Новое сообщение с веб-формы';

    // Заголовки письма
    $headers = 'From: ' . $email;

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        // Ответ в случае успешной отправки
        echo json_encode(array("status" => "success", "message" => "Сообщение успешно отправлено"));
    } else {
        // Ответ в случае ошибки при отправке
        echo json_encode(array("status" => "error", "message" => "Ошибка отправки сообщения"));
    }
} else {
    // Возвращаем ошибку, если запрос не POST
    header("HTTP/1.1 405 Method Not Allowed");
    echo json_encode(array("status" => "error", "message" => "Метод не разрешен"));
}
?>