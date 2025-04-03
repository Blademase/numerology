import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ru: {
    translation: {
      infoTable: {
        title: "Персональный расчет",
        subtitle: "Карта здоровья",
        chakraName: "НАЗВАНИЕ ЧАКРЫ",
        body: "ФИЗИКА",
        energy: "ЭНЕРГИЯ",
        emotion: "ЭМОЦИИ",
        total: "ИТОГО"
      },
      financePage: {
        enterBirthDate: "Введите дату рождения",
        day: "Число",
        month: "Месяц",
        year: "Год",
        calculate: "Рассчитать",
        commatrix:"Матрица совместимости",
        btn:"Рассчитать совместимость"
      },      
      sky: "Небо",        // ru
earth: "Земля",
spiritualHarmony: "Духовная гармония",
planetary: "Планетарное",
financeAccordion: {
  qualities: {
    title: "Личные качества",
    description: "Описание личных качеств"
  },
  soulWork: {
    title: "Кем работать для души",
    description: "Описание работы для души"
  },
  karma: {
    title: "Карма и задача 40 лет",
    description: "Описание кармы и задачи"
  },
  pastLife: {
    title: "Задачи из прошлых жизней",
    description: "Описание задач из прошлых жизней"
  },
  comfortPoint: {
    title: "Точка комфорта",
    description: "Описание точки комфорта"
  },
  selfRealization: {
    title: "Самореализация",
    description: "Описание самореализации"
  },
  pointPersonalPower: {
    title: "Точка личной силы",
    description: "Описание точки личной силы"
  },
  genericPower: {
    title: "Сила рода",
    description: "Описание силы рода"
  },
  parentChildKarma: {
    title: "Детско-родительская карма",
    description: "Описание детско-родительской кармы"
  },
  spiritualKarma: {
    title: "Духовная карма",
    description: "Описание духовной кармы"
  },
  matrixRelationship: {
    title: "Отношения в матрице",
    description: "Описание отношений в матрице"
  },
  matrixMoney: {
    title: "Деньги в матрице",
    description: "Описание денег в матрице"
  },
  soulMission: {
    title: "Миссия души",
    description: "Описание миссии души"
  },
  diseasePredisposition: {
    title: "Предрасположенность к заболеваниям",
    description: "Описание предрасположенности к заболеваниям"
  },
  healthMap: {
    title: "Карта здоровья",
    description: "Описание карты здоровья"
  }
}
,
      // Header + UI
      matrix: "Матрица судьбы",
      finance: "Финансы",
      compatibility: "Совместимость",
      child: "Детская",
      prognosis: "Прогноз 2025",
      login: "Войти",
      cabinet: "Личный кабинет",
      unlock: "Разблокировать",
      noDescription: "Нет описания",

      // Chakra names
      chakra_7: "7. Сахасрара",
      chakra_6: "6. Аджна",
      chakra_5: "5. Вишудха",
      chakra_4: "4. Анахата",
      chakra_3: "3. Манипура",
      chakra_2: "2. Свадхистана",
      chakra_1: "1. Муладхара",

      // Accordion titles
      qualities: "Личные качества",
      soulWork: "Кем работать для Души",
      karma: "Карма и задача 40 лет",
      comfortPoint: "Точка душевного комфорта",
      selfRealization: "Самореализация",
      pastLifeTasks: "Задачи, которые тянутся из прошлых жизней",
      personalPower: "Точка личной силы",
      ancestralStrength: "Сила рода",

      parentChildKarma: "Детско-родительская карма",
      spiritualKarma: "Духовная карма",
      matrixRelationship: "Отношения в матрице",
      matrixMoney: "Деньги в матрице",
      soulMission: "Миссия души",
      diseasePredisposition: "Предрасположенность к заболеваниям",
      healthMap: "Карта здоровья",

      // PersonalInfo
      searchSelf: "Поиск себя:",
      searchSelfDesc: "Соединение мужского и женского. Выстраивание взаимоотношений. Способности, навыки, умения.",
      socialization: "Социализация:",
      socializationDesc: "Социальная и родовая системы. Результаты и признание в социуме.",
      spiritualQuestion1: "Духовный зачет. Кто я для бога? Где божественное во мне?",
      spiritualQuestion2: "Планетарное предназначение человека",

      // Months
      months: {
        1: "Январь",
        2: "Февраль",
        3: "Март",
        4: "Апрель",
        5: "Май",
        6: "Июнь",
        7: "Июль",
        8: "Август",
        9: "Сентябрь",
        10: "Октябрь",
        11: "Ноябрь",
        12: "Декабрь"
      }
    }
  },

  en: {
    translation: {
      matrix: "Destiny Matrix",
      finance: "Finance",
      compatibility: "Compatibility",
      child: "Child",
      prognosis: "Forecast 2025",
      login: "Login",
      cabinet: "My Cabinet",
      unlock: "Unlock",
      noDescription: "No description",

      chakra_7: "7. Sahasrara",
      chakra_6: "6. Ajna",
      chakra_5: "5. Vishuddha",
      chakra_4: "4. Anahata",
      chakra_3: "3. Manipura",
      chakra_2: "2. Svadhisthana",
      chakra_1: "1. Muladhara",

      qualities: "Personal qualities",
      soulWork: "Soul-purpose work",
      karma: "Karma and purpose at 40",
      comfortPoint: "Soul comfort point",
      selfRealization: "Self-realization",
      pastLifeTasks: "Tasks from past lives",
      personalPower: "Personal power point",
      ancestralStrength: "Ancestral strength",

      parentChildKarma: "Parent-child karma",
      spiritualKarma: "Spiritual karma",
      matrixRelationship: "Relationships in the matrix",
      matrixMoney: "Money in the matrix",
      soulMission: "Soul mission",
      diseasePredisposition: "Disease predisposition",
      healthMap: "Health map",

      searchSelf: "Search for self:",
      searchSelfDesc: "Unifying masculine and feminine. Building relationships. Skills and talents.",
      socialization: "Socialization:",
      socializationDesc: "Social and ancestral systems. Recognition and results.",
      spiritualQuestion1: "Spiritual test. Who am I to God? Where is divinity within me?",
      spiritualQuestion2: "Planetary purpose of a person",

      months: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      }
    }
  },

  fi: {
    
    translation: {
      infoTable: {
        title: "Henkilökohtainen laskenta",
        subtitle: "Terveyskartta",
        chakraName: "CHAKRAN NIMI",
        body: "FYYSINEN",
        energy: "ENERGIA",
        emotion: "TUNTEET",
        total: "YHTEENSÄ"
      },
      financePage: {
        enterBirthDate: "Syötä syntymäaika",
        day: "Päivä",
        month: "Kuukausi",
        year: "Vuosi",
        calculate: "Laske",
        commatrix: "Yhteensopivuusmatriisi",
        btn: "Laske yhteensopivuus"
        
      },      
      sky: "Taivas",
      earth: "Maa",
      spiritualHarmony: "Henkinen harmonia",
      planetary: "Planetaarinen",
      matrix: "Kohtalon matriisi",
      finance: "Talous",
      compatibility: "Yhteensopivuus",
      child: "Lapsi",
      prognosis: "Vuoden 2025 ennuste",
      login: "Kirjaudu",
      cabinet: "Oma tili",
      unlock: "Avaa",
      noDescription: "Ei kuvausta",
      financeAccordion: {
        qualities: {
          title: "Henkilökohtaiset ominaisuudet",
          description: "Henkilökohtaisten ominaisuuksien kuvaus"
        },
        soulWork: {
          title: "Sielun työ",
          description: "Kuvaus työstä sielulle"
        },
        karma: {
          title: "Karma ja tehtävä 40-vuotiaana",
          description: "Karman ja tehtävän kuvaus"
        },
        pastLife: {
          title: "Tehtävät menneistä elämistä",
          description: "Menneiden elämien tehtävien kuvaus"
        },
        comfortPoint: {
          title: "Mukavuuspiste",
          description: "Mukavuuspisteen kuvaus"
        },
        selfRealization: {
          title: "Itsensä toteuttaminen",
          description: "Itsensä toteuttamisen kuvaus"
        },
        pointPersonalPower: {
          title: "Henkilökohtainen voimapiste",
          description: "Henkilökohtaisen voimapisteen kuvaus"
        },
        genericPower: {
          title: "Suvun voima",
          description: "Suvun voiman kuvaus"
        },
        parentChildKarma: {
          title: "Lapsi–vanhempi-karma",
          description: "Lapsi–vanhempi-karman kuvaus"
        },
        spiritualKarma: {
          title: "Henkinen karma",
          description: "Henkisen karman kuvaus"
        },
        matrixRelationship: {
          title: "Suhteet matriisissa",
          description: "Suhteiden kuvaus matriisissa"
        },
        matrixMoney: {
          title: "Raha matriisissa",
          description: "Rahan kuvaus matriisissa"
        },
        soulMission: {
          title: "Sielun tehtävä",
          description: "Sielun tehtävän kuvaus"
        },
        diseasePredisposition: {
          title: "Alttius sairauksille",
          description: "Alttiuden kuvaus sairauksille"
        },
        healthMap: {
          title: "Terveyskartta",
          description: "Terveyskartan kuvaus"
        }
      },      
      chakra_7: "7. Sahasrara",
      chakra_6: "6. Ajna",
      chakra_5: "5. Vishuddha",
      chakra_4: "4. Anahata",
      chakra_3: "3. Manipura",
      chakra_2: "2. Svadhisthana",
      chakra_1: "1. Muladhara",

      qualities: "Henkilökohtaiset ominaisuudet",
      soulWork: "Sielun työ",
      karma: "Karma ja tehtävä 40-vuotiaana",
      comfortPoint: "Sielun mukavuuspiste",
      selfRealization: "Itsensä toteuttaminen",
      pastLifeTasks: "Tehtävät menneistä elämistä",
      personalPower: "Henkilökohtainen voimapiste",
      ancestralStrength: "Sukujen voima",

      parentChildKarma: "Lapsi–vanhempi-karma",
      spiritualKarma: "Henkinen karma",
      matrixRelationship: "Suhteet matriisissa",
      matrixMoney: "Raha matriisissa",
      soulMission: "Sielun tehtävä",
      diseasePredisposition: "Sairauksien alttius",
      healthMap: "Terveyskartta",

      searchSelf: "Itseä etsimässä:",
      searchSelfDesc: "Maskuliinisen ja feminiinisen yhdistäminen. Suhteiden rakentaminen. Taidot ja kyvyt.",
      socialization: "Sosiaalistuminen:",
      socializationDesc: "Sosiaaliset ja sukujärjestelmät. Tunnustus ja saavutukset.",
      spiritualQuestion1: "Henkinen testi. Kuka olen Jumalalle? Missä on jumaluus minussa?",
      spiritualQuestion2: "Ihmisen planetaarinen tarkoitus",

      months: {
        1: "Tammikuu",
        2: "Helmikuu",
        3: "Maaliskuu",
        4: "Huhtikuu",
        5: "Toukokuu",
        6: "Kesäkuu",
        7: "Heinäkuu",
        8: "Elokuu",
        9: "Syyskuu",
        10: "Lokakuu",
        11: "Marraskuu",
        12: "Joulukuu"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
