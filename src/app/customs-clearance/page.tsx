"use client";
import { useModalStore } from "@/stores/useModalStore";
import Hero from "@/components/blocks/Hero";
import clearanceImg from "@public/clearanceImg.jpg";
import { Section } from "@/components/blocks/Section";
import BoxTitle from "@/components/blocks/BoxTitle";
import iconChevronDown from "@public/icons/iconChevronDown.png";
import iconReceipt from "@public/icons/iconReceipt.png";
import iconHourglass from "@public/icons/iconHourglass.png";
import iconShield from "@public/icons/iconShield.png";
import Image from "next/image";
import { Feature } from "@/components/blocks/Feature";
import BoxSubTitle from "@/components/blocks/BoxSubTitle";
import SmFeature from "@/components/blocks/SmFeature";
import eye from "@public/icons/iconEye.png";
import medal from "@public/icons/iconMmedal.png";
import fileTray from "@public/icons/iconFile.png";
import risksImg from "@public/risksImg.jpg";
import stepsImg from "@public/stepsImg.jpg";
import iconStats from "@public/icons/iconStats.png";
import iconAlert from "@public/icons/iconAlert.png";
import iconCalc from "@public/icons/iconCalc.png";
import iconFiles from "@public/icons/iconFiles.png";
import FeedbackForm from "@/components/ui/FeedbackForm";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import iconArrow from "@public/icons/iconArrow.png";
import about4 from "@public/about4.jpg";
import about5 from "@public/about5.jpg";
import about6 from "@public/about6.jpg";

// export const metadata = {
//   title: "Таможенное оформление | Delin",
//   description:
//     "Профессиональные услуги по таможенному оформлению в Красноярске.",
// };

