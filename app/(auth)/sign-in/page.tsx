"use client";
import LoginForm from "@/components/forms/LoginForm";
import { images } from "@/constants/images";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="sm:min-h-screen">
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

      <div className="grid lg:grid-cols-2 min-h-[70vh] items-center container mx-auto px-4">
        <div className="relative items-center hidden md:flex">
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={images.signIn}
              alt="صورة تسجيل الدخول"
              height={450}
              width={450}
              className="relative"
              priority
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 sm:p-6 mt-10 md:p-10 lg:pr-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-1 items-center justify-center w-full"
          >
            <div className="w-full max-w-[28rem] bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  مرحباً بعودتك
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  سجل الدخول للوصول إلى حسابك
                </p>
              </div>

              <LoginForm />

              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>بالاستمرار، أنت توافق على شروطنا وسياسة الخصوصية</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
