import BoxTitle from "@/components/blocks/BoxTitle";
import Hero from "@/components/blocks/Hero";
import { Section } from "@/components/blocks/Section";
import Hero3 from "@public/Hero3.jpg";
import iconShield from "@public/icons/iconShield.png";
import iconWarining from "@public/icons/iconWarning.png";
import iconInsurance from "@public/icons/iconInsurance.png";
import iconLegal from "@public/icons/iconLegal.png";
import iconEye from "@public/icons/iconEye.png";
import iconOffice from "@public/icons/iconOffice.png";
import iconFile from "@public/icons/iconFile.png";
import { Feature } from "@/components/blocks/Feature";
import BoxSubTitle from "@/components/blocks/BoxSubTitle";
import SmFeature from "@/components/blocks/SmFeature";
import about7 from "@public/about7.jpg";
import about8 from "@public/about8.jpg";
import about9 from "@public/about9.jpg";
import about10 from "@public/about10.jpg";
import about12 from "@public/about12.jpg";
import about13 from "@public/about13.jpg";
import about14 from "@public/about14.jpg";
import Image from "next/image";
import FeedbackForm from "@/components/ui/FeedbackForm";
import pic3 from "@public/pic3.png";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import iconArrow from "@public/icons/iconArrow.png";

export const metadata = {
  title: "Поиск поставщиков (Sourcing) | Delin",
  description:
    "Поможем найти надежных поставщиков для вашего бизнеса. Поиск, проверка и сопровождение — под ключ.",
};

