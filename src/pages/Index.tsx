import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      id: "whatsapp",
      title: "Написать в WhatsApp",
      description: "Получите быструю консультацию",
      icon: "MessageCircle",
      url: "https://wa.me/",
      color: "from-green-500 to-green-600"
    },
    {
      id: "telegram",
      title: "Telegram канал",
      description: "За жили были",
      icon: "Home",
      url: "https://t.me/",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "telegram-svo",
      title: "Помощь военным СВО",
      description: "Сбор гуманитарной помощи",
      icon: "Heart",
      url: "https://t.me/",
      color: "from-red-500 to-orange-600"
    },
    {
      id: "website",
      title: "Наш сайт",
      description: "Строительная компания",
      icon: "Globe",
      url: "#",
      color: "from-slate-600 to-slate-700"
    }
  ];

  const faqs = [
    {
      question: "Для кого этот курс?",
      answer: "Курс подходит для начинающих специалистов в строительстве, прорабов, руководителей проектов и всех, кто хочет систематизировать знания в области строительных технологий и управления проектами."
    },
    {
      question: "Какая продолжительность курса?",
      answer: "Полный курс рассчитан на 3 месяца интенсивного обучения с практическими занятиями. Вы получите доступ ко всем материалам на 12 месяцев."
    },
    {
      question: "Выдается ли сертификат?",
      answer: "Да, после успешного завершения курса и сдачи итогового проекта вы получите сертификат о прохождении курса с указанием изученных модулей."
    },
    {
      question: "Есть ли практические занятия?",
      answer: "Курс включает разбор реальных кейсов, практические задания после каждого модуля, работу с проектной документацией и выездные практики на действующие объекты."
    },
    {
      question: "Какая поддержка предоставляется?",
      answer: "Вы получаете доступ к закрытому чату с преподавателями и коллегами, еженедельные онлайн-консультации и персональную обратную связь по практическим заданиям."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAgMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      
      <div className="absolute top-32 right-16 opacity-[0.03]">
        <Icon name="HardHat" size={140} className="text-white" />
      </div>
      <div className="absolute bottom-40 left-12 opacity-[0.03]">
        <Icon name="Hammer" size={120} className="text-white" />
      </div>
      <div className="absolute top-1/2 right-24 opacity-[0.03]">
        <Icon name="Wrench" size={100} className="text-white" />
      </div>
      <div className="absolute top-1/3 left-20 opacity-[0.03]">
        <Icon name="Ruler" size={90} className="text-white" />
      </div>
      
      <div className="max-w-2xl mx-auto px-4 py-12 relative z-10">
        <Card className="mb-8 p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-tr-full"></div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg animate-scale-in">
              <Icon name="HardHat" size={48} className="text-white" />
            </div>
            
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Школа Частного Строительства
            </h1>
            
            <p className="text-lg text-slate-600 mb-2 font-medium">
              Проверенная опытом
            </p>
            
            <p className="text-slate-500 mb-6 max-w-md">
              Учебный материал по частному строительству от практикующих специалистов. Строим правильно с первого раза.
            </p>
            
            <Button 
              size="lg" 
              className="w-full max-w-sm shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 text-lg"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить курс
            </Button>
          </div>
        </Card>

        <div className="space-y-4 mb-8 animate-fade-in">
          {socialLinks.map((link, index) => (
            <Card 
              key={link.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm relative"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a 
                href={link.url}
                className="flex items-center p-6 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={link.icon as any} size={28} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {link.description}
                  </p>
                </div>
                
                <Icon 
                  name="ChevronRight" 
                  size={24} 
                  className={`text-slate-400 transition-all duration-300 ${
                    hoveredLink === link.id ? 'translate-x-1 text-blue-600' : ''
                  }`}
                />
              </a>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/5 to-transparent rounded-br-full"></div>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 shadow-md">
              <Icon name="HelpCircle" size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Вопросы и ответы
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-700 hover:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-8 text-center text-sm text-slate-500 animate-fade-in">
          <p>© 2026 Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default Index;