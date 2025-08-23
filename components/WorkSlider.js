import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState } from "react";
import { Pagination } from "swiper";
import Link from "next/link";
import { BsArrowRight } from "react-icons";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
export const workSlidesItems = {
  slides: [
    {
      images: [
        {
          title: "SteamPunkCamera Web AR - AR only mobile ",
          path: "/camera.png",
          link: "https://steampunkcamera.vercel.app/",
        },
        {
          title: "Embraer Gama academy presentation - Group 7",
          path: "/embraer.png",
          link: "https://gama-group7.vercel.app/",
        },
        {
          title: "Codivas",
          path: "/codivas.png",
          link: "https://www.codivas.com.br",
        },
        {
          title: "Dino game",
          path: "/dino.png",
          link: "https://dino-game-pi.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Store",
          path: "/visie.png",
          link: "https:storevisie.vercel.app",
        },
        {
          title: "Multiform",
          path: "/form1.png",
          link: "https://didactic-plantation.surge.sh/",
        },
        {
          title: "Game Baloon",
          path: "/gamebaloon.png",
          link: "https://game-balao-udemy-o7l5.vercel.app",
        },
        {
          title: "Whatslabe",
          path: "/whatslabe.png",
          link: "https://whatslabe.vercel.app",
        },
        // },
      ],
    },
    {
      images: [
        {
          title: "InstaLab",
          path: "/instalab.png",
          link: "https://instalabhooks.vercel.app/",
        },
        // {
        //   title: "Multiform",
        //   path: "/form1.png",
        //   link: "https://didactic-plantation.surge.sh/",
        // },
        // {
        //   title: "Game Baloon",
        //   path: "/gamebaloon.png",
        //   link: "https://game-balao-udemy-o7l5.vercel.app",
        // },
        // {
        //   title: "Whatslabe",
        //   path: "/whatslabe.png",
        //   link: "https://whatslabe.vercel.app",
        // },
        {
          title: "Carib Farm",
          path: "/carib.png",
          link: "https://carib.farm",
        },
        {
          title: "3D projects",
          path: "/models.png",
          link: "https://devcamis.vercel.app/#3d",
        },
        // },
      ],
    },
  ],
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React & Tailwind.",
    image: "/camera.png",
    techStack: ["React", "Tailwind", "Framer Motion"],
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app with payment integration.",
    image: "/camera.png",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    demoLink: "https://your-ecommerce-demo.com",
    githubLink: "https://github.com/your-username/ecommerce",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using Socket.io and Node.js.",
    image: "/camera.png",
    techStack: ["Node.js", "Socket.io", "React"],
    demoLink: "https://your-chat-demo.com",
    githubLink: "https://github.com/your-username/chatapp",
  },
  {
    title: "Portfolio Website1",
    description: "A modern personal portfolio built with React & Tailwind.",
    image: "/camera.png",
    techStack: ["React", "Tailwind", "Framer Motion"],
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-commerce App1",
    description: "Full-stack e-commerce app with payment integration.",
    image: "/camera.png",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    demoLink: "https://your-ecommerce-demo.com",
    githubLink: "https://github.com/your-username/ecommerce",
  },
  {
    title: "Chat Application1",
    description: "Real-time chat app using Socket.io and Node.js.",
    image: "/camera.png",
    techStack: ["Node.js", "Socket.io", "React"],
    demoLink: "https://your-chat-demo.com",
    githubLink: "https://github.com/your-username/chatapp",
  },
  {
    title: "Portfolio Website1",
    description: "A modern personal portfolio built with React & Tailwind.",
    image: "/camera.png",
    techStack: ["React", "Tailwind", "Framer Motion"],
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-commerce App1",
    description: "Full-stack e-commerce app with payment integration.",
    image: "/camera.png",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    demoLink: "https://your-ecommerce-demo.com",
    githubLink: "https://github.com/your-username/ecommerce",
  },
  {
    title: "Chat Application1",
    description: "Real-time chat app using Socket.io and Node.js.",
    image: "/camera.png",
    techStack: ["Node.js", "Socket.io", "React"],
    demoLink: "https://your-chat-demo.com",
    githubLink: "https://github.com/your-username/chatapp",
  },
  {
    title: "Portfolio Website1",
    description: "A modern personal portfolio built with React & Tailwind.",
    image: "/camera.png",
    techStack: ["React", "Tailwind", "Framer Motion"],
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-commerce App1",
    description: "Full-stack e-commerce app with payment integration.",
    image: "/camera.png",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    demoLink: "https://your-ecommerce-demo.com",
    githubLink: "https://github.com/your-username/ecommerce",
  },
  {
    title: "Chat Application1",
    description: "Real-time chat app using Socket.io and Node.js.",
    image: "/camera.png",
    techStack: ["Node.js", "Socket.io", "React"],
    demoLink: "https://your-chat-demo.com",
    githubLink: "https://github.com/your-username/chatapp",
  },
];

const WorkSlider = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const currentItems = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative w-[170%] h-full">
      {/* Nút Prev */}
      <button
        onClick={prevPage}
        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-accent text-white px-3 py-2 rounded-full hover:opacity-80 z-10"
      >
        ◀
      </button>

      {/* Grid hiển thị item */}
      <div className="overflow-hidden h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3"
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.4 }}
          >
            {currentItems.map((project, index) => (
              <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: -50 }} // bắt đầu mờ + ở trên
              animate={{ opacity: 1, y: 0 }}   // hiện ra + về vị trí ban đầu
              exit={{ opacity: 0, y: -50 }}     // khi biến mất sẽ bay lên lại
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[400px] h-[600px] m-4 bg-[rgba(65,47,123,0.3)] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:border-accent group"
            >
                {/* Image */}
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-red-600 text-gray-300 text-xs px-3 py-1 rounded-full font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nút Next */}
      <button
        onClick={nextPage}
        className="absolute -right-12 top-1/2 -translate-y-1/2 bg-accent text-white px-3 py-2 rounded-full hover:opacity-80 z-10"
      >
        ▶
      </button>

      {/* Chỉ số trang */}
      <div className="mt-8 text-center text-gray-300">
        Page {page + 1} / {totalPages}
      </div>
    </div>
  );
};

export default WorkSlider;
