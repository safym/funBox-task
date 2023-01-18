# funBox-task
Решение заданий к вакансии младшего фронтенд-разработчика (HTML/CSS/JS, Junior).
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

Как сам сайт так и контент (который может появлять динамически, например) должен загружаться быстро и использовать меньше ресурсов устройства.

* **Внешний вид и интуитивность:** 

При первом посещении сайта пользователь обращает внимание на визуальную привлекательность сайта, поэтому сайт должен быть красивым, но не в ущерб удобства. Красивые кнопки, элементы навигации, шрифты, картинки сами по себе не могут решить тех целей, которые преследует пользователь, поэтому, кроме этого, сайт, в соответсвии с пользовательским опытом, должен быть интуитивно понятен. Функции, которые выполняет сайт, должны эффективно выполняться, помогая быстро получить нужный результат.

* **Адаптивность:**

Так как сейчас сайтами пользуются с множества устройств (и браузеров), десктопная версии сайта, например, с телефона может оказаться пользователю неудобной. Поэтому такие случаи учитываются в хорошей верстке. Интерфейс должен маштабироваться под размеры разных экранов, шрифты оставаться читаемыми, блоки с контентом должны быть гибкими. Также стоит учитывать особенности устройств и применять их к верстке (портретная/альбомная ориентация экрана, свайпы). В разных бразуерах сайт должен отображаться корректно.

* **Доступность:**

Разумно будет, в хорошей верстке предусмотреть возможности использования сайта большим числом людей. Человек с ограниченными возможностями имеет право пользоваться функционалом наравне с другими пользователями, поэтому при реализации сайта стоит пользоваться возможности структукрной семантики HTML: использовать подходящие для элемента HTML теги (ul/li для списков, button для кнопок, nav для меню навигации и другие).

### Менеджер проекта:

Менеджер проекта работает как с командой так и с заказчиками, определяет сроки и цели проекта, осуществляет контроль его реализации и сопровождает передачу проекта закачику. Для менеджера проекта хорошая верстка - это та, которая реализует все поставленные задачи в поставленные сроки, успешно проходит тестирование, не нуждается в доработках в будущем.

### Дизайнер:

Могу догадываться, что хорошая верстка для дизайнера - это сделать макет вертки красиво в соответсвии со своими представлениями так, чтобы реализация со стороны разработчиков не вызывала вопросов и не требовала глобальных изменений в макете (если макет сложно реализовать, описанные идеи плохо ложаться на технологии вестки - полагаю, что это плохо для дизайнеера и ему придется отказываться от каких то идей)

### Верстальщик:

Для верстальщика хорошая верстка - это успешная реализация задач проекта, которые касаются адаптивности, доступности. Результат соответсвует макету дизайнера, работает одинаково хорошо на разных устройствах и браузерах, используется понятная семантика и стили для дальнейшей работы с проектом (команде понятно как реализовать логику, заказчику в будущем понятно как поддерживать)

### Клиентский программист:

Задача фронтенд программиста - реализовать логику приложения применимо к верстке. Хорошая вертска для него - это понятно описанная структура разметки и стилей, с которой разработанные скрипты работают корректно.

### Серверный программист:

Лично я для себя не вижу связи верстки и бэкенда (возможно, я чего то не знаю).

Но предполагаю, что между сайтом или веб-приложением в целом (то, за что отвечает фронтенд) и бэкендом связь есть. Так как от клиентской стороны запросы отправляются на сервер, важно чтобы они отправлялись корректно и не перегружали сервер.

## Q2
> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструментыи технологии вы применяли на практике.

У меня не было опыта создания многостраничных приложений, но общее понимание как они работают есть. Разным страницам многостраничного сайта соответсвует отдельный html файл и часто основные элементы страницы сохраняют свой дизайн (навигационная панель на главной странице и странице с товарами будет выглядеть одинаково). Поэтому, мне кажется, чтобы сохранить возможность для изменений стилей важно построить понятную структуру страницы html и стилей css, в которой назначенные статичным элементам css классы были бы объеденены логически (например, отдельный css файл описания общих стилей)

## Q3
> Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и  планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.
## Q4
> Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.
## Q5
> Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?
## Q6
> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?
## Q7
> Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
## Q8
> Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
