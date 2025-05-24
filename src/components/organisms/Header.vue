<template>
  <header class="header">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        aria-label="Логотип"
        role="img"
        class="logo-svg"
      >
        <rect width="100" height="100" fill="#007bff" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="20">
          Логотип
        </text>
      </svg>
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Продукция</a></li>
        <li><a href="#">Партнеры</a></li>
        <li><a href="#">Команда</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
    <div class="contact-info">
      <p>Отдел продаж</p>
      <p>+7 (913) 740-03-63</p>
      <p>пн-пт 09:00-17:00 (НСК)</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 1rem 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
}

.logo-svg {
  max-height: 50px;
  height: 50px;
}

.nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  margin: 0 1rem;
}

.nav a {
  text-decoration: none;
  color: #333; /* Цвет текста */
  transition: color 0.3s;
}

.nav a:hover {
  color: #007bff; /* Цвет при наведении */
}

.contact-info {
  text-align: right;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>