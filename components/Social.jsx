import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

const sociais = [
  {
    icon: <FaLinkedinIn />,
    path: 'https://pt.linkedin.com/in/sergioliveiira',
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/sergioscker',
  },
  {
    icon: <FaWhatsapp />,
    path: 'https://wa.link/up0k32',
  },
  {
    icon: <FaMailBulk />,
    path: 'mailto:sergiowallace11@hotmail.com',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sociais.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
