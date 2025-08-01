import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const ContactsPage = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (918) 123-45-67',
      description: 'Работаем круглосуточно для срочных заказов',
      action: 'Позвонить'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+7 (918) 123-45-67',
      description: 'Быстрые ответы в мессенджере',
      action: 'Написать'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@balloons-sochi.ru',
      description: 'Для подробных консультаций',
      action: 'Написать'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Сочи, ул. Курортный проспект, 75',
      description: 'Шоу-рум в центре города',
      action: 'Маршрут'
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '9:00 - 20:00' },
    { day: 'Суббота', hours: '10:00 - 19:00' },
    { day: 'Воскресенье', hours: '11:00 - 18:00' },
    { day: 'Срочные заказы', hours: '24/7' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами удобным способом. Мы всегда рады помочь с выбором и оформлением заказа.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactMethods.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon name={contact.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-2">
                      {contact.value}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {contact.description}
                    </p>
                    <Button size="sm">
                      {contact.action}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-primary" />
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-foreground">{schedule.day}</span>
                    <span className="font-medium text-primary">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <Icon name="Info" size={14} className="inline mr-1" />
                  Для срочных заказов работаем круглосуточно
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                Наш адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Шоу-рум "Воздушная Сочи"</h4>
                  <p className="text-muted-foreground mb-2">
                    г. Сочи, ул. Курортный проспект, 75
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1-й этаж, вход со стороны набережной
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Как добраться:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• От ж/д вокзала: автобус №1, остановка "Театральная"</li>
                    <li>• От аэропорта: электричка до центра, далее пешком 5 минут</li>
                    <li>• Парковка: бесплатная для клиентов (2 часа)</li>
                  </ul>
                </div>

                <Button className="w-full">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Построить маршрут
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Часто задаваемые вопросы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Как оформить заказ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Позвоните нам, напишите в WhatsApp или приезжайте в шоу-рум. 
                    Мы поможем выбрать композицию и оформим заказ.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Какой минимальный заказ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Минимальная сумма заказа составляет 500 ₽. 
                    Бесплатная доставка от 2000 ₽ в центре Сочи.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Как быстро можете доставить?</h4>
                  <p className="text-sm text-muted-foreground">
                    Стандартная доставка 4-6 часов, экспресс-доставка 2-3 часа. 
                    Для срочных заказов работаем круглосуточно.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Можно ли заказать индивидуальную композицию?</h4>
                  <p className="text-sm text-muted-foreground">
                    Да, мы создаём уникальные композиции по вашим пожеланиям. 
                    Обсудите детали с нашим дизайнером.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Icon name="MessageSquare" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Нужна консультация?
              </h3>
              <p className="text-muted-foreground mb-6">
                Наши специалисты помогут выбрать идеальную композицию для вашего праздника
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactsPage;