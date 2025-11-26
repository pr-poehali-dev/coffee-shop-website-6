import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    comment: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения бронирования.",
    });
    setBookingForm({ name: '', phone: '', date: '', time: '', guests: '', comment: '' });
  };

  const menuItems = [
    {
      category: 'Горячие напитки',
      items: [
        { name: 'Эспрессо', price: '150₽', description: 'Классический итальянский кофе' },
        { name: 'Капучино', price: '220₽', description: 'С нежной молочной пенкой' },
        { name: 'Латте', price: '240₽', description: 'Мягкий кофе с молоком' },
        { name: 'Раф', price: '260₽', description: 'Сливочный кофе со сливками' },
      ]
    },
    {
      category: 'Холодные напитки',
      items: [
        { name: 'Айс латте', price: '270₽', description: 'Охлажденный латте со льдом' },
        { name: 'Холодный брю', price: '290₽', description: 'Кофе холодного заваривания' },
        { name: 'Фраппе', price: '310₽', description: 'Взбитый холодный кофе' },
      ]
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Круассан', price: '180₽', description: 'Свежий французский круассан' },
        { name: 'Чизкейк', price: '290₽', description: 'Нью-йоркский чизкейк' },
        { name: 'Брауни', price: '250₽', description: 'Шоколадный брауни с орехами' },
      ]
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/b3c810a9-53bb-41c5-8f2d-47dcd00e049a.jpg',
    'https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/36e9ebcf-1e0e-4c7d-b843-660b10fe4bc6.jpg',
    'https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/7a1d2d37-6912-4b78-b886-782d4d1768e9.jpg',
    'https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/b3c810a9-53bb-41c5-8f2d-47dcd00e049a.jpg',
    'https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/36e9ebcf-1e0e-4c7d-b843-660b10fe4bc6.jpg',
    'https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/7a1d2d37-6912-4b78-b886-782d4d1768e9.jpg',
  ];

  const testimonials = [
    { name: 'Анна Петрова', text: 'Лучший кофе в городе! Уютная атмосфера и внимательный персонал.', rating: 5 },
    { name: 'Дмитрий Смирнов', text: 'Отличное место для работы с ноутбуком. Вкусный кофе и десерты.', rating: 5 },
    { name: 'Мария Иванова', text: 'Обожаю их круассаны! Всегда свежие и ароматные.', rating: 5 },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Coffee" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-primary">Уютная чашка</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'menu', 'about', 'gallery', 'testimonials', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors ${activeSection === section ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'}`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'menu' && 'Меню'}
                  {section === 'about' && 'О нас'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:flex">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                <Icon name="Heart" size={16} className="mr-1" />
                Домашняя атмосфера
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Добро пожаловать в Уютную чашку
              </h1>
              <p className="text-lg text-muted-foreground">
                Место, где каждая чашка кофе наполнена теплом и заботой. Мы создали пространство для встреч, работы и отдыха.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')}>
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать столик
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('menu')}>
                  Посмотреть меню
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/b3c810a9-53bb-41c5-8f2d-47dcd00e049a.jpg"
                alt="Интерьер кофейни"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Coffee" size={16} className="mr-1" />
              Наше меню
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вкусные напитки и десерты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Свежесваренный кофе из отборных зерен и домашняя выпечка
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((category, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/0476f9ef-2ea4-4ad1-8b62-bff1659e1a8b/files/36e9ebcf-1e0e-4c7d-b843-660b10fe4bc6.jpg"
                alt="Кофе с латте-арт"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                <Icon name="Sparkles" size={16} className="mr-1" />
                О нас
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Наша история</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы открылись в 2020 году с простой идеей — создать место, где люди могут насладиться 
                качественным кофе в уютной атмосфере. Каждое утро мы готовим свежую выпечку и варим 
                кофе из зерен, обжаренных специально для нас.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Наша команда бариста постоянно совершенствует свое мастерство, чтобы каждая чашка 
                была идеальной. Мы верим, что кофе — это не просто напиток, это ритуал и возможность 
                сделать паузу в суетливом дне.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Видов напитков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Гостей в месяц</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Camera" size={16} className="mr-1" />
              Галерея
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Атмосфера нашей кофейни</h2>
            <p className="text-muted-foreground text-lg">
              Посмотрите, как уютно у нас внутри
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="MessageCircle" size={16} className="mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши гости</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Calendar" size={16} className="mr-1" />
              Бронирование
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Забронировать столик</h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами для подтверждения
            </p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      required 
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      required 
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input 
                      id="date" 
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input 
                      id="time" 
                      type="time"
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Гостей</Label>
                    <Input 
                      id="guests" 
                      type="number"
                      min="1"
                      max="10"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({...bookingForm, guests: e.target.value})}
                      required 
                      placeholder="2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий (необязательно)</Label>
                  <Textarea 
                    id="comment"
                    value={bookingForm.comment}
                    onChange={(e) => setBookingForm({...bookingForm, comment: e.target.value})}
                    placeholder="Особые пожелания или вопросы"
                    rows={3}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="MapPin" size={16} className="mr-1" />
              Контакты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Приходите к нам</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  г. Москва, ул. Примерная, д. 10
                </p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +7 (999) 123-45-67
                </p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <CardTitle>Время работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Пн-Вс: 08:00 - 22:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Coffee" size={28} />
              <span className="text-xl font-bold">Уютная чашка</span>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Icon name="Mail" size={24} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-primary-foreground/80">
            <p>© 2024 Уютная чашка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
