// Données de vocabulaire et exercices pour le site
const vocabData = {
    francais: {
        salutations: [
            { fr: "Bonjour", ru: "Здравствуйте", audio: "" },
            { fr: "Bonsoir", ru: "Добрый вечер", audio: "" },
            { fr: "Bonne nuit", ru: "Спокойной ночи", audio: "" },
            { fr: "Au revoir", ru: "До свидания", audio: "" },
            { fr: "À bientôt", ru: "До скорого", audio: "" },
            { fr: "Salut", ru: "Привет", audio: "" },
            { fr: "Comment allez-vous ?", ru: "Как дела?", audio: "" },
            { fr: "Très bien, merci", ru: "Очень хорошо, спасибо", audio: "" },
            { fr: "Enchanté(e)", ru: "Очень приятно", audio: "" },
            { fr: "À demain", ru: "До завтра", audio: "" }
        ],
        nombres: [
            { fr: "Zéro", ru: "Ноль" },
            { fr: "Un", ru: "Один" },
            { fr: "Deux", ru: "Два" },
            { fr: "Trois", ru: "Три" },
            { fr: "Quatre", ru: "Четыре" },
            { fr: "Cinq", ru: "Пять" },
            { fr: "Six", ru: "Шесть" },
            { fr: "Sept", ru: "Семь" },
            { fr: "Huit", ru: "Восемь" },
            { fr: "Neuf", ru: "Девять" },
            { fr: "Dix", ru: "Десять" },
            { fr: "Vingt", ru: "Двадцать" },
            { fr: "Trente", ru: "Тридцать" },
            { fr: "Cent", ru: "Сто" },
            { fr: "Mille", ru: "Тысяча" }
        ],
        famille: [
            { fr: "Famille", ru: "Семья" },
            { fr: "Père", ru: "Отец" },
            { fr: "Mère", ru: "Мать" },
            { fr: "Frère", ru: "Брат" },
            { fr: "Sœur", ru: "Сестра" },
            { fr: "Fils", ru: "Сын" },
            { fr: "Fille", ru: "Дочь" },
            { fr: "Grand-père", ru: "Дедушка" },
            { fr: "Grand-mère", ru: "Бабушка" },
            { fr: "Oncle", ru: "Дядя" },
            { fr: "Tante", ru: "Тётя" },
            { fr: "Cousin", ru: "Двоюродный брат" },
            { fr: "Cousine", ru: "Двоюродная сестра" }
        ],
        couleurs: [
            { fr: "Rouge", ru: "Красный" },
            { fr: "Bleu", ru: "Синий" },
            { fr: "Vert", ru: "Зелёный" },
            { fr: "Jaune", ru: "Жёлтый" },
            { fr: "Orange", ru: "Оранжевый" },
            { fr: "Violet", ru: "Фиолетовый" },
            { fr: "Rose", ru: "Розовый" },
            { fr: "Noir", ru: "Чёрный" },
            { fr: "Blanc", ru: "Белый" },
            { fr: "Gris", ru: "Серый" },
            { fr: "Marron", ru: "Коричневый" }
        ],
        animaux: [
            { fr: "Chat", ru: "Кот" },
            { fr: "Chien", ru: "Собака" },
            { fr: "Oiseau", ru: "Птица" },
            { fr: "Cheval", ru: "Лошадь" },
            { fr: "Vache", ru: "Корова" },
            { fr: "Lapin", ru: "Кролик" },
            { fr: "Lion", ru: "Лев" },
            { fr: "Tigre", ru: "Тигр" },
            { fr: "Ours", ru: "Медведь" },
            { fr: "Éléphant", ru: "Слон" },
            { fr: "Poisson", ru: "Рыба" },
            { fr: "Serpent", ru: "Змея" }
        ],
        nourriture: [
            { fr: "Pain", ru: "Хлеб" },
            { fr: "Eau", ru: "Вода" },
            { fr: "Lait", ru: "Молоко" },
            { fr: "Fromage", ru: "Сыр" },
            { fr: "Œuf", ru: "Яйцо" },
            { fr: "Viande", ru: "Мясо" },
            { fr: "Poulet", ru: "Курица" },
            { fr: "Poisson", ru: "Рыба" },
            { fr: "Fruit", ru: "Фрукт" },
            { fr: "Pomme", ru: "Яблоко" },
            { fr: "Banane", ru: "Банан" },
            { fr: "Orange", ru: "Апельсин" },
            { fr: "Légume", ru: "Овощ" },
            { fr: "Tomate", ru: "Помидор" },
            { fr: "Carotte", ru: "Морковь" }
        ],
        corps: [
            { fr: "Tête", ru: "Голова" },
            { fr: "Yeux", ru: "Глаза" },
            { fr: "Nez", ru: "Нос" },
            { fr: "Bouche", ru: "Рот" },
            { fr: "Oreille", ru: "Ухо" },
            { fr: "Main", ru: "Рука" },
            { fr: "Pied", ru: "Нога" },
            { fr: "Doigt", ru: "Палец" },
            { fr: "Dos", ru: "Спина" },
            { fr: "Cœur", ru: "Сердце" }
        ],
        temps: [
            { fr: "Aujourd'hui", ru: "Сегодня" },
            { fr: "Hier", ru: "Вчера" },
            { fr: "Demain", ru: "Завтра" },
            { fr: "Lundi", ru: "Понедельник" },
            { fr: "Mardi", ru: "Вторник" },
            { fr: "Mercredi", ru: "Среда" },
            { fr: "Jeudi", ru: "Четверг" },
            { fr: "Vendredi", ru: "Пятница" },
            { fr: "Samedi", ru: "Суббота" },
            { fr: "Dimanche", ru: "Воскресенье" },
            { fr: "Mois", ru: "Месяц" },
            { fr: "Année", ru: "Год" },
            { fr: "Heure", ru: "Час" },
            { fr: "Minute", ru: "Минута" }
        ],
        transports: [
            { fr: "Voiture", ru: "Машина" },
            { fr: "Bus", ru: "Автобус" },
            { fr: "Train", ru: "Поезд" },
            { fr: "Avion", ru: "Самолёт" },
            { fr: "Vélo", ru: "Велосипед" },
            { fr: "Moto", ru: "Мотоцикл" },
            { fr: "Bateau", ru: "Лодка" },
            { fr: "Métro", ru: "Метро" }
        ],
        maison: [
            { fr: "Maison", ru: "Дом" },
            { fr: "Chambre", ru: "Комната" },
            { fr: "Cuisine", ru: "Кухня" },
            { fr: "Salle de bain", ru: "Ванная" },
            { fr: "Table", ru: "Стол" },
            { fr: "Chaise", ru: "Стул" },
            { fr: "Lit", ru: "Кровать" },
            { fr: "Fenêtre", ru: "Окно" },
            { fr: "Porte", ru: "Дверь" },
            { fr: "Jardin", ru: "Сад" }
        ],
        vetements: [
            { fr: "Chemise", ru: "Рубашка" },
            { fr: "Pantalon", ru: "Брюки" },
            { fr: "Robe", ru: "Платье" },
            { fr: "Chaussures", ru: "Обувь" },
            { fr: "Chapeau", ru: "Шляпа" },
            { fr: "Manteau", ru: "Пальто" },
            { fr: "Jupe", ru: "Юбка" },
            { fr: "Chaussettes", ru: "Носки" }
        ],
        meteo: [
            { fr: "Soleil", ru: "Солнце" },
            { fr: "Pluie", ru: "Дождь" },
            { fr: "Neige", ru: "Снег" },
            { fr: "Vent", ru: "Ветер" },
            { fr: "Nuage", ru: "Облако" },
            { fr: "Chaud", ru: "Жарко" },
            { fr: "Froid", ru: "Холодно" },
            { fr: "Tempête", ru: "Буря" }
        ],
        actions: [
            { fr: "Manger", ru: "Есть" },
            { fr: "Boire", ru: "Пить" },
            { fr: "Dormir", ru: "Спать" },
            { fr: "Marcher", ru: "Идти" },
            { fr: "Courir", ru: "Бегать" },
            { fr: "Lire", ru: "Читать" },
            { fr: "Écrire", ru: "Писать" },
            { fr: "Parler", ru: "Говорить" },
            { fr: "Écouter", ru: "Слушать" },
            { fr: "Regarder", ru: "Смотреть" }
        ],
        pays: [
            { fr: "France", ru: "Франция" },
            { fr: "Russie", ru: "Россия" },
            { fr: "Allemagne", ru: "Германия" },
            { fr: "Espagne", ru: "Испания" },
            { fr: "Italie", ru: "Италия" },
            { fr: "Angleterre", ru: "Англия" },
            { fr: "États-Unis", ru: "США" },
            { fr: "Chine", ru: "Китай" }
        ]
    },
    russe: {
        salutations: [
            { ru: "Здравствуйте", fr: "Bonjour" },
            { ru: "Добрый вечер", fr: "Bonsoir" },
            { ru: "Спокойной ночи", fr: "Bonne nuit" },
            { ru: "До свидания", fr: "Au revoir" },
            { ru: "До скорого", fr: "À bientôt" },
            { ru: "Привет", fr: "Salut" },
            { ru: "Как дела?", fr: "Comment allez-vous ?" },
            { ru: "Очень хорошо, спасибо", fr: "Très bien, merci" },
            { ru: "Очень приятно", fr: "Enchanté(e)" },
            { ru: "До завтра", fr: "À demain" }
        ],
        nombres: [
            { ru: "Ноль", fr: "Zéro" },
            { ru: "Один", fr: "Un" },
            { ru: "Два", fr: "Deux" },
            { ru: "Три", fr: "Trois" },
            { ru: "Четыре", fr: "Quatre" },
            { ru: "Пять", fr: "Cinq" },
            { ru: "Шесть", fr: "Six" },
            { ru: "Семь", fr: "Sept" },
            { ru: "Восемь", fr: "Huit" },
            { ru: "Девять", fr: "Neuf" },
            { ru: "Десять", fr: "Dix" },
            { ru: "Двадцать", fr: "Vingt" },
            { ru: "Тридцать", fr: "Trente" },
            { ru: "Сто", fr: "Cent" },
            { ru: "Тысяча", fr: "Mille" }
        ],
        famille: [
            { ru: "Семья", fr: "Famille" },
            { ru: "Отец", fr: "Père" },
            { ru: "Мать", fr: "Mère" },
            { ru: "Брат", fr: "Frère" },
            { ru: "Сестра", fr: "Sœur" },
            { ru: "Сын", fr: "Fils" },
            { ru: "Дочь", fr: "Fille" },
            { ru: "Дедушка", fr: "Grand-père" },
            { ru: "Бабушка", fr: "Grand-mère" },
            { ru: "Дядя", fr: "Oncle" },
            { ru: "Тётя", fr: "Tante" },
            { ru: "Двоюродный брат", fr: "Cousin" },
            { ru: "Двоюродная сестра", fr: "Cousine" }
        ],
        couleurs: [
            { ru: "Красный", fr: "Rouge" },
            { ru: "Синий", fr: "Bleu" },
            { ru: "Зелёный", fr: "Vert" },
            { ru: "Жёлтый", fr: "Jaune" },
            { ru: "Оранжевый", fr: "Orange" },
            { ru: "Фиолетовый", fr: "Violet" },
            { ru: "Розовый", fr: "Rose" },
            { ru: "Чёрный", fr: "Noir" },
            { ru: "Белый", fr: "Blanc" },
            { ru: "Серый", fr: "Gris" },
            { ru: "Коричневый", fr: "Marron" }
        ],
        animaux: [
            { ru: "Кот", fr: "Chat" },
            { ru: "Собака", fr: "Chien" },
            { ru: "Птица", fr: "Oiseau" },
            { ru: "Лошадь", fr: "Cheval" },
            { ru: "Корова", fr: "Vache" },
            { ru: "Кролик", fr: "Lapin" },
            { ru: "Лев", fr: "Lion" },
            { ru: "Тигр", fr: "Tigre" },
            { ru: "Медведь", fr: "Ours" },
            { ru: "Слон", fr: "Éléphant" },
            { ru: "Рыба", fr: "Poisson" },
            { ru: "Змея", fr: "Serpent" }
        ],
        nourriture: [
            { ru: "Хлеб", fr: "Pain" },
            { ru: "Вода", fr: "Eau" },
            { ru: "Молоко", fr: "Lait" },
            { ru: "Сыр", fr: "Fromage" },
            { ru: "Яйцо", fr: "Œuf" },
            { ru: "Мясо", fr: "Viande" },
            { ru: "Курица", fr: "Poulet" },
            { ru: "Рыба", fr: "Poisson" },
            { ru: "Фрукт", fr: "Fruit" },
            { ru: "Яблоко", fr: "Pomme" },
            { ru: "Банан", fr: "Banane" },
            { ru: "Апельсин", fr: "Orange" },
            { ru: "Овощ", fr: "Légume" },
            { ru: "Помидор", fr: "Tomate" },
            { ru: "Морковь", fr: "Carotte" }
        ],
        corps: [
            { ru: "Голова", fr: "Tête" },
            { ru: "Глаза", fr: "Yeux" },
            { ru: "Нос", fr: "Nez" },
            { ru: "Рот", fr: "Bouche" },
            { ru: "Ухо", fr: "Oreille" },
            { ru: "Рука", fr: "Main" },
            { ru: "Нога", fr: "Pied" },
            { ru: "Палец", fr: "Doigt" },
            { ru: "Спина", fr: "Dos" },
            { ru: "Сердце", fr: "Cœur" }
        ],
        temps: [
            { ru: "Сегодня", fr: "Aujourd'hui" },
            { ru: "Вчера", fr: "Hier" },
            { ru: "Завтра", fr: "Demain" },
            { ru: "Понедельник", fr: "Lundi" },
            { ru: "Вторник", fr: "Mardi" },
            { ru: "Среда", fr: "Mercredi" },
            { ru: "Четверг", fr: "Jeudi" },
            { ru: "Пятница", fr: "Vendredi" },
            { ru: "Суббота", fr: "Samedi" },
            { ru: "Воскресенье", fr: "Dimanche" },
            { ru: "Месяц", fr: "Mois" },
            { ru: "Год", fr: "Année" },
            { ru: "Час", fr: "Heure" },
            { ru: "Минута", fr: "Minute" }
        ],
        transports: [
            { ru: "Машина", fr: "Voiture" },
            { ru: "Автобус", fr: "Bus" },
            { ru: "Поезд", fr: "Train" },
            { ru: "Самолёт", fr: "Avion" },
            { ru: "Велосипед", fr: "Vélo" },
            { ru: "Мотоцикл", fr: "Moto" },
            { ru: "Лодка", fr: "Bateau" },
            { ru: "Метро", fr: "Métro" }
        ],
        maison: [
            { ru: "Дом", fr: "Maison" },
            { ru: "Комната", fr: "Chambre" },
            { ru: "Кухня", fr: "Cuisine" },
            { ru: "Ванная", fr: "Salle de bain" },
            { ru: "Стол", fr: "Table" },
            { ru: "Стул", fr: "Chaise" },
            { ru: "Кровать", fr: "Lit" },
            { ru: "Окно", fr: "Fenêtre" },
            { ru: "Дверь", fr: "Porte" },
            { ru: "Сад", fr: "Jardin" }
        ],
        vetements: [
            { ru: "Рубашка", fr: "Chemise" },
            { ru: "Брюки", fr: "Pantalon" },
            { ru: "Платье", fr: "Robe" },
            { ru: "Обувь", fr: "Chaussures" },
            { ru: "Шляпа", fr: "Chapeau" },
            { ru: "Пальто", fr: "Manteau" },
            { ru: "Юбка", fr: "Jupe" },
            { ru: "Носки", fr: "Chaussettes" }
        ],
        meteo: [
            { ru: "Солнце", fr: "Soleil" },
            { ru: "Дождь", fr: "Pluie" },
            { ru: "Снег", fr: "Neige" },
            { ru: "Ветер", fr: "Vent" },
            { ru: "Облако", fr: "Nuage" },
            { ru: "Жарко", fr: "Chaud" },
            { ru: "Холодно", fr: "Froid" },
            { ru: "Буря", fr: "Tempête" }
        ],
        actions: [
            { ru: "Есть", fr: "Manger" },
            { ru: "Пить", fr: "Boire" },
            { ru: "Спать", fr: "Dormir" },
            { ru: "Идти", fr: "Marcher" },
            { ru: "Бегать", fr: "Courir" },
            { ru: "Читать", fr: "Lire" },
            { ru: "Писать", fr: "Écrire" },
            { ru: "Говорить", fr: "Parler" },
            { ru: "Слушать", fr: "Écouter" },
            { ru: "Смотреть", fr: "Regarder" }
        ],
        pays: [
            { ru: "Франция", fr: "France" },
            { ru: "Россия", fr: "Russie" },
            { ru: "Германия", fr: "Allemagne" },
            { ru: "Испания", fr: "Espagne" },
            { ru: "Италия", fr: "Italie" },
            { ru: "Англия", fr: "Angleterre" },
            { ru: "США", fr: "États-Unis" },
            { ru: "Китай", fr: "Chine" }
        ]
    }
};

