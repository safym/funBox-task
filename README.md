# 21.01.2022 - Кривопалова Майя Сергеевна (для funbox)

Deploy: https://safym.github.io/funBox-task/

Запуск проекта:

> npm install

> npm start

## Task-1

Сверстать страницу, показанную на рисунке. Внешний вид должен полностью соответствовать макету, а поведение — описанию задачи. 

![layout](/src/img/layout.png)

Task Requirements:

1. Фон занимает всю площадь экрана, блок находится по центру вертикально и
горизонтально.
2. На планшетах упаковки располагаются треугольником, на смартфонах друг под
другом.
3. Информация о продукте может меняться.
4. Каждая из упаковок может быть выбрана или недоступна для выбора. Выбор
осуществляется нажатием на упаковку или на текст «купи» в описании.
5. Можно выбрать одновременно несколько упаковок, а также отменить свой
выбор повторным нажатием на упаковку.
6. Состояние наведения применяется к выбранной упаковке не сразу, а после того,
как курсор ушел с нее после первоначального выбора.


## Ответы на вопросы и решение задания к вакансии младшего фронтенд-разработчика (HTML/CSS/JS, Junior).

## Q1

> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
> * пользователя;
> * менеджера проекта;
> * дизайнера;
> * верстальщика;
> * клиентского программиста;
> * серверного программиста.

### Пользователь:

Пользователь, как лицо для которого разрабатывался/верстался сайт, обычно не посвящен в процессы работы этого сайта, поэтому для него главную роль играют практические моменты использования:

* **Скорость загрузки:**

Как сам сайт так и контент (который может появляться динамически, например) должны загружаться быстро и использовать меньше ресурсов устройства.

* **Внешний вид и интуитивность:** 

При первом посещении сайта пользователь обращает внимание на визуальную привлекательность сайта, поэтому сайт должен быть красивым, но не в ущерб удобству. Красивые кнопки, элементы навигации, шрифты, картинки сами по себе не могут решить тех целей, которые преследует пользователь, поэтому, кроме этого, сайт, в соответсвии с пользовательским опытом, должен быть интуитивно понятен. Функции, которые выполняет сайт, должны эффективно и быстро приводить к нужному результату.

* **Адаптивность:**

Так как сейчас сайтами пользуются с множества устройств (и браузеров), десктопная версия сайта, например, с телефона может оказаться пользователю неудобной. Поэтому такие случаи учитываются в хорошей верстке. Интерфейс должен масштабироваться под размеры разных экранов, шрифты оставаться читаемыми, блоки с контентом должны быть гибкими. Также стоит учитывать особенности устройств и применять их к верстке (портретная/альбомная ориентация экрана, свайпы). В разных бразуерах сайт должен отображаться корректно и не терять функционал.

* **Доступность:**

Разумно будет в хорошей верстке предусмотреть возможности использования сайта большим числом разных людей. Человек с ограниченными возможностями имеет право пользоваться функционалом наравне с другими пользователями, поэтому при реализации сайта стоит пользоваться возможностями структурной семантики HTML: использовать подходящие для элемента HTML теги (ul/li для списков, button для кнопок, nav для меню навигации и другие).

### Менеджер проекта:

Менеджер проекта работает как с командой так и с заказчиками, определяет сроки выполнения задач и цели проекта, осуществляет контроль его реализации и сопровождает передачу проекта закачику. Для менеджера проекта хорошая верстка - это та, которая реализует все поставленные задачи в поставленные сроки, успешно проходит тестирование, не нуждается в доработках в будущем.

### Дизайнер:

Могу догадываться, что хорошая верстка для дизайнера - это сделать макет верстки красиво в соответствии со своими представлениями так, чтобы реализация со стороны разработчиков не вызывала вопросов и не требовала глобальных изменений в макете (если макет сложно реализовать, описанные идеи плохо ложатся на технологии верстки - полагаю, что это плохо для дизайнера и ему придется отказываться от каких-то идей).

### Верстальщик:

Для верстальщика хорошая верстка - это успешная реализация задач проекта, которые касаются адаптивности, доступности. Результат соответствует макету дизайнера, работает одинаково хорошо на разных устройствах и браузерах, используется понятная семантика и стили для дальнейшей работы с проектом (команде понятно как реализовать логику, заказчику в будущем понятно как поддерживать).

### Клиентский программист:

Задача фронтенд программиста - реализовать логику приложения применимо к верстке. Хорошая вертска для него - это понятно описанная структура разметки и стилей, с которой разработанные скрипты работают корректно.

