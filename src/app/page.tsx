"use client";
import Image from "next/image";
import Hero from "@/components/blocks/Hero";
import BoxTitle from "@/components/blocks/BoxTitle";
import { Section } from "@/components/blocks/Section";
import { Feature } from "@/components/blocks/Feature";
import BoxSubTitle from "@/components/blocks/BoxSubTitle";
import mainCTA from "@public/mainCTA.jpg";
import imageChart3D from "@public/chart3D.jpg";
import iconFullCircle from "@public/icons/iconFullCircle.png";
import iconTrendingDown from "@public/icons/iconTrendingDown.png";
import iconShield from "@public/icons/iconShield.png";
import iconCompare from "@public/icons/iconCompare.png";
import iconCreate from "@public/icons/iconCreate.png";
import iconPuzzle from "@public/icons/iconPuzzle.png";
import SmFeature from "@/components/blocks/SmFeature";
import Button from "@/components/ui/Button";
import iconArrow from "@public/icons/iconArrow.png";
import iconInsurance from "@public/icons/iconInsurance.png";
import iconManager from "@public/icons/iconManager.png";
import iconSuppliers from "@public/icons/iconSuppliers.png";
import iconLegal from "@public/icons/iconLegal.png";
import handshakeImg from "@public/handshakeImg.jpg";
import Accordion from "@/components/ui/Accordion";
import About1 from "@public/about1.jpg";
import About2 from "@public/about2.jpg";
import About3 from "@public/about3.jpg";
import FeedbackForm from "@/components/ui/FeedbackForm";
import { useModalStore } from "@/stores/useModalStore";

