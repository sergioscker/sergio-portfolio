import IconCloud from '@/components/ui/icon-cloud';

const slugs = [
  'react',
  'typescript',
  'javascript',
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
  'reactnative',
  'expo',
  'vercel',
  'android',
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
