import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const CatalogPage = () => {
  const categories = [
    { name: 'Свадебные', count: 12, active: true },
    { name: 'День рождения', count: 8 },
    { name: 'Корпоративные', count: 6 },
    { name: 'Детские', count: 15 },
    { name: 'Романтические', count: 7 }
  ];

  const products = [
    {
      id: 1,
      name: 'Элегантный свадебный букет',
      price: '2500 ₽',
      originalPrice: '3000 ₽',
      image: '/img/a2380909-32d4-48c5-984d-c1b06ade48c7.jpg',
      badge: 'Хит продаж',
      category: 'Свадебные',
      description: 'Нежная композиция из розовых и белых шаров'
    },
    {
      id: 2,
      name: 'Цифры золотые на день рождения',
      price: '1800 ₽',
      image: '/img/5773dcbb-6edc-47b2-9339-fb35ff1bc548.jpg',
      badge: 'Новинка',
      category: 'День рождения',
      description: 'Стильные фольгированные цифры любого возраста'
    },
    {
      id: 3,
      name: 'Романтические сердца',
      price: '1200 ₽',
      image: '/img/4247ce16-3744-412d-b8d0-81424a389d4c.jpg',
      badge: 'Акция',
      category: 'Романтические',
      description: 'Красные шары-сердца для признаний в любви'
    },
    {
      id: 4,
      name: 'Корпоративный набор',
      price: '3500 ₽',
      image: '/img/a2380909-32d4-48c5-984d-c1b06ade48c7.jpg',
      category: 'Корпоративные',
      description: 'Брендированные шары с логотипом компании'
    },
    {
      id: 5,
      name: 'Детский праздничный набор',
      price: '2200 ₽',
      image: '/img/5773dcbb-6edc-47b2-9339-fb35ff1bc548.jpg',
      category: 'Детские',
      description: 'Яркие разноцветные шары с любимыми героями'
    },
    {
      id: 6,
      name: 'Выпускной 2024',
      price: '2800 ₽',
      image: '/img/4247ce16-3744-412d-b8d0-81424a389d4c.jpg',
      badge: 'Популярное',
      category: 'Свадебные',
      description: 'Торжественная композиция для выпускного'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Каталог воздушных шаров</h1>
          <p className="text-lg text-muted-foreground">
            Широкий выбор композиций для любого праздника в Сочи. Быстрая доставка и индивидуальный подход.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with categories */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Категории</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors flex justify-between items-center ${
                        category.active 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3 text-foreground">Срочная доставка</h4>
                  <div className="bg-accent/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Icon name="Clock" size={16} className="text-primary mr-2" />
                      <span className="text-sm font-medium text-foreground">2-3 часа</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Экстренная доставка по Сочи
                    </p>
                    <Button size="sm" className="w-full">
                      Срочный заказ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Показано {products.length} товаров
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Сортировка:</span>
                <Button variant="outline" size="sm">
                  По популярности
                  <Icon name="ChevronDown" size={16} className="ml-1" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 text-xs">
                        {product.badge}
                      </Badge>
                    )}
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition-colors">
                      <Icon name="Heart" size={16} className="text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                  
                  <CardContent className="p-4">
                    <Badge variant="outline" className="text-xs mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1" size="sm">
                        <Icon name="ShoppingCart" size={14} className="mr-1" />
                        В корзину
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Eye" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Показать ещё товары
                <Icon name="ChevronDown" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;