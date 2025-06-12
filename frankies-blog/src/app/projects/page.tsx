import { Metadata } from 'next';
import Image from 'next/image';
import { getFeaturedProjects, getOtherProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my latest projects and technical work.',
};

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <div className="px-40 flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 bg-[#111b22]">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  My Projects
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  A showcase of my latest work and technical projects
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-10 px-4 py-10 @container">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 @[480px]:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.id} className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl bg-[#243947]" 
                     style={{ backgroundImage: `url(${project.image})` }}></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">{project.title}</p>
                  <p className="text-[#93b3c8] text-sm font-normal leading-normal">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-[#243947] text-[#93b3c8] px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="text-[#1993e5] hover:text-white transition-colors text-sm font-medium">
                      View Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                       className="text-[#1993e5] hover:text-white transition-colors text-sm font-medium">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="flex flex-col gap-6 px-4 py-6">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 @[480px]:grid-cols-2">
            {otherProjects.map((project) => (
              <div key={project.id} className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl bg-[#243947]" 
                     style={{ backgroundImage: `url(${project.image})` }}></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">{project.title}</p>
                  <p className="text-[#93b3c8] text-sm font-normal leading-normal">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-[#243947] text-[#93b3c8] px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="text-[#1993e5] hover:text-white transition-colors text-sm font-medium">
                      View Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                       className="text-[#1993e5] hover:text-white transition-colors text-sm font-medium">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex px-4 py-3 justify-center">
          <div className="flex flex-col items-center gap-4 py-10 px-4 text-center">
            <h3 className="text-white text-xl font-bold">Interested in Collaboration?</h3>
            <p className="text-[#93b3c8] max-w-md">
              I'm always open to discussing new projects and opportunities. Let's build something amazing together!
            </p>
            <a href="/contact" 
               className="bg-[#1993e5] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 