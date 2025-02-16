"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { type JSX } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "名前を入力してください!" }),
  email: z
    .string()
    .nonempty({ message: "メールアドレスを入力してください!" })
    .email({ message: "入力されたメールアドレスに不備があります!" }),
  subject: z.string().nonempty({ message: "題名を入力してください!" }),
  body: z.string().min(10, { message: "本文は 10 文字以上入力してください!" }),
});

type Inputs = z.infer<typeof schema>;

export default function Gallery(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // メール送信処理を実装する
    alert(JSON.stringify(errors));
  };

  const ValidMessage = ({ message }: { message: string }): JSX.Element => (
    <span className="text-red-500 text-xs ml-3">{message}</span>
  );

  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
        <div className="mb-2">
          <Label htmlFor="name">名前</Label>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Input type="text" id="name" {...register("name")} />
        </div>
        <div className="mb-2">
          <Label htmlFor="email">メールアドレス</Label>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Input type="email" id="email" {...register("email")} />
        </div>
        <div className="mb-2">
          <Label htmlFor="subject">題名</Label>
          <ErrorMessage
            errors={errors}
            name="subject"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Input type="text" id="subject" {...register("subject")} />
        </div>
        <div className="mb-2">
          <Label htmlFor="body">本文</Label>
          <ErrorMessage
            errors={errors}
            name="body"
            render={({ message }) => <ValidMessage message={message} />}
          />
          <Textarea id="body" {...register("body")} rows={9} />
        </div>
        <div className=" flex justify-center mt-4">
          <Button type="submit" variant="outline">
            送信
          </Button>
        </div>
      </form>
    </div>
  );
}