const alphabetRusse = [
    { lettre: "А а", son: "[a]", nom: "а" },
    { lettre: "Б б", son: "[b]", nom: "бэ" },
    { lettre: "В в", son: "[v]", nom: "вэ" },
    { lettre: "Г г", son: "[g]", nom: "гэ" },
    { lettre: "Д д", son: "[d]", nom: "дэ" },
    { lettre: "Е е", son: "[je]", nom: "е" },
    { lettre: "Ё ё", son: "[jo]", nom: "ё" },
    { lettre: "Ж ж", son: "[ž]", nom: "жэ" },
    { lettre: "З з", son: "[z]", nom: "зэ" },
    { lettre: "И и", son: "[i]", nom: "и" },
    { lettre: "Й й", son: "[j]", nom: "и краткое" },
    { lettre: "К к", son: "[k]", nom: "ка" },
    { lettre: "Л л", son: "[l]", nom: "эль" },
    { lettre: "М м", son: "[m]", nom: "эм" },
    { lettre: "Н н", son: "[n]", nom: "эн" },
    { lettre: "О о", son: "[o]", nom: "о" },
    { lettre: "П п", son: "[p]", nom: "пэ" },
    { lettre: "Р р", son: "[r]", nom: "эр" },
    { lettre: "С с", son: "[s]", nom: "эс" },
    { lettre: "Т т", son: "[t]", nom: "тэ" },
    { lettre: "У у", son: "[u]", nom: "у" },
    { lettre: "Ф ф", son: "[f]", nom: "эф" },
    { lettre: "Х х", son: "[x]", nom: "ха" },
    { lettre: "Ц ц", son: "[ts]", nom: "цэ" },
    { lettre: "Ч ч", son: "[č]", nom: "че" },
    { lettre: "Ш ш", son: "[š]", nom: "ша" },
    { lettre: "Щ щ", son: "[šč]", nom: "ща" },
    { lettre: "Ъ ъ", son: "[tverdiy znak]", nom: "твёрдый знак" },
    { lettre: "Ы ы", son: "[y]", nom: "ы" },
    { lettre: "Ь ь", son: "[myagkiy znak]", nom: "мягкий знак" },
    { lettre: "Э э", son: "[e]", nom: "э" },
    { lettre: "Ю ю", son: "[ju]", nom: "ю" },
    { lettre: "Я я", son: "[ja]", nom: "я" }
];

