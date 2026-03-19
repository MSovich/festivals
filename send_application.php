<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Если кто-то пытается открыть файл напрямую — перенаправляем на главную
    header('Location: index.html');
    exit;
}

// email получателя
$to = 'via320486@gmail.com';

// Тема письма
$subject = 'Новая заявка на участие в фестивале';

// Сбор данных из формы (если поле не заполнено — подставляем пустую строку)
$fields = [
    'Название коллектива / ФИО солиста' => $_POST['collective_name'] ?? '',
    'Жанр' => $_POST['genre'] ?? '',
    'Город' => $_POST['city'] ?? '',
    'Телефон для связи' => $_POST['phone'] ?? '',
    'Электронная почта' => $_POST['email'] ?? '',
    'ФИО руководителя' => $_POST['leader_name'] ?? '',
    'Возраст участников (от-до)' => $_POST['age_range'] ?? '',
    'Количество человек' => $_POST['participants_count'] ?? '',
    'Название направляющей организации' => $_POST['organization'] ?? '',
    'Дата фестиваля' => $_POST['festival_date'] ?? '',
    'Дата заезда' => $_POST['arrival_date'] ?? '',
    'Дата выезда' => $_POST['departure_date'] ?? '',
    'Вопросы и пожелания' => $_POST['questions'] ?? '',
    'Как узнали о нас' => $_POST['how_found'] ?? '',
    'Согласие на обработку данных' => isset($_POST['agree']) ? 'Да' : 'Нет'
];

// Формируем тело письма
$message = '';
foreach ($fields as $label => $value) {
    $message .= "$label: " . ($value !== '' ? $value : '(не заполнено)') . "\n";
}

// Заголовки письма
$headers = "From: no-reply@edinstvorossii.ru\r\n";
$headers .= "Reply-To: " . ($fields['Электронная почта'] ?: $to) . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправка
if (mail($to, $subject, $message, $headers)) {
    // Успешно — возвращаем на страницу заявки с параметром success
    header('Location: application.html?success=1');
} else {
    // Ошибка — можно также перенаправить с параметром error
    header('Location: application.html?error=1');
}
exit;
?>
