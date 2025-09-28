import Image from 'next/image';
import Card from '@/components/ui/Card';

const Team = () => {
  const team = [
    {
      name: 'Александр Петров',
      position: 'Директор ЦОДД',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '15 лет опыта'
    },
    {
      name: 'Мария Сидорова',
      position: 'Главный инженер',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '12 лет опыта'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Руководитель IT-отдела',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '10 лет опыта'
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наша команда
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Профессионалы с многолетним опытом в области дорожного движения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} hover className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.position}</p>
              <p className="text-text-muted">{member.experience}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;