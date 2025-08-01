import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const DeliveryPage = () => {
  const zones = [
    { name: 'Центр Сочи', price: 'Бесплатно', time: '1-2 часа', color: 'bg-green-500' },
    { name: 'Адлер', price: '300 ₽', time: '2-3 часа', color: 'bg-blue-500' },
    { name: 'Хоста', price: '250 ₽', time: '1-2 часа', color: 'bg-purple-500' },
    { name: 'Лазаревское', price: '500 ₽', time: '3-4 часа', color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Доставка по Сочи</h1>
          <p className="text-lg text-muted-foreground">
            Быстрая и надёжная доставка воздушных шаров по всему Большому Сочи. 
            Экстренная доставка за 2-3 часа для срочных заказов.
          </p>
        </div>

        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Срочная доставка 2-3 часа
                </h3>
                <p className="text-muted-foreground mb-4">
                  Идеально для неотложных событий: забытые подарки, сюрпризы, 
                  внезапные праздники. Работаем круглосуточно!
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="text-primary mr-2" />
                    <span className="text-sm">2-3 часа</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="text-primary mr-2" />
                    <span className="text-sm">По всему Сочи</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="text-primary mr-2" />
                    <span className="text-sm">24/7</span>
                  </div>
                </div>
                <Button className="mt-4">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать срочно: +7 (918) 123-45-67
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Зоны доставки</h2>
            <div className="space-y-4">
              {zones.map((zone, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${zone.color}`}></div>
                        <div>
                          <h3 className="font-semibold text-foreground">{zone.name}</h3>
                          <p className="text-sm text-muted-foreground">Время: {zone.time}</p>
                        </div>
                      </div>
                      <Badge variant={zone.price === 'Бесплатно' ? 'default' : 'secondary'}>
                        {zone.price}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Info" size={20} className="mr-2 text-primary" />
                  Условия доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Бесплатная доставка при заказе от 2000 ₽ в пределах центра Сочи</li>
                  <li>• Доставка точно в указанное время (±15 минут)</li>
                  <li>• Возможность доставки на этаж за дополнительную плату</li>
                  <li>• SMS-уведомления о статусе заказа</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Варианты доставки</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-green-100">
                      <Icon name="Truck" size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Стандартная доставка</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Доставка в течение дня по предварительной записи
                      </p>
                      <Badge variant="outline">4-6 часов</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-orange-100">
                      <Icon name="Clock" size={20} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Экспресс доставка</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Быстрая доставка для срочных заказов
                      </p>
                      <Badge variant="outline">2-3 часа</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Icon name="Calendar" size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Доставка к сроку</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Точная доставка к началу мероприятия
                      </p>
                      <Badge variant="outline">По расписанию</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Icon name="MapPin" size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Самовывоз</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Забрать заказ из нашего шоу-рума в центре Сочи
                      </p>
                      <Badge variant="outline">Бесплатно</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Вопросы по доставке?
              </h3>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами для уточнения деталей доставки в вашем районе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (918) 123-45-67
                </Button>
                <Button variant="outline">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryPage;