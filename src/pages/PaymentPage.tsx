import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const PaymentPage = () => {
  const paymentMethods = [
    {
      icon: 'CreditCard',
      title: 'Банковские карты',
      description: 'Visa, MasterCard, МИР',
      badges: ['Онлайн', 'Безопасно']
    },
    {
      icon: 'Banknote',
      title: 'Наличными',
      description: 'Оплата курьеру при получении',
      badges: ['При доставке']
    },
    {
      icon: 'Smartphone',
      title: 'СБП',
      description: 'Система быстрых платежей',
      badges: ['Мгновенно', '0% комиссии']
    },
    {
      icon: 'Building',
      title: 'Безналичный расчёт',
      description: 'Для юридических лиц',
      badges: ['С НДС', 'Договор']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Способы оплаты</h1>
          <p className="text-lg text-muted-foreground">
            Удобные и безопасные способы оплаты заказов. Выберите подходящий вариант для вас.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon name={method.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {method.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {method.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
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
                <Icon name="Shield" size={20} className="mr-2 text-primary" />
                Безопасность платежей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Lock" size={16} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">SSL-шифрование</h4>
                    <p className="text-sm text-muted-foreground">
                      Все платёжные данные защищены 256-битным шифрованием
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">PCI DSS</h4>
                    <p className="text-sm text-muted-foreground">
                      Соответствие международным стандартам безопасности
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Eye" size={16} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Конфиденциальность</h4>
                    <p className="text-sm text-muted-foreground">
                      Мы не храним данные ваших банковских карт
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="FileText" size={20} className="mr-2 text-primary" />
                Документы и отчётность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Receipt" size={16} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Чеки и квитанции</h4>
                    <p className="text-sm text-muted-foreground">
                      Электронные чеки отправляются на email
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Building2" size={16} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Для юридических лиц</h4>
                    <p className="text-sm text-muted-foreground">
                      Счета, акты, накладные с НДС
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Download" size={16} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Отчёты</h4>
                    <p className="text-sm text-muted-foreground">
                      История операций в личном кабинете
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Условия оплаты</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Предоплата</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Заказы от 1000 ₽ — предоплата 50%</li>
                  <li>• Заказы от 5000 ₽ — предоплата 30%</li>
                  <li>• Срочные заказы — полная предоплата</li>
                  <li>• Корпоративные заказы — по договорённости</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Возврат средств</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Отмена за 24 часа — полный возврат</li>
                  <li>• Отмена за 6 часов — возврат 50%</li>
                  <li>• Брак товара — полный возврат</li>
                  <li>• Возврат в течение 3-5 рабочих дней</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Icon name="Percent" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Скидка при полной предоплате
              </h3>
              <p className="text-muted-foreground mb-4">
                Получите скидку 5% при оплате полной стоимости заказа заранее
              </p>
              <Badge className="text-lg px-4 py-2">
                Скидка 5%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Вопросы по оплате?
              </h3>
              <p className="text-muted-foreground mb-6">
                Наши менеджеры помогут выбрать удобный способ оплаты
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (918) 123-45-67
                </Button>
                <Button variant="outline">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@balloons-sochi.ru
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentPage;