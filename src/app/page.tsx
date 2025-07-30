import styles from "./components/BlurTranslateDivs.module.css";
import TechBadge from '@/app/components/TechBadge';

export default function Home() {
  return (
    <div>
      <main className="relative mx-auto scroll-my-12 p-4 md:p-16 print:p-12 ">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-50 print:hidden"
        >
          <defs>
            <pattern
              id="bgPattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              x="-1"
              y="-1"
            >
              <path d="M.5 20V.5H20" fill="none" strokeDasharray="0"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#bgPattern)"
          ></rect>
        </svg>
        <section className="relative mx-auto w-full max-w-(--w-contraner) space-y-7 print:space-y-6">
          <div className={styles.container}>
            <div className={styles.blurTranslateDiv}>
              <h1 className="text-3xl font-bold">Phakahwat Chomkul —
                <span className="text-lg font-light text-(--span-color)"> Final-year Computer Science Student</span>
              </h1>
              <p className="text-(--site-bar-color)">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestias quaerat a, beatae doloribus aut dolorum voluptas nisi laboriosam ipsa praesentium, reiciendis culpa blanditiis odio sed consequatur dicta eaque molestiae.</p>
              <div className="flex gap-2 text-muted-foreground m-2">
                <a href="#" className="size-8 border flex items-center justify-center rounded-md bg-(--background) border-gray-300 hover:bg-gray-200 hover:text-(--foreground) transition "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></a>
                <a href="#" className="size-8 border flex items-center justify-center rounded-md bg-(--background) border-gray-300 hover:bg-gray-200 hover:text-(--foreground) transition"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></a>
                <a href="#" className="size-8 border flex items-center justify-center rounded-md bg-(--background) border-gray-300 hover:bg-gray-200 hover:text-(--foreground) transition">3</a>
                <a href="#" className="size-8 border flex items-center justify-center rounded-md bg-(--background) border-gray-300 hover:bg-gray-200 hover:text-(--foreground) transition">4</a>
              </div>

            </div>
            <div className={styles.blurTranslateDiv}>
              <h2 className="text-2xl font-semibold">Professional Summary</h2>
              <p className="text-(--site-bar-color) mt-3"> Final-year Computer Science student with hands-on experience
                building responsive web applications using HTML, CSS, and
                React.js. Currently learning backend development using Node.js
                and RESTful APIs. Actively seeking an internship as a Frontend or
                Full-Stack Developer to apply and expand technical skills. ✨</p>
            </div>
            <div className={styles.blurTranslateDiv}>
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Bachelor of Computer Science</h3>
                  <span ><div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold  border-transparent bg-secondary align-middle text-xs">Jun 2022 - Present</div></span>
                </div>
                <p className="text-(--site-bar-color)"> Rajamangala University of
                  Technology Krungthep</p>
              </div>
            </div>
            <div className={styles.blurTranslateDiv}>
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <TechBadge iconSrc="/svgs/java-svgrepo-com.svg" label="Java" type="language" />
                <TechBadge iconSrc="/svgs/python-svgrepo-com.svg" label="Python" type="language" />
                <TechBadge iconSrc="/svgs/mysql-logo-svgrepo-com.svg" label="MySQL" type="database" />
                <TechBadge iconSrc="/svgs/html-5-svgrepo-com.svg" label="HTML" type="language" />
                <TechBadge iconSrc="/svgs/css-3-svgrepo-com.svg" label="CSS" type="language" />
                <TechBadge iconSrc="/svgs/javascript-svgrepo-com.svg" label="JavaScript" type="language" />
                <TechBadge iconSrc="/svgs/react-svgrepo-com.svg" label="React.js" type="framework" />
                <TechBadge iconSrc="/svgs/bootstrap-svgrepo-com.svg" label="Bootstrap" type="framework" />
                <TechBadge iconSrc="/svgs/tailwind-svgrepo-com.svg" label="Tailwind" type="framework" />
                <TechBadge iconSrc="/svgs/shadcn-ui-seeklogo.svg" label="shadcn-ui" type="library" />
                <TechBadge iconSrc="/svgs/material-ui-svgrepo-com.svg" label="Material UI" type="library" />
                <TechBadge iconSrc="/svgs/next-dot-js-svgrepo-com.svg" label="Next.js" type="framework" />
                <TechBadge iconSrc="/svgs/git-svgrepo-com.svg" label="Git" type="tool" />
                <TechBadge iconSrc="/svgs/figma-svgrepo-com.svg" label="Figma" type="tool" />
                <TechBadge iconSrc="/svgs/vscode-svgrepo-com.svg" label="VsCode" type="tool" />
              </div>

            </div>
            <div className={styles.blurTranslateDiv}>
              <h2 className="text-2xl font-semibold">Project</h2>
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
