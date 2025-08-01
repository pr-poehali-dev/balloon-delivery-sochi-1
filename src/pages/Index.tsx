import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: 'Clock',
      title: 'Срочная доставка 2-3 часа',
      description: 'Экстренная доставка для неотложных событий по Сочи'
    },
    {
      icon: 'Heart',
      title: 'Свадебные композиции',
      description: 'Элегантные букеты для торжественных моментов'
    },
    {
      icon: 'Gift',
      title: 'Индивидуальный подход',
      description: 'Персональные решения для каждого праздника'
    }
  ];

  const popularProducts = [
    {
      name: 'Свадебный букет',
      price: '2500 ₽',
      image: '/img/a2380909-32d4-48c5-984d-c1b06ade48c7.jpg',
      badge: 'Хит продаж'
    },
    {
      name: 'Цифры на день рождения',
      price: '1800 ₽',
      image: '/img/5773dcbb-6edc-47b2-9339-fb35ff1bc548.jpg',
      badge: 'Новинка'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Воздушные шары
            <span className="block text-primary">для особенных моментов</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём атмосферу праздника с элегантными композициями из воздушных шаров в Сочи. 
            Свадьбы, дни рождения, корпоративы — делаем каждое событие незабываемым.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/catalog">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Посмотреть каталог
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-accent/20">
              <Icon name="Clock" size={20} className="mr-2" />
              Срочный заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Популярные композиции
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Готовы создать праздник?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и оформления заказа. 
            Работаем круглосуточно для срочных заказов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contacts">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;