export default function SourcingPage() {
  return (
    <main className="flex flex-col gap-2">
      <Hero
        title="Поиск поставщиков"
        subtitle="Ваш мост между Россией и Китаем — находим проверенных поставщиков, экономим ваши деньги и нервы."
        buttonText="Начать поиск"
        image={Hero3.src}
        className="text-[#1B1B1B]"
      />

      <Section>
        <BoxTitle title="С нами надежно" />
        <div className="flex w-full gap-6">
          {[
            {
              icon: iconInsurance.src,
              alt: "iconInsurance",
              text: "Финансовую безопасность — предоплата поставщику только после проверки",
            },
            {
              icon: iconShield.src,
              alt: "iconShield",
              text: "Качество товара — выездной аудит фабрик нашими инспекторами.",
            },
            {
              icon: iconLegal.src,
              alt: "iconLegal",
              text: "Юридическую защиту — договоры по китайскому и российскому праву",
            },
          ].map((feature, index) => (
            <Feature feature={feature} key={index} />
          ))}
        </div>
      </Section>

      <section className="flex gap-6">
        <div className="flex-1 rounded-3xl bg-[#48896E] py-20 shadow-2xl shadow-[#2D2D5840]">
          <div className="px-10">
            <BoxTitle title="О компании" />
            <BoxSubTitle>
              <span>Delin — ваш представитель в Китае</span>
            </BoxSubTitle>
            <div className="flex flex-col gap-6 pb-6">
              {[
                { value: "1200+ ", text: "успешных контрактов с фабриками" },
                {
                  value: "9 лет",
                  text: "на рынке — знаем все подводные камни китайского рынка",
                },
                {
                  value: "0",
                  text: "скрытых комиссий — фиксированный прайс в договоре",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-2xl bg-[#F1F1F1] p-[2rem]"
                >
                  <span className="pb-4 text-[2.5rem] text-[#587DBB]">
                    {item.value}
                  </span>
                  <p className="text-xl text-[#1B1B1B]">{item.text}</p>
                </div>
              ))}
            </div>
            <p>
              Наша гордость: в 2023 году сэкономили клиентам <br />
              <span className="text-[#F7783D]"> 23 млн рублей</span> за счёт
              переговоров с поставщиками.
            </p>
          </div>
        </div>

        <div className="relative flex flex-1">
          <Image
            src={about8}
            alt=""
            fill
            sizes="auto"
            className="rounded-3xl object-cover"
          />
        </div>
      </section>

      <Section className="bg-[#587DBB] px-10 shadow-2xl shadow-[#2D2D5840]">
        <div className="flex gap-6">
          <div className="relative flex-1">
            <Image
              src={about7.src}
              alt=""
              sizes="auto"
              fill
              className="rounded-2xl"
            />
          </div>{" "}
          <div className="flex-1">
            {" "}
            <div className="flex flex-col">
              <BoxTitle title="Какие задачи решаем" />
              <BoxSubTitle className="w-full">
                <span className="pb-6 text-xl">
                  Компания Delin оказывает услуги таможенного оформления
                  под ключ для юридических лиц и ИП. <br />
                  <br />
                  Мы берём на себя подготовку документов, расчёт таможенных
                  платежей, подачу деклараций и взаимодействие с ФТС. Наш опыт
                  позволяет минимизировать риски штрафов, задержек и переплат.
                </span>
              </BoxSubTitle>
              <h3 className="pb-8 text-[1.625rem] font-semibold">
                Ключевые услуги
              </h3>
              <ul className="list-disc pb-8 pl-7 text-xl">
                <li>Таможенное декларирование импорта и экспорта</li>
                <li>Аутсорсинг ВЭД для бизнеса</li>{" "}
                <li>Срочное оформление грузов</li>
              </ul>
              <p className="pb-[2rem] text-xl">
                Работаем по всей России. Гарантируем соблюдение
                законодательства!
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <BoxTitle title="Преимущества" />
        <BoxSubTitle>
          <span>Почему 70% клиентов приходят по рекомендациям</span>
        </BoxSubTitle>
        <div className="flex w-full gap-6">
          {[
            {
              icon: iconEye.src,
              alt: "iconInsurance",
              text: "Финансовую безопасность — предоплата поставщику только после проверки",
            },
            {
              icon: iconOffice.src,
              alt: "iconShield",
              text: "Качество товара — выездной аудит фабрик нашими инспекторами.",
            },
            {
              icon: iconFile.src,
              alt: "iconLegal",
              text: "Юридическую защиту — договоры по китайскому и российскому праву",
            },
          ].map((feature, index) => (
            <SmFeature feature={feature} key={index} />
          ))}
        </div>
      </Section>

      <Section className="relative select-none overflow-hidden bg-[rgba(72,137,110,0.6)]">
        <h2 className="text-shadow-lg pb-8 text-center text-[2rem] font-bold text-[#EFEFEF]">
          Получите бесплатный расчёт таможенных платежей!
        </h2>

        <FeedbackForm className="mx-[19.375rem] rounded-2xl bg-amber-50 p-[2rem] text-[#1B1B1B] shadow-2xl shadow-[#2D2D5840]" />
        <Image
          src={pic3.src}
          alt="risksImg"
          sizes="auto"
          fill
          className="-z-10 object-cover"
        />
      </Section>

      <Section className="bg-[#587DBB] px-10 shadow-2xl shadow-[#2D2D5840]">
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="flex flex-col">
              <BoxTitle title="Этапы работы" />

              <h3 className="pb-8 text-[1.625rem] font-semibold">
                Найдём идеального партнёра для вас
              </h3>
              <ul className="list-disc pb-8 pl-7 text-xl">
                <li>Анализ запроса — изучаем спецификацию, бюджет, сроки</li>
                <li>
                  Поиск по нишевым каналам — закрытые базы, выставки,
                  B2B-платформы
                </li>
                <li>
                  Жёсткий отбор — 20+ критериев (стаж, оборот, сертификаты)
                </li>
                <li>Ваше утверждение — предоставляем фото/видео с фабрик</li>
                <li>
                  Внедрение в цепочку — помогаем наладить регулярные поставки
                </li>
              </ul>
              <p className="pb-[2rem] text-xl">
                Средний срок выхода на надёжного поставщика — 18 дней.
              </p>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src={about9.src}
              alt=""
              sizes="auto"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <BoxTitle title="Риски и защита" />
        <BoxSubTitle>
          <span>Что будет, если искать поставщика самому</span>
        </BoxSubTitle>
        <div className="grid select-none grid-cols-3 gap-x-6 gap-y-6 pb-6">
          {[
            {
              icon: iconWarining.src,
              alt: "Поддельные сертификаты",
              title: "Поддельные сертификаты",
              text: "Фабрика рисует CE/GOST на коленке",
            },
            {
              icon: iconWarining.src,
              alt: "Ценовые ловушки",
              title: "Ценовые ловушки",
              text: "Вам называют низкую цену, но накручивают стоимость доставки",
            },
            {
              icon: iconWarining.src,
              alt: "Брак «вдогонку»",
              title: "Брак «вдогонку»",
              text: "Первые образцы идеальны, а в партии — брак",
            },
          ].map((reason, index) => (
            <li
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center text-xl text-[#1B1B1B] shadow-md"
            >
              <Image
                src={reason.icon}
                alt={reason.alt}
                width={48}
                height={48}
              />
              <h3 className="pt-4 font-semibold">{reason.title}</h3>
              <p className="pt-2">{reason.text}</p>
            </li>
          ))}
        </div>
        <BoxSubTitle>
          <span>Наше решение</span>
        </BoxSubTitle>
        <div className="grid select-none grid-cols-3 gap-x-6 gap-y-6 pb-6">
          {[
            {
              icon: iconShield.src,
              alt: "Финансовая аналитика",
              title: "Финансовая аналитика",
              text: "Сравниваем цены с 50+ фабриками",
            },
            {
              icon: iconShield.src,
              alt: "Юридическая защита",
              title: "Юридическая защита",
              text: "Защищаем от двусмысленных формулировок",
            },
            {
              icon: iconShield.src,
              alt: "Инспекция качества",
              title: "Инспекция качества",
              text: "Проверяем 10% каждой партии",
            },
          ].map((reason, index) => (
            <li
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center text-xl text-[#1B1B1B] shadow-md"
            >
              <Image
                src={reason.icon}
                alt={reason.alt}
                width={48}
                height={48}
              />
              <h3 className="pt-4 font-semibold">{reason.title}</h3>
              <p className="pt-2">{reason.text}</p>
            </li>
          ))}
        </div>
      </Section>

      <section className="flex gap-6">
        <div className="flex-1 rounded-2xl bg-[#587DBB] shadow-2xl shadow-[#2D2D5840]">
          <div className="px-10 py-20">
            <BoxTitle title="Команда" />
            <h3 className="pb-8 text-[1.625rem] font-semibold">
              Найдём идеального партнёра для вас
            </h3>
            <ul className="list-disc pb-8 pl-7 text-xl">
              <li>Марк С. — глава офиса в Гуанчжоу, 8 лет в закупках</li>
              <li>
                Анна Л. — юрист по китайскому праву, знает 450+ кейсов споров
              </li>
              <li>Чжан Вэй — носитель языка, эксперт по переговорам</li>
            </ul>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src={about10.src}
            alt=""
            fill
            sizes="auto"
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      <Section>
        <BoxTitle title="Пакет услуг" />
        <BoxSubTitle>
          <span>Что входит в стандартный контракт</span>
        </BoxSubTitle>
        <div className="flex select-none flex-col gap-4 pb-6">
          <div className="flex gap-4">
            {[
              "Поиск 5+ подходящих фабрик",
              "Ведение переговоров на китайском",
              "Выездная проверка 1 фабрики",
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-fit rounded-2xl border-2 border-[#EFEFEF] px-8 py-6 text-xl shadow-lg transition-all hover:scale-[102%]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {["Образцы товара с тестами", "Шаблон контракта на 2 языках"].map(
              (item, index) => (
                <div
                  key={index}
                  className="relative w-fit px-8 py-6 text-xl shadow-lg transition-all before:absolute before:-inset-[2px] before:rounded-2xl before:border-2 before:border-[#EFEFEF] hover:scale-[102%]"
                >
                  {item}
                </div>
              ),
            )}
            <a href="/price_list.docx" download>
              <Button text="Скачать полный прайс" icon={iconArrow.src} />
            </a>
          </div>
        </div>
        <p className="text-shadow-black text-xl">
          Допопции: таможенное оформление, поиск альтернатив при форс-мажоре
        </p>
      </Section>

      <Section className="bg-[#48896E] px-10 shadow-2xl shadow-[#2D2D5840]">
        <BoxTitle title="FAQ" />
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col">
            <Accordion
              question={[
                {
                  question: "Как вы проверяете фабрики?",
                  answer:
                    "Выезжаем на место, запрашиваем финансовые отчеты, проверяем ",
                },
                {
                  question:
                    "Что делать, если поставщик повысит цены после контракта?",
                  answer:
                    " Фиксируем стоимость в договоре — при нарушении штрафуем поставщика.",
                },
                {
                  question: "Можно ли закупать товары под нашим брендом?",
                  answer: "Да, контролируем нанесение логотипа и упаковку.",
                },
              ]}
            />
          </div>
          <div className="relative flex flex-1">
            <Image
              src="/faqImg.jpg"
              alt="Работа за ноутбуком"
              fill
              priority
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="pt-6 text-xl">
          Звоните <span className="text-[#F7986C]">+7 (391) 205-18-11</span>{" "}
          круглосуточно
        </p>
      </Section>

      <Section className="select-none bg-[#587DBB] px-10 shadow-2xl shadow-[#2D2D5840]">
        <div className="flex gap-6">
          <div className="flex flex-1">
            <div className="flex h-full w-full flex-col gap-2">
              <div className="relative flex-1">
                <Image
                  src={about12.src}
                  alt="Главное изображение"
                  fill
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
              <div className="flex h-full w-full flex-1 gap-2">
                <div className="relative flex-1">
                  <Image
                    src={about13.src}
                    alt="Главное изображение"
                    fill
                    className="rounded-3xl object-cover"
                    priority
                  />
                </div>
                <div className="relative flex-1">
                  <Image
                    src={about14.src}
                    alt="Главное изображение"
                    fill
                    className="rounded-3xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-4xl flex flex-1 flex-col gap-4">
            <div className="flex flex-col">
              <BoxTitle title="Профессиональный поиск поставщиков в Китае — компания Delin" />
              <BoxSubTitle className="w-full">
                <span className="pb-6 text-xl">
                  Компания Delin более 8 лет помогает российскому бизнесу
                  находить надёжных партнёров в Китае.
                </span>
              </BoxSubTitle>
              <h3 className="pb-8 text-[1.625rem] font-semibold">
                Наши услуги ВЭД включают
              </h3>
              <BoxSubTitle className="w-full">
                <span className="pb-6 text-xl">
                  Поиск производителей, аудит фабрик, юридическое сопровождение
                  сделок, контроль качества товаров.
                  <br />
                  <br />
                  Мы работаем с оборудованием, электроникой, текстилем,
                  стройматериалами и другими категориями.
                </span>
              </BoxSubTitle>
              <h3 className="pb-8 text-[1.625rem] font-semibold">
                Почему клиенты выбирают нас
              </h3>
              <ul className="list-disc pb-8 pl-7 text-xl">
                <li>Прямые контракты с фабриками — без посредников</li>
                <li>Финансовая гарантия по договору</li>{" "}
                <li>Собственные офисы в Китае</li>
              </ul>
              <p className="text-xl">
                Оставьте заявку — и мы найдём для вас поставщика с оптимальным
                соотношением цены и качества!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
