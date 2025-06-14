1.  **Название Секции и Контекст:**

    - **Название секции:** Продукция
    - **Основная цель секции:** Отображение различных категорий продукции, предлагаемой компанией.
    - **Расположение:** Предположительно, после секции "MksHero" и разделителя секции с названием "Продукция".

2.  **Имя Компонента:**

    - **Предлагаемое имя:** `MksProductsSection` компонент нужно разместить в папке `sections`

3.  **Описание Структуры и Расположения Элементов:**

    - **Основные блоки и элементы:** Секция содержит фоновое изображение (будет добавлено позже). Основное содержимое представляет собой список элементов продукции, расположенных в две колонки. Каждый элемент состоит из круглого изображения-иконки (иконки добавим позже, на их месте пока сделать заглушки) и текстового описания справа от нее. В нижней части секции находится элемент для получения коммерческого предложения (иконка PDF и текст).
    - **Расположение элементов:** Элементы продукции расположены в виде сетки из двух колонок. В каждой ячейке сетки изображение находится слева, текст справа. Элемент "Получить коммерческое предложение" расположен под списком продукции, выровнен по центру.
    - **Особенности адаптивной верстки:** На узких экранах, скорее всего, колонки должны схлопываться в одну. Размеры изображений и текста, а также отступы должны быть адаптированы под мобильные устройства.

4.  **Содержание Текста и Данных:**

    - **Текст для всех текстовых элементов:**
      - Электроды, сварочная проволока
      - Средства индивидуальной защиты: перчатки, рукавицы, краги, респираторы, очки, каски
      - Круги отрезные, шлифовальные, лепестковые, алмазные и пильные диски
      - Ручной инструмент: лопаты, метлы, уровни, рулетки, буры
      - Проволока вязальная, сетка рабица
      - Электроинструмент: дрели, шуруповерты, лобзики, перфораторы, строительные фены
      - Грунтовки, эмали, растворители, цинол
      - Пена монтажная, герметики, очиститель
      - Мастики, праймеры, рулонная гидроизоляция
      - Стропы: текстильные, канатные, цепные
      - Крепёж: гвозди, саморезы, дюбеля, заклёпки, стяжки
      - Патроны и дюбеля для монтажного пистолета
      - Получить коммерческое предложение
    - **Структура данных для повторяющихся элементов:** Есть 12 повторяющихся элементов продукции. Элемент продукции сверстать как отдельный компонент и поместить в папке `molecules`. В компонент они будут добавляться через цикл. Структура данных для одного элемента: `{ image: string; description: string; }`. Есть один элемент для коммерческого предложения: `{ icon: string; text: string; link?: string; }`. Иконки добавим позже, на их место пока верстаем заглушки.

5.  **Визуальное Оформление и Стили:**

    - **Основные цвета:** Текст белый или светло-серый. Фоновое изображение (добавим позже).
    - **Обратите внимание на шрифты, размеры текста, отступы:** Текст описаний, кажется, имеет одинаковый размер 20px и начертание semibold. Шрифт Montserrat. Между элементами есть значительные вертикальные и горизонтальные отступы. Изображения продукции круглые.
    - **Декоративные элементы:** Есть фоновое изображение (добавим позже). У изображений продукции, возможно, есть небольшая тень или обводка, создающая эффект круга.
    - **Использование Tailwind CSS:** Да, использовать Tailwind CSS классы для стилизации.

6.  **Интерактивные Элементы:**

    - **Назначение и поведение:** Элемент "Получить коммерческое предложение" должен быть ссылкой, которая, скачивает PDF файл.

7.  **Используемые Ресурсы (Изображения, Иконки):** будут добавлены позже.

    - **Расположение ресурсов:** Фоновое изображение и иконки продукции видны на скриншоте. Будут предоставлены отдельно, после извлечения из дизайн-макетов (SVG). Иконка PDF также со скриншота.

8.  **Скриншот:**
    - **Обязательно приложите скриншот** приложен к описанию.
