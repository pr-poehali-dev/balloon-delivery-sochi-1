import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const ReviewsPage = () => {
  const reviews = [
    {
      name: 'Анна Петрова',
      date: '15 января 2024',
      rating: 5,
      event: 'Свадьба',
      review: 'Потрясающие воздушные шары для нашей свадьбы! Композиция была именно такой, как мы мечтали - нежная, элегантная, в точности соответствовала нашей цветовой гамме. Доставили точно в срок, упаковка была идеальной. Гости до сих пор восхищаются! Обязательно обратимся снова.',
      image: '/img/a2380909-32d4-48c5-984d-c1b06ade48c7.jpg'
    },
    {
      name: 'Михаил Козлов',
      date: '8 января 2024',
      rating: 5,
      event: 'День рождения',
      review: 'Заказывал цифры на день рождения дочери. Срочная доставка за 3 часа - просто спасли праздник! Шары качественные, золотые, очень красивые. Ребёнок был в восторге. Цена адекватная, сервис на высоте. Рекомендую всем!',
      image: '/img/5773dcbb-6edc-47b2-9339-fb35ff1bc548.jpg'
    },
    {
      name: 'Елена Соколова',
      date: '22 декабря 2023',
      rating: 5,
      event: 'Корпоратив',
      review: 'Заказывали оформление корпоративного мероприятия. Менеджер очень профессионально подошёл к делу, предложил несколько вариантов, учёл все наши пожелания и бюджет. Результат превзошёл ожидания - зал выглядел фантастически!',
      image: '/img/4247ce16-3744-412d-b8d0-81424a389d4c.jpg'
    },
    {
      name: 'Дмитрий Волков',
      date: '5 декабря 2023',
      rating: 4,
      event: 'Предложение руки и сердца',
      review: 'Готовил сюрприз для предложения. Ребята помогли создать романтическую атмосферу с сердечками и розовыми шарами. Девушка сказала "да"! Единственный минус - немного задержались с доставкой, но предупредили заранее.',
      image: '/img/4247ce16-3744-412d-b8d0-81424a389d4c.jpg'
    },
    {
      name: 'Ирина Морозова',
      date: '28 ноября 2023',
      rating: 5,
      event: 'Детский праздник',
      review: 'Организовывали день рождения сына 7 лет. Шары с героями мультфильмов, яркие, качественные. Дети были в восторге весь праздник! Доставили в назначенное время, помогли установить. Спасибо за детское счастье!',
      image: '/img/5773dcbb-6edc-47b2-9339-fb35ff1bc548.jpg'
    },
    {
      name: 'Ольга Кузнецова',
      date: '15 ноября 2023',
      rating: 5,
      event: 'Выписка из роддома',
      review: 'Нежные розовые и белые шарики для встречи малышки. Всё было очень деликатно, красиво, без излишеств. Фотографии получились волшебными. Рекомендую молодым родителям - создадите прекрасные воспоминания!',
      image: '/img/a2380909-32d4-48c5-984d-c1b06ade48c7.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Довольных клиентов' },
    { number: '4.9', label: 'Средняя оценка' },
    { number: '95%', label: 'Повторных заказов' },
    { number: '24/7', label: 'Поддержка клиентов' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Отзывы клиентов</h1>
          <p className="text-lg text-muted-foreground">
            Мы гордимся доверием наших клиентов и стремимся превосходить ожидания на каждом празднике.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <img 
                      src={review.image} 
                      alt={review.event}
                      className="w-full h-48 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{review.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                          <Badge variant="outline">{review.event}</Badge>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Icon name="MessageSquare" size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Поделитесь своим отзывом
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ваше мнение важно для нас! Расскажите о своём опыте работы с нами, 
                это поможет другим клиентам сделать правильный выбор.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Icon name="Edit" size={16} className="mr-2" />
                  Оставить отзыв
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Star" size={16} className="mr-2" />
                  Оценить нас
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review Guidelines */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Как оставить отзыв
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-3 rounded-full bg-blue-100 w-fit mx-auto mb-3">
                  <Icon name="ShoppingCart" size={20} className="text-blue-600" />
                </div>
                <h4 className="font-medium text-foreground mb-2">1. Сделайте заказ</h4>
                <p className="text-sm text-muted-foreground">
                  Оформите заказ через сайт или по телефону
                </p>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-full bg-green-100 w-fit mx-auto mb-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <h4 className="font-medium text-foreground mb-2">2. Получите товар</h4>
                <p className="text-sm text-muted-foreground">
                  Дождитесь доставки и оцените качество
                </p>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-full bg-purple-100 w-fit mx-auto mb-3">
                  <Icon name="MessageSquare" size={20} className="text-purple-600" />
                </div>
                <h4 className="font-medium text-foreground mb-2">3. Напишите отзыв</h4>
                <p className="text-sm text-muted-foreground">
                  Поделитесь впечатлениями с другими клиентами
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewsPage;