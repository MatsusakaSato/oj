"use client";
import CreateProblemForm from "@/components/CreateProblemForm";
//TODO
//通过url参数传递id字段，默认为new模式，如果传递了数字，则表示编辑已存在的题目
//先从数据库查询题目，通过initialValues设置表单初始值
//id不传表示新增题目，传递了数字表示编辑已存在的题目
export default function CreateProblemPage() {
  return (
    <>
      <CreateProblemForm />
    </>
  );
}
