'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  PlusIcon, 
  TrashIcon, 
  SaveIcon, 
  ArrowLeftIcon,
  EditIcon,
  EyeIcon
} from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Project } from '@/lib/data/projects';

const projectSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tech: z.array(z.string()).min(1, 'At least one technology is required'),
  github: z.string().url('Valid GitHub URL is required'),
  demo: z.string().url('Valid demo URL is required'),
  image: z.string().min(1, 'Image path is required'),
  featured: z.boolean(),
});

const projectsSchema = z.object({
  projects: z.array(projectSchema),
});

type ProjectsFormData = z.infer<typeof projectsSchema>;

export default function AdminProjectsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProjectsFormData>({
    resolver: zodResolver(projectsSchema),
    defaultValues: {
      projects: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects',
  });

  useEffect(() => {
    if (status === 'loading') return;

    if (!session || (session.user as any)?.role !== 'admin') {
      router.push('/admin/login');
      return;
    }

    loadProjects();
  }, [session, status, router]);

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects');
      if (response.ok) {
        const data = await response.json();
        setValue('projects', data.projects);
      } else {
        toast.error('Failed to load projects');
      }
    } catch (error) {
      toast.error('Error loading projects');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: ProjectsFormData) => {
    setIsSaving(true);
    
    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Projects updated successfully!');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to update projects');
      }
    } catch (error) {
      toast.error('Error updating projects');
    } finally {
      setIsSaving(false);
    }
  };

  const addNewProject = () => {
    const newId = Math.max(...fields.map(f => f.id), 0) + 1;
    append({
      id: newId,
      title: '',
      description: '',
      tech: [''],
      github: '',
      demo: '',
      image: '/images/projects/new-project.jpg',
      featured: false,
    });
  };

  const addTechItem = (projectIndex: number) => {
    const currentProject = watch(`projects.${projectIndex}`);
    setValue(`projects.${projectIndex}.tech`, [...currentProject.tech, '']);
  };

  const removeTechItem = (projectIndex: number, techIndex: number) => {
    const currentProject = watch(`projects.${projectIndex}`);
    const newTech = currentProject.tech.filter((_, index) => index !== techIndex);
    setValue(`projects.${projectIndex}.tech`, newTech);
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/admin/dashboard')}
                className="text-slate-300 hover:text-white"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="h-6 w-px bg-slate-600" />
              <h1 className="text-xl font-bold text-white">Manage Projects</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push('/projects')}
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <EyeIcon className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Button
              type="button"
              onClick={addNewProject}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Add New Project
            </Button>
            <Button
              type="submit"
              disabled={isSaving}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSaving ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </div>
              ) : (
                <>
                  <SaveIcon className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {fields.map((field, projectIndex) => (
              <Card key={field.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <EditIcon className="w-5 h-5" />
                      Project #{field.id}
                      {watch(`projects.${projectIndex}.featured`) && (
                        <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </CardTitle>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => remove(projectIndex)}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor={`projects.${projectIndex}.title`} className="text-white">
                        Title *
                      </Label>
                      <input
                        {...register(`projects.${projectIndex}.title`)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Project title"
                      />
                      {errors.projects?.[projectIndex]?.title && (
                        <p className="text-red-400 text-sm">
                          {errors.projects[projectIndex]?.title?.message}
                        </p>
                      )}
                    </div>

                    {/* Image Path */}
                    <div className="space-y-2">
                      <Label htmlFor={`projects.${projectIndex}.image`} className="text-white">
                        Image Path *
                      </Label>
                      <input
                        {...register(`projects.${projectIndex}.image`)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="/images/projects/project.jpg"
                      />
                      {errors.projects?.[projectIndex]?.image && (
                        <p className="text-red-400 text-sm">
                          {errors.projects[projectIndex]?.image?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor={`projects.${projectIndex}.description`} className="text-white">
                      Description *
                    </Label>
                    <textarea
                      {...register(`projects.${projectIndex}.description`)}
                      rows={3}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Project description"
                    />
                    {errors.projects?.[projectIndex]?.description && (
                      <p className="text-red-400 text-sm">
                        {errors.projects[projectIndex]?.description?.message}
                      </p>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-white">Technologies *</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addTechItem(projectIndex)}
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        <PlusIcon className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {watch(`projects.${projectIndex}.tech`)?.map((_, techIndex) => (
                        <div key={techIndex} className="flex gap-2">
                          <input
                            {...register(`projects.${projectIndex}.tech.${techIndex}`)}
                            className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Technology name"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => removeTechItem(projectIndex, techIndex)}
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GitHub URL */}
                    <div className="space-y-2">
                      <Label htmlFor={`projects.${projectIndex}.github`} className="text-white">
                        GitHub URL *
                      </Label>
                      <input
                        {...register(`projects.${projectIndex}.github`)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://github.com/username/repo"
                      />
                      {errors.projects?.[projectIndex]?.github && (
                        <p className="text-red-400 text-sm">
                          {errors.projects[projectIndex]?.github?.message}
                        </p>
                      )}
                    </div>

                    {/* Demo URL */}
                    <div className="space-y-2">
                      <Label htmlFor={`projects.${projectIndex}.demo`} className="text-white">
                        Demo URL *
                      </Label>
                      <input
                        {...register(`projects.${projectIndex}.demo`)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://your-demo.vercel.app"
                      />
                      {errors.projects?.[projectIndex]?.demo && (
                        <p className="text-red-400 text-sm">
                          {errors.projects[projectIndex]?.demo?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Featured Checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      {...register(`projects.${projectIndex}.featured`)}
                      type="checkbox"
                      id={`projects.${projectIndex}.featured`}
                      className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <Label htmlFor={`projects.${projectIndex}.featured`} className="text-white">
                      Featured Project
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {fields.length === 0 && (
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="text-center py-12">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EditIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
                <p className="text-slate-400 mb-4">
                  Add your first project to get started with your portfolio.
                </p>
                <Button onClick={addNewProject} className="bg-blue-600 hover:bg-blue-700">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Your First Project
                </Button>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  );
} 