"use client";
import { images } from "@/constants/images";
import Image from "next/image";
import { motion } from "framer-motion";
import ForgotPasswordForm from "@/components/forms/ForgetPasswordForm";

export default function ForgetPassword() {
  return (
    <div className="sm:min-h-[80vh]">
      <div className="pt-8 max-sm:mt-5 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex max-sm:justify-center"
        >
          <Image
            src={images.logo}
            alt="شعار الشركة"
            width={200}
            height={70}
            className="dark:invert"
            priority
          />
        </motion.div>
      </div>
      <div className="grid max-w-7xl mx-auto   mt-16 lg:grid-cols-2 items-center  container">
        <div className="relative items-center hidden md:flex lg:order-last">
          <motion.div
            initial={{ y: 30, x: 30, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-1 items-center justify-center"
          >
            <Image
              src={images.forgetPassword}
              alt="صورة استعادة كلمة المرور"
              height={430}
              width={430}
              className="relative"
              priority
            />
          </motion.div>
        </div>

        <div className="flex flex-col max-w-[530px] gap-4 bg-zinc-100 dark:bg-zinc-900   py-10 mx-5 md:py-20  rounded-xl shadow-md shadow-zinc-200 dark:shadow-zinc-800 lg:order-first">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-1 items-center justify-center"
          >
            <div className="w-full max-w-xs">
              <ForgotPasswordForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
