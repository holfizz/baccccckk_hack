"use client";

import { useEffect, useState } from "react";
import { Project, createProject, getProjects } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function ProjectsPage() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    content: "",
    status: "PLANNING" as const,
    startDate: "",
    endDate: "",
    budget: "",
    isPublic: true,
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      toast.error("Не удалось загрузить проекты");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async () => {
    try {
      const projectData = {
        ...newProject,
        budget: newProject.budget ? parseInt(newProject.budget) : undefined,
      };

      await createProject(projectData);
      toast.success("Проект успешно создан");
      setIsDialogOpen(false);
      loadProjects();
      setNewProject({
        title: "",
        description: "",
        content: "",
        status: "PLANNING",
        startDate: "",
        endDate: "",
        budget: "",
        isPublic: true,
      });
    } catch (error) {
      toast.error("Не удалось создать проект");
    }
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "PLANNING":
        return "bg-blue-100 text-blue-800";
      case "IN_PROGRESS":
        return "bg-yellow-100 text-yellow-800";
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "ON_HOLD":
        return "bg-orange-100 text-orange-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "PLANNING":
        return "Планирование";
      case "IN_PROGRESS":
        return "В процессе";
      case "COMPLETED":
        return "Завершен";
      case "ON_HOLD":
        return "На паузе";
      case "CANCELLED":
        return "Отменен";
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Проекты</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Создать проект</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Создать новый проект</DialogTitle>
              <DialogDescription>
                Заполните информацию о новом проекте
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Название проекта</Label>
                <Input
                  id="title"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Краткое описание</Label>
                <Textarea
                  id="description"
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Подробное описание</Label>
                <Textarea
                  id="content"
                  value={newProject.content}
                  onChange={(e) =>
                    setNewProject({ ...newProject, content: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Статус</Label>
                <Select
                  value={newProject.status}
                  onValueChange={(value: Project["status"]) =>
                    setNewProject({ ...newProject, status: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PLANNING">Планирование</SelectItem>
                    <SelectItem value="IN_PROGRESS">В процессе</SelectItem>
                    <SelectItem value="COMPLETED">Завершен</SelectItem>
                    <SelectItem value="ON_HOLD">На паузе</SelectItem>
                    <SelectItem value="CANCELLED">Отменен</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="startDate">Дата начала</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={newProject.startDate}
                  onChange={(e) =>
                    setNewProject({ ...newProject, startDate: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="endDate">Дата окончания</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={newProject.endDate}
                  onChange={(e) =>
                    setNewProject({ ...newProject, endDate: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="budget">Бюджет (₽)</Label>
                <Input
                  id="budget"
                  type="number"
                  value={newProject.budget}
                  onChange={(e) =>
                    setNewProject({ ...newProject, budget: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Отмена
              </Button>
              <Button onClick={handleCreateProject}>Создать</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col" hover>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">
                    {project.description}
                  </CardDescription>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${getStatusColor(
                    project.status
                  )}`}
                >
                  {getStatusText(project.status)}
                </span>
              </div>
            </div>
            <div className="flex-grow">
              {project.content && (
                <p className="text-sm text-gray-600 mb-4">{project.content}</p>
              )}
              <div className="space-y-2">
                {project.startDate && (
                  <p className="text-sm">
                    <span className="font-medium">Начало:</span>{" "}
                    {format(new Date(project.startDate), "d MMMM yyyy", {
                      locale: ru,
                    })}
                  </p>
                )}
                {project.endDate && (
                  <p className="text-sm">
                    <span className="font-medium">Окончание:</span>{" "}
                    {format(new Date(project.endDate), "d MMMM yyyy", {
                      locale: ru,
                    })}
                  </p>
                )}
                {project.budget && (
                  <p className="text-sm">
                    <span className="font-medium">Бюджет:</span>{" "}
                    {project.budget.toLocaleString("ru-RU")} ₽
                  </p>
                )}
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center text-sm text-gray-500">
                <span>
                  Автор: {project.author.name || project.author.email}
                </span>
                <span className="mx-2">•</span>
                <span>
                  {format(new Date(project.createdAt), "d MMMM yyyy", {
                    locale: ru,
                  })}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">
            Пока нет проектов
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Создайте новый проект, нажав на кнопку "Создать проект" выше.
          </p>
        </div>
      )}
    </div>
  );
}
