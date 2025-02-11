import IconCloud from '@/components/ui/icon-cloud';

const slugs = [
  'react',
  'javascript',
  'typescript',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'shadcnui',
  'tailwindcss',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'mongodb',
  'expo',
  'vercel',
  'testinglibrary',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'figma',
  'linkedin',
  'vite',
  'notion',
  'windows',
  'styled-components',
  'jest',
];

export function IconCloudDemo() {
  return (
    <div
      className="relative flex size-full max-w-lg items-center justify-center overflow-hidden
     border-none bg-background px-10 pt-8"
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
