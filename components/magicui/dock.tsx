"use client";

import React, { useRef, useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      orientation = "horizontal",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            mouseX,
            mouseY,
            magnification,
            distance,
          } as DockIconProps);
        }
        return child;
      });
    };

    if (!isClient) {
      // Prevent rendering until after hydration
      return <div ref={ref} className={cn(dockVariants({ className }))} />;
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (orientation === "horizontal") {
            mouseX.set(e.clientX);
          } else {
            mouseY.set(e.clientY);
          }
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          mouseY.set(Infinity);
        }}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
          "flex-col h-max": orientation === "vertical",
          "flex-row": orientation === "horizontal",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  mouseY,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);

  const distanceHeightCalc = useTransform(
    mouseY ?? fallbackY,
    (val) => {
      if (!isClient || !ref.current) return 0;
      const bounds = ref.current.getBoundingClientRect();
      return val - bounds.y - bounds.height / 2;
    }
  );

  const distanceWidthCalc = useTransform(
    mouseX ?? fallbackX,
    (val) => {
      if (!isClient || !ref.current) return 0;
      const bounds = ref.current.getBoundingClientRect();
      return val - bounds.x - bounds.width / 2;
    }
  );

  const heightSync = useTransform(
    distanceHeightCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const widthSync = useTransform(
    distanceWidthCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };






// "use client";

// import React, { PropsWithChildren, useRef } from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// import { cn } from "@/lib/utils";

// export interface DockProps extends VariantProps<typeof dockVariants> {
//   className?: string;
//   magnification?: number;
//   distance?: number;
//   direction?: "top" | "middle" | "bottom";
//   children: React.ReactNode;
//   orientation?: "horizontal" | "vertical";
// }

// const DEFAULT_MAGNIFICATION = 60;
// const DEFAULT_DISTANCE = 140;

// const dockVariants = cva(
//   "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
// );

// const Dock = React.forwardRef<HTMLDivElement, DockProps>(
//   (
//     {
//       className,
//       children,
//       magnification = DEFAULT_MAGNIFICATION,
//       distance = DEFAULT_DISTANCE,
//       direction = "bottom",
//       orientation = "horizontal",
//       ...props
//     },
//     ref
//   ) => {
//     const mouseX = useMotionValue(Infinity);
//     const mouseY = useMotionValue(Infinity);

//     const renderChildren = () => {
//       return React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.type === DockIcon) {
//           return React.cloneElement(child, {
//             mouseX,
//             mouseY,
//             magnification,
//             distance,
//           } as DockIconProps);
//         }
//         return child;
//       });
//     };

//     return (
//       <motion.div
//         ref={ref}
//         onMouseMove={(e) => {
//           if (orientation === "horizontal") {
//             mouseX.set(e.clientX);
//           } else {
//             mouseY.set(e.clientY);
//           }
//         }}
//         onMouseLeave={() => {
//           mouseX.set(Infinity);
//           mouseY.set(Infinity);
//         }}
//         {...props}
//         className={cn(dockVariants({ className }), {
//           "items-start": direction === "top",
//           "items-center": direction === "middle",
//           "items-end": direction === "bottom",
//           "flex-col h-max": orientation === "vertical",
//           "flex-row": orientation === "horizontal",
//         })}
//       >
//         {renderChildren()}
//       </motion.div>
//     );
//   }
// );

// Dock.displayName = "Dock";

// export interface DockIconProps {
//   size?: number;
//   magnification?: number;
//   distance?: number;
//   mouseX?: MotionValue<number>;
//   mouseY?: MotionValue<number>;
//   className?: string;
//   children?: React.ReactNode;
//   orientation?: "horizontal" | "vertical";
// }

// const DockIcon = ({
//   magnification = DEFAULT_MAGNIFICATION,
//   distance = DEFAULT_DISTANCE,
//   mouseX,
//   mouseY,
//   className,
//   children,
//   ...props
// }: DockIconProps) => {
//   const ref = useRef<HTMLDivElement>(null);

//   // Ensure that fallback values are properly initialized and type-safe
//   const fallbackX = useMotionValue(0);
//   const fallbackY = useMotionValue(0);

//   const distanceHeightCalc = useTransform(
//     mouseY ?? fallbackY,
//     (val) => {
//       const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
//       return val - bounds.y - bounds.height / 2;
//     }
//   );

//   const distanceWidthCalc = useTransform(
//     mouseX ?? fallbackX,
//     (val) => {
//       const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
//       return val - bounds.x - bounds.width / 2;
//     }
//   );

//   const heightSync = useTransform(
//     distanceHeightCalc,
//     [-distance, 0, distance],
//     [40, magnification, 40]
//   );

//   const widthSync = useTransform(
//     distanceWidthCalc,
//     [-distance, 0, distance],
//     [40, magnification, 40]
//   );

//   const height = useSpring(heightSync, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   const width = useSpring(widthSync, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width, height }}
//       className={cn(
//         "flex aspect-square cursor-pointer items-center justify-center rounded-full",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// };

// DockIcon.displayName = "DockIcon";

// export { Dock, DockIcon, dockVariants };




// "use client";

// import React, { PropsWithChildren, useRef } from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import {
//   motion,
//   // MotionValue,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import { cn } from "@/lib/utils";

// export interface DockProps extends VariantProps<typeof dockVariants> {
//   className?: string;
//   magnification?: number;
//   distance?: number;
//   direction?: "top" | "middle" | "bottom";
//   children: React.ReactNode;
//   orientation?: "horizontal" | "vertical";
// }

// const DEFAULT_MAGNIFICATION = 60;
// const DEFAULT_DISTANCE = 140;

// const dockVariants = cva(
//   "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
// );

// const Dock = React.forwardRef<HTMLDivElement, DockProps>(
//   (
//     {
//       className,
//       children,
//       magnification = DEFAULT_MAGNIFICATION,
//       distance = DEFAULT_DISTANCE,
//       direction = "bottom",
//       orientation = "horizontal",
//       ...props
//     },
//     ref
//   ) => {
//     const mouseX = useMotionValue(Infinity);
//     const mouseY = useMotionValue(Infinity);

//     const renderChildren = () => {
//       return React.Children.map(children, (child: any) => {
//         // Only pass mouseX, mouseY, magnification, and distance to DockIcon
//         if (child.type === DockIcon) {
//           return React.cloneElement(child, {
//             mouseX: mouseX,
//             mouseY: mouseY,
//             magnification: magnification,
//             distance: distance,
//           });
//         }
//         return child; // Do not pass to other components
//       });
//     };

//     return (
//       <motion.div
//         ref={ref}
//         onMouseMove={(e) => {
//           if (orientation == "horizontal") {
//             mouseX.set(e.clientX);
//           } else {
//             mouseY.set(e.clientY);
//           }
//         }}
//         onMouseLeave={() => {
//           if (orientation == "horizontal") {
//             mouseX.set(Infinity);
//           } else {
//             mouseY.set(Infinity);
//           }
//         }}
//         {...props}
//         className={cn(dockVariants({ className }), {
//           "items-start": direction === "top",
//           "items-center": direction === "middle",
//           "items-end": direction === "bottom",
//           "flex-col h-max": orientation === "vertical",
//           "flex-row": orientation === "horizontal",
//         })}
//       >
//         {renderChildren()}
//       </motion.div>
//     );
//   }
// );

// Dock.displayName = "Dock";

// export interface DockIconProps {
//   size?: number;
//   magnification?: number;
//   distance?: number;
//   mouseX?: any;
//   mouseY?: any;
//   className?: string;
//   children?: React.ReactNode;
//   props?: PropsWithChildren;
//   orientation?: "horizontal" | "vertical";
// }

// const DockIcon = ({
//   magnification = DEFAULT_MAGNIFICATION,
//   distance = DEFAULT_DISTANCE,
//   mouseX,
//   mouseY,
//   className,
//   children,
//   ...props
// }: DockIconProps) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const distanceHeightCalc = useTransform(mouseY, (val: number) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

//     return val - bounds.y - bounds.height / 2;
//   });

//   const distanceWidthCalc = useTransform(mouseX, (val: number) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

//     return val - bounds.x - bounds.width / 2;
//   });

//   let heightSync = useTransform(
//     distanceHeightCalc,
//     [-distance, 0, distance],
//     [40, magnification, 40]
//   );

//   let widthSync = useTransform(
//     distanceWidthCalc,
//     [-distance, 0, distance],
//     [40, magnification, 40]
//   );

//   let height = useSpring(heightSync, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   let width = useSpring(widthSync, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width, height }}
//       className={cn(
//         "flex aspect-square cursor-pointer items-center justify-center rounded-full",
//         className
//       )}
//       {...props} // Avoid passing mouseX and mouseY directly to the DOM element
//     >
//       {children}
//     </motion.div>
//   );
// };

// DockIcon.displayName = "DockIcon";

// export { Dock, DockIcon, dockVariants };
