import { PrismaClient } from "../dist";

const prisma = new PrismaClient();

const subsites = [
  {
    name: "Мнения",
    slug: "opinions",
    avatar: "/images/subsites/opinions.png",
    description: "Обсуждения, дискуссии, точки зрения на события и тренды.",
  },
  {
    name: "Новости",
    slug: "news",
    avatar: "/images/subsites/news.png",
    description:
      "Подсайт, где редакция и пользователи вместе публикуют новости и держат руку на пульсе. Задача — зафиксировать повестку дня.",
  },
  {
    name: "Технологии",
    slug: "tech",
    avatar: "/images/subsites/tech.png",
    description:
      "Как меняются технологии, и как они меняют нас — от новых айфонов до прорывных разработок и взгляда в будущее.",
  },
  {
    name: "Наука",
    slug: "science",
    avatar: "/images/subsites/science.png",
    description:
      "Церковь им. Илона Маска: космос, медицина, генетика, нобелевские премии и самые заметные открытия.",
  },
  {
    name: "Интернет",
    slug: "internet",
    avatar: "/images/subsites/internet.png",
    description:
      "Тренды и новости интернета, истории из соцсетей, погружение в цифровую культуру и объяснения мемов.",
  },
  {
    name: "Разборы",
    slug: "analysis",
    avatar: "/images/subsites/analysis.png",
    description:
      "Аналитика, статьи и интервью на тему повестки. Вдумчиво об актуальном.",
  },
  {
    name: "Истории",
    slug: "stories",
    avatar: "/images/subsites/stories.png",
    description:
      "Длинные тексты на любые темы: реальные события из прошлого, собственные репортажи, детективные истории и расследования.",
  },
  {
    name: "Путешествия",
    slug: "travel",
    avatar: "/images/subsites/travel.png",
    description:
      "Куда поехать, как сэкономить, подводные камни, самые интересные шпили.",
  },
  {
    name: "Дизайн и архитектура",
    slug: "art",
    avatar: "/images/subsites/art.png",
    description:
      "Искусство, архитектура, граффити, художники и дизайнеры, транспортные развязки. Уголок перфекционистов.",
  },
  {
    name: "Вопросы",
    slug: "ask",
    avatar: "/images/subsites/ask.png",
    description:
      "Здесь можно спросить других пользователей о чём угодно и, может быть, получить ответ.",
  },
  {
    name: "Мемы",
    slug: "topkek",
    avatar: "/images/subsites/topkek.png",
    description:
      "Территория микропостинга. Место для тех, кто хочет опубликовать или просто посмотреть забавные картинки.",
  },
  {
    name: "Офтоп",
    slug: "flood",
    avatar: "/images/subsites/flood.png",
    description:
      "Если вы нашли что-то интересное (новость, статью, картинку, что угодно), но не знаете, в какой подсайт это опубликовать, публикуйте в «Офтоп».",
  },
  {
    name: "Животные",
    slug: "animals",
    avatar: "/images/subsites/animals.png",
    description:
      "В мире животных: как выбрать собаку, как ухаживать за попугаем, рейтинг лучших пород домашних кошек, проблемы питомников, дикая природа.",
  },
  {
    name: "Сделал сам",
    slug: "handmade",
    avatar: "/images/subsites/handmade.png",
    description:
      "Здесь мы собираем то, что члены клуба делают сами — руками или как могут. Рисунки, фигурки, беседки и даже целые дома.",
  },
  {
    name: "Twitter",
    slug: "tweets",
    avatar: "/images/subsites/tweets.png",
    description:
      "Здесь мы собираем лучшие твиты за сутки с помощью бота, а еще просто публикуем те твиты, которые понравились пользователям.",
  },
  {
    name: "Telegram",
    slug: "telegram",
    avatar: "/images/subsites/telegram.png",
    description:
      "Здесь мы собираем лучшие посты телеграма за сутки с помощью бота, а еще просто публикуем те посты из телеграма, которые понравились пользователям.",
  },
  {
    name: "Заголовки",
    slug: "zagolovki",
    avatar: "/images/subsites/zagolovki.png",
    description: "Это не Панорама, а реальность.",
  },
  {
    name: "Будущее",
    slug: "future",
    avatar: "/images/subsites/future.png",
    description: "Которого нет.",
  },
  {
    name: "Кино и сериалы",
    slug: "tv",
    avatar: "/images/subsites/tv.png",
    description:
      "Трейлеры, рецензии на фильмы, подборки сериалов, новости кинобизнеса и стриминговых сервисов.",
  },
  {
    name: "Музыка",
    slug: "music",
    avatar: "/images/subsites/music.png",
    description:
      "Новые альбомы, клипы, концерты, истории о музыкантах, а также эксперименты клуба.",
  },
  {
    name: "Секс и отношения 🍆🍑",
    slug: "sex",
    avatar: "/images/subsites/sex.png",
    description:
      "Как найти вторую половинку и что с ней делать, когда найдёшь 💏.",
  },
  {
    name: "Reddit",
    slug: "reddit",
    avatar: "/images/subsites/reddit.png",
    description: "Главная страница интернета. Узнали?",
  },
  {
    name: "Разработка",
    slug: "dev",
    avatar: "/images/subsites/dev.png",
    description:
      "Классический мир разработки, системного администрирования и QA.",
  },
  {
    name: "Фото",
    slug: "photo",
    avatar: "/images/subsites/photo.png",
    description:
      "Только ваши собственные фотографии. Например, с телефона. Например, селфи.",
  },
  {
    name: "Подкасты",
    slug: "podcasts",
    avatar: "/images/subsites/podcasts.png",
    description: "Подкасты, иногда даже авторские",
  },
  {
    name: "Пора валить",
    slug: "emigration",
    avatar: "/images/subsites/emigration.png",
    description: "Давно пора",
  },
  {
    name: "Видео и гифки",
    slug: "gifv",
    avatar: "/images/subsites/gifv.png",
    description:
      "Гифки и видео — наконец-то всё в одном месте. Это тот подсайт, куда можно постить короткие ролики, коубы и гифки без длинных описаний.",
  },
  {
    name: "Игры",
    slug: "games",
    avatar: "/images/subsites/games.png",
    description: "Сейчас я буду устанавливать все игры",
  },
  {
    name: "Мемы",
    slug: "memes",
    avatar: "/images/subsites/memes.png",
    description:
      "Это memes, подсайт с лучшим контентом для избранных. Смотрите мемы, приносите мемы.",
  },
  {
    name: "Искусство",
    slug: "painting",
    avatar: "/images/subsites/painting.png",
    description:
      "Классические произведения мастеров искусства со всего мира. Наслаждайтесь!",
  },
];

async function main() {
  await prisma.subsite.deleteMany();
  await prisma.subsite.createMany({ data: subsites });
}

main().catch(console.error);