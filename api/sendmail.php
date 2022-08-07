<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'path/to/PHPMailer/src/Exception.php';
    require 'path/to/PHPMailer/src/PHPMailer.php';
    require 'path/to/PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('gvozdev-work@mail.ru', 'Тестовый отправитель')
    $mail->addAddress('gvozdev-work@mail.ru')
    $mail->Subject = 'Тестовая отправка письма'

    $body = '<h1>Новая заявка</h1>';

    if(trim(!empty($_POST['form-phone'])) {
        $body.='<p>'.$_POST['form-phone'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];
    header('Content-type: application/json');
    echp json_encode($response)
?>