export default function CustomsClearancePage() {
  const { open } = useModalStore();
  return (
    <main className="flex flex-col gap-2">
      <Hero
        title="Оформляем таможенные декларации за вас "
        subtitle="— без ошибок, штрафов и задержек"
        buttonText="Расчитать стоимость"
        image={clearanceImg.src}
        className="text-[#000000]"
      />

      <Section className="pb-0">
        <BoxTitle title="Оформим. Сдадим. Выпустим." />
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <div className="flex flex-1 gap-2 md:flex-col md:gap-6">
            {[
              {
                icon: iconChevronDown.src,
                alt: "iconChevronDown",
                text: "Полный аутсорсинг таможенного декларирования",
              },
              {
                icon: iconReceipt.src,
                alt: "iconReceipt",
                text: "Документы, расчёты, декларации — берём на себя",
              },
            ].map((feature, index) => (
              <Feature feature={feature} key={index} />
            ))}
          </div>
          <div className="relative flex min-h-[15.125rem] flex-1">
            <Image
              src="/clearanceFeaturesImg.jpg"
              alt=""
              fill
              className="rounded-3xl object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-1">
            <div className="flex flex-1 gap-2 md:flex-col md:gap-6">
              {[
                {
                  icon: iconHourglass.src,
                  alt: "iconHourglass",
                  text: "Работаем в 2 раза быстрее средних сроков по рынку",
                },
                {
                  icon: iconShield.src,
                  alt: "iconShield",
                  text: "Фиксированная стоимость — никаких скрытых платежей",
                },
              ].map((feature, index) => (
                <Feature feature={feature} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#48896E] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <BoxTitle title="Виды таможенного декларирования" />
        <BoxSubTitle>
          <span>
            Работаем с любыми категориями — от оборудования до медикаментов
          </span>
        </BoxSubTitle>
        <ul className="mb-4 rounded-2xl bg-[#F1F1F1] text-xs text-[#1B1B1B] shadow-lg shadow-[#2D2D5840] md:mb-[2rem] md:text-xl">
          <li className="flex w-full justify-between rounded-2xl border-2 border-[#F1F1F1] bg-[#97AED4] py-4 font-bold md:py-[2rem]">
            <p className="w-1/3 px-4 md:px-[2rem]">Категория</p>
            <p className="w-1/3 px-4 md:px-[2rem]">Примеры</p>
            <p className="w-1/3 px-4 md:px-[2rem]">Срок</p>
          </li>
          <li className="flex w-full justify-between py-4 md:py-[2rem]">
            <p className="w-1/3 px-4 md:px-[2rem]">Промышленные товары</p>
            <p className="md:x-[2rem] w-1/3 px-4">Станки, электроника</p>
            <p className="w-1/3 px-4 md:px-[2rem]">1–2 дня</p>
          </li>
          <li className="flex w-full justify-between py-4 md:py-[2rem]">
            <p className="w-1/3 px-4 md:px-[2rem]">Продукция питания</p>
            <p className="w-1/3 px-4 md:px-[2rem]">
              Кондитерские изделия, кофе
            </p>
            <p className="w-1/3 px-4 md:px-[2rem]">1 день</p>
          </li>
          <li className="flex w-full justify-between py-4 md:py-[2rem]">
            <p className="w-1/3 px-4 md:px-[2rem]">Спецгрузы</p>
            <p className="w-1/3 px-4 md:px-[2rem]">Медикаменты</p>
            <p className="w-1/3 px-4 md:px-[2rem]">2–3 дня</p>
          </li>
        </ul>
        <h3 className="text-shadow-lg select-none pb-4 text-[1.625rem] font-semibold md:pb-8">
          География
        </h3>
        <div className="relative min-h-[222px] md:min-h-[38.25rem]">
          <Image
            src="/map.png"
            alt="map"
            sizes="auto"
            fill
            objectFit="contain"
            unoptimized
          />
        </div>
      </Section>

      <Section className="bg-[#587DBB] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <BoxTitle title="Преимущества" />
        <BoxSubTitle>
          <span>Почему 250+ компаний доверяют нам таможенное оформление</span>
        </BoxSubTitle>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          {[
            {
              icon: fileTray.src,
              alt: "fileTray",
              text: "Глубокий анализ товара и документации — определяем код ТН ВЭД с точностью 100%, проверяем сертификаты.",
            },
            {
              icon: eye.src,
              alt: "eye",
              text: "Круглосуточная поддержка + персональный специалист — решаем вопросы даже ночью.",
            },
            {
              icon: medal.src,
              alt: "medal",
              text: "12 лет опыта + лицензированный таможенный представитель — регистрационный № в реестре ФТС: 1836",
            },
          ].map((feature, index) => (
            <SmFeature key={index} feature={feature} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex select-none flex-col gap-4 md:flex-row md:gap-6">
          <div className="relative flex min-h-[222px] flex-1">
            <Image
              src={risksImg.src}
              alt="risksImg"
              sizes="auto"
              fill
              className="rounded-2xl object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 md:py-20">
            <BoxTitle title="Риски" />
            <BoxSubTitle>
              <span>Что теряют компании без профессионалов</span>
            </BoxSubTitle>
            <ul className="list-disc space-y-2 pl-5">
              {[
                "Доначисления пошлин из-за ошибки в коде ТН ВЭД",
                "Простой груза на СВХ — 15 000 ₽/день за хранение",
                "Штрафы за нарушение таможенных правил",
              ].map((item, index) => (
                <li className="text-xs md:text-xl" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="select-none bg-[#587DBB] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <BoxTitle title="Этапы работы" />
        <BoxSubTitle>
          <span>Как мы оформляем ваш груз</span>
        </BoxSubTitle>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <div className="flex flex-1 gap-2 md:flex-col md:gap-6">
            {[
              {
                icon: iconStats.src,
                alt: "",
                text: "Анализ документов (инвойс, контракт, сертификаты)",
              },
              {
                icon: iconAlert.src,
                alt: "",
                text: "Контроль выпуска груза — вы получаете уведомление",
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
                  unoptimized
                />
                <p className="pt-2">{reason.text}</p>
              </li>
            ))}
          </div>
          <div className="flex flex-1 gap-2 md:flex-col md:gap-6">
            {[
              {
                icon: iconCalc.src,
                alt: "",
                text: "Расчёт таможенных платежей с оптимизацией",
              },
              {
                icon: iconFiles,
                alt: "",
                text: "Подача декларации через электронные сервисы ФТС",
              },
            ].map((reason, index) => (
              <li
                key={index}
                className="flex flex-1 flex-col items-center rounded-2xl bg-white p-4 text-center text-xs text-[#1B1B1B] shadow-md md:p-6 md:text-xl"
              >
                <Image
                  src={reason.icon}
                  alt={reason.alt}
                  width={48}
                  height={48}
                />
                <p className="pt-2">{reason.text}</p>
              </li>
            ))}
          </div>
          <div className="relative min-h-[214px] w-full flex-1">
            <Image
              src={stepsImg.src}
              alt=""
              sizes="auto"
              fill
              className="rounded-2xl"
              unoptimized
            />
          </div>
        </div>
      </Section>

      <Section className="relative select-none overflow-hidden bg-[rgba(72,137,110,0.6)]">
        <h2 className="text-shadow-lg mx-4 pb-8 text-center text-lg font-bold text-[#EFEFEF] md:text-[2rem]">
          Получите бесплатный расчёт таможенных платежей!
        </h2>

        <FeedbackForm className="mx-4 rounded-2xl bg-amber-50 p-4 text-[#1B1B1B] shadow-2xl shadow-[#2D2D5840] md:mx-[19.375rem] md:p-[2rem]" />
        <Image
          src={clearanceImg.src}
          alt="risksImg"
          sizes="auto"
          fill
          className="-z-10 object-cover"
          unoptimized
        />
      </Section>

      <Section className="select-none">
        <BoxTitle title="Delin — аккредитованный таможенный представитель" />
        <BoxSubTitle>
          <span>
            Наша миссия — сделать таможенное оформление прозрачным и безопасным
          </span>
        </BoxSubTitle>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {[
            { value: "12 лет", text: "на рынке ВЭД" },
            { value: "50+", text: "специалистов в штате (юристы, декларанты)" },
            {
              value: "0",
              text: "конфискованных грузов благодаря грамотному декларированию",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 rounded-2xl bg-[#F1F1F1] p-4 md:p-[2rem]"
            >
              <span className="pb-4 text-2xl text-[#587DBB] md:text-[2.5rem]">
                {item.value}
              </span>
              <p className="text-xs text-[#1B1B1B] md:text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#48896E] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <BoxTitle title="FAQ" />
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-1">
            <Accordion
              question={[
                {
                  question: "Сколько стоит таможенное оформление?",
                  answer: "От 15 000 ₽ (зависит от типа груза и сроков).",
                },
                {
                  question: "Какие документы нужны?",
                  answer: "Контракт, инвойс, паспорт сделки, сертификаты.",
                },
                {
                  question: "Работаете ли вы с Китаем?",
                  answer: "Да, 70% наших клиентов импортируют из Китая.",
                },
              ]}
            />
          </div>
          <div className="relative flex min-h-[220px] flex-1">
            <Image
              src="/faq2Img.jpg"
              alt="Работа за ноутбуком"
              fill
              priority
              className="rounded-3xl object-cover"
              unoptimized
            />
          </div>
        </div>
      </Section>

      <Section className="select-none bg-[#587DBB] px-4 shadow-2xl shadow-[#2D2D5840] md:px-10">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-1 flex-col gap-2 md:gap-6">
            <div className="flex flex-1 flex-col gap-2 md:gap-6">
              <div className="relative min-h-[168px] flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={about4.src}
                  alt=""
                  sizes="auto"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative min-h-[168px] flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={about5.src}
                  alt=""
                  sizes="auto"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="relative min-h-[168px] flex-1 overflow-hidden rounded-2xl">
              <Image
                src={about6.src}
                alt=""
                sizes="auto"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="rounded-4xl flex flex-1 flex-col gap-4">
            <div className="flex flex-col">
              <BoxTitle title="Профессиональное таможенное декларирование в Красноярске и РФ" />
              <BoxSubTitle className="w-full">
                <span className="pb-6 text-xs md:text-xl">
                  Компания Delin оказывает услуги таможенного оформления
                  под ключ для юридических лиц и ИП. <br />
                  <br />
                  Мы берём на себя подготовку документов, расчёт таможенных
                  платежей, подачу деклараций и взаимодействие с ФТС. Наш опыт
                  позволяет минимизировать риски штрафов, задержек и переплат.
                </span>
              </BoxSubTitle>
              <h3 className="pb-2 text-base font-semibold md:pb-8 md:text-[1.625rem]">
                Ключевые услуги
              </h3>
              <ul className="list-disc pb-2 pl-7 text-xs md:pb-8 md:text-xl">
                <li>Таможенное декларирование импорта и экспорта</li>
                <li>Аутсорсинг ВЭД для бизнеса</li>{" "}
                <li>Срочное оформление грузов</li>
              </ul>
              <p className="pb-4 text-xs md:pb-[2rem] md:text-xl">
                Работаем по всей России. Гарантируем соблюдение
                законодательства!
              </p>
              <Button
                text="Оставить заявку"
                icon={iconArrow.src}
                onClick={() => open("form")}
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
