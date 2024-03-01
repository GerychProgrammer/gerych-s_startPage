let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Russia, Saint Petersburg',
    scale: "C",
  },
  clock: {
    format: "h:i - m/b/Y",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"]
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://ya.ru/?npr=1&utm_referrer=https%3A%2F%2Fyandex.ru%2F",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "Vkontakte",
            url: "https://vk.com/",
            icon: "brand-vk",
            icon_color: "#7daea3",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          }
        ],
      }, {
        name: "Some to watch",
        links: [
          {
            name: "KinoPoisk",
            url: "https://hd.kinopoisk.ru/",
            icon: "device-tv",
            icon_color: "#7daea3",
          },
          {
            name: "Shikimori",
            url: "https://shikimori.one/",
            icon: "planet",
            icon_color: "#907dae",
          },
          {
            name: "AniLibria",
            url: "https://vk.anilib.top/",
            icon: "brand-funimation",
            icon_color: "#aea97d",
          },
          {
            name: "AnimeGO",
            url: "https://animego.org/",
            icon: "basket-exclamation",
            icon_color: "#9aae7d",
          },
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "CodeWars",
              url: "https://www.codewars.com/",
              icon: "brand-codesandbox",
              icon_color: "#a9b665",
            },
            {
              name: "LeetCode",
              url: "https://leetcode.com/",
              icon: "code-dots",
              icon_color: "#e78a4e",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#fff",
            },
            {
              name: "yandex",
              url: "https://360.yandex.com/mail/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "mailRu",
              url: "https://mail.ru/",
              icon: "brand-gmail",
              icon_color: "#6267ea",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "YaDisk",
              url: "https://360.yandex.ru/disk/",
              icon: "box-seam",
              icon_color: "#ea6962",
            }
          ],
        },
        // {
        //   name: "stuff",
        //   links: [
        //     {
        //       name: "",
        //       url: "https://www.linkedin.com/feed/",
        //       icon: "brand-linkedin",
        //       icon_color: "#7daea3",
        //     },
        //   ],
        // },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