### Серверный программист:

Лично я для себя не вижу связи именно верстки (стили и прочее) и бэкенда, возможно, я чего-то не знаю.

Но предполагаю, что между сайтом или веб-приложением в целом (то, за что отвечает фронтенд) и бэкендом связь есть. Так как от клиентской стороны запросы отправляются на сервер, важно чтобы они отправлялись в достаточном объеме и не перегружали сервер.

## Q2

> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструментыи технологии вы применяли на практике.

У меня не было опыта создания многостраничных приложений, но общее понимание как они работают есть. Разным страницам многостраничного сайта соответсвует отдельный html файл и часто основные элементы страницы сохраняют свой дизайн (навигационная панель на главной странице и странице с товарами будет выглядеть одинаково). Поэтому, мне кажется, чтобы сохранить возможность для изменения стилей важно построить понятную структуру страницы html и стилей css, в которой назначенные статичным элементам css классы были бы объединены логически (например, отдельный css файл описания общих стилей). Для такого проекта, думаю, нужно разбивать элементы интерфейса и его стили на логические блоки, которые в ходе работы можно использовать повторно, не прибегая к копированию кода.

## Q3

> Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и  планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 

Важно для адаптивной верстки продумать корректное размещение и отображение контента на экранах разных размеров, это достигается с помощью медиа-запросов для css стилей и использования относительных единиц измерения. Это я использовала в своих пет-проектах, проверяла результат в браузере, изменяя в панели разработчика разрешение и вживую на разных устройствах (десктоп, смартфон, макбук с высоким разрешением экрана и плотностью пикселей).

## Q4

> Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Я использую VS Code на линуксе, git для управления проектами. В разработке проектов очень помогает npm для управления пакетами и настроенный hot reload (с помощью live-server или при работе с настроенным проектом фреймворка). Пробовала запускать проект в докере, большого опыта в этом нет, но есть базовое понимание, что такой проект удобно будет запускать изолируя от внешних факторов (настройки системы, версии локальных пакетов и так далее). Я активно не тестирую свой код, но знаю о таких фреймворках как mocha или React Testing Library. Я хорошо осознаю важность тестирования, так оно помогает ошибкам не ускользать и экономит время разработчикам. Также знакома с понятием линтинга, знаю что помогает поддерживать стилистику и качество кода при работе с другими людьми.

## Q5

> Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Открою панель разработчика на странице в разных браузерах. В ней можно увидеть стурктуру html, стили каждого отдельного элемента и сетевые запросы, происходящие при загрузке страницы, а также их статусы. Также в консоли я могу увидеть ошибки, которые, вполне возможно, туда выведутся. 

## Q6

> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Если предполагается, что анимация все таки должна быть, я уточню у дизайнера, не поменялось ли задание в принципе или момент с анимациями был упущен.

## Q7

> Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Часто использую Stack Overflow, ютуб, MDN, документации отдельных библиотек, вот этот [гайд](https://doka.guide/).
Знаю про этот полезный [репозиторий](https://github.com/sorrycc/awesome-javascript). Периодически использую его для расширения своего кругозора, чтобы быть в курсе актуальных и полезных библиотек, фреймворков и прочих ресурсов для разработки.

Нравится читать про дизайн интерфейсов, схем (и не только) вот [здесь](https://ilyabirman.ru/)

В разработке мне нравится как создавать внешний вида пользовательского интерфейса, так и оживлять его с помощью JS, но все же хотелось бы больше углубиться и работать с JS.

## Q8

> Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Я окончила университет по IT-направлению, после этого работала год программистом 1С. Я хорошо работала в команде и мне нравилось отвечать за интерфейс мониторинга производственного цикла в системе, но я поняла что мне хотелось бы пользоваться актуальными технологиями разработки. Сейчас я в достаточной мере изучила (но постоянно продолжаю изучать) JavaScript/HTML/CSS и фреймворки React/Vue.

Я очень ответсвенно подхожу к работе и мне нравится самообучаться и копаться в задачах до самых мелочей. 

Последние пет-проекты:
 
1. [Магазин ностальгических телефонов (React)](https://github.com/safym/2000shop)
2. [Погода (JS)](https://github.com/safym/weather-app-vue)
3. [2048 (JS)](https://github.com/safym/2048-JS)
4. [Карточная игра по мотивам блекджек(JS)](https://github.com/safym/calico-jack)


