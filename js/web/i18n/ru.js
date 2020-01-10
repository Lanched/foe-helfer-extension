/*
 * **************************************************************************************
 *
 * Dateiname:                 ru.js
 * Projekt:                   foe-chrome
 *
 * erstellt von:              Valery K. <anon97by@gmail.com>
 * erstellt am:	              06.01.20, 23:37 Uhr
 * zuletzt bearbeitet:       06.01.20, 23:37 Uhr
 *
 * Copyright © 2019
 *
 * **************************************************************************************
 */

let i18n = {
	"Local" : "ru-RU",
	"DateTime" : "DD.MM.YYYY HH:mm",

	"Boxes" : {
		"OwnpartCalculator" : {
			"Title": "Калькурятор вложений в свои ВС",
			"HelpLink": "https://foe-rechner.de/extension/index#Eigenanteilsrechner",
            "Step": "Уровень",
            "OldLevel": "Предыдущий уровень",
			"PatronPart": "Награда вкладчиков",
			"OwnPart": "Вклад владельца",
            "LGTotalFP": "Всего СО ВС",
            "OwnPartRemaining": "Осталось",
			"Done": "Вложено",
			"BPs": "СО",
			"Meds": "Медали",
			"Ext": "Ext",
			"Arc": "Арка",
			"Order": "Порядок",
			"Deposit": "Вклад",
			"CopyValues": "Копировать значения",
			"Note": "Заметки",
			"YourName": "Ваше имя",
			"IndividualName": "individual Lb name",
			"OutputScheme": "Схема вывода",
            "Auto": "Авто",
            "Place": "Место",
            "Levels": "уровни",
            "NoPlaceSafe": "Нет гарантированного места"
		},

		"Calculator": {
			"Title": "Калькулятор вложений",
			"HelpLink": "https://foe-rechner.de/extension/index#Kostenrechner",
			"Step": "Уровень ",
			"AvailableFP": "Доступные СО",
			"ArcBonus": "Боунс Арки",
			"Earnings": "Прибыль",
			"Rate": "Курс",
			"Up2LevelUp": "Осталось до уровня",
			"FP": "СО",
			"Save": "Сохранить",
			"Commitment": "Вклад",
			"Profit": "Профит",
			"LevelWarning": "ВНИМАНИЕ! Повышение уровня ВС!",
			"NoFPorMedsAvailable": "Нет СО или доступных ВС",
			"LGNotOpen": "Следующий уровень еще не открыт",
			"LGNotConnected": "ВС не соединено с дорогой",
		},

		"LGOverviewBox": {
			"Title": "Возможные вложения",
			"Tooltip": {
				"FoundNew": "найдено новое",
				"FoundAgain": "найдено повторное",
				"NoPayment": "пока нет вложений",
			},
			"Building": "Строение",
			"Level": "Уровень",
			"PayedTotal": "Вложено / Всего",
			"Rate": "Курс",
			"Profit": "Профит",
			"NothingToGet": "У <strong>__player__</strong> нечего получить"
		},

		"StrategyPoints" : {
			"Title" : "СО - Производство",
			"TotalFPs": "Всего СО со всех построек: ",
			"Amount": "Количество",
			"FPBar" : "Кол-во СО в пакетах: "
		},

		"Productions" : {
			"Title" : "Обзор производства",
			"SearchInput": "Найти постройку...",
			"Total" : "Всего: ",
			"ModeGroups": "Группы",
			"ModeSingle": "Без группы",
			"Happiness": "Уровень счастья",
			"AdjacentBuildings": "Смежные здания",
			"Headings" : {
				"number" : "Номер",
				"amount" : "Количество",
				"earning" : "Прибыль",
				"greatbuilding" : "Великие Строения",
				"production" : "Производственные постройки",
				"random_production" : "Случайные производственные здания",
				"residential" : "Постройки событий",
				"decoration": "Декор",
				"street": "Дороги",
				"goods": "Промышленные постройки",
				"culture": "Общественные постройки",
				"main_building" : "Ратуша",
				"boost": "Расширения",
				"all" : "Все"
			}
		},

		"Neighbors" : {
			"Title" : "Производство ",
			"ReadyProductions" : "Завешённое производство",
			"OngoingProductions" : "Текущее производство"
		},

		"Outpost" : {
			"Title" : "Товары поселения",
			"TitleShort" : "Обзор товаров - ",
			"TitleBuildings" : "Постройка",
			"TitleFree" : "Открыто",
			"DescRequired" : "Требуется",
			"DescInStock" : "Доступно",
			"DescStillMissing" : "<span style='color:#29b206'>Превышение</span> / <span style='color:#ef1616'>Недостаток</span>",
			"ExpansionsSum" : "Expansions", // TODO: translate
			"nextTile" : "next Expansion", // TODO: translate
			"tileNotPlanned" : "off", // TODO: translate
			"infoLine" : "__runNumber__. run, Bonus x4 Chance: __chanceX4__%", // TODO: translate
        },

        "Technologies": {
            "Title": "Стоимость исследования",
            "Resource": "Ресурс",
            "DescRequired": "Требуется",
            "DescInStock": "Доступно",
			"DescStillMissing": "<span style='color:#29b206'>Превышение</span> / <span style='color:#ef1616'>Недостаток</span>",
			"NoTechs": "You have reached the end of this era", //Todo: Translate
            "Eras": {
                1: "Каменный Век",
                2: "Бронзовый Век",
                3: "Железный Век",
                4: "Раннее Средневековье",
                5: "Высокое Средневековье",
                6: "Позднее Средневековье",
                7: "Колониальный Период",
                8: "Индустриальная Эпоха",
                9: "Эра Прогрессивизма",
                10: "Эпоха Модерна",
                11: "Эпоха Постмодерна",
                12: "Новейшее Время",
                13: "Завтра",
                14: "Будущее",
                15: "Арктическое Будущее",
                16: "Океаническое Будущее",
                17: "Виртуальное Будущее",
                18: "Космическая Эра Марса",
                19: "Космическая Эра Цереры"
            }
        },

        "Campagne": {
            "Title": "Стоимость для захвата ",
            "Reward": "Общая награда ",
            "AlreadyDone": " уже захвачено!",
            "Resource": "Ресурс",
            "DescRequired": "Требуется",
            "DescInStock": "Доступно",
            "DescStillMissing": "<span style='color:#29b206'>Превышение</span> / <span style='color:#ef1616'>Недостаток</span>",
        },

        "Negotiation": {
            "Title": "Помощник переговоров",
            "WrongGoods": "Выбран неверный товар, закончите переговоры вручную",
            "TryEnd": "Не осталось ходов",
            "Canceled": "Переговоры были отменены",
            "Success": "Успех",
            "Chance": "Шанс",
			"Person": "Персона",
			"Average": "Ø Amount",
			"Costs": "Стоимость:",
			"Round": "Раунд",
			"Stock": "Склад:",
			"GoodsLow": "ВНИМАНИЕ: Мало товара на складе",
			"GoodsCritical": "ВНИМАНИЕ: Недостаточно товара на складе",
			"DragDrop": "Вы можете самостоятелько изменить значки используя перетаскивание, чтобы установить последовательность первой попытки."
        },

		"Settings" : {
			"Title" : "Настройки",
			"Active" : "Включено",
			"Inactive" : "Выключено",
		},

		"Infobox" : {
			"Title" : "Панель информации",
			"Filter" : "Фильтр",
			"FilterGex" : "ЭГ",
			"FilterAuction" : "Аукцион",
			"FilterLevel" : "Поднятие уровня",
			"FilterMessage" : "Сообщение",
			"FilterTrade" : "Рынок",
			"ResetBox" : "Сбросить панель",
			"Messages" : {
				"GEX" : "<strong>__player__</strong> получил __points__ очков в ЭГ.",
				"LevelUp" : "ВС __building__ игрока __player__ только что достигло __level__ уровня.<br>Вы получили <strong>__rank__</strong> место.",
				"Auction" : "<strong>__player__</strong> только что сделал ставку __amount__ монет.",
				"Trade" : "<strong>__player__</strong> приянл ваше предложение.<br>Вы получили __needValue__ __need__ за __offerValue__ __offer__",
				"MsgBuilding" : "__building__ - Уровень __level__"
			}
		},

		"Units" : {
			"Title": "Обзор армии",
			"NextUnitsIn": "Следующие __count__ юнитов будет произведено в <span class=\"alca-countdown\"></span> через __harvest__",
			"ReadyToLoot": "Готовы грабить!",
			"Proportionally": "Пропорционально",
			"Quantity": "Количество",
			"Unit": "Юнит",
			"Status": "Статус",
			"Attack": "Атака",
			"Defend": "Защита",
			"NotFilled": "без фильтра",
			"Bind": "Казарменный",
			"Unbind": "Свободный"
		},
		
		"CityMap": {
			"Title": "Submit data", //Todo: Translate
			"Desc1": "To be able to plan your city we need to transfer your data to foe-rechner.de", //Todo: Translate
			"Desc2": "<button class='btn-default' id='submit-data' onclick='CityMap.SubmitData()'>Submit</button>", //Todo: Translate
			"SubmitSuccess": "Data was transfered successfully... Now visit " //Todo: Translate
		}
	},

	"Menu" : {
		"Productions" : {
			"Title" : "Обзор производства",
			"Desc" : "Отображает текущее количество всех произодств."
		},
		"Calculator" : {
			"Title" : "Калькулятор вложений",
			"Desc" : "Рассчитывает места, которы можно занять в ВС и количество СО",
			"Warning": "Отключено: Для включения откройте ВС любого игрока!"
		},
		"OwnpartCalculator" : {
			"Title" : "Калькурятор вложений в свои ВС",
			"Desc" : "Рассчитывает план вложений, считает внешние вклады и копирует значения для веток",
			"Warning": "Отключено: Для включения откройте любое собственное ВС!"
        },
        "Technologies": {
            "Title": "Технологии",
            "Desc": "Рассчитывает стоимость исследования",
            "Warning": "Отключено: Для включения откройте меню исследования новых технологий!"
        },
        "Campagne": {
            "Title": "Карта континента",
            "Desc": "Обзор ресурсов, требуемых для захвата провинции",
        	"Warning" : "Отключено: Для включения посетите провинцию!"
		},
        "Negotiation": {
            "Title": "Помощник переговоров",
			"Desc": "Предлагает товары для переговоров",
			"Warning": "Отключено: Для влючения начните переговоры!"
        },
		"Settings" : {
			"Title" : "Настройки",
			"Desc" : "Здесь находятся настройки"
		},
		"Chat" : {
			"Title" : "Чат гильдии",
			"Desc" : "Общайтесь с участниками гильдии в реальном времени"
		},
		"Unit" : {
			"Title" : "Армия",
			"Desc": "Все ваши воины в одном месте",
			"Warning": "Откройте \"Управление армией\" <br>Клавиша \"U\""
		},
		"Forum" : {
			"Title" : "Форум",
			"Desc" : "У вас ест ьвопросы? Вас что-то не устраивает? Или вы просто хотите поговрить ..."
		},
		"Ask" : {
			"Title" : "Вопрос / Ответ",
			"Desc" : "Вы не понимаете как что-то работает?<br>Ознакомтесь!"
		},
		"Bugs" : {
			"Title" : "Ошибки / Пожелания",
			"Desc" : "Что-то работает не так, как должно или у вас есть предложение?"
		},
		"OutP" : {
			"Title" : "Поселение",
            "Desc": "Обзор необходимых ресурсов",
            "DescWarningOutpostData": "<em id='outPW' class='tooltip-error'>Отключено: Начните поселение и обновите игру (F5)",
			"DescWarningBuildings" : "<em id='outPW' class='tooltip-error'>Отключено: для включения посетите поселение!<br></em>Обзор необходимых ресурсов"
		},
		"Info" : {
			"Title" : "Панель информации",
			"Desc" : "Отображает все события, которые происходяя \"в фоне\"<br><em>Заполняется информацией ...</em>"
		}
	},

	"Settings" : {
		"Version": {
			"Title" : "Версия",
			"DescDebug" : "Расширение для Chrome <strong class='text-danger'>БЕТА</strong> Версия",
			"Desc" : "Версия расширения для Chrome"
		},
		"GlobalSend": {
			"Title" : "Передача данных на foe-rechner.de",
			"Desc" : "Если вы хотите отслеживать данные вашей гильдии, включите этот пункт. <br> Для самостоятельного отслеживания просто отключите."
		},
		"SendTavernInfo": {
			"Title" : "Мероприятия дружбы (мотивирование)",
			"Desc" : "Нужно ли передавать мероприятия дружбы (мотивирование строений)?"
		},
		"SendGEXInfo": {
			"Title" : "Оценка ЭГ",
			"Desc" : "Когда открываете в ЭГ окно со списком вложений, эти данные будут передаваться на сервер"
		},
		"SendGildMemberLGInfo": {
			"Title" : "Данные о ВС других участников гильдии",
			"Desc" : "Когда вы посещаете города других участников гильдии, все данные о ВС будут переданы на foe-rechner.de, если включена эта опция."
		},
		"ShowNeighborsGoods": {
			"Title" : "Соседский урожай",
			"Desc" : "Отображать, что именно производится в строении во время визита в город"
		},
		"SendInvestigations": {
			"Title" : "Инвестиции СО",
			"Desc" : "Во время открытия 'Ратуша'> 'Новости'> 'Великие Строения' будут передаваться инвестиции СО"
		},
		"ShowTavernBadge": {
			"Title" : "Показать значок таверны",
			"Desc" : "Как только активирован дополнительный ход в таверне, появится глобальный счетчик."
		},
		"PreScanLGList": {
			"Title" : "Предварительное сканирование ВС",
			"Desc" : "Сканировать список соседей, когда открывается их ВС и определять возможные вложения в ВС. <br> <u> Примечание: </u> Поскольку итоговые места передаются только при открытии ВС, результат может отличаться. Тем не менее, результаты сканирования будут сохранены."
		},
		"CalculatorShowNegativ": {
			"Title" : "Отрицательный профит в калькуляторе вложений ВС",
			"Desc" : "Хотите, чтобы отображался отрицательный профит?"
		},
		"AutomaticNegotiation": {
			"Title" : "Помощник переговоров",
			"Desc" : "Нужно ли открывать помощник переговоров автоматически и закрывать, когда переговоры завершены или отменены?"
		},
		"ResetBoxPositions": {
			"Title" : "Координаты панелей",
			"Desc" : "Сбросить координаты всех панелей?",
			"Button" : "Удалить!"
		},
		"ChangeLanguage": {
			"Title" : "Изменить язык",
			"Desc" : "Какой язык должен быть использван вместо автоматически определенного?",
			"Dropdown": {
				"de": "Deutsch",
				"en": "English",
				"fr": "Français",
				"es": "Español",
				"ru": "Русский"
			}
		}
	},

	"Eras": {
		"NoAge": "Без эпохи",
		"StoneAge": "Каменный Век",
		"BronzeAge": "Бронзовый Век",
		"IronAge": "Железный Век",
		"EarlyMiddleAge": "Раннее Средневековье",
		"HighMiddleAge": "Высокое Средневековье",
		"LateMiddleAge": "Позднее Средневековье",
		"ColonialAge": "Колониальный Период",
		"IndustrialAge": "Индустриальная Эпоха",
		"ProgressiveEra": "Эра Прогрессивизма",
		"ModernEra": "Эпоха Модерна",
		"PostModernEra": "Эпоха Постмодерна",
		"ContemporaryEra": "Новейшее Время",
		"TomorrowEra": "Завтра",
		"FutureEra": "Будущее",
		"ArcticFuture": "Арктическое Будущее",
		"OceanicFuture": "Океаническое Будущее",
		"VirtualFuture": "Виртуальное Будущее",
		"SpaceAgeMars": "Космическая Эра Марса"
	},

	"API" : {
		"UpdateSuccess" : "Обновление выполнено",
		"GEXPlayer" : "Обновлены места участников ЭГ",
		"GEXChampionship" : "Обновлена позиция гильдии в ЭГ",
		"LGInvest" : "Ваши вложения ВС были переданы",
		"LGGildMember" : " ВС игрока __player__ были обработаны"
	}
};