export default function Home() {
  const { open } = useModalStore();
  return (
    <main className="flex flex-col gap-2">
      <Hero
        title="Аутсорсинг ВЭД под ключ"
        subtitle=" — от поиска поставщика до таможенного оформления. Бесплатный аудит вашей внешнеторговой сделки за 24 часа!"
        buttonText="Оставить заявку"
        image={mainCTA.src}
        className="text-[#EFEFEF]"
        goalId={`ved_1`}
      />

      <Section>
        <BoxTitle title="С нами надежно" />
        <div className="flex w-full flex-col gap-2 md:flex-row md:gap-6">
          {[
            {
              icon: iconFullCircle.src,
              alt: "iconFullCircle",
              text: "Полный цикл услуг — от поиска поставщика до таможенного оформления",
            },
            {
              icon: iconTrendingDown.src,
              alt: "iconTrendingDown",
              text: "Снижаем расходы на 15–30% за счёт оптимизации пошлин и логистики",
            },
            {
              icon: iconShield.src,
              alt: "iconShield",
              text: "Гарантия безопасности — проверка поставщиков, страховка, юридическая защита",
            },
          ].map((feature, index) => (
            <Feature feature={feature} key={index} />
          ))}
        </div>
      </Section>

      <Section className="bg-[#48896E] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <BoxTitle title="Аутсорсинг внешнеэкономической деятельности" />
        <BoxSubTitle>
          <span>
            Берём на себя все этапы и риски внешнеэкономической деятельности,
            <br className="hidden md:flex" /> чтобы вы могли сосредоточиться
            на развитии бизнеса.
          </span>
        </BoxSubTitle>
        <div className="flex w-full flex-col gap-2 pb-4 md:flex-row md:gap-6 md:pb-[2rem]">
          {[
            {
              icon: iconCompare.src,
              alt: "iconCompare",
              text: "Внешнеэкономическая деятельность под ключ",
            },
            {
              icon: iconCreate.src,
              alt: "iconCreate",
              text: "Таможенное декларирование (избегаем штрафов)",
            },
            {
              icon: iconPuzzle.src,
              alt: "iconPuzzle",
              text: "Поиск и подбор надёжных поставщиков (проверка репутации, аудит фабрик)",
            },
          ].map((feature, index) => (
            <SmFeature key={index} feature={feature} />
          ))}
        </div>
        <Button
          text="Получить консультацию"
          icon={iconArrow.src}
          onClick={() => open("form")}
          goalId={`ved_2`}
        />
      </Section>

      <Section>
        <BoxTitle title="Почему нас выбирают" />
        <BoxSubTitle>
          <span>
            Мы не просто оказываем услуги — мы защищаем ваш бизнес от рисков.
          </span>
        </BoxSubTitle>
        <div className="grid select-none gap-y-2 pb-4 md:grid-cols-2 md:gap-x-6 md:gap-y-6 md:pb-6">
          {[
            {
              icon: iconInsurance,
              alt: "Страхование сделок",
              title: "Страхование сделок",
              text: "Защита от финансовых потерь",
            },
            {
              icon: iconManager,
              alt: "Персональный менеджер",
              title: "Персональный менеджер 24/7",
              text: "Оперативное решение любых вопросов круглосуточно",
            },
            {
              icon: iconSuppliers,
              alt: "Подбор иностранных поставщиков",
              title: "Подбор иностранных поставщиков",
              text: "Эксперты со знанием языков и локального рынка",
            },
            {
              icon: iconLegal,
              alt: "Юридическая поддержка",
              title: "Юридическая поддержка",
              text: "Сопровождение контрактов и споров",
            },
          ].map((reason, index) => (
            <li
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-4 text-center text-xs text-[#1B1B1B] shadow-md md:p-6 md:text-xl"
            >
              <Image
                src={reason.icon}
                alt={reason.alt}
                width={48}
                height={48}
              />
              <h3 className="pt-2 font-semibold md:pt-4">{reason.title}</h3>
              <p className="pt-1 md:pt-2">{reason.text}</p>
            </li>
          ))}
        </div>
        <Button
          text="Оставить заявку"
          icon={iconArrow.src}
          onClick={() => open("form")}
          goalId={`ved_3`}
        />
      </Section>

      {/* <Reviews /> */}

      <Section className="bg-[#48896E] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <div className="flex flex-1 flex-col gap-6 md:flex-row">
          <div className="relative flex h-[236px] md:h-auto md:flex-1">
            <Image
              src={imageChart3D}
              alt="3D график"
              className="rounded-2xl object-cover"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col">
            <BoxTitle title=" Aутсорсинг ВЭД выгоднее, чем самостоятельное оформление" />
            <BoxSubTitle>
              <span>
                Неправильное оформление ВЭД может стоить вам миллионов рублей.
              </span>
            </BoxSubTitle>
            <p className="pb-2 text-base md:pb-4 md:text-2xl">Мы исключаем</p>
            <ul className="list-disc space-y-2 pl-5">
              {[
                "Штрафы и доначисления из-за ошибок в декларировании",
                "Конфискацию груза на таможне",
                "Финансовые потери из-за недобросовестных поставщиков",
                "Уголовную ответственность за нарушение таможенного законодательства",
              ].map((item, index) => (
                <li key={index} className="text-xs md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col gap-2 rounded-2xl bg-[#587DBB] px-4 py-6 md:gap-4 md:px-10 md:py-20">
          <BoxTitle title="Наша команда" />
          <div className="flex flex-col gap-4 text-[#1B1B1B]">
            <div className="flex gap-4 rounded-2xl bg-white shadow-lg transition-all hover:scale-[102%]">
              <div className="relative px-4 py-6 text-2xl before:absolute before:-inset-[2px] before:rounded-2xl before:border-2 before:border-[#587DBB] md:px-10 md:py-5 md:text-[2.5rem]">
                10+
              </div>
              <p className="flex flex-1 items-center justify-center text-xs md:text-xl">
                лет в международной торговле
                <br /> и таможенном декларировании
              </p>
            </div>
            <div className="flex justify-between gap-4">
              <div className="rounded-2xl bg-white px-4 py-6 shadow-lg transition-all hover:scale-[102%] md:px-10 md:py-5">
                <p className="flex items-center justify-center text-xs md:text-xl">
                  Таможенные брокеры
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-6 shadow-lg transition-all hover:scale-[102%] md:px-10 md:py-5">
                <p className="flex items-center justify-center text-xs md:text-xl">
                  Юристы по ВЭД
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white px-4 py-6 shadow-lg transition-all hover:scale-[102%] md:px-10 md:py-5">
              <p className="flex items-center justify-center text-xs md:text-xl">
                Специалисты по закупкам за рубежом
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[240px] md:h-auto md:flex-1">
          <Image
            src={handshakeImg}
            alt="Рукопожатие — сотрудничество"
            className="rounded-2xl object-cover"
            fill
          />
        </div>
      </div>

      <Section>
        <BoxTitle title="Что входит в пакет услуг" />
        <div className="flex select-none flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            {[
              "Анализ рынка и поиск поставщиков",
              "Оптимизация налогов и пошлин",
              "Проверка контрагентов",
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-full rounded-2xl border-2 border-[#EFEFEF] px-8 py-6 text-center text-xs shadow-lg transition-all hover:scale-[102%] md:w-fit md:text-xl"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            {[
              "Юридическое сопровождение",
              "Таможенное оформление контрагентов",
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-full px-8 py-6 text-center text-xs shadow-lg transition-all before:absolute before:-inset-[2px] before:rounded-2xl before:border-2 before:border-[#EFEFEF] hover:scale-[102%] md:w-fit md:text-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#48896E] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <BoxTitle title="FAQ" />
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-1">
            <Accordion
              question={[
                {
                  question: "Как быстро вы находите поставщиков?",
                  answer: "От 3 дней, в зависимости от сложности запроса.",
                },
                {
                  question: "Какие страны охватываете?",
                  answer: "Китай, Европа, Турция, СНГ – более 15 стран.",
                },
                {
                  question: "Как избежать штрафов на таможне?",
                  answer:
                    "Мы проводим предварительный аудит документов и груза.",
                },
              ]}
            />
          </div>
          <div className="relative flex min-h-[200px] md:flex-1">
            <Image
              src="/faqImg.jpg"
              alt="Работа за ноутбуком"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="select-none bg-[#587DBB] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <div className="flex gap-6">
          <div className="hidden flex-1 md:flex">
            <div className="flex h-full w-full flex-col gap-2">
              <div className="relative flex-1">
                <Image
                  src={About1}
                  alt="Главное изображение"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex h-full w-full flex-1 gap-2">
                <div className="relative flex-1">
                  <Image
                    src={About2}
                    alt="Главное изображение"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="relative flex-1">
                  <Image
                    src={About3}
                    alt="Главное изображение"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-4xl flex flex-1 flex-col gap-4">
            <div className="flex flex-col">
              <BoxTitle title="Delin — профессиональные услуги ВЭД в Красноярске" />
              <BoxSubTitle className="w-full">
                <span className="pb-4 text-xs md:pb-6 md:text-xl">
                  Компания Delin оказывает полный комплекс услуг
                  по сопровождению внешнеэкономической деятельности: аутсорсинг
                  ВЭД под ключ, таможенное декларирование, поиск поставщиков
                  и юридическая поддержка. <br />
                  <br />
                  Мы работаем с клиентами из Красноярска и других регионов
                  России, помогая минимизировать риски и оптимизировать затраты
                  на международную торговлю.
                </span>
              </BoxSubTitle>
              <h3 className="pb-2 text-base font-semibold md:pb-8 md:text-[1.625rem]">
                Наши услуги ВЭД включают
              </h3>
              <ul className="list-disc pb-4 pl-4 text-xs md:pb-8 md:pl-7 md:text-xl">
                <li>Таможенные услуги ВЭД</li>
                <li>Аутсорсинг ВЭД для бизнеса</li>
              </ul>
              <p className="text-xs md:text-xl">
                Доверьте ведение ВЭД профессионалам — экономьте время и деньги!
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="select-none bg-[#587DBB] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <div className="flex flex-col">
          <h2 className="text-shadow-lg pb-4 text-center text-lg font-bold text-[#EFEFEF] md:pb-8 md:text-[2rem]">
            Оставьте заявку — и мы подберём для вас лучшее решение!
          </h2>
          <div className="md:px-[18.5rem]">
            <FeedbackForm goalId={`ved_4`} />
          </div>
        </div>
      </Section>
    </main>
  );
}