const phrasesUtiles = {
    francais: {
        restaurant: [
            { fr: "La carte, s'il vous plaît", ru: "Меню, пожалуйста" },
            { fr: "Je voudrais commander", ru: "Я хотел бы заказать" },
            { fr: "L'addition, s'il vous plaît", ru: "Счёт, пожалуйста" },
            { fr: "C'est délicieux", ru: "Это вкусно" },
            { fr: "Je suis végétarien(ne)", ru: "Я вегетарианец/вегетарианка" }
        ],
        hotel: [
            { fr: "J'ai une réservation", ru: "У меня есть бронь" },
            { fr: "Quel est le prix par nuit ?", ru: "Сколько стоит за ночь?" },
            { fr: "Où est ma chambre ?", ru: "Где моя комната?" },
            { fr: "Le petit-déjeuner est inclus ?", ru: "Завтрак включён?" }
        ],
        magasin: [
            { fr: "Combien ça coûte ?", ru: "Сколько это стоит?" },
            { fr: "Je cherche...", ru: "Я ищу..." },
            { fr: "Avez-vous... ?", ru: "У вас есть...?" },
            { fr: "Je vais prendre ça", ru: "Я возьму это" },
            { fr: "Où sont les toilettes ?", ru: "Где туалет?" }
        ],
        voyage: [
            { fr: "Où est la gare ?", ru: "Где вокзал?" },
            { fr: "Un billet pour...", ru: "Билет до..." },
            { fr: "À quelle heure part le train ?", ru: "Во сколько отправляется поезд?" },
            { fr: "Je suis perdu(e)", ru: "Я заблудился/заблудилась" },
            { fr: "Pouvez-vous m'aider ?", ru: "Можете помочь?" }
        ],
        urgence: [
            { fr: "Au secours !", ru: "Помогите!" },
            { fr: "Appelez la police", ru: "Вызовите полицию" },
            { fr: "J'ai besoin d'un médecin", ru: "Мне нужен врач" },
            { fr: "Où est l'hôpital ?", ru: "Где больница?" }
        ]
    },
    russe: {
        restaurant: [
            { ru: "Меню, пожалуйста", fr: "La carte, s'il vous plaît" },
            { ru: "Я хотел бы заказать", fr: "Je voudrais commander" },
            { ru: "Счёт, пожалуйста", fr: "L'addition, s'il vous plaît" },
            { ru: "Это вкусно", fr: "C'est délicieux" },
            { ru: "Я вегетарианец/вегетарианка", fr: "Je suis végétarien(ne)" }
        ],
        hotel: [
            { ru: "У меня есть бронь", fr: "J'ai une réservation" },
            { ru: "Сколько стоит за ночь?", fr: "Quel est le prix par nuit ?" },
            { ru: "Где моя комната?", fr: "Où est ma chambre ?" },
            { ru: "Завтрак включён?", fr: "Le petit-déjeuner est inclus ?" }
        ],
        magasin: [
            { ru: "Сколько это стоит?", fr: "Combien ça coûte ?" },
            { ru: "Я ищу...", fr: "Je cherche..." },
            { ru: "У вас есть...?", fr: "Avez-vous... ?" },
            { ru: "Я возьму это", fr: "Je vais prendre ça" },
            { ru: "Где туалет?", fr: "Où sont les toilettes ?" }
        ],
        voyage: [
            { ru: "Где вокзал?", fr: "Où est la gare ?" },
            { ru: "Билет до...", fr: "Un billet pour..." },
            { ru: "Во сколько отправляется поезд?", fr: "À quelle heure part le train ?" },
            { ru: "Я заблудился/заблудилась", fr: "Je suis perdu(e)" },
            { ru: "Можете помочь?", fr: "Pouvez-vous m'aider ?" }
        ],
        urgence: [
            { ru: "Помогите!", fr: "Au secours !" },
            { ru: "Вызовите полицию", fr: "Appelez la police" },
            { ru: "Мне нужен врач", fr: "J'ai besoin d'un médecin" },
            { ru: "Где больница?", fr: "Où est l'hôpital ?" }
        ]
    }
};

const exercices = {
    francais: [
        {
            type: "traduction",
            question: "Traduisez : 'Bonjour, comment allez-vous ?'",
            reponse: "Здравствуйте, как дела?",
            alternatives: ["Здравствуйте, как дела?", "До свидания", "Спасибо", "Пожалуйста"]
        },
        {
            type: "choix",
            question: "Comment dit-on 'Merci' en russe ?",
            reponse: "Спасибо",
            alternatives: ["Пожалуйста", "Спасибо", "До свидания", "Здравствуйте"]
        },
        {
            type: "traduction",
            question: "Traduisez : 'Je m'appelle...'",
            reponse: "Меня зовут...",
            alternatives: []
        }
    ],
    russe: [
        {
            type: "traduction",
            question: "Traduisez : 'Здравствуйте, как дела?'",
            reponse: "Bonjour, comment allez-vous?",
            alternatives: ["Bonjour, comment allez-vous?", "Au revoir", "Merci", "S'il vous plaît"]
        },
        {
            type: "choix",
            question: "Comment dit-on 'Спасибо' en français ?",
            reponse: "Merci",
            alternatives: ["S'il vous plaît", "Merci", "Au revoir", "Bonjour"]
        }
    ]
};

