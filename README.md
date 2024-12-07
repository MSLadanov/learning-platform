<h2>Описание проекта</h2>
<p>Данный проект представляет собой каталог обучающих курсов, реализованный с использованием технологий Node.js и React. Серверная часть разработана на Express с использованием SQLite для хранения данных, а клиентская часть построена на React с использованием MobX для управления состоянием.</p>

<h2>Основные возможности</h2>
<ul>
    <li>Регистрация и авторизация пользователей</li>
    <li>Просмотр каталога курсов</li>
    <li>Пагинация курсов</li>
    <li>Адаптивная верстка</li>
</ul>

<h2>Структура проекта</h2>
<p>Проект содержит две основные папки:</p>
<ul>
    <li><code>client</code> - клиентская часть приложения</li>
    <li><code>server</code> - серверная часть приложения</li>
</ul>

<h2>Установка и запуск</h2>

<h3>1. Установка зависимостей</h3>
<p>Перед запуском проекта необходимо установить зависимости как для серверной, так и для клиентской части.</p>

<h4>Сервер</h4>
<ol>
    <li>Перейдите в папку сервера:</li>
    <pre><code>cd server</code></pre>
    <li>Установите зависимости:</li>
    <pre><code>npm install</code></pre>
    <li>Создайте файл <code>.env</code> в папке <code>server</code> и добавьте следующий код:</li>
    <pre><code>SECRET_KEY=ваш_секретный_ключ</code></pre>
</ol>

<h4>Клиент</h4>
<ol>
    <li>Перейдите в папку клиента:</li>
    <pre><code>cd ../client</code></pre>
    <li>Установите зависимости:</li>
    <pre><code>npm install</code></pre>
</ol>

<h3>2. Запуск сервера</h3>
<ol>
    <li>Перейдите в папку сервера, если вы еще не там:</li>
    <pre><code>cd server</code></pre>
    <li>Запустите сервер:</li>
    <pre><code>npm run dev</code></pre>
</ol>

<h3>3. Запуск клиента</h3>
<ol>
    <li>Перейдите в папку клиента, если вы еще не там:</li>
    <pre><code>cd ../client</code></pre>
    <li>Запустите клиент:</li>
    <pre><code>npm run dev</code></pre>
</ol>

<h2>Пример логина</h2>
<p>Для тестирования вы можете использовать следующие учетные данные:</p>
<ul>
    <li>Логин: <code>johndoe</code></li>
    <li>Пароль: <code>password123</code></li>
</ul>

<h2>База данных</h2>
<p>База данных уже включена в проект и создана с помощью SQLite и Sequelize. Она заполнена курсами и пользователями, поэтому вы можете сразу приступить к тестированию функционала.</p>

<h2>Используемые технологии</h2>
<ul>
    <li><strong>Сервер:</strong> 
        <ul>
            <li>Express</li>
            <li>SQLite</li>
            <li>Sequelize</li>
            <li>JSON Web Token (jsonwebtoken)</li>
        </ul>
    </li>
    <li><strong>Клиент:</strong> 
        <ul>
            <li>React</li>
            <li>MobX</li>
            <li>Styled-components</li>
            <li>Formik</li>
            <li>Yup</li>
            <li>React Router DOM</li>
            <li>TanStack React Query</li>
        </ul>
    </li>
</ul>

<h2>Вьюшки:</h2>

<img width="1440" alt="Снимок экрана 2024-12-07 в 21 12 23" src="https://github.com/user-attachments/assets/7c605990-4ee7-4e3e-8356-c1ff8d66d858">
<img width="1439" alt="Снимок экрана 2024-12-07 в 20 59 34" src="https://github.com/user-attachments/assets/eef5eaba-46aa-472e-864a-09fc2f8fb48a">
<img width="957" alt="Снимок экрана 2024-12-07 в 21 07 22" src="https://github.com/user-attachments/assets/b3a306c1-c614-4923-8df1-959e7af9b21c">
<img width="457" alt="Снимок экрана 2024-12-07 в 21 03 46" src="https://github.com/user-attachments/assets/3b16198c-1521-4bbc-8fb2-0ee189c78b50">
<img width="457" alt="Снимок экрана 2024-12-07 в 21 03 56" src="https://github.com/user-attachments/assets/d223e3fb-1f2a-4dee-93d6-14e47bea7048">
<img width="336" alt="Снимок экрана 2024-12-07 в 21 10 52" src="https://github.com/user-attachments/assets/82dc75d5-690d-453c-9657-b831f142af44">
<img width="336" alt="Снимок экрана 2024-12-07 в 21 10 22" src="https://github.com/user-attachments/assets/b72533fc-947e-430a-92c7-1c6117a6174f">
