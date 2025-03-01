"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/lib/fetcher";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import type { JSX } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "名前を入力してください!" }),
  email: z
    .string()
    .nonempty({ message: "メールアドレスを入力してください!" })
    .email({ message: "入力されたメールアドレスに不備があります!" }),
  subject: z.string().nonempty({ message: "題名を入力してください!" }),
  text: z.string().min(10, { message: "本文は 10 文字以上入力してください!" }),
});

type Inputs = z.infer<typeof schema>;

export default function Contact(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await toast.promise(sendMail(data), {
      error: "送信に失敗しました",
      pending: "送信しています…",
      success: "メッセージを送信しました",
    });
  };

  const ValidMessage = ({ message }: { message: string }): JSX.Element => (
    <span className="text-red-500 text-xs ml-3">{message}</span>
  );

  return (
    <motion.div
      className="w-full h-full grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeIn",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
        <div className="mb-2">
          <Label htmlFor="name">名前</Label>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Input
            type="text"
            className="bg-white"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="email">メールアドレス</Label>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Input
            type="email"
            className="bg-white"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="subject">題名</Label>
          <ErrorMessage
            errors={errors}
            name="subject"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Input
            type="text"
            className="bg-white"
            id="subject"
            {...register("subject")}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="body">本文</Label>
          <ErrorMessage
            errors={errors}
            name="text"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Textarea
            id="body"
            className="bg-white"
            {...register("text")}
            rows={9}
          />
        </div>
        <div className=" flex justify-center mt-4">
          <Button type="submit" variant="outline">
            送信
          </Button>
        </div>
      </form>
      <ToastContainer position="bottom-center" />
    </motion.div>
  );
}
