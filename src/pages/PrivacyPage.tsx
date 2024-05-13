'use client';
import { BorderLine } from '@/shared/components/BorderLine';
import Link from 'next/link';
import { Button } from '@/shared/components/Button';

export default function PrivacyPage() {
  return (
    <div className={'flex flex-col overflow-y-auto gap-2.5 h-full py-4'}>
      <div className={'text-center pb-4'}>
        <h1 className={'text-2xl'}>Privacy Center</h1>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>
          Конфиденциальность и безопасность вашей информаци
        </h2>
        <p className={'text-sm md:text-lg'}>
          Уважаемый пользователь. Мы, команда Sukina Sedai, ценим ваше доверие и
          стремимся обеспечить безопасность и конфиденциальность вашей личной
          информации. Прежде чем продолжить использование нашего сайта,
          пожалуйста, внимательно ознакомьтесь с этим документом, чтобы понять,
          как мы собираем, используем и защищаем вашу информацию.
        </p>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>
          Соблюдение правил сообщества и условий использования
        </h2>
        <p className={'text-sm md:text-lg'}>
          Обратите внимание, что каждый аккаунт, созданный на нашем сайте,
          принадлежит команде Sukina Sedai. Мы стремимся создать безопасное и
          уважительное сообщество, где каждый пользователь может чувствовать
          себя комфортно. Любое нарушение правил использования или наших условий
          может привести к ограничению доступа к вашему аккаунту или его полному
          удалению.
        </p>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>Согласие на обработку данных</h2>
        <p className={'text-sm md:text-lg'}>
          Регистрируясь на нашем сайте, вы автоматически соглашаетесь на
          обработку всех данных, которые вы вводите или предоставляете нам в
          процессе использования сайта. Мы обязуемся обрабатывать вашу
          информацию с максимальной осторожностью и соблюдать все необходимые
          меры безопасности для ее защиты.
        </p>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>
          Конфиденциальность и защита данных
        </h2>
        <p className={'text-sm md:text-lg'}>
          Мы строго следим за безопасностью вашей информации и принимаем все
          необходимые меры для ее защиты от несанкционированного доступа,
          использования или раскрытия. Мы не передаем вашу информацию третьим
          лицам без вашего явного согласия, за исключением случаев,
          предусмотренных законодательством.
        </p>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>Ваши права</h2>
        <p className={'text-sm md:text-lg'}>
          Мы уважаем ваше право на конфиденциальность и понимаем, что
          предоставление доступа к вашим данным означает, что вы ограничены в
          контроле их управления. Мы гарантируем, что ваша информация будет
          обрабатываться с соблюдением всех применимых законов и нормативных
          требований.
        </p>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>Контакты</h2>
        <p className={'text-sm md:text-lg'}>
          Если у вас есть вопросы или требуется дополнительная информация о
          нашей политике конфиденциальности, пожалуйста, свяжитесь с нами по
          электронной почте SukinaSedai@gmail.com.
        </p>
      </div>
      <BorderLine />
      <div className={'flex flex-col gap-5 px-4'}>
        <h2 className={'text-md md:text-xl'}>
          Спасибо за ваше доверие и понимание.
        </h2>
        <p className={'text-sm md:text-lg'}>
          С уважением, команда Sukina Sedai
        </p>
      </div>
      <Link className={'p-2'} href={'/'}>
        <Button
          setting={{
            styleButton: 'p-2',
            text: {
              value: 'Home Page',
            },
          }}
        />
      </Link>
    </div>
  );
}
