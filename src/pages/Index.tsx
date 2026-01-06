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
        <Card className="mb-8 p-10 shadow-2xl border border-white/20 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-md animate-fade-in relative overflow-hidden group hover:shadow-blue-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="relative mb-6 group/icon">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover/icon:opacity-75 transition-opacity duration-500 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 flex items-center justify-center shadow-2xl animate-scale-in transform group-hover/icon:scale-110 transition-transform duration-500">
                <Icon name="HardHat" size={56} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent animate-fade-in">
              Школа Частного Строительства
            </h1>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <p className="text-xl text-slate-700 font-semibold">
                Проверенная опытом
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <p className="text-slate-600 mb-8 max-w-md leading-relaxed">
              Учебный материал по частному строительству от практикующих специалистов. Строим правильно с первого раза.
            </p>
            
            <Button 
              size="lg" 
              className="w-full max-w-sm shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-bold py-7 text-lg rounded-2xl transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
              <Icon name="ShoppingCart" size={22} className="mr-2 relative z-10" />
              <span className="relative z-10">Купить курс</span>
            </Button>
          </div>
        </Card>

        <div className="space-y-5 mb-8 animate-fade-in">
          {socialLinks.map((link, index) => (
            <Card 
              key={link.id}
              className="overflow-hidden border border-white/20 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 cursor-pointer bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md relative group hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, ${link.color.includes('green') ? 'rgba(34, 197, 94, 0.05)' : link.color.includes('blue') ? 'rgba(59, 130, 246, 0.05)' : link.color.includes('red') ? 'rgba(239, 68, 68, 0.05)' : 'rgba(100, 116, 139, 0.05)'} 0%, transparent 100%)` }}></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <a 
                href={link.url}
                className="flex items-center p-7 group/link relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative mr-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 group-hover:blur-xl transition-all duration-500`}></div>
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon name={link.icon as any} size={32} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {link.description}
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <Icon 
                    name="ChevronRight" 
                    size={28} 
                    className={`relative text-slate-400 transition-all duration-500 ${
                      hoveredLink === link.id ? 'translate-x-2 text-blue-600 scale-125' : ''
                    }`}
                  />
                </div>
              </a>
            </Card>
          ))}
        </div>

        <Card className="p-10 shadow-2xl border border-white/20 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md animate-fade-in relative overflow-hidden group hover:shadow-blue-500/20 transition-all duration-500">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '1.5s' }}></div>
          
          <div className="flex items-center mb-8 relative z-10">
            <div className="relative mr-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 flex items-center justify-center shadow-xl">
                <Icon name="HelpCircle" size={28} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Вопросы и ответы
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3 relative z-10">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-slate-200/50 rounded-2xl px-6 bg-gradient-to-r from-slate-50/80 to-white/80 hover:from-blue-50/80 hover:to-cyan-50/80 hover:border-blue-200/50 transition-all duration-300 hover:shadow-lg group/item"
              >
                <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-blue-600 py-5 transition-colors duration-300">
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform duration-300"></span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pb-5 leading-relaxed font-medium">
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